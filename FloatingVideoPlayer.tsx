import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  X, Maximize2, Minimize2, Move, Scaling, Film, 
  ListMusic, SkipForward, SkipBack, ChevronDown, ChevronUp, Play
} from 'lucide-react';
import { VideoItem } from './KingdomVideoVault';
import { cleanYouTubeId } from '../data/mediaVaultData';

interface FloatingVideoPlayerProps {
  video: VideoItem | null;
  playlistQueue?: VideoItem[];
  currentPlaylistTitle?: string;
  onClose: () => void;
  onExpand?: () => void;
  onVideoChange?: (video: VideoItem) => void;
}

type PlayerDisplayMode = 'pip' | 'minimized' | 'maximized';

export const FloatingVideoPlayer: React.FC<FloatingVideoPlayerProps> = ({
  video: initialVideo,
  playlistQueue = [],
  currentPlaylistTitle,
  onClose,
  onVideoChange
}) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(initialVideo);
  const [displayMode, setDisplayMode] = useState<PlayerDisplayMode>('pip');
  const [isNextUpOpen, setIsNextUpOpen] = useState(false);
  
  // Keep activeVideo in sync with initialVideo prop
  useEffect(() => {
    if (initialVideo) {
      setActiveVideo(initialVideo);
    }
  }, [initialVideo]);

  // Playlist Queue Management
  const currentQueueIndex = playlistQueue.findIndex(
    v => (v.id && activeVideo?.id && v.id === activeVideo.id) || 
         (v.youtubeId && activeVideo?.youtubeId && v.youtubeId === activeVideo.youtubeId)
  );

  const hasNext = currentQueueIndex !== -1 && currentQueueIndex < playlistQueue.length - 1;
  const hasPrev = currentQueueIndex > 0;

  const handlePlayNext = useCallback(() => {
    if (hasNext) {
      const nextVideo = playlistQueue[currentQueueIndex + 1];
      setActiveVideo(nextVideo);
      if (onVideoChange) onVideoChange(nextVideo);
    }
  }, [hasNext, currentQueueIndex, playlistQueue, onVideoChange]);

  const handlePlayPrev = useCallback(() => {
    if (hasPrev) {
      const prevVideo = playlistQueue[currentQueueIndex - 1];
      setActiveVideo(prevVideo);
      if (onVideoChange) onVideoChange(prevVideo);
    }
  }, [hasPrev, currentQueueIndex, playlistQueue, onVideoChange]);

  const handleSelectFromQueue = (selected: VideoItem) => {
    setActiveVideo(selected);
    if (onVideoChange) onVideoChange(selected);
  };

  // YouTube IFrame API PostMessage auto-advance listener when video finishes
  useEffect(() => {
    const handleYouTubeMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === 'string') {
          const parsed = JSON.parse(event.data);
          // YT.PlayerState.ENDED === 0
          if (parsed.event === 'onStateChange' && parsed.info === 0) {
            handlePlayNext();
          }
        }
      } catch {}
    };

    window.addEventListener('message', handleYouTubeMessage);
    return () => window.removeEventListener('message', handleYouTubeMessage);
  }, [handlePlayNext]);

  // Dynamic Width state for PiP mode: constrained between 220px and 90vw
  const [playerWidth, setPlayerWidth] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      return Math.min(380, Math.max(260, window.innerWidth * 0.85));
    }
    return 360;
  });

  const [position, setPosition] = useState<{ x: number; y: number }>(() => {
    if (typeof window !== 'undefined') {
      const defaultX = Math.max(12, window.innerWidth - 400);
      const defaultY = Math.max(70, window.innerHeight - 340);
      return { x: defaultX, y: defaultY };
    }
    return { x: 20, y: 100 };
  });

  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  
  const dragRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number } | null>(null);
  const resizeRef = useRef<{ startX: number; startY: number; initialWidth: number } | null>(null);
  const pinchRef = useRef<{ initialDistance: number; initialWidth: number } | null>(null);

  // Keep inside screen viewport on window resize when in PiP mode
  useEffect(() => {
    const handleResize = () => {
      if (displayMode !== 'pip') return;
      setPlayerWidth(prev => {
        const maxWidth = typeof window !== 'undefined' ? window.innerWidth * 0.9 : 800;
        return Math.max(220, Math.min(maxWidth, prev));
      });
      setPosition(prev => {
        const maxX = Math.max(0, window.innerWidth - playerWidth - 12);
        const maxY = Math.max(0, window.innerHeight - 100);
        return {
          x: Math.min(Math.max(12, prev.x), maxX),
          y: Math.min(Math.max(12, prev.y), maxY)
        };
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [playerWidth, displayMode]);

  // Pointer Drag Handlers (Header)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (displayMode !== 'pip') return;
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y
    };
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!dragRef.current || displayMode !== 'pip') return;
    const deltaX = e.clientX - dragRef.current.startX;
    const deltaY = e.clientY - dragRef.current.startY;
    const currentWidth = playerWidth;
    const currentHeight = playerWidth * (9 / 16) + 70;

    const maxX = Math.max(0, window.innerWidth - currentWidth - 12);
    const maxY = Math.max(0, window.innerHeight - currentHeight - 12);

    const newX = Math.max(8, Math.min(maxX, dragRef.current.initialX + deltaX));
    const newY = Math.max(8, Math.min(maxY, dragRef.current.initialY + deltaY));
    setPosition({ x: newX, y: newY });
  }, [displayMode, playerWidth]);

  const handlePointerUp = useCallback((e: PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    dragRef.current = null;
    try {
      (e.target as HTMLElement)?.releasePointerCapture(e.pointerId);
    } catch {}

    // Fluid boundary snapping to viewport edges
    setPosition(prev => {
      const snapThreshold = 40;
      const currentWidth = playerWidth;
      const currentHeight = playerWidth * (9 / 16) + 70;
      const rightEdge = window.innerWidth - currentWidth - 12;
      const bottomEdge = window.innerHeight - currentHeight - 12;

      let snappedX = prev.x;
      let snappedY = prev.y;

      if (prev.x < snapThreshold) snappedX = 12;
      else if (Math.abs(prev.x - rightEdge) < snapThreshold) snappedX = rightEdge;

      if (prev.y < snapThreshold) snappedY = 12;
      else if (Math.abs(prev.y - bottomEdge) < snapThreshold) snappedY = bottomEdge;

      return { x: snappedX, y: snappedY };
    });
  }, [isDragging, playerWidth]);

  // Pointer Corner Drag-Resizing (Bottom-Right Handle)
  const handleResizePointerDown = (e: React.PointerEvent) => {
    if (displayMode !== 'pip') return;
    e.stopPropagation();
    e.preventDefault();
    setIsResizing(true);
    resizeRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialWidth: playerWidth
    };
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handleResizePointerMove = useCallback((e: PointerEvent) => {
    if (!resizeRef.current || displayMode !== 'pip') return;
    const deltaX = e.clientX - resizeRef.current.startX;
    const minWidth = 220;
    const maxWidth = Math.min(window.innerWidth * 0.92, 850);
    const newWidth = Math.max(minWidth, Math.min(maxWidth, resizeRef.current.initialWidth + deltaX));
    setPlayerWidth(newWidth);
  }, [displayMode]);

  const handleResizePointerUp = useCallback((e: PointerEvent) => {
    if (!isResizing) return;
    setIsResizing(false);
    resizeRef.current = null;
    try {
      (e.target as HTMLElement)?.releasePointerCapture(e.pointerId);
    } catch {}
  }, [isResizing]);

  // Two-Finger Pinch-to-Zoom Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    if (displayMode !== 'pip') return;
    if (e.touches.length === 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const distance = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      pinchRef.current = {
        initialDistance: distance,
        initialWidth: playerWidth
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (displayMode !== 'pip') return;
    if (e.touches.length === 2 && pinchRef.current) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const currentDistance = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      if (pinchRef.current.initialDistance > 0) {
        const scale = currentDistance / pinchRef.current.initialDistance;
        const minWidth = 220;
        const maxWidth = Math.min(window.innerWidth * 0.92, 850);
        const newWidth = Math.max(minWidth, Math.min(maxWidth, pinchRef.current.initialWidth * scale));
        setPlayerWidth(newWidth);
      }
    }
  };

  const handleTouchEnd = () => {
    pinchRef.current = null;
  };

  // Window listeners for pointer drag & resize
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      window.addEventListener('pointercancel', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('pointermove', handleResizePointerMove);
      window.addEventListener('pointerup', handleResizePointerUp);
      window.addEventListener('pointercancel', handleResizePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handleResizePointerMove);
      window.removeEventListener('pointerup', handleResizePointerUp);
      window.removeEventListener('pointercancel', handleResizePointerUp);
    };
  }, [isResizing, handleResizePointerMove, handleResizePointerUp]);

  if (!activeVideo) return null;

  const isDirectUpload = (activeVideo as any).videoType === 'direct_upload' || 
    (activeVideo.videoUrl && (activeVideo.videoUrl.endsWith('.mp4') || activeVideo.videoUrl.endsWith('.mov') || activeVideo.videoUrl.includes('firebasestorage')));

  const rawId = activeVideo.youtubeId || (activeVideo as any).id || '';
  const cleanId = cleanYouTubeId(rawId);

  // Toggle maximize / expanded mode in sanctuary
  const toggleMaximize = () => {
    setDisplayMode(prev => prev === 'maximized' ? 'pip' : 'maximized');
  };

  // Toggle minimized / docked mode
  const toggleMinimize = () => {
    setDisplayMode(prev => prev === 'minimized' ? 'pip' : 'minimized');
  };

  return (
    <>
      {/* Dim backdrop overlay ONLY in maximized sanctuary theater mode */}
      {displayMode === 'maximized' && (
        <div 
          onClick={() => setDisplayMode('pip')}
          className="fixed inset-0 z-[9998] bg-black/85 backdrop-blur-md transition-opacity duration-300"
        />
      )}

      {/* Main Video Player Wrapper */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`fixed z-[9999] select-none transition-all duration-300 ${
          displayMode === 'maximized'
            ? 'inset-x-3 sm:inset-x-8 top-12 sm:top-16 max-w-4xl mx-auto rounded-3xl border-2 border-amber-400/80 shadow-[0_0_80px_rgba(245,158,11,0.4)] overflow-hidden bg-black'
            : displayMode === 'minimized'
            ? 'bottom-4 right-4 w-72 rounded-2xl border border-amber-400/50 shadow-2xl overflow-hidden bg-black'
            : 'top-0 left-0 rounded-2xl overflow-hidden border border-amber-500/60 bg-[#0a0a0a] shadow-2xl'
        }`}
        style={{
          ...(displayMode === 'pip' ? {
            width: `${playerWidth}px`,
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            cursor: isDragging ? 'grabbing' : 'auto',
            willChange: 'transform, width'
          } : {})
        }}
      >
        {/* Top Header Handle */}
        <div 
          onPointerDown={handlePointerDown}
          className={`bg-black px-3 py-2 flex items-center justify-between border-b border-white/10 select-none ${
            displayMode === 'pip' ? 'cursor-grab active:cursor-grabbing' : ''
          }`}
        >
          <div className="flex items-center gap-2 truncate pr-2 pointer-events-none">
            {displayMode === 'pip' ? (
              <Move className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 animate-pulse" />
            ) : (
              <Film className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            )}
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping flex-shrink-0" />
            <span className="text-xs font-mono font-bold text-amber-300 truncate">
              {currentPlaylistTitle ? `${currentPlaylistTitle} • ${activeVideo.title}` : activeVideo.title}
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0 pointer-events-auto">
            {/* Playlist Queue Toggle */}
            {playlistQueue.length > 0 && displayMode !== 'minimized' && (
              <button
                type="button"
                onClick={() => setIsNextUpOpen(prev => !prev)}
                className={`p-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 text-[10px] font-mono ${
                  isNextUpOpen ? 'bg-amber-400 text-black font-bold' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title="Toggle Next Up Queue"
              >
                <ListMusic className="w-3.5 h-3.5" />
                <span>{currentQueueIndex + 1}/{playlistQueue.length}</span>
              </button>
            )}

            {/* Minimize / Dock Button */}
            <button
              type="button"
              onClick={toggleMinimize}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
              title={displayMode === 'minimized' ? "Restore Video View" : "Minimize to Dock"}
            >
              {displayMode === 'minimized' ? (
                <span className="text-[10px] font-mono text-amber-300 font-bold px-1">Expand</span>
              ) : (
                <Minimize2 className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Maximize / Expand In Sanctuary Button */}
            {displayMode !== 'minimized' && (
              <button
                type="button"
                onClick={toggleMaximize}
                className="p-1 rounded-lg text-slate-400 hover:text-amber-300 hover:bg-white/10 cursor-pointer transition-colors"
                title={displayMode === 'maximized' ? "Return to Floating Window" : "Expand in Sanctuary"}
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-white/10 cursor-pointer transition-colors"
              title="Close Video"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 
          CRITICAL: VIDEO CONTAINER IS PERMANENTLY MOUNTED ACROSS MINIMIZE/MAXIMIZE.
          Prevents player reloads, ensuring video continues playing seamlessly without restart!
        */}
        <div 
          className={`w-full bg-black transition-all ${
            displayMode === 'minimized'
              ? 'h-0 opacity-0 overflow-hidden pointer-events-none'
              : 'relative aspect-video w-full'
          }`}
        >
          {(isDragging || isResizing) && (
            <div className="absolute inset-0 z-20 bg-transparent" />
          )}

          {isDirectUpload ? (
            <video
              src={activeVideo.videoUrl}
              controls
              autoPlay
              onEnded={handlePlayNext}
              className="w-full h-full object-contain bg-black"
            />
          ) : cleanId ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${cleanId}?autoplay=1&enablejsapi=1&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : null}
        </div>

        {/* Footer Info & Queue Controls */}
        {displayMode !== 'minimized' && (
          <div className="relative px-3 py-2 bg-black flex flex-col gap-1.5 text-[11px] font-mono border-t border-white/10 select-none">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 truncate pr-4">
                <span className="text-amber-400 font-bold uppercase text-[9px] px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  {activeVideo.category || 'Worship'}
                </span>
                <span className="text-slate-300 truncate">
                  {activeVideo.speaker || activeVideo.artist || (activeVideo as any).uploadedBy?.name || 'Sanctuary'}
                </span>
              </div>

              {/* Queue Previous / Next Skip Buttons */}
              {playlistQueue.length > 1 && (
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePlayPrev}
                    disabled={!hasPrev}
                    className={`p-1 rounded transition-colors ${
                      hasPrev ? 'text-slate-300 hover:text-white cursor-pointer' : 'text-slate-600 cursor-not-allowed'
                    }`}
                    title="Previous Video"
                  >
                    <SkipBack className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handlePlayNext}
                    disabled={!hasNext}
                    className={`p-1 rounded transition-colors ${
                      hasNext ? 'text-amber-400 hover:text-amber-300 cursor-pointer' : 'text-slate-600 cursor-not-allowed'
                    }`}
                    title="Next Video"
                  >
                    <SkipForward className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Corner Resize Handle only in PiP mode */}
            {displayMode === 'pip' && (
              <div
                onPointerDown={handleResizePointerDown}
                className="absolute right-0 bottom-0 w-7 h-7 flex items-end justify-end p-1.5 text-amber-400 hover:text-amber-200 cursor-nwse-resize active:scale-110 transition-transform"
                title="Drag to Resize Video Window (or Pinch to Zoom)"
              >
                <Scaling className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        )}

        {/* Collapsible Next Up Queue Drawer */}
        {isNextUpOpen && displayMode !== 'minimized' && playlistQueue.length > 0 && (
          <div className="bg-[#080808] border-t border-white/10 max-h-60 overflow-y-auto no-scrollbar p-2 space-y-1.5">
            <div className="flex items-center justify-between px-2 py-1 text-[10px] font-mono uppercase text-slate-400 font-bold border-b border-white/5">
              <span>Next Up &bull; {playlistQueue.length} Videos</span>
              <button 
                onClick={() => setIsNextUpOpen(false)}
                className="text-slate-500 hover:text-white"
              >
                Close
              </button>
            </div>
            {playlistQueue.map((item, idx) => {
              const isCurrent = idx === currentQueueIndex;
              return (
                <div
                  key={`queue_${item.id || item.youtubeId}_${idx}`}
                  onClick={() => handleSelectFromQueue(item)}
                  className={`flex items-center gap-2.5 p-2 rounded-xl cursor-pointer transition-all ${
                    isCurrent 
                      ? 'bg-amber-400/20 border border-amber-400/40 text-amber-300' 
                      : 'hover:bg-white/5 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className="relative w-12 h-8 rounded-lg overflow-hidden bg-black flex-shrink-0">
                    <img
                      src={item.thumbnailUrl || (item.youtubeId ? `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg` : '/image_4.png')}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {isCurrent && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Play className="w-3 h-3 text-amber-400 fill-current" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-[11px] font-bold truncate leading-tight">
                      {idx + 1}. {item.title}
                    </h5>
                    <p className="text-[9px] font-mono text-slate-400 truncate mt-0.5">
                      {item.speaker || item.artist || (item as any).uploadedBy?.name || item.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingVideoPlayer;
