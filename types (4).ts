export interface MinistryPhoto {
  id: string;
  src: string;
  fallbackSrc: string;
  title: string;
  category: 'Sanctuary & Ordination' | 'Living Room Fellowship' | 'Game Nights & Laughter' | 'Family & NextGen' | 'Discipleship & Sendoff' | string;
  caption: string;
  scriptureLink?: { bookId: string; chapter: number; ref: string };
  mediaType?: 'image' | 'video';
  videoSrc?: string;
  folderName?: string;
  fileSize?: number;
}

export interface BibleBook {
  id: string;
  name: string;
  testament: 'OT' | 'NT';
  totalChapters: number;
  purpose?: string;
  section?: string;
}

export interface MinistryLesson {
  id: string;
  seriesTitle: string;
  lessonTitle: string;
  dateOrSeason: string;
  primaryPassage: string;
  bookId: string;
  chapter: number;
  versesRange?: string;
  teachers: string;
  theme: string;
  summary: string;
  notesContent?: string;
  keyPoints: string[];
  selfReflectionAudit: string[];
  discussionQuestions: string[];
  challenge: string;
  photoId?: string;
  isUpcoming?: boolean;
  meetingTime?: string;
  location?: string;
  status?: 'live' | 'pending_approval';
  submittedBy?: string;
  notesAuthor?: string;
  submittedDate?: string;
  isZoom?: boolean;
  zoomUrl?: string;
  zoomMeetingId?: string;
  zoomPasscode?: string;
  calendarEventId?: string;
}

export interface IntercessionRequest {
  id: string;
  date: string;
  names: string[];
  cause: string;
  status: 'Active Intercession' | 'Answered Praise';
}

export interface FellowshipNight {
  id: string;
  title: string;
  date: string;
  time: string;
  locationName: string;
  address: string;
  activity: string;
  hostLeader: string;
  description: string;
  itemsToBring: string[];
  rsvps: string[];
  pinned?: boolean;
  isExample?: boolean;
  isZoom?: boolean;
  zoomUrl?: string;
  zoomMeetingId?: string;
  zoomPasscode?: string;
}

export interface FellowshipIdea {
  id: string;
  author: string;
  title: string;
  category: 'Outdoor & Sports' | 'Food & Cookout' | 'Game Night & Fun' | 'Worship & Prayer' | 'Community Service' | 'Creative Arts';
  description: string;
  suggestedLocation?: string;
  votes: number;
  votedBy: string[];
  imageUrl?: string;
  dateCreated: string;
  isExample?: boolean;
}

export interface FellowshipChatMessage {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  likes: number;
  badge?: string;
  tag?: string;
}

export interface MediaTrack {
  id: string;
  title: string;
  artist: string;
  album?: string;
  category: string;
  duration: string;
  durationSec?: number;
  scriptureRef?: string;
  bookId?: string;
  chapter?: number;
  lyricsExcerpt?: string;
  audioUrl?: string;
  videoUrl?: string;
  isVideo?: boolean;
  youtubeId?: string;
  albumArt?: string;
  thematicFocus?: string;
  lyricsSnippet?: string;
  isJhowOfficial?: boolean;
}

export type ActiveTab = ActiveScreen | 'welcome' | 'hub' | 'media' | 'calendar' | 'openbible';

export interface UserAccount {
  id: string;
  name: string;
  role: 'member' | 'admin';
  desiredRole?: string;
  avatarUrl?: string;
  group?: 'men' | 'women';
  joinedDate: string;
}

export interface OpenBibleComment {
  id: string;
  author: string;
  authorRole?: string;
  date: string;
  text: string;
}

export interface OpenBibleEntry {
  id: string;
  author: string;
  authorRole?: string;
  date: string;
  bookName: string;
  chapter: number;
  verseNumber: number;
  verseText: string;
  reflection: string;
  tags?: string[];
  likes?: number;
  comments?: OpenBibleComment[];
  isArchived?: boolean;
  archivedAt?: string;
}

export interface BibleBookMeta {
  id: string;
  name: string;
  testament: 'OT' | 'NT';
  totalChapters: number;
  category: string;
  themeSummary: string;
}
export type ScripturalBookMeta = BibleBookMeta;

export interface ChurchThemeRecord {
  yearSpan: string;
  themeTitle: string;
  scriptureAnchor: string;
  description: string;
}

export type ActiveScreen = 'welcome' | 'rotary' | 'openbible' | 'gallery' | 'lessons' | 'bible' | 'rnm' | 'counselor' | 'maps' | 'daily' | 'fellowship' | 'men' | 'women';

export type BibleTranslation = 'KJV' | 'NKJV' | 'NLT' | 'WEB';

export type ReaderTheme = 
  | 'obsidian-gold' 
  | 'tactical-crimson' 
  | 'midnight-navy' 
  | 'ancient-parchment' 
  | 'desert-sand'
  | 'royal-purple'
  | 'cathedral-emerald'
  | 'celestial-azure'
  | 'rose-of-sharon'
  | 'cedar-bronze'
  | 'men-on-fire'
  | 'women-ignited'
  | 'pure-white'
  | 'off-white'
  | 'tabernacle-beige'
  | 'harvest-cream'
  | 'shekinah-yellow';

export interface MinistryRoleRequest {
  id: string;
  memberName: string;
  phone?: string;
  requestedRole: string;
  notes?: string;
  dateRequested: string;
  status: 'pending' | 'approved' | 'denied';
  reviewedBy?: string;
  reviewedDate?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  category: 'Small Group' | 'Fellowship Night' | 'Member Birthday' | 'Outreach' | 'Prayer Call' | 'Worship Service';
  location: string;
  description: string;
  rsvps: string[];
  isExample?: boolean;
  createdBy?: string;
  isZoom?: boolean;
  zoomUrl?: string;
  zoomMeetingId?: string;
  zoomPasscode?: string;
  smallGroupId?: string;
}

export interface UserReadingPlan {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  category?: 'Men On Fire' | 'Women Ignited' | 'YoungFire' | string;
  createdBy: string;
  createdDate: string;
  days: {
    day: number;
    title: string;
    passage: string;
    bookId: string;
    chapter: number;
    devotional: string;
    challenge: string;
  }[];
}

export interface RosterMember {
  id: string;
  fullName: string;
  phone: string;
  birthdate: string;
  age: number;
  residence: string;
  churchMembership: string;
  role?: 'Admin' | 'Leader' | 'Member' | string;
  joinedDate: string;
  group?: 'YoungFire' | 'Men On Fire' | 'Women Ignited' | 'All';
  gender?: 'male' | 'female';
  profilePic?: string;
}

/**
 * Strict Administrator Authority:
 * Only Trent White and Whitney White have administrator authority in the app.
 * All other registered names are non-administrative members.
 */
export function isAdminUser(name: string | null | undefined): boolean {
  if (!name) return false;
  const clean = name.trim().toLowerCase();
  return clean === 'trent white' || clean === 'whitney white';
}













export interface VideoMediaItem {
  id: string;
  youtubeId: string;
  title: string;
  speaker?: string;
  artist?: string;
  category: string;
  duration?: string;
  thematicFocus?: string;
  description?: string;
  isJhowOfficial?: boolean;
  channel?: string;
  speakerOrMinistry?: string;
  series?: string;
  scriptureRef?: string;
  scriptureRefs?: string[];
  lyricsSnippet?: string;
  lyricsText?: string;
  albumArt?: string;
  thumbnailUrl?: string;
  [key: string]: any;
}

export interface KingdomMedia {
  id: string;
  title: string;
  category: string;
  youtubeId: string;
  duration?: string;
  speakerOrArtist?: string;
  speakerOrMinistry?: string;
  speaker?: string;
  artist?: string;
  description?: string;
  thumbnailUrl?: string;
  series?: string;
  channel?: string;
  scriptureRef?: string;
  scriptureRefs?: string[];
  lyricsSnippet?: string;
  lyricsText?: string;
  albumArt?: string;
  isJhowOfficial?: boolean;
  [key: string]: any;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  category?: string;
  youtubeId?: string;
  duration?: string;
  albumArt?: string;
  thematicFocus?: string;
  lyricsSnippet?: string;
  streamUrl?: string;
  audioUrl?: string;
  scriptureRef?: string;
  speaker?: string;
  thumbnailUrl?: string;
  [key: string]: any;
}

export interface LessonAttachment {
  id?: string;
  title?: string;
  name?: string;
  url: string;
  size?: string;
  type?: string;
  [key: string]: any;
}

export interface DiscipleshipLesson {
  id: string;
  seriesTitle?: string;
  lessonTitle: string;
  title?: string;
  teachingDate?: string;
  dateOrSeason?: string;
  status?: string;
  primaryPassage?: string;
  scripturePassage?: string;
  bookId?: string;
  chapter?: number;
  facilitator?: string;
  teachers?: string;
  theme?: string;
  summary?: string;
  description?: string;
  studyNotes?: string;
  videoUrl?: string;
  youtubeUrl?: string;
  youtubeId?: string;
  keyPoints?: string[];
  selfReflectionAudit?: string[];
  discussionQuestions?: string[];
  questions?: string[];
  challenge?: string;
  attachments?: LessonAttachment[];
  photoId?: string;
  isUpcoming?: boolean;
  meetingTime?: string;
  location?: string;
  [key: string]: any;
}
