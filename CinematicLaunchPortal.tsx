import React, { useState, useEffect, useRef } from 'react';
import { Flame, MapPin } from 'lucide-react';
import { BroadcastStingerWipe } from './BroadcastStingerWipe';

interface CinematicLaunchPortalProps {
  onComplete: () => void;
}

type PortalPhase = 'LOGO_INTRO' | 'MAP_ZOOM_IN' | 'BEACON_REVEAL' | 'ZOOM_AND_FADE' | 'STINGER_WIPE';

export const CinematicLaunchPortal: React.FC<CinematicLaunchPortalProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<PortalPhase>('LOGO_INTRO');
  const [isFadingBlack, setIsFadingBlack] = useState<boolean>(false);
  const [mapImgSrc, setMapImgSrc] = useState<string>('/san_antonio_dark_map.png');
  const isMountedRef = useRef<boolean>(true);

  useEffect(() => {
    isMountedRef.current = true;

    // Timeline Phase Transitions:
    // 0.0s – 1.8s: LOGO_INTRO
    const t1 = setTimeout(() => {
      if (isMountedRef.current) {
        setPhase('MAP_ZOOM_IN');
      }
    }, 1800);

    // 1.8s – 3.2s: MAP_ZOOM_IN -> BEACON_REVEAL (3.2s+)
    const t2 = setTimeout(() => {
      if (isMountedRef.current) {
        setPhase('BEACON_REVEAL');
      }
    }, 3200);

    return () => {
      isMountedRef.current = false;
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleTriggerEnter = () => {
    if (phase === 'ZOOM_AND_FADE' || phase === 'STINGER_WIPE') return;
    
    // Smooth cinematic camera push toward the beacon
    setPhase('ZOOM_AND_FADE');

    // Smoothly fade screen to pure black starting at 500ms
    setTimeout(() => {
      if (isMountedRef.current) {
        setIsFadingBlack(true);
      }
    }, 500);

    // Transition smoothly into YoungFire logo stinger wipe after fade-to-black (1.4s)
    setTimeout(() => {
      if (isMountedRef.current) {
        setPhase('STINGER_WIPE');
      }
    }, 1400);
  };

  const handleStingerComplete = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black text-white overflow-hidden select-none font-['Outfit']">
      
      {/* ========================================================
          CRISP MAP LAYER CONTAINER
          Centered & Transform Origin locked precisely to
          Joshua House of Worship: 46.2% X, 50.8% Y
          Moderate, sharp, cinematic push-in (scale 2.5) with no pixelation
          ======================================================== */}
      <div 
        className="absolute inset-0 transition-all"
        style={{
          transformOrigin: '46.2% 50.8%',
          transform: 
            phase === 'ZOOM_AND_FADE' || phase === 'STINGER_WIPE'
              ? 'scale(2.5)'
              : phase === 'MAP_ZOOM_IN' || phase === 'BEACON_REVEAL'
              ? 'scale(1)'
              : 'scale(0.85)',
          opacity: 
            phase === 'STINGER_WIPE'
              ? 0
              : phase === 'ZOOM_AND_FADE'
              ? 0.95
              : phase === 'BEACON_REVEAL'
              ? 0.92
              : phase === 'MAP_ZOOM_IN'
              ? 0.85
              : 0.25,
          transitionDuration: 
            phase === 'ZOOM_AND_FADE'
              ? '1500ms'
              : phase === 'MAP_ZOOM_IN' 
              ? '1400ms' 
              : '800ms',
          transitionTimingFunction: 
            phase === 'ZOOM_AND_FADE'
              ? 'cubic-bezier(0.25, 1, 0.5, 1)'
              : 'cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform, opacity'
        }}
      >
        {/* High-Resolution San Antonio Monochrome Street Map - Enhanced Crisp Sharpness */}
        <img
          src={mapImgSrc}
          alt="San Antonio Metro Street Network"
          className="w-full h-full object-cover object-center filter grayscale contrast-[175%] brightness-[85%]"
          style={{
            imageRendering: '-webkit-optimize-contrast'
          }}
          onError={() => {
            setMapImgSrc('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80');
          }}
        />

        {/* Tactical Dark Obsidian Vignette & Scrims */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 46.2% 50.8%, rgba(0,0,0,0.05) 0%, rgba(4,7,17,0.55) 50%, #000000 90%)'
          }}
        />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black via-black/75 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================
          PHASE 1: LOGO_INTRO (0.0s – 1.8s)
          Big bold metallic Holy Flame Insignia scaling up in pitch black
          ======================================================== */}
      <div 
        className={`absolute inset-0 z-30 flex flex-col items-center justify-center p-6 bg-black transition-opacity duration-700 pointer-events-none ${
          phase === 'LOGO_INTRO' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative flex flex-col items-center text-center space-y-4 animate-[scaleUp_1.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          {/* Flame Center Crest */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-black border-2 border-amber-400/80 flex items-center justify-center shadow-[0_0_55px_rgba(245,158,11,0.65)]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-300 flex items-center justify-center shadow-inner">
              <Flame className="w-9 h-9 sm:w-10 sm:h-10 text-black fill-current drop-shadow-lg" />
            </div>
            {/* Subtle outer radiating beacon ring */}
            <div className="absolute -inset-3 rounded-[32px] border border-amber-400/30 animate-pulse pointer-events-none" />
          </div>

          <div>
            <h1 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl tracking-[0.25em] uppercase text-white font-black drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
              YOUNG<span className="text-amber-400">FIRE</span>
            </h1>
            <p className="font-['Barlow_Condensed',sans-serif] text-xs sm:text-sm tracking-[0.3em] uppercase text-slate-300 font-bold mt-1">
              JOSHUA HOUSE OF WORSHIP &bull; SAN ANTONIO, TX
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <span className="h-px w-8 bg-amber-400/50" />
            <span className="font-mono text-[10px] text-amber-300 tracking-[0.2em] uppercase font-bold">
              EST. 2015
            </span>
            <span className="h-px w-8 bg-amber-400/50" />
          </div>
        </div>
      </div>

      {/* ========================================================
          PHASE 3 & 4: BEACON REVEAL, HEADER & INTERACTIVE DOT
          Anchor: 46.2% X, 50.8% Y
          ======================================================== */}
      {(phase === 'BEACON_REVEAL' || phase === 'ZOOM_AND_FADE') && (
        <>
          {/* Top Header Card */}
          <div 
            onClick={handleTriggerEnter}
            className={`absolute top-6 sm:top-10 inset-x-4 z-40 flex flex-col items-center text-center cursor-pointer transition-all duration-700 ${
              phase === 'ZOOM_AND_FADE' ? 'opacity-0 -translate-y-6 pointer-events-none' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="px-5 py-3 rounded-2xl bg-black/80 backdrop-blur-md border border-cyan-400/40 shadow-[0_10px_35px_rgba(0,229,255,0.25)] hover:border-cyan-300 hover:bg-black/90 transition-all group max-w-md">
              <div className="flex items-center justify-center gap-2 mb-0.5">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <h2 className="font-['Barlow_Condensed',sans-serif] text-base sm:text-lg md:text-xl font-black uppercase tracking-[0.25em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] group-hover:text-cyan-300 transition-colors">
                  Welcome to YoungFire! Tap to enter.
                </h2>
              </div>
              <p className="font-mono text-[10px] sm:text-[11px] text-amber-400 tracking-[0.2em] uppercase font-bold">
                4748 W MARTIN ST &bull; SAN ANTONIO, TX
              </p>
              <div className="mt-1 text-[9px] font-mono text-slate-400 tracking-wider">
                Tap Beacon or Screen to Enter Sanctuary &rarr;
              </div>
            </div>
          </div>

          {/* Pulsing Blue Beacon on Map Anchor (46.2% X, 50.8% Y) */}
          <div 
            style={{ left: '46.2%', top: '50.8%' }}
            className={`absolute z-40 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group transition-transform ${
              phase === 'ZOOM_AND_FADE' ? 'scale-125 duration-700' : 'scale-100'
            }`}
            onClick={handleTriggerEnter}
          >
            {/* Concentric Radar Ripple Waves */}
            <div className="absolute w-16 h-16 rounded-full bg-cyan-500/30 animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />
            <div className="absolute w-28 h-28 rounded-full bg-cyan-400/20 animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none [animation-delay:0.8s]" />
            <div className="absolute w-40 h-40 rounded-full bg-cyan-600/10 animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none [animation-delay:1.6s]" />

            {/* Micro Tooltip / Badge Hovering Right Above Blue Dot */}
            <div className={`absolute -top-11 left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none ${
              phase === 'ZOOM_AND_FADE' ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
            }`}>
              <div className="relative px-3 py-1 rounded-full bg-black/90 border border-cyan-400/60 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.45)] whitespace-nowrap flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-cyan-300" />
                <span className="font-['Barlow_Condensed',sans-serif] text-[11px] font-black uppercase tracking-[0.16em] text-white">
                  JOSHUA HOUSE OF WORSHIP
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              {/* Caret pointing to beacon */}
              <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-cyan-400/60 mx-auto" />
            </div>

            {/* Core Neon Electric Blue Circle */}
            <button
              type="button"
              className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-400 border-2 border-white shadow-[0_0_30px_#00e5ff] flex items-center justify-center cursor-pointer transition-transform group-hover:scale-125 active:scale-95 z-10"
              title="Joshua House of Worship - Tap to Enter YoungFire"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
            </button>
          </div>

          {/* Full-Screen Tap Fallback Area (User can tap anywhere on screen to enter) */}
          {phase === 'BEACON_REVEAL' && (
            <div 
              onClick={handleTriggerEnter}
              className="absolute inset-0 z-30 cursor-pointer"
            />
          )}
        </>
      )}

      {/* ========================================================
          SMOOTH FADE-TO-BLACK OVERLAY AFTER TOUCHING BLUE DOT
          Dissolves the screen smoothly into pitch black before logo stinger
          ======================================================== */}
      <div 
        className={`fixed inset-0 z-50 bg-black pointer-events-none transition-opacity duration-700 ease-in-out ${
          isFadingBlack ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* ========================================================
          PHASE 5: YOUNGFIRE LOGO STINGER WIPE (4 - 5 SECONDS)
          Smoothly transitions into the Welcome Sanctuary
          ======================================================== */}
      {phase === 'STINGER_WIPE' && (
        <BroadcastStingerWipe
          show={true}
          durationMs={4500}
          destinationLabel="WELCOME SANCTUARY"
          onComplete={handleStingerComplete}
        />
      )}

      {/* Subtle Skip Button in bottom right corner */}
      {phase !== 'STINGER_WIPE' && (
        <div className="absolute bottom-4 right-4 z-50">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onComplete();
            }}
            className="text-[10px] font-mono text-slate-400 hover:text-white uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/95 border border-white/10 hover:border-white/30 backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95"
          >
            Skip &rarr;
          </button>
        </div>
      )}

    </div>
  );
};

export default CinematicLaunchPortal;
