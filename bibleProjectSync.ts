import { MediaVaultVideo, VERIFIED_BIBLE_PROJECT_MASTER_SERIES } from '../data/mediaVaultData';

export type VideoItem = MediaVaultVideo & {
  publishedAt?: string;
  isNew?: boolean;
};

const BP_CHANNEL_ID = 'UCVfwlh9XpX2Y_tQFiS9NtdA';
const BP_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${BP_CHANNEL_ID}`;
const RSS2JSON_GATEWAY = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(BP_FEED_URL)}`;

const CACHE_KEY = 'youngfire_bp_videos_cache';
const LAST_SYNC_KEY = 'youngfire_bp_last_sync';
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 Hours

/**
 * Automatically polls BibleProject's official channel RSS feed,
 * caches in localStorage for 6 hours, and returns rich VideoItem objects.
 * Falls back gracefully to default static BibleProject items if offline or network limits reached.
 */
export async function getLatestBibleProjectVideos(): Promise<VideoItem[]> {
  // 1. Check local storage cache
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const lastSync = localStorage.getItem(LAST_SYNC_KEY);

    if (cachedData && lastSync) {
      const parsedLastSync = parseInt(lastSync, 10);
      const isFresh = Date.now() - parsedLastSync < CACHE_TTL_MS;

      if (isFresh) {
        const parsed = JSON.parse(cachedData) as VideoItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    }
  } catch (err) {
    console.warn('[BibleProjectSync] Error reading cache:', err);
  }

  // 2. Fetch from RSS-to-JSON Gateway
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(RSS2JSON_GATEWAY, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
        const parsedItems: VideoItem[] = data.items.map((item: any) => {
          const rawId = item.guid ? item.guid.replace('yt:video:', '').trim() : '';
          const cleanId = rawId || (item.link ? item.link.split('v=')[1]?.split('&')[0] : '');

          return {
            id: `bp_rss_${cleanId}`,
            title: item.title || 'BibleProject Master Video',
            speaker: 'BibleProject',
            series: 'BibleProject Master Series',
            category: 'Bible Project Master Series',
            youtubeId: cleanId,
            thumbnailUrl: `https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`,
            duration: '5:30',
            publishedAt: item.pubDate,
            description: item.description || 'Official BibleProject visual theology overview exploring the unified biblical story.',
            thematicFocus: item.description ? item.description.substring(0, 160) + '...' : undefined,
            isNew: true
          };
        }).filter((it: VideoItem) => Boolean(it.youtubeId && it.youtubeId.length === 11));

        if (parsedItems.length > 0) {
          // Merge with verified master series (ensuring no duplicates)
          const existingIds = new Set(parsedItems.map(p => p.youtubeId));
          const staticRemain = VERIFIED_BIBLE_PROJECT_MASTER_SERIES.filter(s => !existingIds.has(s.youtubeId));
          const fullList = [...parsedItems, ...staticRemain];

          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(fullList));
            localStorage.setItem(LAST_SYNC_KEY, Date.now().toString());
          } catch (e) {
            console.warn('[BibleProjectSync] Failed to write cache:', e);
          }

          return fullList;
        }
      }
    }
  } catch (error) {
    console.info('[BibleProjectSync] Gateway unavailable, using fallback curated videos:', error);
  }

  // 3. Fallback gracefully to default static verified BibleProject items
  return VERIFIED_BIBLE_PROJECT_MASTER_SERIES.map((v, i) => ({
    ...v,
    isNew: i < 3 // Mark top 3 as featured/new in fallback mode
  }));
}

export default getLatestBibleProjectVideos;
