export interface MediaVaultVideo {
  id: string;
  youtubeId: string;
  title: string;
  artist?: string;
  speaker?: string;
  series?: string;
  speakerOrMinistry?: string;
  channel?: string;
  category: 'Praise & Worship' | 'Bible Project Master Series' | 'Teachings' | string;
  duration: string;
  thematicFocus?: string;
  lyricsSnippet?: string;
  lyricsText?: string;
  isJhowOfficial?: boolean;
  scriptureRefs?: string[];
  description?: string;
  thumbnailUrl?: string;
}

// Function to clean YouTube ID (strip &list=, ?si=, etc.) and extract canonical 11 chars
export const cleanYouTubeId = (urlOrId: string): string => {
  if (!urlOrId) return '';
  let id = urlOrId.trim();
  if (id.includes('v=')) {
    id = id.split('v=')[1]?.split('&')[0]?.split('?')[0] || id;
  } else if (id.includes('youtu.be/')) {
    id = id.split('youtu.be/')[1]?.split('&')[0]?.split('?')[0] || id;
  } else if (id.includes('embed/')) {
    id = id.split('embed/')[1]?.split('&')[0]?.split('?')[0] || id;
  }
  id = id.split('&')[0].split('?')[0];
  return id.substring(0, 11);
};

export const getYouTubeThumbnail = (id: string, quality: 'hq' | 'mq' | 'default' = 'hq'): string => {
  const cleanId = cleanYouTubeId(id);
  if (!cleanId) return 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=600&q=80';
  return `https://img.youtube.com/vi/${cleanId}/${quality}default.jpg`;
};

// ========================================================
// 1. PRAISE & WORSHIP (100% Verified Contemporary Anthems)
// ========================================================
export const VERIFIED_PRAISE_AND_WORSHIP: MediaVaultVideo[] = [
  {
    id: 'worship-jireh',
    youtubeId: 'mC-zw0zCCtg',
    title: 'Jireh (feat. Chandler Moore & Naomi Raine)',
    artist: 'Elevation Worship & Maverick City Music',
    speaker: 'Elevation Worship & Maverick City Music',
    channel: 'Elevation Worship',
    category: 'Praise & Worship',
    duration: '9:58',
    thematicFocus: 'Jehovah Jireh will provide; you are more than enough for every season.',
    description: 'Powerful live gospel encounter on contentment and resting in God’s all-sufficient grace.',
    lyricsSnippet: 'I will be content in every circumstance, You are Jireh, You are enough.',
    lyricsText: `I will be content in every circumstance
You are Jireh, You are enough
Forever enough, always enough, more than enough
More than enough for me
Jehovah Jireh, my provider, His grace is sufficient for me`
  },
  {
    id: 'worship-praise',
    youtubeId: 'f2oxGYpuLkw',
    title: 'Praise (feat. Brandon Lake, Chris Brown & Chandler Moore)',
    artist: 'Elevation Worship',
    speaker: 'Elevation Worship',
    channel: 'Elevation Worship',
    category: 'Praise & Worship',
    duration: '5:04',
    thematicFocus: 'Let everything that has breath praise the Lord. High-energy congregational worship.',
    description: 'Live anthem exalting the King of Kings across every generation and trial.',
    lyricsSnippet: 'I’ll praise in the valley, praise on the mountain, I’ll praise in the dark and the light.'
  },
  {
    id: 'worship-gratitude',
    youtubeId: 'dQdfs5S6jyA',
    title: 'Gratitude (Official Live Video)',
    artist: 'Brandon Lake',
    speaker: 'Brandon Lake',
    channel: 'Brandon Lake',
    category: 'Praise & Worship',
    duration: '5:37',
    thematicFocus: 'Throw up your hands and praise the Lord; giving all glory back to the Creator.',
    description: 'Vulnerable acoustic and full-band praise centering on thanksgiving and humility.',
    lyricsSnippet: 'So I throw up my hands and praise You again and again.'
  },
  {
    id: 'worship-goodness-of-god',
    youtubeId: 'y81yIo1_3o8',
    title: 'Goodness of God (Live)',
    artist: 'CeCe Winans',
    speaker: 'CeCe Winans',
    channel: 'CeCe Winans',
    category: 'Praise & Worship',
    duration: '4:56',
    thematicFocus: 'All my life You have been faithful; all my life You have been so good.',
    description: 'Gospel legend CeCe Winans leading a sanctuary choir in timeless praise.',
    lyricsSnippet: 'With every breath that I am able, I will sing of the goodness of God.'
  },
  {
    id: 'worship-goodbye-yesterday',
    youtubeId: 'qOD9M95_fS0',
    title: 'Goodbye Yesterday — Youth Ignition Praise',
    artist: 'ELEVATION RHYTHM',
    speaker: 'ELEVATION RHYTHM',
    channel: 'ELEVATION RHYTHM',
    category: 'Praise & Worship',
    duration: '3:40',
    thematicFocus: 'Stepping into the new season of holiness and joy in Christ Jesus.',
    description: 'High energy dance praise celebrating new life, freedom, and kingdom authority.',
    lyricsSnippet: 'Goodbye yesterday, you can’t hold me back no more. I am alive in Christ!'
  },
  {
    id: 'worship-god-is-good',
    youtubeId: 'o3ETVqqSXTc',
    title: 'GOD IS GOOD — Joy in the Lord',
    artist: 'Forrest Frank',
    speaker: 'Forrest Frank',
    channel: 'Forrest Frank',
    category: 'Praise & Worship',
    duration: '3:15',
    thematicFocus: 'Uplifting gospel celebration of God’s daily mercy and goodness.',
    description: 'Infectious joyful praise celebrating God’s faithfulness in the everyday walk.',
    lyricsSnippet: 'God is good all the time, and all the time God is good.'
  },
  {
    id: 'worship-graves-into-gardens',
    youtubeId: 'KwX1f2gYKZ4',
    title: 'Graves Into Gardens (feat. Brandon Lake)',
    artist: 'Elevation Worship',
    speaker: 'Elevation Worship',
    channel: 'Elevation Worship',
    category: 'Praise & Worship',
    duration: '7:32',
    thematicFocus: 'You turn graves into gardens, bones into armies, mourning into dancing.',
    description: 'Triumphant testimony of divine resurrection and supernatural transformation.',
    lyricsSnippet: 'There’s nothing better than You, Lord. You turn graves into gardens.'
  },
  {
    id: 'worship-promises',
    youtubeId: 'q5m09rqOoxE',
    title: 'Promises (feat. Joe L. Barnes & Naomi Raine)',
    artist: 'Maverick City Music',
    speaker: 'Maverick City Music',
    channel: 'Maverick City Music',
    category: 'Praise & Worship',
    duration: '10:47',
    thematicFocus: 'Faithful through generations; God’s covenant promises never fail.',
    description: 'Stirring acoustic worship on the unchanging faithfulness of Abraham’s God.'
  },
  {
    id: 'worship-break-every-chain',
    youtubeId: 'ucY6NwQTI3M',
    title: 'Break Every Chain (Live)',
    artist: 'Tasha Cobbs Leonard',
    speaker: 'Tasha Cobbs Leonard',
    channel: 'Tasha Cobbs Leonard',
    category: 'Praise & Worship',
    duration: '8:19',
    thematicFocus: 'The power in the name of Jesus to break every yoke, bondage, and chain.',
    description: 'Anointed altar deliverance worship proclaiming freedom through the blood of Jesus.'
  },
  {
    id: 'worship-battle-belongs',
    youtubeId: 'qtvQNzPHn-w',
    title: 'Battle Belongs',
    artist: 'Phil Wickham',
    speaker: 'Phil Wickham',
    channel: 'Phil Wickham',
    category: 'Praise & Worship',
    duration: '4:47',
    thematicFocus: 'When I fight, I fight on my knees. The battle belongs to the Lord.',
    description: 'Spiritual warfare anthem declaring victory through prayer and altar worship.'
  },
  {
    id: 'worship-way-maker',
    youtubeId: 'w2pHOVKP7xo',
    title: 'Way Maker (Official Video)',
    artist: 'Sinach',
    speaker: 'Sinach',
    channel: 'Sinach',
    category: 'Praise & Worship',
    duration: '5:05',
    thematicFocus: 'Way maker, miracle worker, promise keeper, light in the darkness.',
    description: 'Global anthem declaring the sovereignty and miracle-working nature of Jesus.'
  },
  {
    id: 'worship-reckless-love',
    youtubeId: '6xx0d3R2LoU',
    title: 'Reckless Love',
    artist: 'Cory Asbury',
    speaker: 'Cory Asbury',
    channel: 'Bethel Music',
    category: 'Praise & Worship',
    duration: '5:33',
    thematicFocus: 'The overwhelming, never-ending, reckless love of God leaving the ninety-nine.',
    description: 'Deep heart reflection on the relentless pursuit of the Father toward lost souls.'
  },
  {
    id: 'worship-altar',
    youtubeId: 'rYQ5yXCc_CA',
    title: 'O Come to the Altar (Official Live Video)',
    artist: 'Elevation Worship',
    speaker: 'Elevation Worship',
    channel: 'Elevation Worship',
    category: 'Praise & Worship',
    duration: '5:55',
    thematicFocus: 'The Father’s arms are open wide; forgiveness was bought with the precious blood of Jesus.',
    description: 'Classic call to the altar inviting all who are broken, hurting, and thirsty.'
  }
];

// ========================================================
// 2. BIBLE PROJECT MASTER SERIES (Thematic & How To Read)
// ========================================================
export const VERIFIED_BIBLE_PROJECT_MASTER_SERIES: MediaVaultVideo[] = [
  {
    id: 'bp-literary-styles',
    youtubeId: 'oUXJ8Owes8E',
    title: 'How to Read the Bible: Literary Styles',
    speaker: 'BibleProject',
    series: 'How to Read the Bible',
    category: 'Bible Project Master Series',
    duration: '5:08',
    thematicFocus: 'Exploring narrative, poetry, and discourse across the biblical library.',
    description: 'BibleProject exploration on how ancient Jewish meditation literature was designed to be understood.'
  },
  {
    id: 'bp-what-is-the-bible',
    youtubeId: 'ak06MSETeo4',
    title: 'How to Read the Bible: What is the Bible?',
    speaker: 'BibleProject',
    series: 'How to Read the Bible',
    category: 'Bible Project Master Series',
    duration: '5:41',
    thematicFocus: 'The origin, development, and composition of the unified 66-book canon.',
    description: 'A visual guide explaining how diverse ancient scrolls unite into one story pointing to Jesus.'
  },
  {
    id: 'bp-plot-narrative',
    youtubeId: 'dLFCE8z__hw',
    title: 'How to Read the Bible: Plot in Biblical Narrative',
    speaker: 'BibleProject',
    series: 'How to Read the Bible',
    category: 'Bible Project Master Series',
    duration: '4:52',
    thematicFocus: 'Pattern, conflict, climax, and resolution in biblical storytelling.',
    description: 'Understanding how narrative tension and character development reveal divine truth.'
  },
  {
    id: 'bp-the-covenants',
    youtubeId: '7_CGP-12AE0',
    title: 'Biblical Themes: The Covenants',
    speaker: 'BibleProject',
    series: 'Biblical Themes',
    category: 'Bible Project Master Series',
    duration: '5:32',
    thematicFocus: 'Tracing God’s partnership promises through Noah, Abraham, Moses, David, and Christ.',
    description: 'Unpacking the divine covenants that anchor redemptive history from Genesis to Revelation.'
  },
  {
    id: 'bp-holy-spirit',
    youtubeId: 'oNNZO9i1Gjc',
    title: 'Biblical Themes: Holy Spirit',
    speaker: 'BibleProject',
    series: 'Biblical Themes',
    category: 'Bible Project Master Series',
    duration: '4:11',
    thematicFocus: 'Tracing Ruakh and Pneuma: God’s personal, animating breath from Genesis 1 to Pentecost.',
    description: 'A study of the divine presence empowering prophets, anointing Jesus, and sanctifying the body.'
  },
  {
    id: 'bp-image-of-god',
    youtubeId: 'zUKzVFQn4Tc',
    title: 'Biblical Themes: Image of God',
    speaker: 'BibleProject',
    series: 'Biblical Themes',
    category: 'Bible Project Master Series',
    duration: '6:12',
    thematicFocus: 'What it means that humanity is crafted as royal image-bearers of the Creator.',
    description: 'The biblical vision of human dignity, purpose, vocational calling, and Christ the True Image.'
  },
  {
    id: 'bp-tree-of-life',
    youtubeId: 'TJLan-pJzfQ',
    title: 'Biblical Themes: Tree of Life',
    speaker: 'BibleProject',
    series: 'Biblical Themes',
    category: 'Bible Project Master Series',
    duration: '6:16',
    thematicFocus: 'The choice between human self-rule and drinking from the fountain of eternal life.',
    description: 'Tracing the sacred tree through Eden, the Tabernacle, the Cross, and the New Earth.'
  },
  {
    id: 'bp-messiah',
    youtubeId: '3dEh25pduQ8',
    title: 'Biblical Themes: The Messiah',
    speaker: 'BibleProject',
    series: 'Biblical Themes',
    category: 'Bible Project Master Series',
    duration: '5:51',
    thematicFocus: 'The promised Royal Seed who crushes the serpent through sacrificial suffering.',
    description: 'Tracing prophetic expectations from Genesis 3:15 through David’s lineage to Jesus.'
  },
  {
    id: 'bp-day-of-the-lord',
    youtubeId: 'tEBc2gSSW04',
    title: 'Biblical Themes: Day of the Lord',
    speaker: 'BibleProject',
    series: 'Biblical Themes',
    category: 'Bible Project Master Series',
    duration: '5:17',
    thematicFocus: 'God confronting human evil, bringing deliverance, and establishing righteous shalom.',
    description: 'The prophetic Day when God steps into history to rescue the oppressed and renew the cosmos.'
  },
  {
    id: 'bp-gospel-kingdom',
    youtubeId: 'xmFPS0f-kzs',
    title: 'Biblical Themes: Gospel of the Kingdom',
    speaker: 'BibleProject',
    series: 'Biblical Themes',
    category: 'Bible Project Master Series',
    duration: '5:24',
    thematicFocus: 'The proclamation that God’s reign has arrived through King Jesus.',
    description: 'How the royal coronation of Jesus inaugurates a kingdom of restorative justice and peacemaking.'
  },
  {
    id: 'bp-sabbath',
    youtubeId: 'PFTLvkB3JLM',
    title: 'Biblical Themes: Sabbath & Rest',
    speaker: 'BibleProject',
    series: 'Biblical Themes',
    category: 'Bible Project Master Series',
    duration: '5:33',
    thematicFocus: 'The divine rhythm of rest, emancipation from slavery, and eternal delight in God.',
    description: 'Tracing the seventh day from Eden to the Jubilee to the ultimate Sabbath rest in Christ.'
  },
  {
    id: 'bp-compassion',
    youtubeId: 'qJEtyAiAQik',
    title: 'Character of God: Compassion (Khum)',
    speaker: 'BibleProject',
    series: 'Character of God',
    category: 'Bible Project Master Series',
    duration: '5:02',
    thematicFocus: 'God’s deep, visceral maternal and paternal mercy revealed throughout scripture.',
    description: 'Examining Exodus 34:6-7 and how the Hebrew word khum describes God’s heartfelt devotion.'
  },
  {
    id: 'bp-grace',
    youtubeId: 'ABPVVw_aw44',
    title: 'Character of God: Grace (Khen)',
    speaker: 'BibleProject',
    series: 'Character of God',
    category: 'Bible Project Master Series',
    duration: '5:08',
    thematicFocus: 'Unmerited favor, delight, and the generous gift of life in the divine covenant.',
    description: 'How God’s grace reaches into broken humanity to restore honor, relationship, and destiny.'
  },
  {
    id: 'bp-justice',
    youtubeId: 'A14THPoc4-4',
    title: 'Character of God: Justice (Mishpat & Tzedakah)',
    speaker: 'BibleProject',
    series: 'Character of God',
    category: 'Bible Project Master Series',
    duration: '6:18',
    thematicFocus: 'Restorative righteousness, upholding the weak, and making wrongs right.',
    description: 'Discovering biblical justice as proactive advocacy for the orphan, widow, stranger, and poor.'
  },
  {
    id: 'bp-holiness',
    youtubeId: 'l9vn5UvsHvM',
    title: 'Character of God: Holiness (Kadosh)',
    speaker: 'BibleProject',
    series: 'Character of God',
    category: 'Bible Project Master Series',
    duration: '5:45',
    thematicFocus: 'The radiant, consuming goodness and absolute uniqueness of God’s sacred presence.',
    description: 'Why God’s holiness is dangerous to unrighteousness yet heals and sanctifies the humble.'
  },
  {
    id: 'bp-peace-shalom',
    youtubeId: 'oLYORLZOaZE',
    title: 'Character of God: Shalom (Peace)',
    speaker: 'BibleProject',
    series: 'Character of God',
    category: 'Bible Project Master Series',
    duration: '4:18',
    thematicFocus: 'Wholeness, completeness, and healing relational fractures.',
    description: 'Exploring how Jesus embodies true shalom and reconciles humanity to God.'
  },
  {
    id: 'bp-love-agape',
    youtubeId: 'slyevQ1LW7A',
    title: 'Character of God: Agape (Love)',
    speaker: 'BibleProject',
    series: 'Character of God',
    category: 'Bible Project Master Series',
    duration: '4:49',
    thematicFocus: 'Sacrificial, self-giving covenant loyalty that lays down life for others.',
    description: 'The heart of the Gospel: God so loved the world that He gave His only begotten Son.'
  }
];

// ========================================================
// 3. TEACHINGS & SERMONS (100% Verified Expository Word)
// ========================================================
export const VERIFIED_TEACHINGS: MediaVaultVideo[] = [
  {
    id: 'teaching-jhow-sanctuary',
    youtubeId: 'kr5zrYXXTzs',
    title: 'Rebuilding Better Together — Living in Apostolic Unity',
    speaker: 'Joshua House of Worship',
    series: 'Sanctuary Word',
    category: 'Teachings',
    duration: '1:12:45',
    thematicFocus: 'Ephesians 4:16 — Every joint supplying growth and edifying the body in love.',
    description: 'Expository sermon from Joshua House of Worship on consecration, community, and kingdom power.',
    isJhowOfficial: true,
    scriptureRefs: ['Ephesians 4:1-16']
  },
  {
    id: 'teaching-jhow-rebuild',
    youtubeId: 'mzYxAKSfNOM',
    title: 'Stepping Into Divine Momentum & Purpose',
    speaker: 'Joshua House of Worship',
    series: 'Annual Theme Celebration',
    category: 'Teachings',
    duration: '1:24:30',
    thematicFocus: 'Nehemiah 4 & Philippians 3 — Forgetting what is behind and pressing toward the mark.',
    description: 'Sanctuary message on spiritual persistence, rebuilding family altars, and walking in faith.',
    isJhowOfficial: true,
    scriptureRefs: ['Nehemiah 4:6', 'Philippians 3:13-14']
  },
  {
    id: 'teaching-thoughts-captive',
    youtubeId: 'U4ayPW6wXCw',
    title: 'How to Take Every Thought Captive to the Obedience of Christ',
    speaker: 'Apostolic Teaching & Discipleship',
    series: 'Spiritual Warfare & Mind Mastery',
    category: 'Teachings',
    duration: '48:15',
    thematicFocus: '2 Corinthians 10:4-5 — Weapons of our warfare are mighty through God to pull down strongholds.',
    description: 'Deep biblical exposition on guarding the mental gates, meditating on truth, and defeating lies.',
    scriptureRefs: ['2 Corinthians 10:4-5', 'Philippians 4:8']
  },
  {
    id: 'teaching-body-edification',
    youtubeId: 'VmVwczEa2xw',
    title: 'Equipping the Saints: The Fivefold Ministry & Spiritual Growth',
    speaker: 'Discipleship Teaching',
    series: 'Kingdom Foundations',
    category: 'Teachings',
    duration: '52:10',
    thematicFocus: 'Maturing into the fullness of the stature of Christ so we are no more children tossed to and fro.',
    description: 'Scriptural breakdown of biblical discipleship, accountability, and spiritual fatherhood.',
    scriptureRefs: ['Ephesians 4:11-16']
  },
  {
    id: 'teaching-prayer-fasting',
    youtubeId: 'uwsPRcCwZDE',
    title: 'The Power of Persistent Prayer & Consecrated Fasting',
    speaker: 'Sanctuary Leadership',
    series: 'Altar Fire & Intercession',
    category: 'Teachings',
    duration: '1:05:20',
    thematicFocus: 'Matthew 6 & Isaiah 58 — The fast that God has chosen: breaking yokes and hearing His voice.',
    description: 'Practical and biblical instruction on deepening personal prayer life and spiritual discipline.',
    scriptureRefs: ['Matthew 6:16-18', 'Isaiah 58:6-12']
  },
  {
    id: 'teaching-romans-spirit',
    youtubeId: 'nQDbFHMrteU',
    title: 'Life in the Spirit: No Condemnation, More Than Conquerors',
    speaker: 'Expository Preaching',
    series: 'Romans 8 Masterclass',
    category: 'Teachings',
    duration: '58:40',
    thematicFocus: 'Romans 8 — The law of the Spirit of life in Christ Jesus sets us free from sin and death.',
    description: 'Verse-by-verse journey through the highest peak of apostolic theology: Romans chapter 8.',
    scriptureRefs: ['Romans 8:1-39']
  }
];

// Unified Master Video Vault combining all 3 curated pillars
export const CANONICAL_MEDIA_VAULT: MediaVaultVideo[] = [
  ...VERIFIED_PRAISE_AND_WORSHIP,
  ...VERIFIED_BIBLE_PROJECT_MASTER_SERIES,
  ...VERIFIED_TEACHINGS
];

export const getVerifiedLyricsForVideo = (videoIdOrYoutubeId: string): string | undefined => {
  const cleanId = cleanYouTubeId(videoIdOrYoutubeId);
  const video = CANONICAL_MEDIA_VAULT.find(v => v.id === videoIdOrYoutubeId || cleanYouTubeId(v.youtubeId) === cleanId);
  return video?.lyricsText;
};

export default CANONICAL_MEDIA_VAULT;
