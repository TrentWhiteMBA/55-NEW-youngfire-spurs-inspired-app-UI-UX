import React, { useEffect, useState } from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { AppTheme } from '../data/appThemes';

interface BroadcastStingerWipeProps {
  show: boolean;
  onComplete: () => void;
  onMidpoint?: () => void;
  durationMs?: number;
  activeTheme?: AppTheme;
  destinationLabel?: string;
}

export const BroadcastStingerWipe: React.FC<BroadcastStingerWipeProps> = ({
  show,
  onComplete,
  onMidpoint,
  durationMs = 4250, // Locked in: stays on screen for 4 - 4.5 seconds
  activeTheme,
  destinationLabel = 'SANCTUARY'
}) => {
  const [phase, setPhase] = useState<'solid' | 'exit'>('solid');
  const accentColor = activeTheme?.accentHex || '#F59E0B';
  const secondaryColor = activeTheme?.secondaryHex || '#EF4444';
  const tertiaryColor = activeTheme?.tertiaryHex || '#FF8200';

  useEffect(() => {
    if (!show) {
      setPhase('solid');
      return;
    }

    setPhase('solid');

    // Midpoint callback to switch underlying tab halfway through the 4.25s duration
    const midTimer = setTimeout(() => {
      if (onMidpoint) onMidpoint();
    }, Math.floor(durationMs * 0.48));

    // Move to exit phase with smooth fade-out over last 450ms
    const exitTimer = setTimeout(() => {
      setPhase('exit');
    }, Math.max(durationMs - 450, 0));

    // Complete wipe and hide after full 4-4.5s
    const completeTimer = setTimeout(() => {
      onComplete();
    }, durationMs);

    return () => {
      clearTimeout(midTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [show, durationMs, onComplete, onMidpoint]);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[200] flex items-center justify-center select-none overflow-hidden transition-opacity duration-400 ease-in-out ${
        phase === 'exit' 
          ? 'opacity-0 pointer-events-none' 
          : 'opacity-100 pointer-events-auto'
      }`}
      style={{
        background: `radial-gradient(circle at 50% 50%, #0d0a06 0%, #000000 85%)`
      }}
    >
      {/* Dynamic Animated Radiant Theme Glows */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none animate-pulse"
        style={{ backgroundColor: `${accentColor}35` }}
      />
      <div 
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: `${secondaryColor}30` }}
      />
      <div 
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: `${tertiaryColor}30` }}
      />

      {/* Central Emblem & Brand Animation */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
        
        {/* Consecrated Flame Medallion - Enlarged scale */}
        <div 
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-3xl bg-black/90 border-2 flex items-center justify-center shadow-2xl relative group transform animate-[bounce_2s_infinite] drop-shadow-[0_0_35px_rgba(245,158,11,0.6)]"
          style={{
            borderColor: accentColor,
            boxShadow: `0 0 60px ${accentColor}70`
          }}
        >
          <div 
            className="absolute inset-0 rounded-3xl opacity-25 animate-ping"
            style={{ backgroundColor: accentColor }}
          />
          <Flame 
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 fill-current filter drop-shadow-[0_0_20px_rgba(245,158,11,0.8)]" 
            style={{ color: accentColor }}
          />
        </div>

        {/* Title */}
        <div className="space-y-1">
          <span className="text-2xl sm:text-3xl font-black uppercase tracking-[0.28em] text-white font-['Anton',sans-serif] drop-shadow-md">
            YOUNG<span style={{ color: accentColor }}>FIRE</span>
          </span>
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-slate-300 uppercase">
            <Sparkles className="w-3.5 h-3.5" style={{ color: accentColor }} />
            <span>TRANSITIONING TO {destinationLabel}</span>
            <Sparkles className="w-3.5 h-3.5" style={{ color: accentColor }} />
          </div>
        </div>

        {/* Dynamic 3-Stripe Fiesta / Theme Accent Bar */}
        <div className="w-48 sm:w-64 flex flex-col gap-1 my-2">
          <div className="w-full h-1 rounded-full shadow-sm" style={{ backgroundColor: accentColor }} />
          <div className="w-full h-1 rounded-full shadow-sm" style={{ backgroundColor: secondaryColor }} />
          <div className="w-full h-1 rounded-full shadow-sm" style={{ backgroundColor: tertiaryColor }} />
        </div>

        {/* Subtitle */}
        <p className="text-[11px] font-mono text-slate-400 tracking-widest uppercase">
          Joshua House of Worship &bull; San Antonio, TX
        </p>

      </div>
    </div>
  );
};

export default BroadcastStingerWipe;
