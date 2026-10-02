import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, Shield, Flame, Search, ChevronLeft, ChevronRight, 
  Sparkles, CheckCircle2, Award, Calendar, BookOpen, Heart, 
  MapPin, Clock, ArrowUpRight, Share2, Filter, X
} from 'lucide-react';
import { CurrentUser } from './SettingsHUDModal';
import { AppTheme } from '../data/appThemes';
import { SanAntonioVectorMap } from './SanAntonioVectorMap';
import { TEAM_HUB_MOSAIC_PHOTOS } from '../data/fellowshipPhotos';

interface SanctuaryTeamHubProps {
  currentUser?: CurrentUser | null;
  activeTheme?: AppTheme;
  onNavigateToScripture?: (bookId: string, chapter: number, verse?: number) => void;
  onNavigate?: (tab: string) => void;
  onOpenRosterModal?: () => void;
  [key: string]: any;
}

export interface TeamMember {
  id: string;
  name: string;
  displayName: string;
  role: string;
  positionCode: 'L' | 'F' | 'M' | 'I' | 'B' | 'S' | 'A'; // A = Administrator, L = Lead Overseer, F = Facilitator, M = Media, I = Intercessor, B = Brother, S = Sister
  badgeLabel: string;
  calling: string;
  scriptureAnchor: string;
  cutoutImage: string;
  headshotImage: string;
  outlineColor: string; // Vibrant single-person body contour outline stroke
  streakDays: number;
  chaptersRead: number;
  prayerWatches: number;
  smallGroupAttendance: string;
  residence: string;
  bio: string;
  isRegistered?: boolean;
}

// STRICTLY ONLY TRENTON AND WHITNEY WHITE EXIST INITIALLY (ZERO MOCK MEMBERS)
export const CANONICAL_LEADERSHIP: TeamMember[] = [
  {
    id: 'trent_white',
    name: 'Trenton White',
    displayName: 'TRENTON WHITE',
    role: 'Lead Facilitator / Administrator',
    positionCode: 'A',
    badgeLabel: 'ADMINISTRATOR',
    calling: 'Lead Facilitator / Administrator • Sanctuary Overseer',
    scriptureAnchor: 'Romans 12:1-2',
    cutoutImage: '/IMG_3524.jpg',
    headshotImage: '/IMG_3524.jpg',
    outlineColor: '#F59E0B', // Gold accent
    streakDays: 0,
    chaptersRead: 0,
    prayerWatches: 0,
    smallGroupAttendance: "0 Check-Ins (The White's Residence)",
    residence: 'San Antonio, TX (EST. 2015)',
    bio: 'Lead Facilitator and Executive Administrator stewarding the YoungFire movement at Joshua House of Worship since 2015. Guiding disciples through holiness, biblical literacy, and bold faith.'
  },
  {
    id: 'whitney_white',
    name: 'Whitney White',
    displayName: 'WHITNEY WHITE',
    role: 'Lead Facilitator / Administrator',
    positionCode: 'A',
    badgeLabel: 'ADMINISTRATOR',
    calling: 'Lead Facilitator / Administrator • Sanctuary Shepherdess',
    scriptureAnchor: 'Proverbs 31:25-26',
    cutoutImage: '/IMG_3524.jpg',
    headshotImage: '/IMG_3532.jpg',
    outlineColor: '#F59E0B', // Gold accent
    streakDays: 0,
    chaptersRead: 0,
    prayerWatches: 0,
    smallGroupAttendance: "0 Check-Ins (The White's Residence)",
    residence: 'San Antonio, TX (EST. 2015)',
    bio: 'Lead Facilitator and Executive Administrator cultivating authentic sisterhood and spiritual depth across YoungFire young adults. Co-hosting bi-weekly small groups with spiritual discernment and fervent prayer.'
  }
];

export const SanctuaryTeamHub: React.FC<SanctuaryTeamHubProps> = ({
  currentUser,
  activeTheme,
  onNavigateToScripture,
  onNavigate,
  onOpenRosterModal
}) => {
  const accentColor = activeTheme?.accentHex || '#F59E0B';
  const secondaryColor = activeTheme?.secondaryHex || '#EA580C';

  // 3-Way Segmented Control: [ ROSTER ] | [ FAITHFULNESS ] | [ STATS ]
  const [activeSegment, setActiveSegment] = useState<'roster' | 'faithfulness' | 'stats'>('roster');

  // Dynamic Roster: 100% Empty State initially until explicit physical registration
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    try {
      const saved = localStorage.getItem('youngfire_member_roster_v2');
      const list = saved ? JSON.parse(saved) : [];
      if (!Array.isArray(list) || list.length === 0) return [];

      // Filter out mock/test members (Harrison, Maliq, etc.)
      const cleanedRegistered = list.filter((m: any) => {
        const str = `${m.id || ''} ${m.fullName || m.name || ''} ${m.email || ''} ${m.role || ''}`.toLowerCase();
        const isMock = (
          str.includes('harrison') ||
          str.includes('maliq') ||
          str.includes('barnes') ||
          str.includes('brown') ||
          str.includes('mock') ||
          str.includes('sample') ||
          str.includes('placeholder')
        );
        return !isMock && (m.fullName || m.name);
      });

      return cleanedRegistered.map((m: any, idx: number): TeamMember => {
        const isMale = m.gender === 'male';
        const isLeader = m.isAdmin || m.accountType === 'administrator' || m.role?.toLowerCase().includes('facilitator');
        return {
          id: m.id || `reg_disciple_${idx}`,
          name: m.fullName || m.name || 'Consecrated Disciple',
          displayName: (m.fullName || m.name || 'DISCIPLE').toUpperCase(),
          role: m.role || (isLeader ? 'Lead Facilitator / Administrator' : isMale ? 'Brother • Men On Fire' : 'Sister • Women Ignited'),
          positionCode: (isLeader ? 'A' : isMale ? 'B' : 'S') as any,
          badgeLabel: isLeader ? 'ADMINISTRATOR' : (isMale ? 'BROTHER' : 'SISTER'),
          calling: m.calling || (isLeader ? 'Lead Facilitator • Sanctuary Overseer' : isMale ? 'Brother • Men On Fire' : 'Sister • Women Ignited'),
          scriptureAnchor: m.scriptureAnchor || (isLeader ? 'Romans 12:1-2' : 'Ephesians 4:16'),
          cutoutImage: m.avatar || '/IMG_3524.jpg',
          headshotImage: m.avatar || '/IMG_3524.jpg',
          outlineColor: m.outlineColor || (isLeader ? '#F59E0B' : isMale ? '#06B6D4' : '#14B8A6'),
          streakDays: m.streakDays || 0,
          chaptersRead: m.chaptersRead || 0,
          prayerWatches: m.prayerWatches || 0,
          smallGroupAttendance: m.smallGroupAttendance || "0 Check-Ins (The White's Residence)",
          residence: m.residence || 'San Antonio, TX',
          bio: m.bio || 'Faithful consecrated disciple growing in the word and assembly at Joshua House of Worship.',
          isRegistered: true
        };
      });
    } catch {
      return [];
    }
  });

  // Listen for registered members updates
  useEffect(() => {
    const handleRosterUpdate = () => {
      try {
        const saved = localStorage.getItem('youngfire_member_roster_v2');
        const list = saved ? JSON.parse(saved) : [];
        if (!Array.isArray(list)) return;

        const newMembers = list.filter((m: any) => {
          const str = `${m.id || ''} ${m.fullName || m.name || ''} ${m.email || ''} ${m.role || ''}`.toLowerCase();
          const isMock = (
            str.includes('harrison') ||
            str.includes('maliq') ||
            str.includes('barnes') ||
            str.includes('brown') ||
            str.includes('mock') ||
            str.includes('sample') ||
            str.includes('placeholder')
          );
          return !isMock && (m.fullName || m.name);
        }).map((m: any, idx: number): TeamMember => {
          const isMale = m.gender === 'male';
          const isLeader = m.isAdmin || m.accountType === 'administrator' || m.role?.toLowerCase().includes('facilitator');
          return {
            id: m.id || `reg_disciple_${idx}`,
            name: m.fullName || m.name || 'Consecrated Disciple',
            displayName: (m.fullName || m.name || 'DISCIPLE').toUpperCase(),
            role: m.role || (isLeader ? 'Lead Facilitator / Administrator' : isMale ? 'Brother • Men On Fire' : 'Sister • Women Ignited'),
            positionCode: (isLeader ? 'A' : isMale ? 'B' : 'S') as any,
            badgeLabel: isLeader ? 'ADMINISTRATOR' : (isMale ? 'BROTHER' : 'SISTER'),
            calling: m.calling || (isLeader ? 'Lead Facilitator • Sanctuary Overseer' : isMale ? 'Brother • Men On Fire' : 'Sister • Women Ignited'),
            scriptureAnchor: m.scriptureAnchor || (isLeader ? 'Romans 12:1-2' : 'Ephesians 4:16'),
            cutoutImage: m.avatar || '/IMG_3524.jpg',
            headshotImage: m.avatar || '/IMG_3524.jpg',
            outlineColor: m.outlineColor || (isLeader ? '#F59E0B' : isMale ? '#06B6D4' : '#14B8A6'),
            streakDays: m.streakDays || 0,
            chaptersRead: m.chaptersRead || 0,
            prayerWatches: m.prayerWatches || 0,
            smallGroupAttendance: m.smallGroupAttendance || "0 Check-Ins (The White's Residence)",
            residence: m.residence || 'San Antonio, TX',
            bio: m.bio || 'Faithful consecrated disciple growing in the word and assembly at Joshua House of Worship.',
            isRegistered: true
          };
        });

        setTeamMembers(newMembers);
      } catch {}
    };

    window.addEventListener('roster_members_updated', handleRosterUpdate);
    window.addEventListener('youngfire_team_updated', handleRosterUpdate);
    window.addEventListener('storage', handleRosterUpdate);
    return () => {
      window.removeEventListener('roster_members_updated', handleRosterUpdate);
      window.removeEventListener('youngfire_team_updated', handleRosterUpdate);
      window.removeEventListener('storage', handleRosterUpdate);
    };
  }, []);

  // Selected Member for Highlight & Modal
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedMemberModal, setSelectedMemberModal] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (teamMembers.length > 0 && !selectedMember) {
      setSelectedMember(teamMembers[0]);
    }
  }, [teamMembers, selectedMember]);

  // Roster Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [positionFilter, setPositionFilter] = useState<'ALL' | 'L' | 'B' | 'S'>('ALL');

  // Featured Member Carousel State & Touch Swipe Engine
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchCurrentX = useRef<number>(0);

  // Synchronize carousel slide scroll when featuredIndex changes
  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children[featuredIndex]) {
      const slide = carouselRef.current.children[featuredIndex] as HTMLElement;
      slide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
    const mem = teamMembers[featuredIndex];
    if (mem) {
      setSelectedMember(prev => (prev?.id === mem.id ? prev : mem));
    }
  }, [featuredIndex, teamMembers]);

  // Touch gesture listeners tracking deltaX
  const handleCarouselTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleCarouselTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleCarouselTouchEnd = () => {
    const deltaX = touchCurrentX.current - touchStartX.current;
    if (deltaX < -40) {
      // Swipe Left: advances to next featured member
      setFeaturedIndex(prev => (prev + 1) % teamMembers.length);
    } else if (deltaX > 40) {
      // Swipe Right: returns to previous featured member
      setFeaturedIndex(prev => (prev - 1 + teamMembers.length) % teamMembers.length);
    }
  };

  const handlePrevMember = () => {
    setFeaturedIndex(prev => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleNextMember = () => {
    setFeaturedIndex(prev => (prev + 1) % teamMembers.length);
  };

  // Filtered Roster
  const filteredRoster = teamMembers.filter((m) => {
    const matchesSearch = 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.calling.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPosition = positionFilter === 'ALL' || m.positionCode === positionFilter;
    return matchesSearch && matchesPosition;
  });

  return (
    <div className="relative min-h-screen text-slate-100 pb-28 font-['Outfit'] select-none">
      
      {/* 0. Restored Full-Screen Map Backdrop: Real Dark-Mode San Antonio Road Geometry */}
      <SanAntonioVectorMap opacity={0.55} className="fixed inset-0 z-0 pointer-events-none" />

      {/* 1. Header Title: "Team" clean & centered at top, matching Spurs app */}
      <div className="relative z-10 text-center pt-4 pb-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-['Barlow_Condensed'] font-black tracking-wider uppercase text-white drop-shadow-md">
          Team
        </h1>
      </div>

      {/* 2. Top Team Hub Collage: EXTENDS AS WIDE AS SCREEN WITH NO BORDER */}
      {/* Touch Grab & Swiped scrolling pathway where all members stand close together */}
      <div className="relative w-full overflow-hidden bg-[#000000] select-none border-none shadow-[0_20px_60px_rgba(0,0,0,0.95)] z-10">
        
        {/* Top Spurs-Style Repeating Text Ticker Bar */}
        <div className="absolute top-0 inset-x-0 h-7 bg-black/80 border-b border-white/10 z-10 flex items-center overflow-hidden pointer-events-none">
          <div className="whitespace-nowrap font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase flex items-center gap-6 px-4 animate-none opacity-80">
            <span>YOUNGFIRE SANCTUARY</span>
            <span>&bull;</span>
            <span className="text-amber-400 font-bold">EST. 2015</span>
            <span>&bull;</span>
            <span>JOSHUA HOUSE OF WORSHIP</span>
            <span>&bull;</span>
            <span className="text-amber-400 font-bold">ACTS 2:42</span>
            <span>&bull;</span>
            <span>LEAD FACILITATORS TRENT &amp; WHITNEY WHITE</span>
            <span>&bull;</span>
            <span>SAN ANTONIO, TX</span>
            <span>&bull;</span>
            <span className="text-amber-400 font-bold">EST. 2015</span>
          </div>
        </div>

        {/* Background Layer: Rich Collage of Authentic Photos with Lightened Exposure & Balanced Contrast */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="grid grid-cols-4 sm:grid-cols-7 h-full filter brightness-115 opacity-100 gap-[2px]">
            {TEAM_HUB_MOSAIC_PHOTOS.map((photoUrl, idx) => (
              <div key={idx} className="relative h-full overflow-hidden border border-white/20 rounded-none shadow-sm">
                <img 
                  src={photoUrl} 
                  alt="" 
                  className="w-full h-full object-cover object-top rounded-none transition-transform duration-500 hover:scale-105 filter brightness-110 contrast-100" 
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/IMG_3520.jpg';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Obsidian Gradient Scrims: Softened so mosaic photos shine through with gentle brightness */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Foreground Layer: ACTIVE CSS SCROLL-SNAP CAROUSEL & SWIPE ENGINE OR ZERO-MEMBER EMPTY STATE */}
        {teamMembers.length === 0 ? (
          <div className="relative z-20 w-full max-w-xl mx-auto py-16 px-6 text-center flex flex-col items-center justify-center space-y-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 bg-black/85 backdrop-blur-md shadow-2xl animate-pulse"
              style={{ borderColor: accentColor }}
            >
              <Users className="w-8 h-8" style={{ color: accentColor }} />
            </div>
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-amber-400 font-bold uppercase block">
                SANCTUARY ROSTER STANDING READY &bull; AWAITING DISCIPLE CHECK-IN &amp; CONSECRATION
              </span>
              <p className="text-xs font-mono text-slate-300 max-w-md mx-auto">
                No active placeholder profiles. Real disciples and facilitators will be recorded here dynamically upon official check-in and photo submission.
              </p>
            </div>
            {onOpenRosterModal && (
              <button
                onClick={onOpenRosterModal}
                className="px-5 py-2.5 rounded-full font-['Barlow_Condensed'] font-black text-sm tracking-wider uppercase bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>CHECK IN / REGISTER DISCIPLE</span>
              </button>
            )}
          </div>
        ) : (
          <div 
            ref={carouselRef}
            onTouchStart={handleCarouselTouchStart}
            onTouchMove={handleCarouselTouchMove}
            onTouchEnd={handleCarouselTouchEnd}
            className="relative z-20 flex overflow-x-auto snap-x snap-mandatory no-scrollbar touch-pan-x select-none items-end pt-12 pb-5 w-full cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: 'smooth' }}
          >
            {teamMembers.map((member, index) => {
              const isSelected = selectedMember?.id === member.id || index === featuredIndex;
              
              return (
                <div
                  key={member.id}
                  onClick={() => {
                    setFeaturedIndex(index);
                    setSelectedMember(member);
                    setSelectedMemberModal(member);
                  }}
                  className="snap-center flex-shrink-0 w-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group"
                >
                  {/* Individual Member Cutout: Standalone cutout with physical silhouette as only border */}
                  <div className="relative w-52 sm:w-64 md:w-80 h-72 sm:h-84 md:h-96 flex items-end justify-center select-none pointer-events-none">
                    <img
                      src={member.cutoutImage}
                      alt={member.name}
                      className="w-full h-full object-contain object-bottom pointer-events-none transition-all duration-300 group-hover:scale-105"
                      style={{
                        // Realistic 3D Depth Soft Drop-Shadow + Physical silhouette border contour
                        filter: `drop-shadow(0 12px 24px rgba(0,0,0,0.85)) drop-shadow(2px 0 0 ${member.outlineColor}) drop-shadow(-2px 0 0 ${member.outlineColor}) drop-shadow(0 2px 0 ${member.outlineColor}) drop-shadow(0 -2px 0 ${member.outlineColor}) drop-shadow(0 0 16px ${member.outlineColor}80)`
                      }}
                    />

                    {/* Active Selection Glow Ring at bottom */}
                    {isSelected && (
                      <div 
                        className="absolute -bottom-1 w-32 sm:w-44 h-3 rounded-full blur-sm animate-pulse"
                        style={{ backgroundColor: member.outlineColor }}
                      />
                    )}
                  </div>

                  {/* Hand-Drawn / Curved Arrow pointing up to the body & Bold Athletic Name */}
                  <div className="flex flex-col items-center mt-2 -space-y-0.5 z-30">
                    {/* Curved arrow matching Spurs app */}
                    <svg 
                      className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1"
                      style={{ color: isSelected ? member.outlineColor : '#FFFFFF' }}
                      viewBox="0 0 24 24" 
                      fill="none"
                    >
                      <path 
                        d="M7 17C10 15 15 12 18 6M18 6H11M18 6V13" 
                        stroke="currentColor" 
                        strokeWidth="2.75" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        />
                    </svg>

                    {/* All-Caps Condensed Athletic Name */}
                    <span className={`font-['Barlow_Condensed'] font-black text-2xl sm:text-3xl tracking-wider uppercase whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-100 group-hover:text-white'
                    }`}>
                      {member.displayName}
                    </span>

                    {/* Spiritual Calling and Ministry Role */}
                    <div className="flex flex-col items-center mt-1 space-y-0.5">
                      <span 
                        className="text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{ 
                          backgroundColor: `${member.outlineColor}25`, 
                          color: member.outlineColor,
                          border: `1px solid ${member.outlineColor}50`
                        }}
                      >
                        {member.badgeLabel}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-300 tracking-tight max-w-[240px] text-center truncate">
                        {member.calling}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* 3. Below Collage: Responsive Controls & Roster List */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-5 space-y-5">
        
        {/* 3-Way Segmented Control: [ ROSTER ] | [ FAITHFULNESS ] | [ STATS ] (Spurs Stadium Pill Buttons) */}
        <div className="p-1.5 rounded-full bg-black/85 border border-white/15 max-w-md mx-auto grid grid-cols-3 gap-1 shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => setActiveSegment('roster')}
            className={`py-2 px-3 rounded-full font-['Barlow_Condensed'] font-black text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
              activeSegment === 'roster'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-[1.02]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>ROSTER</span>
          </button>

          <button
            onClick={() => setActiveSegment('faithfulness')}
            className={`py-2 px-3 rounded-full font-['Barlow_Condensed'] font-black text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
              activeSegment === 'faithfulness'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-[1.02]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>FAITHFULNESS</span>
          </button>

          <button
            onClick={() => setActiveSegment('stats')}
            className={`py-2 px-3 rounded-full font-['Barlow_Condensed'] font-black text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
              activeSegment === 'stats'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-[1.02]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>STATS</span>
          </button>
        </div>

        {/* Spurs App Callout: "TAP A MEMBER TO VIEW THEIR STATS" with Triple-Color Accent Bar (Render only when members exist) */}
        {teamMembers.length > 0 && (
          <div className="text-center pt-1 pb-1 space-y-2">
            <p className="font-['Outfit'] italic font-bold tracking-widest text-sm sm:text-base text-cyan-400 drop-shadow">
              TAP A MEMBER TO VIEW THEIR STATS
            </p>
            
            {/* Triple-Color Accent Divider Bar matching Spurs Fiesta/City Edition */}
            <div className="w-48 sm:w-64 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-teal-400 shadow-sm" />
            
            {/* Active SWIPE Action Controller with Animated Arrows & Dynamic Index Pips */}
            <div className="flex flex-col items-center justify-center gap-2 pt-2">
              <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs font-mono tracking-widest text-slate-300 uppercase">
                <button
                  onClick={handlePrevMember}
                  className="py-1 px-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-amber-400 hover:text-white transition-all cursor-pointer flex items-center gap-1 active:scale-95 border border-white/10"
                  title="Previous Member (Swipe Right)"
                >
                  <ChevronLeft className="w-4 h-4 animate-pulse text-amber-400" />
                  <span className="hidden sm:inline text-[10px] font-bold">&lt;&lt; PREV</span>
                </button>

                <div className="text-amber-400 font-black tracking-[0.25em] flex items-center gap-1.5 font-['Outfit'] select-none px-2">
                  <span className="opacity-70">&lt;&lt;&lt;&lt;&lt;</span>
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent text-sm sm:text-base font-extrabold animate-pulse">
                    SWIPE
                  </span>
                  <span className="opacity-70">&gt;&gt;&gt;&gt;&gt;</span>
                </div>

                <button
                  onClick={handleNextMember}
                  className="py-1 px-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-amber-400 hover:text-white transition-all cursor-pointer flex items-center gap-1 active:scale-95 border border-white/10"
                  title="Next Member (Swipe Left)"
                >
                  <span className="hidden sm:inline text-[10px] font-bold">NEXT &gt;&gt;</span>
                  <ChevronRight className="w-4 h-4 animate-pulse text-amber-400" />
                </button>
              </div>

              {/* Dynamic Index Pips beneath <<<<< SWIPE >>>>> */}
              <div className="flex items-center justify-center gap-1.5 pt-1">
                {teamMembers.map((m, idx) => {
                  const isActive = idx === featuredIndex;
                  return (
                    <button
                      key={m.id}
                      onClick={() => {
                        setFeaturedIndex(idx);
                        setSelectedMember(m);
                      }}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        isActive
                          ? 'w-6 h-2 bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]'
                          : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                      }`}
                      title={`View ${m.name} (${idx + 1}/${teamMembers.length})`}
                      aria-label={`View ${m.name}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: ROSTER VIEW */}
        {activeSegment === 'roster' && (
          <div className="space-y-4">
            
            {/* Search & Role Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-2xl bg-[#000000]/90 border border-white/10 backdrop-blur-md">
              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search leadership & members..."
                  className="w-full pl-9 pr-3 py-1.5 bg-[#0a0a0a] border border-white/15 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Position Filter Pills */}
              <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
                {(['ALL', 'L', 'B', 'S'] as const).map((pos) => {
                  const labels: Record<string, string> = {
                    ALL: 'All',
                    L: 'Overseer',
                    B: 'Brother',
                    S: 'Sister'
                  };
                  return (
                    <button
                      key={pos}
                      onClick={() => setPositionFilter(pos)}
                      className={`px-3 py-1 rounded-lg font-['Barlow_Condensed'] font-black text-xs tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                        positionFilter === pos
                          ? 'bg-amber-500 text-slate-950 font-black'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {labels[pos]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Roster Cards List */}
            {/* Real Registered Disciples with wide, crisp, clean white background cards */}
            <div className="space-y-3">
              {filteredRoster.length === 0 ? (
                <div className="py-12 px-6 rounded-2xl bg-white text-slate-950 border border-slate-200 text-center space-y-3 shadow-lg">
                  <Shield className="w-10 h-10 mx-auto text-amber-500" />
                  <h3 className="font-['Barlow_Condensed'] font-black text-2xl uppercase tracking-wider text-slate-950">
                    SANCTUARY ROSTER STANDING READY &bull; AWAITING DISCIPLE CHECK-IN &amp; CONSECRATION
                  </h3>
                  <p className="text-xs font-mono text-slate-600 max-w-md mx-auto uppercase">
                    Zero static placeholders. Real disciples and facilitators will be recorded here dynamically upon official registration.
                  </p>
                  {onOpenRosterModal && (
                    <button
                      onClick={onOpenRosterModal}
                      className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-['Barlow_Condensed'] font-black text-sm tracking-wider uppercase bg-slate-950 text-white hover:bg-slate-800 transition-all cursor-pointer shadow-md"
                    >
                      <Users className="w-4 h-4 text-amber-400" />
                      <span>CHECK IN / REGISTER</span>
                    </button>
                  )}
                </div>
              ) : (
                filteredRoster.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedMemberModal(member)}
                    className="group relative bg-white text-slate-950 rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200 hover:border-slate-300 transition-all duration-200 cursor-pointer overflow-hidden hover:shadow-xl"
                    style={{
                      borderTop: `4px solid ${member.outlineColor || accentColor}`
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      {/* Left: Square Authentic Headshot */}
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-sm group-hover:scale-102 transition-transform">
                          <img
                            src={member.headshotImage}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = '/IMG_3524.jpg';
                            }}
                          />
                        </div>

                        {/* Middle: Name & Athletic Info */}
                        <div className="min-w-0 space-y-0.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-slate-950 font-black tracking-wide font-['Barlow_Condensed',sans-serif] uppercase text-lg sm:text-xl truncate group-hover:text-amber-600 transition-colors">
                              {member.name}
                            </h3>
                          </div>

                          <p className="text-slate-600 font-mono text-xs uppercase truncate">
                            {member.calling}
                          </p>

                          <p className="text-[11px] font-mono text-slate-500 truncate flex items-center gap-1.5 uppercase">
                            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                            <span>{member.residence}</span>
                            <span>&bull;</span>
                            <span className="text-slate-700 font-bold">{member.scriptureAnchor}</span>
                          </p>
                        </div>
                      </div>

                      {/* Far Right: Heavy Athletic Position Letter (A, B, S) on White Card Floor */}
                      <div className="flex flex-col items-center justify-center shrink-0 pl-3 border-l border-slate-200">
                        <span 
                          className="font-['Barlow_Condensed'] font-black text-3xl sm:text-4xl tracking-tighter leading-none transition-colors"
                          style={{ color: member.outlineColor || accentColor }}
                        >
                          {member.positionCode}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                          POS
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        )}

        {/* TAB 2: FAITHFULNESS VIEW */}
        {activeSegment === 'faithfulness' && (
          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#000000]/90 border border-white/10 space-y-3">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <h2 className="font-['Barlow_Condensed'] font-black text-xl uppercase tracking-wider text-white">
                  Consecrated Disciple Walk &bull; Zero-Start Ledger
                </h2>
              </div>
              <p className="text-xs font-mono text-slate-300 leading-relaxed">
                As leaders and disciples at Joshua House of Worship, our devotion is grounded in daily physical sword reading, consecrated discipleship huddles, and faithful small group assembly.
              </p>
            </div>

            {teamMembers.length === 0 ? (
              <div className="py-12 px-6 rounded-2xl bg-white text-slate-950 border border-slate-200 text-center space-y-3 shadow-lg">
                <Shield className="w-10 h-10 mx-auto text-amber-500" />
                <h3 className="font-['Barlow_Condensed'] font-black text-2xl uppercase tracking-wider text-slate-950">
                  SANCTUARY ROSTER STANDING READY &bull; AWAITING DISCIPLE CHECK-IN &amp; CONSECRATION
                </h3>
                <p className="text-xs font-mono text-slate-600 max-w-md mx-auto uppercase">
                  Zero static placeholders. Disciples and facilitators will track chapters read and discipleship huddles dynamically once registered.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {teamMembers.map((member) => (
                  <div 
                    key={member.id}
                    className="bg-white text-slate-950 rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200 transition-all space-y-3 relative overflow-hidden"
                    style={{
                      borderTop: `4px solid ${member.outlineColor || accentColor}`
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img 
                          src={member.headshotImage} 
                          alt="" 
                          className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-sm" 
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/IMG_3524.jpg';
                          }}
                        />
                        <div>
                          <h4 className="text-slate-950 font-black tracking-wide font-['Barlow_Condensed',sans-serif] uppercase text-lg sm:text-xl">
                            {member.name}
                          </h4>
                          <span className="text-slate-600 font-mono text-xs uppercase block">
                            {member.calling}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center shrink-0 px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200">
                        <span 
                          className="font-['Barlow_Condensed'] font-black text-2xl leading-none"
                          style={{ color: member.outlineColor || accentColor }}
                        >
                          {member.positionCode}
                        </span>
                        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                          POS
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="font-mono font-black text-lg text-slate-950 block">
                          {member.chaptersRead}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase font-semibold">
                          Chapters Read
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="font-mono font-black text-lg text-slate-950 block">
                          {member.streakDays}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase font-semibold">
                          Consecrated Days
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="font-mono font-black text-lg text-slate-950 block">
                          {member.prayerWatches}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase font-semibold">
                          Huddles
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: STATS VIEW */}
        {activeSegment === 'stats' && (
          <div className="space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#000000]/90 border border-white/10 space-y-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h2 className="font-['Barlow_Condensed'] font-black text-xl uppercase tracking-wider text-white">
                  Corporate Sanctuary Metrics (Starting At Zero)
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-center">
                  <span className="font-['Barlow_Condensed'] font-black text-3xl text-amber-400 block">
                    0
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                    Chapters Completed
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-center">
                  <span className="font-['Barlow_Condensed'] font-black text-3xl text-amber-400 block">
                    0
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                    Streak Days
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-center">
                  <span className="font-['Barlow_Condensed'] font-black text-3xl text-amber-400 block">
                    0
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                    Prayers Interceded
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-center">
                  <span className="font-['Barlow_Condensed'] font-black text-3xl text-amber-400 block">
                    0
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                    Huddles Attended
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                <p className="text-xs font-mono text-slate-400">
                  All accounts start at zero. Disciples build their consecrated sword ledger daily through personal Bible tracking and corporate Monday/Thursday gatherings.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* 4. Member Detail Modal */}
      {selectedMemberModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#000000] border border-amber-500/30 p-6 space-y-5 shadow-2xl overflow-hidden">
            
            {/* Top Accent Stripe */}
            <div 
              className="absolute top-0 inset-x-0 h-1.5"
              style={{ backgroundColor: selectedMemberModal.outlineColor }}
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedMemberModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Overview */}
            <div className="flex items-center gap-4 pt-2">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-black border border-white/20 shrink-0">
                <img
                  src={selectedMemberModal.headshotImage}
                  alt={selectedMemberModal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span 
                    className="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                    style={{ 
                      backgroundColor: `${selectedMemberModal.outlineColor}30`, 
                      color: selectedMemberModal.outlineColor 
                    }}
                  >
                    {selectedMemberModal.badgeLabel}
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {selectedMemberModal.calling}
                  </span>
                </div>
                <h3 className="font-['Barlow_Condensed'] font-black text-2xl sm:text-3xl uppercase tracking-wider text-white">
                  {selectedMemberModal.name}
                </h3>
                <p className="text-xs font-mono text-slate-300">
                  {selectedMemberModal.role}
                </p>
              </div>
            </div>

            {/* Scripture Anchor & Calling */}
            <div className="space-y-2 p-3.5 rounded-2xl bg-black/60 border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase">Scripture Anchor:</span>
                <span className="text-amber-400 font-bold">{selectedMemberModal.scriptureAnchor}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase">Sanctuary Calling:</span>
                <span className="text-white font-medium text-right max-w-[65%] truncate">{selectedMemberModal.calling}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase">Location:</span>
                <span className="text-slate-300">{selectedMemberModal.residence}</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-xs font-mono text-slate-300 leading-relaxed">
              {selectedMemberModal.bio}
            </p>

            {/* Consecrated Metrics */}
            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-white/10">
              <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                <span className="font-mono font-black text-xl text-white block">
                  {selectedMemberModal.chaptersRead}
                </span>
                <span className="text-[9px] font-mono text-slate-400 uppercase">
                  Chapters Read
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                <span className="font-mono font-black text-xl text-white block">
                  {selectedMemberModal.streakDays}
                </span>
                <span className="text-[9px] font-mono text-slate-400 uppercase">
                  Streak Days
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                <span className="font-mono font-black text-xl text-white block">
                  {selectedMemberModal.prayerWatches}
                </span>
                <span className="text-[9px] font-mono text-slate-400 uppercase">
                  Discipleship Huddles
                </span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setSelectedMemberModal(null)}
              className="w-full py-3 rounded-xl font-['Barlow_Condensed'] font-black text-sm tracking-widest uppercase bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg cursor-pointer hover:brightness-110 transition-all"
            >
              CLOSE DISCIPLE CARD
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SanctuaryTeamHub;
