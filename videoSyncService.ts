import { db, storage } from '../config';
import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  query, 
  orderBy, 
  onSnapshot 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL 
} from 'firebase/storage';
import { cleanYouTubeId } from '../data/mediaVaultData';

export interface CommunityVideo {
  id: string;
  title: string;
  category: 'Worship' | 'Testimony' | 'Exhortation' | 'Bible Study';
  videoType: 'youtube' | 'direct_upload';
  videoUrl: string; // Firebase Storage URL or YouTube URL
  youtubeId?: string; // 11-character ID if YouTube
  thumbnailUrl: string; // use https://img.youtube.com/vi/{id}/hqdefault.jpg for YouTube
  uploadedBy: { uid: string; name: string; role: string };
  createdAt: string;
  duration?: string;
  description?: string;
}

export interface CommunityPlaylist {
  id: string;
  title: string;
  description: string;
  coverThumbnailUrl: string;
  videoIds: string[]; // ordered list of video IDs
  createdBy: { uid: string; name: string };
  isPublic: boolean;
  createdAt: string;
}

// Initial curated seed playlists for instant rich rendering
export const INITIAL_CURATED_PLAYLISTS: CommunityPlaylist[] = [
  {
    id: 'playlist_altar_praise',
    title: 'High Altar Adoration & Praise',
    description: 'Consecrated corporate praise anthems declaring Jesus Christ over our sanctuary.',
    coverThumbnailUrl: 'https://img.youtube.com/vi/mC-zw0zCCtg/hqdefault.jpg',
    videoIds: ['worship-jireh', 'worship-praise', 'worship-gratitude', 'worship-goodness-of-god'],
    createdBy: { uid: 'pastor_trent', name: 'Trent White' },
    isPublic: true,
    createdAt: '2026-10-01T12:00:00.000Z'
  },
  {
    id: 'playlist_bp_foundations',
    title: 'BibleProject Kingdom Foundations',
    description: 'Essential visual theology: Covenants, Holy Spirit, Image of God, and Reading the Word.',
    coverThumbnailUrl: 'https://img.youtube.com/vi/7_CGP-12AE0/hqdefault.jpg',
    videoIds: ['bp-the-covenants', 'bp-holy-spirit', 'bp-image-of-god', 'bp-what-is-the-bible'],
    createdBy: { uid: 'leader_whitney', name: 'Whitney White' },
    isPublic: true,
    createdAt: '2026-10-01T12:00:00.000Z'
  },
  {
    id: 'playlist_apostolic_mind',
    title: 'Apostolic Strength & Mental Victory',
    description: 'Taking every thought captive, building the body, and persistent prayer.',
    coverThumbnailUrl: 'https://img.youtube.com/vi/U4ayPW6wXCw/hqdefault.jpg',
    videoIds: ['teaching-thoughts-captive', 'teaching-jhow-sanctuary', 'teaching-prayer-fasting'],
    createdBy: { uid: 'jhow_leadership', name: 'Joshua House of Worship' },
    isPublic: true,
    createdAt: '2026-10-01T12:00:00.000Z'
  }
];

// Initial seed community videos
export const INITIAL_COMMUNITY_VIDEOS: CommunityVideo[] = [
  {
    id: 'comm_jhow_launch',
    title: 'Joshua House of Worship: A House Built On Prayer',
    category: 'Exhortation',
    videoType: 'youtube',
    videoUrl: 'https://www.youtube.com/watch?v=kr5zrYXXTzs',
    youtubeId: 'kr5zrYXXTzs',
    thumbnailUrl: 'https://img.youtube.com/vi/kr5zrYXXTzs/hqdefault.jpg',
    uploadedBy: { uid: 'jhow_media', name: 'JHOW Media Ministry', role: 'Elder' },
    createdAt: '2026-10-01T10:00:00.000Z',
    duration: '1:12:45',
    description: 'Apostolic exhortation on laying consecrated foundations in San Antonio, TX.'
  }
];

const LOCAL_VIDEOS_KEY = 'youngfire_community_videos_local';
const LOCAL_PLAYLISTS_KEY = 'youngfire_community_playlists_local';

/**
 * Real-time listener for community_videos Firestore collection.
 * Does not isolate to browser localStorage; uses onSnapshot for instant multi-device reflection.
 */
export function subscribeToCommunityVideos(callback: (videos: CommunityVideo[]) => void): () => void {
  let isUnsubscribed = false;

  // Initialize with local cache or seed first
  try {
    const local = localStorage.getItem(LOCAL_VIDEOS_KEY);
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) {
        callback(parsed);
      } else {
        callback(INITIAL_COMMUNITY_VIDEOS);
      }
    } else {
      callback(INITIAL_COMMUNITY_VIDEOS);
    }
  } catch {
    callback(INITIAL_COMMUNITY_VIDEOS);
  }

  if (!db) {
    console.info('[videoSyncService] Firestore DB not available, using offline cache.');
    return () => { isUnsubscribed = true; };
  }

  try {
    const videosCol = collection(db, 'community_videos');
    const unsubscribe = onSnapshot(videosCol, (snapshot) => {
      if (isUnsubscribed) return;
      const cloudVideos: CommunityVideo[] = [];
      snapshot.forEach((docSnap) => {
        cloudVideos.push({ id: docSnap.id, ...(docSnap.data() as any) });
      });

      // Merge cloud with initial seed if cloud is newly initialized
      const mergedMap = new Map<string, CommunityVideo>();
      INITIAL_COMMUNITY_VIDEOS.forEach(v => mergedMap.set(v.id, v));
      cloudVideos.forEach(v => mergedMap.set(v.id, v));

      const mergedList = Array.from(mergedMap.values()).sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      try {
        localStorage.setItem(LOCAL_VIDEOS_KEY, JSON.stringify(mergedList));
      } catch {}

      callback(mergedList);
    }, (error) => {
      console.warn('[videoSyncService] Firestore community_videos onSnapshot notice:', error.message);
    });

    return () => {
      isUnsubscribed = true;
      try { unsubscribe(); } catch {}
    };
  } catch (err) {
    console.warn('[videoSyncService] Error subscribing to community_videos:', err);
    return () => { isUnsubscribed = true; };
  }
}

/**
 * Real-time listener for community_playlists Firestore collection.
 * Uses onSnapshot so new playlists immediately appear across all devices.
 */
export function subscribeToCommunityPlaylists(callback: (playlists: CommunityPlaylist[]) => void): () => void {
  let isUnsubscribed = false;

  // Initialize with local cache or initial seed
  try {
    const local = localStorage.getItem(LOCAL_PLAYLISTS_KEY);
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) {
        callback(parsed);
      } else {
        callback(INITIAL_CURATED_PLAYLISTS);
      }
    } else {
      callback(INITIAL_CURATED_PLAYLISTS);
    }
  } catch {
    callback(INITIAL_CURATED_PLAYLISTS);
  }

  if (!db) {
    console.info('[videoSyncService] Firestore DB not available for playlists, using offline cache.');
    return () => { isUnsubscribed = true; };
  }

  try {
    const playlistsCol = collection(db, 'community_playlists');
    const unsubscribe = onSnapshot(playlistsCol, (snapshot) => {
      if (isUnsubscribed) return;
      const cloudPlaylists: CommunityPlaylist[] = [];
      snapshot.forEach((docSnap) => {
        cloudPlaylists.push({ id: docSnap.id, ...(docSnap.data() as any) });
      });

      const mergedMap = new Map<string, CommunityPlaylist>();
      INITIAL_CURATED_PLAYLISTS.forEach(p => mergedMap.set(p.id, p));
      cloudPlaylists.forEach(p => mergedMap.set(p.id, p));

      const mergedList = Array.from(mergedMap.values()).sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      try {
        localStorage.setItem(LOCAL_PLAYLISTS_KEY, JSON.stringify(mergedList));
      } catch {}

      callback(mergedList);
    }, (error) => {
      console.warn('[videoSyncService] Firestore community_playlists onSnapshot notice:', error.message);
    });

    return () => {
      isUnsubscribed = true;
      try { unsubscribe(); } catch {}
    };
  } catch (err) {
    console.warn('[videoSyncService] Error subscribing to community_playlists:', err);
    return () => { isUnsubscribed = true; };
  }
}

/**
 * Uploads a video file (.mp4/.mov) to Firebase Storage path: sanctuary_videos/{timestamp}_{filename}
 * Tracks upload progress via callback.
 */
export async function uploadVideoFile(
  file: File, 
  onProgress?: (progressPercent: number) => void
): Promise<string> {
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const storagePath = `sanctuary_videos/${Date.now()}_${sanitizedName}`;

  if (!storage) {
    throw new Error('Firebase Storage instance is not initialized.');
  }

  const storageReference = ref(storage, storagePath);
  const uploadTask = uploadBytesResumable(storageReference, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (onProgress) {
          onProgress(Math.round(progress));
        }
      },
      (error) => {
        console.error('[videoSyncService] Storage upload failed:', error);
        reject(error);
      },
      async () => {
        try {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadUrl);
        } catch (urlErr) {
          reject(urlErr);
        }
      }
    );
  });
}

/**
 * Submits a new community video to Firestore and updates local cache.
 */
export async function submitCommunityVideo(
  videoInput: Omit<CommunityVideo, 'id' | 'createdAt'>
): Promise<CommunityVideo> {
  const newId = `cv_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const createdAt = new Date().toISOString();

  let finalThumb = videoInput.thumbnailUrl;
  let finalYoutubeId = videoInput.youtubeId;

  if (videoInput.videoType === 'youtube') {
    const parsedId = cleanYouTubeId(videoInput.videoUrl);
    if (parsedId && parsedId.length === 11) {
      finalYoutubeId = parsedId;
      finalThumb = `https://img.youtube.com/vi/${parsedId}/hqdefault.jpg`;
    }
  }

  const newVideo: CommunityVideo = {
    ...videoInput,
    id: newId,
    youtubeId: finalYoutubeId,
    thumbnailUrl: finalThumb || 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=600&q=80',
    createdAt
  };

  // 1. Write to Firestore
  if (db) {
    try {
      const docRef = doc(db, 'community_videos', newId);
      await setDoc(docRef, newVideo);
    } catch (err) {
      console.warn('[videoSyncService] Firestore setDoc error (falling back to cache):', err);
    }
  }

  // 2. Update local storage cache
  try {
    const existing = localStorage.getItem(LOCAL_VIDEOS_KEY);
    const list: CommunityVideo[] = existing ? JSON.parse(existing) : [];
    list.unshift(newVideo);
    localStorage.setItem(LOCAL_VIDEOS_KEY, JSON.stringify(list));
  } catch {}

  // 3. Dispatch global sync event
  window.dispatchEvent(new CustomEvent('yf_community_video_added', { detail: newVideo }));

  return newVideo;
}

/**
 * Creates and publishes a new community playlist to Firestore.
 */
export async function createCommunityPlaylist(
  playlistInput: Omit<CommunityPlaylist, 'id' | 'createdAt'>
): Promise<CommunityPlaylist> {
  const newId = `pl_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const createdAt = new Date().toISOString();

  const newPlaylist: CommunityPlaylist = {
    ...playlistInput,
    id: newId,
    createdAt
  };

  // 1. Write to Firestore
  if (db) {
    try {
      const docRef = doc(db, 'community_playlists', newId);
      await setDoc(docRef, newPlaylist);
    } catch (err) {
      console.warn('[videoSyncService] Firestore create playlist error:', err);
    }
  }

  // 2. Update local storage cache
  try {
    const existing = localStorage.getItem(LOCAL_PLAYLISTS_KEY);
    const list: CommunityPlaylist[] = existing ? JSON.parse(existing) : [];
    list.unshift(newPlaylist);
    localStorage.setItem(LOCAL_PLAYLISTS_KEY, JSON.stringify(list));
  } catch {}

  // 3. Dispatch global event
  window.dispatchEvent(new CustomEvent('yf_playlist_created', { detail: newPlaylist }));

  return newPlaylist;
}

export default {
  subscribeToCommunityVideos,
  subscribeToCommunityPlaylists,
  uploadVideoFile,
  submitCommunityVideo,
  createCommunityPlaylist
};
