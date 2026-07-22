import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sliders, Eye, MoveHorizontal } from 'lucide-react';
import { withBase } from '../lib/base.js';

export default function BeforeAfterSlider({
  beforeImage = "/images/before.webp",
  afterImage = "/images/after.webp",
  beforeLabel = "Stan surowy / Wyburzenia",
  afterLabel = "Gotowa łazienka z gierowaniem 45°",
  shortBeforeLabel = "Stan surowy",
  shortAfterLabel = "Gotowa łazienka",
  caption = "Przesuń suwak, by zobaczyć przemianę — od skucia starych płytek po gotową łazienkę z gierowanym narożnikiem."
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="before-after-wrapper">
      <div 
        ref={containerRef}
        className="before-after-container"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* After Image (Background) */}
        <img 
          src={withBase(afterImage)}
          alt={afterLabel} 
          className="after-image"
          loading="eager"
        />
        {/* Stationary Top Labels */}
        <span className="slider-label label-before">
          <Sliders size={14} className="label-icon" />
          <span className="label-text-full">{beforeLabel}</span>
          <span className="label-text-short">{shortBeforeLabel}</span>
        </span>
        <span className="slider-label label-after">
          <Eye size={14} className="icon-gold label-icon" />
          <span className="label-text-full">{afterLabel}</span>
          <span className="label-text-short">{shortAfterLabel}</span>
        </span>

        {/* Before Image (Clipped Foreground) */}
        <div 
          className="before-image-clip" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={withBase(beforeImage)} 
            alt={beforeLabel} 
            className="before-image" 
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
            loading="eager"
          />
        </div>

        {/* Divider Bar & Handle */}
        <div 
          className="slider-divider" 
          style={{ left: `${sliderPosition}%` }}
        >
          <div 
            className={`slider-handle ${isDragging ? 'is-active' : ''}`} 
            aria-label="Przesuń suwak przed i po"
          >
            <MoveHorizontal size={20} />
          </div>
        </div>
      </div>

      {caption && (
        <p className="slider-caption">
          <Sliders size={15} className="caption-icon" />
          <span>{caption}</span>
        </p>
      )}

      <style>{`
        .before-after-wrapper {
          width: 100%;
        }

        .before-after-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-stone);
          user-select: none;
          cursor: ew-resize;
          box-shadow: var(--shadow-lg);
          background-color: var(--bg-card);
          touch-action: pan-y;
        }

        .after-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .before-image-clip {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          overflow: hidden;
          z-index: 2;
        }

        .before-image {
          height: 100%;
          max-width: none;
          object-fit: cover;
        }

        .slider-label {
          position: absolute;
          top: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          backdrop-filter: blur(8px);
          z-index: 6;
          letter-spacing: 0.02em;
          white-space: nowrap;
          pointer-events: none;
          max-width: 45%;
        }

        .label-icon {
          flex-shrink: 0;
        }

        .label-text-full {
          display: inline;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .label-text-short {
          display: none;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .label-after {
          right: 1rem;
          background: rgba(13, 17, 23, 0.88);
          color: var(--text-main);
          border: 1px solid var(--border-gold);
        }

        .label-before {
          left: 1rem;
          background: rgba(13, 17, 23, 0.88);
          color: var(--text-muted);
          border: 1px solid var(--border-stone);
        }

        .icon-gold {
          color: var(--accent-travertine);
        }

        .slider-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--accent-travertine);
          z-index: 5;
          transform: translateX(-50%);
          box-shadow: 0 0 12px rgba(212, 163, 115, 0.6);
        }

        .slider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent-travertine);
          color: #0D1117;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          border: 3px solid #0D1117;
          touch-action: none;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease;
          will-change: transform;
        }

        .before-after-container:hover .slider-handle {
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 0 25px rgba(212, 163, 115, 0.5);
        }

        .slider-handle.is-active {
          transform: translate(-50%, -50%) scale(1.18) !important;
          box-shadow: 0 0 32px rgba(212, 163, 115, 0.7) !important;
          background-color: var(--accent-travertine-hover);
        }

        .slider-caption {
          margin-top: 0.85rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
          justify-content: center;
          text-align: center;
          line-height: 1.5;
        }

        .caption-icon {
          color: var(--accent-travertine);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        @media (max-width: 640px) {
          .before-after-container {
            aspect-ratio: 1 / 1;
          }
          .slider-label {
            top: 0.6rem;
            font-size: 0.725rem;
            padding: 0.35rem 0.65rem;
            max-width: 44%;
          }
          .label-before {
            left: 0.6rem;
          }
          .label-after {
            right: 0.6rem;
          }
          .label-text-full {
            display: none;
          }
          .label-text-short {
            display: inline;
          }
          .slider-caption {
            font-size: 0.8rem;
            margin-top: 0.65rem;
            text-align: left;
            padding: 0 0.25rem;
          }
        }
      `}</style>
    </div>
  );
}
