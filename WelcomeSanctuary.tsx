import React, { useState } from 'react';
import { 
  Flame, ArrowRight, UserPlus, LogIn, Compass, 
  X, Sparkles, MapPin, Calendar, BookOpen, Radio,
  Globe, Youtube, Facebook, ExternalLink, Camera,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { AppTheme } from '../data/appThemes';
import { useAppCover } from '../data/appCoverAssets';
import { ALL_FELLOWSHIP_PHOTOS } from '../data/fellowshipPhotos';

interface WelcomeSanctuaryProps {
  onEnterSanctuary?: (user?: any) => void;
  onRegister?: () => void;
  onSignIn?: () => void;
  onGoogleSignIn?: (user?: any) => void;
  onExploreGuest?: () => void;
  onClose?: () => void;
  isAuthenticated?: boolean;
  onOpenRoster?: () => void;
  onToggleRadio?: () => void;
  isRadioPlaying?: boolean;
  onOpenThemeModal?: () => void;
  activeTheme?: AppTheme;
  [key: string]: any;
}

export const WelcomeSanctuary: React.FC<WelcomeSanctuaryProps> = ({
  onEnterSanctuary,
  onRegister,
  onSignIn,
  onGoogleSignIn,
  onExploreGuest,
  onClose,
  isAuthenticated = false,
  activeTheme
}) => {
  const accentColor = activeTheme?.accentHex || '#F59E0B';

  // Authentic YoungFire Fellowship Photo (Strictly 1 Attached Photo: Living Room Prayer Circle Huddle)
  const WELCOME_PHOTO = { 
    url: '/IMG_3520.jpg', 
    title: 'Living Room Prayer Circle Huddle', 
    location: "White's Residence Living Room",
    description: 'Consecrated fellowship selfie huddle with Lead Facilitators Trent & Whitney White'
  };

  // Photo Style Filter Mode (Defaults to Black & White and Sharp)
  const [photoFilterMode, setPhotoFilterMode] = useState<'bw_sharp' | 'color'>('bw_sharp');

  // Interactive Google Sign-In Window State (Consent-based local device storage only)
  const [isGoogleWindowOpen, setIsGoogleWindowOpen] = useState<boolean>(false);
  const [customGoogleEmail, setCustomGoogleEmail] = useState<string>('');
  const [customGoogleName, setCustomGoogleName] = useState<string>('');
  const [rememberOnDevice, setRememberOnDevice] = useState<boolean>(true);
  const [savedLocalGoogleAccount, setSavedLocalGoogleAccount] = useState<{ email: string; name?: string } | null>(() => {
    try {
      const saved = localStorage.getItem('youngfire_saved_google_account');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleForgetSavedAccount = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem('youngfire_saved_google_account');
    } catch {}
    setSavedLocalGoogleAccount(null);
  };

  const smallGroupLocation = typeof window !== 'undefined'
    ? localStorage.getItem('youngfire_small_group_location') || "The White's Residence"
    : "The White's Residence";

  const handleRegisterClick = () => {
    if (onRegister) onRegister();
    else if (onEnterSanctuary) onEnterSanctuary();
  };

  const handleSignInClick = () => {
    if (onSignIn) onSignIn();
    else if (onEnterSanctuary) onEnterSanctuary();
  };

  const handleGoogleSignInClick = () => {
    // Open the interactive Google Sign-In Window immediately
    setIsGoogleWindowOpen(true);
  };

  const completeGoogleUserLogin = (emailAddress: string, displayName?: string, avatarUrl?: string) => {
    const emailLower = emailAddress.toLowerCase().trim();
    const nameLower = (displayName || '').toLowerCase().trim();
    const isTrent = emailLower.includes('trent') || emailLower.includes('tw6738131') || nameLower.includes('trent');
    const isWhitney = emailLower.includes('whitney') || nameLower.includes('whitney');
    const isOverseer = isTrent || isWhitney;

    let resolvedName = displayName || (isTrent ? 'Lead Facilitator Trent D. White' : isWhitney ? 'Lead Facilitator Whitney White' : 'YoungFire Disciple');
    let resolvedAvatar = avatarUrl || (isTrent ? '/IMG_3524.jpg' : isWhitney ? '/IMG_3532.jpg' : '/IMG_3520.jpg');

    const authUser = {
      id: isTrent ? 'roster_lead_trent' : isWhitney ? 'roster_lead_whitney' : `google_${Date.now().toString(36)}`,
      name: resolvedName,
      email: emailAddress,
      gender: isWhitney ? 'female' as const : 'male' as const,
      avatar: resolvedAvatar,
      isAdmin: isOverseer,
      accountType: isOverseer ? 'administrator' as const : 'member' as const,
      role: isOverseer ? 'Lead Facilitator' : 'Disciple',
      ministryRoleId: isOverseer ? 'lead_facilitator' : 'disciple',
      ministryRoleLabel: isOverseer ? 'Lead Facilitator' : 'Disciple',
      calling: isOverseer ? 'Sanctuary Leadership & Overseer' : 'Word Discipleship & Intercession',
      churchMembership: 'Joshua House of Worship',
      residence: 'San Antonio, TX',
      phone: '(210) 555-0144',
      birthday: isWhitney ? '06-15' : isTrent ? '03-08' : '01-01',
      joinedAt: new Date().toISOString()
    };

    // Save session to device
    try {
      localStorage.setItem('youngfire_device_session_v1', JSON.stringify(authUser));
      localStorage.setItem('youngfire_user_session', JSON.stringify(authUser));
    } catch {}

    // Only save Google account info on this local device if the user agreed
    if (rememberOnDevice && emailAddress.trim()) {
      try {
        localStorage.setItem('youngfire_saved_google_account', JSON.stringify({
          email: emailAddress.trim(),
          name: resolvedName
        }));
      } catch {}
    } else {
      try {
        localStorage.removeItem('youngfire_saved_google_account');
      } catch {}
    }

    setIsGoogleWindowOpen(false);

    if (onGoogleSignIn) {
      onGoogleSignIn(authUser);
    } else if (onEnterSanctuary) {
      onEnterSanctuary(authUser);
    }
  };

  const handleExploreGuestClick = () => {
    if (onExploreGuest) onExploreGuest();
    else if (onEnterSanctuary) onEnterSanctuary();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 text-white flex flex-col items-center select-none font-['Outfit']">
      
      {/* 1. Stationary San Antonio Street Map Screenshot Backdrop */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-85 bg-cover bg-center select-none"
        style={{ backgroundImage: `url('/san_antonio_dark_map.png')` }}
      />

      {/* 2. Soft Obsidian Gradient Overlays for Card Text Legibility */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_95%)]" />

      {/* Main Sanctuary Card Container (Scrolls smoothly over stationary map) */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-4 pt-3 pb-8 sm:pt-4 sm:pb-12 flex flex-col items-center">
        
        {/* Close Button (if modal overlay) */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-full bg-black/60 hover:bg-black/90 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer z-30"
            title="Close Welcome Sanctuary"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* 3. Top Hero Photo: Clean, Unobscured with Heads, Faces & Smiles Fully Visible (Strictly 1 Single Attached Photo: IMG_3520.jpg) */}
        <div className="relative w-full h-80 sm:h-96 md:h-[480px] rounded-3xl overflow-hidden border border-amber-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-black group">
          <img
            src={WELCOME_PHOTO.url}
            alt={WELCOME_PHOTO.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-102"
            style={{
              objectPosition: 'center 32%',
              filter: photoFilterMode === 'bw_sharp'
                ? 'grayscale(100%) contrast(155%) brightness(108%) drop-shadow(0 2px 8px rgba(0,0,0,0.5))'
                : 'contrast(125%) brightness(106%) saturate(120%) drop-shadow(0 2px 8px rgba(0,0,0,0.5))'
            }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/IMG_3520.jpg';
            }}
          />

          {/* Top Floating Filter Switcher Badge: Compact 1-Tap Toggle between B&W Sharp and Vibrant Color */}
          <div className="absolute top-2.5 left-2.5 z-30 flex items-center">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPhotoFilterMode(prev => prev === 'bw_sharp' ? 'color' : 'bw_sharp');
              }}
              className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/85 hover:bg-black text-amber-300 border border-amber-500/40 backdrop-blur-md text-[9px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg transition-all cursor-pointer hover:border-amber-400 active:scale-95"
              title="Toggle Sharp Black & White vs Vibrant Color"
            >
              <span>{photoFilterMode === 'bw_sharp' ? '✦ B&W' : '☀ Color'}</span>
              <span className="text-[8px] text-slate-400 font-normal">| Tap</span>
            </button>
          </div>
        </div>

        {/* 4. Dedicated Content Well Strictly Underneath the Photograph */}
        <div className="w-full text-center space-y-4 mt-6 sm:mt-8 relative z-20 px-2">
          
          {/* Flame Center Crest */}
          <div 
            className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl flex items-center justify-center shadow-[0_0_35px_rgba(245,158,11,0.5)] border border-amber-400/50"
            style={{ 
              backgroundColor: '#000000',
              boxShadow: `0 0 30px ${accentColor}40`
            }}
          >
            <div 
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-inner"
              style={{ backgroundColor: accentColor }}
            >
              <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-current drop-shadow" />
            </div>
          </div>

          <div>
            <h1 className="font-['Outfit'] text-2xl sm:text-3xl tracking-[0.2em] uppercase text-white font-black drop-shadow-md">
              YOUNG<span style={{ color: accentColor }}>FIRE</span>
            </h1>
            <p className="text-xs sm:text-sm font-mono tracking-[0.16em] uppercase text-slate-300 font-bold mt-0.5">
              JOSHUA HOUSE OF WORSHIP &bull; SAN ANTONIO, TX &bull; EST. 2015
            </p>
          </div>

          {/* ANNUAL THEME PROCLAMATION */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-amber-500/35 shadow-xl max-w-lg mx-auto">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold block mb-1">
              ANNUAL THEME PROCLAMATION &bull; LEADERSHIP
            </span>
            <p className="font-['Outfit'] text-sm sm:text-base font-black text-white tracking-wide leading-snug">
              Rebuilding Better Together (Ephesians 4:16) &bull; Lead Facilitators Trent D. White &amp; Whitney White &bull; EST. 2015
            </p>
          </div>

          {/* Gathering Quick Notice */}
          <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>Small Groups: <strong className="text-amber-200">{smallGroupLocation}</strong> (Bi-Weekly Mondays @ 7:00 PM CST)</span>
          </div>
        </div>

        {/* 5. DIRECT ACTION BUTTONS */}
        <div className="w-full max-w-md space-y-3 mt-6">
          
          {/* Button 1: Register New Disciple Profile */}
          <button
            onClick={handleRegisterClick}
            className="w-full py-3.5 px-6 rounded-2xl text-slate-950 font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all cursor-pointer shadow-xl shadow-amber-500/25 group"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, #EA580C)`
            }}
          >
            <UserPlus className="w-4 h-4 text-slate-950" />
            <span>Register New Disciple Profile &rarr;</span>
          </button>

          {/* Button 2: Sign In to Existing Account */}
          <button
            onClick={handleSignInClick}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#090D18] hover:bg-[#101726] border border-amber-500/30 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:border-amber-400 active:scale-98 transition-all cursor-pointer shadow-lg"
          >
            <LogIn className="w-4 h-4 text-amber-400" />
            <span>Sign In to Existing Account</span>
          </button>

          {/* Button 3: Continue with Google */}
          <button
            type="button"
            onClick={handleGoogleSignInClick}
            className="w-full py-3 px-6 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-sans font-semibold text-xs sm:text-sm border border-slate-300 shadow-md flex items-center justify-center gap-3 cursor-pointer transition-all active:scale-98"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span className="font-semibold text-slate-800 tracking-normal">Continue with Google</span>
          </button>

          {/* Button 4: Explore as Guest */}
          <button
            onClick={handleExploreGuestClick}
            className="w-full py-3 px-6 rounded-2xl bg-black/50 hover:bg-black/90 border border-white/15 text-slate-300 hover:text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Explore as Guest</span>
          </button>

        </div>

        {/* 6. JHOW OFFICIAL SOCIAL & WEB PORTAL (NEW MANDATE) */}
        <div className="w-full max-w-md mt-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 shadow-xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-[11px] font-mono tracking-wider uppercase text-amber-400 font-bold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              Joshua House of Worship Online
            </span>
            <span className="text-[10px] font-mono text-slate-400">San Antonio, TX</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {/* Website Link */}
            <a
              href="https://joshuahouseofworship.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-500/15 border border-white/10 hover:border-amber-400/50 flex flex-col items-center justify-center gap-1.5 transition-all text-center group cursor-pointer"
              title="Official Church Website"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold text-white group-hover:text-amber-300">Church Website</span>
              <span className="text-[9px] font-mono text-slate-400 flex items-center gap-0.5">
                jhow.org <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* YouTube Link */}
            <a
              href="https://www.youtube.com/@JoshuaHouseOfWorshipSanAntonio/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-red-500/15 border border-white/10 hover:border-red-400/50 flex flex-col items-center justify-center gap-1.5 transition-all text-center group cursor-pointer"
              title="Official YouTube Broadcasts"
            >
              <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Youtube className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold text-white group-hover:text-red-300">YouTube</span>
              <span className="text-[9px] font-mono text-slate-400 flex items-center gap-0.5">
                Livestreams <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/JoshuaHouseofWorshipSanAntonio/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-500/15 border border-white/10 hover:border-amber-400/50 flex flex-col items-center justify-center gap-1.5 transition-all text-center group cursor-pointer"
              title="Official Facebook Page"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Facebook className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold text-white group-hover:text-amber-300">Facebook</span>
              <span className="text-[9px] font-mono text-slate-400 flex items-center gap-0.5">
                Sanctuary <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>
          </div>
        </div>

        {/* 7. Sanctuary Highlights Footer (Preserving Gold & Silver Disciplined Palette) */}
        <div className="grid grid-cols-3 gap-2 w-full max-w-md mt-6 pt-5 border-t border-white/10 text-center">
          <div className="p-2.5 rounded-xl bg-black/60 border border-white/10">
            <BookOpen className="w-4 h-4 mx-auto text-amber-400 mb-1" />
            <span className="text-[10px] font-mono text-slate-200 block font-bold">66-BOOK CANON</span>
            <span className="text-[9px] font-mono text-slate-400">Physical Bible Tracker</span>
          </div>

          <div className="p-2.5 rounded-xl bg-black/60 border border-white/10">
            <Radio className="w-4 h-4 mx-auto text-amber-400 mb-1" />
            <span className="text-[10px] font-mono text-slate-200 block font-bold">24/7 GOSPEL AUDIO</span>
            <span className="text-[9px] font-mono text-slate-400">8 Curated Streams</span>
          </div>

          <div className="p-2.5 rounded-xl bg-black/60 border border-white/10">
            <Calendar className="w-4 h-4 mx-auto text-amber-400 mb-1" />
            <span className="text-[10px] font-mono text-slate-200 block font-bold">FELLOWSHIP</span>
            <span className="text-[9px] font-mono text-slate-400">In-Person &amp; Zoom</span>
          </div>
        </div>

      </div>

      {/* ========================================================
          INTERACTIVE GOOGLE SIGN-IN WINDOW (POPS UP ON CLICK)
          Allows quick account selection or typing custom email
          ======================================================== */}
      {isGoogleWindowOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md rounded-3xl bg-[#080C16] border border-amber-500/50 p-6 space-y-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-white">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                <div>
                  <h3 className="font-['Outfit'] font-black text-lg text-white">Sign in with Google</h3>
                  <p className="text-[11px] font-mono text-slate-400">Choose or enter your Google Account</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsGoogleWindowOpen(false)}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* If user previously agreed to save their Google account on THIS device, show their 1-tap local profile card */}
            {savedLocalGoogleAccount && (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-between gap-3 shadow-md">
                <button
                  type="button"
                  onClick={() => completeGoogleUserLogin(savedLocalGoogleAccount.email, savedLocalGoogleAccount.name)}
                  className="flex items-center gap-3 text-left flex-1 min-w-0 cursor-pointer group"
                  title="Sign in with your saved local account"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold text-sm uppercase flex-shrink-0">
                    {savedLocalGoogleAccount.name ? savedLocalGoogleAccount.name[0] : 'G'}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white group-hover:text-amber-300 truncate">
                        {savedLocalGoogleAccount.name || 'Saved Google Account'}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0">
                        SAVED ON DEVICE
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 truncate">
                      {savedLocalGoogleAccount.email}
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={handleForgetSavedAccount}
                  className="text-[10px] font-mono text-slate-400 hover:text-rose-400 px-2.5 py-1 rounded-lg bg-black/40 hover:bg-rose-500/10 border border-white/10 hover:border-rose-500/30 transition-colors cursor-pointer flex-shrink-0"
                  title="Forget account on this device"
                >
                  Forget
                </button>
              </div>
            )}

            {/* Standard Google Email Entry (Zero public preset emails) */}
            <div className="space-y-3 pt-1">
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 block font-bold mb-1">
                  Google Email Address:
                </label>
                <input
                  type="email"
                  placeholder="Enter your Google email (e.g. name@gmail.com)"
                  value={customGoogleEmail}
                  onChange={(e) => setCustomGoogleEmail(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && customGoogleEmail.trim()) {
                      completeGoogleUserLogin(customGoogleEmail.trim(), customGoogleName.trim() || undefined);
                    }
                  }}
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-slate-300 block font-bold mb-1">
                  Your Full Name:
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe (Optional)"
                  value={customGoogleName}
                  onChange={(e) => setCustomGoogleName(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && customGoogleEmail.trim()) {
                      completeGoogleUserLogin(customGoogleEmail.trim(), customGoogleName.trim() || undefined);
                    }
                  }}
                />
              </div>

              {/* Opt-in Consent Checkbox for Local Device Storage */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none text-left">
                  <input
                    type="checkbox"
                    checked={rememberOnDevice}
                    onChange={(e) => setRememberOnDevice(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-white/30 bg-black text-amber-500 focus:ring-amber-400 accent-amber-500 cursor-pointer flex-shrink-0"
                  />
                  <div className="text-[11px] text-slate-300 leading-tight">
                    <span className="font-bold text-white">Save my information on this local device</span>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      Enables 1-tap sign-in only on this device. Information is never shared with other users.
                    </p>
                  </div>
                </label>
              </div>

              {/* Action Submit Button */}
              <button
                type="button"
                disabled={!customGoogleEmail.trim()}
                onClick={() => completeGoogleUserLogin(customGoogleEmail.trim(), customGoogleName.trim() || undefined)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:brightness-110 disabled:opacity-40 transition-all cursor-pointer shadow-lg mt-2"
              >
                Sign In with Google &rarr;
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default WelcomeSanctuary;
