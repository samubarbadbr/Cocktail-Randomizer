import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Snowflake } from 'lucide-react';
import { CocktailItem } from '../types';

interface CocktailShakerModalProps {
  isOpen: boolean;
  pool: CocktailItem[];
  isSoundOn: boolean;
  onComplete: (cocktail: CocktailItem) => void;
}

// =========================================================================
// 🍸 VETTORE PREMIUM DELLO SHAKER COBBLER (Proporzioni Realistiche & Luxury)
// =========================================================================
export const ShakerGraphic: React.FC<{ size?: number; className?: string }> = ({ 
  size = 140, 
  className = "" 
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size * 1.15} 
        viewBox="0 0 160 180" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.65)]"
      >
        <defs>
          {/* Sfumatura corpo shaker in acciaio spazzolato titanio & argento */}
          <linearGradient id="shakerBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="15%" stopColor="#475569" />
            <stop offset="35%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="68%" stopColor="#64748b" />
            <stop offset="85%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Sfumatura oro lucido alchemico */}
          <linearGradient id="shakerGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          {/* Sfumatura brina e condensa ghiacciata */}
          <linearGradient id="frostGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#a855f7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Bagliore alchemico interno */}
          <radialGradient id="alchGlow" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. TAPPO SUPERIORE (Cap con rifinitura oro) */}
        <g id="shaker-cap">
          <path 
            d="M66 12 C66 8 94 8 94 12 L96 24 C96 26 94 27 80 27 C66 27 64 26 64 24 Z" 
            fill="url(#shakerBody)" 
            stroke="url(#shakerGold)" 
            strokeWidth="1.5" 
          />
          <ellipse cx="80" cy="11" rx="14" ry="3" fill="url(#shakerGold)" />
          {/* Riflesso luce tappo */}
          <line x1="77" y1="13" x2="77" y2="24" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeOpacity="0.85" />
          <line x1="83" y1="13" x2="83" y2="24" stroke="url(#shakerGold)" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* 2. CUPOLA E SPALLE CON FILTRO (Dome / Strainer section proporzionata) */}
        <g id="shaker-dome">
          <path 
            d="M64 26 C64 26 62 30 50 38 C38 46 32 54 32 70 L128 70 C128 54 122 46 110 38 C98 30 96 26 96 26 Z" 
            fill="url(#shakerBody)" 
            stroke="url(#shakerGold)" 
            strokeWidth="1.75" 
          />
          {/* Anello dorato spesso di giunzione centrale */}
          <rect x="30" y="67" width="100" height="6" rx="3" fill="url(#shakerGold)" stroke="#0f172a" strokeWidth="0.75" />
          {/* Scanalature e riflessi curvi della cupola */}
          <path d="M68 28 Q52 48 48 67" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round" fill="none" />
          <path d="M92 28 Q108 48 112 67" stroke="url(#shakerGold)" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round" fill="none" />
        </g>

        {/* 3. CORPO BICCHIERE INFERIORE (Tumbler Body robusto & armonico) */}
        <g id="shaker-tumbler">
          <path 
            d="M33 72 L48 160 C50 166 62 170 80 170 C98 170 110 166 112 160 L127 72 Z" 
            fill="url(#shakerBody)" 
            stroke="url(#shakerGold)" 
            strokeWidth="2" 
          />

          {/* Effetto Brina / Ghiacciatura progressiva sul fondo */}
          <path 
            d="M36 100 L48 160 C50 166 62 170 80 170 C98 170 110 166 112 160 L124 100 Z" 
            fill="url(#frostGrad)" 
          />

          {/* Bagliore alchemico luminoso */}
          <ellipse cx="80" cy="130" rx="30" ry="24" fill="url(#alchGlow)" />

          {/* Linee di riflesso metallico spazzolato */}
          <path d="M64 74 L72 163" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.8" strokeLinecap="round" />
          <path d="M70 74 L76 164" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
          <path d="M96 74 L90 163" stroke="url(#shakerGold)" strokeWidth="2" strokeOpacity="0.85" strokeLinecap="round" />

          {/* Stemma Alchemis inciso a laser al centro */}
          <g transform="translate(80, 118) scale(0.75)">
            <path d="M-14 -10 L0 8 L14 -10 Z" fill="url(#shakerGold)" fillOpacity="0.75" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="0" cy="-2" r="2.5" fill="#ffffff" />
            <line x1="0" y1="8" x2="0" y2="16" stroke="url(#shakerGold)" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="-6" y1="16" x2="6" y2="16" stroke="url(#shakerGold)" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Base rinforzata dorata */}
          <ellipse cx="80" cy="164" rx="32" ry="5" fill="url(#shakerGold)" stroke="#0f172a" strokeWidth="1" />
        </g>
      </svg>

      {/* Cubetti di ghiaccio fluttuanti attorno allo shaker */}
      <div className="absolute -left-2 top-10 w-7 h-7 rounded-xl bg-sky-300/30 border border-sky-200/60 backdrop-blur-xs rotate-12 animate-ice-left flex items-center justify-center text-xs shadow-[0_0_10px_rgba(56,189,248,0.5)]">
        🧊
      </div>
      <div className="absolute -right-2 top-20 w-8 h-8 rounded-xl bg-cyan-200/25 border border-cyan-100/70 backdrop-blur-xs -rotate-45 animate-ice-right flex items-center justify-center text-sm shadow-[0_0_12px_rgba(34,211,238,0.5)]">
        🧊
      </div>
      <div className="absolute left-2 bottom-3 w-5 h-5 rounded-lg bg-amber-300/20 border border-amber-200/50 backdrop-blur-xs rotate-45 animate-ice-left flex items-center justify-center text-[9px]">
        ✨
      </div>
    </div>
  );
};

export const CocktailShakerModal: React.FC<CocktailShakerModalProps> = ({
  isOpen,
  pool,
  isSoundOn,
  onComplete
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [currentCocktail, setCurrentCocktail] = useState<CocktailItem | null>(null);
  const [stageText, setStageText] = useState<string>("Ghiaccio & distillati nello shaker...");
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Sintesi audio specifica per la shakerata con cubetti di ghiaccio
  const playShakeStrokeSound = (intensity: number = 1) => {
    if (!isSoundOn || typeof window === 'undefined') return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;

      // 1. Impatto metallico shaker (bandpass noise)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200 + Math.random() * 500, now);
      filter.Q.setValueAtTime(3.5, now);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300 + Math.random() * 150, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.08);

      gain.gain.setValueAtTime(0.07 * intensity, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);

      // 2. Tintinnio ghiaccio (ice clink clatter)
      const iceOsc = ctx.createOscillator();
      const iceGain = ctx.createGain();
      iceOsc.type = 'sine';
      iceOsc.frequency.setValueAtTime(2000 + Math.random() * 700, now + 0.02);
      iceGain.gain.setValueAtTime(0.035 * intensity, now + 0.02);
      iceGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      iceOsc.connect(iceGain);
      iceGain.connect(ctx.destination);
      iceOsc.start(now + 0.02);
      iceOsc.stop(now + 0.07);

    } catch {}
  };

  const playSuccessChime = () => {
    if (!isSoundOn || typeof window === 'undefined') return;
    try {
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.065);
        gain.gain.setValueAtTime(0, now + idx * 0.065);
        gain.gain.linearRampToValueAtTime(0.09, now + idx * 0.065 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.065 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.065);
        osc.stop(now + idx * 0.065 + 0.4);
      });
    } catch {}
  };

  useEffect(() => {
    if (!isOpen || pool.length === 0) return;

    setProgress(0);
    const candidateList = pool.length > 0 ? pool : [];
    if (candidateList.length === 0) return;

    // Scegliamo il vincitore finale fin dall'inizio
    const chosenCocktail = candidateList[Math.floor(Math.random() * candidateList.length)];
    setCurrentCocktail(chosenCocktail);

    // Durata rallentata a 4.2 secondi per una vera esperienza di preparazione
    const totalDuration = 4200; 
    const intervalTime = 140; 
    let elapsed = 0;

    // Haptic iniziale
    if (navigator.vibrate) {
      try { navigator.vibrate([30, 40, 30]); } catch {}
    }

    const timer = setInterval(() => {
      elapsed += intervalTime;
      const currentPct = Math.min(100, Math.round((elapsed / totalDuration) * 100));
      setProgress(currentPct);

      // Cambiamo il cocktail a rotazione visiva con ritmo cadenzato
      const randomCandidate = candidateList[Math.floor(Math.random() * candidateList.length)];
      setCurrentCocktail(randomCandidate);

      // Suono della shakerata ritmica e vibrazione
      playShakeStrokeSound(0.6 + (currentPct / 100) * 0.45);
      if (navigator.vibrate && currentPct % 15 === 0) {
        try { navigator.vibrate(25); } catch {}
      }

      // Fasi del rituale
      if (currentPct < 22) {
        setStageText("🧊 Ghiaccio & distillati nello shaker...");
      } else if (currentPct < 65) {
        setStageText("🍸 Shakerata alchemica in corso...");
      } else if (currentPct < 90) {
        setStageText("❄️ Condensa & raffreddamento perfetto...");
      } else {
        setStageText("✨ Filtraggio & pronto da servire!");
      }

      if (elapsed >= totalDuration) {
        clearInterval(timer);
        setCurrentCocktail(chosenCocktail);
        playSuccessChime();
        if (navigator.vibrate) {
          try { navigator.vibrate([40, 80, 120]); } catch {}
        }
        setTimeout(() => {
          onComplete(chosenCocktail);
        }, 350);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isOpen, pool, isSoundOn]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4">
      <div className="glass-card max-w-sm w-full rounded-3xl p-6 text-center space-y-5 border border-amber-400/40 shadow-2xl relative overflow-hidden">
        
        {/* Glow circolare d'atmosfera */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* TITOLO SUPERIORE */}
        <div className="relative z-10 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-extrabold uppercase tracking-widest">
            <Sparkles size={12} className="animate-spin" />
            <span>Alchemis Mixology</span>
          </div>
          <h2 className="text-lg font-black tracking-wide text-white">
            Preparazione Cocktail
          </h2>
        </div>

        {/* 🍸 ICONA SHAKER ANIMATA CON PROPORZIONI CORRETTE */}
        <div className="relative z-10 py-2 flex justify-center items-center">
          <div className="animate-bartender-shake">
            <ShakerGraphic size={135} />
          </div>
        </div>

        {/* NOME DEL COCKTAIL IN ESTRAZIONE */}
        <div className="relative z-10 space-y-1">
          <div className="text-xs font-semibold text-slate-300 h-5 flex items-center justify-center gap-1.5 transition-all">
            <span>{stageText}</span>
          </div>
          
          <div className="min-h-[38px] flex items-center justify-center">
            <h3 className="text-xl font-black bg-gradient-to-r from-amber-300 via-purple-300 to-amber-200 bg-clip-text text-transparent truncate px-2 max-w-full">
              {currentCocktail ? currentCocktail.name : 'Miscelazione in corso...'}
            </h3>
          </div>

          {currentCocktail && (
            <div className="text-[11px] text-slate-400 font-medium truncate">
              {currentCocktail.baseSpirit} • {currentCocktail.category}
            </div>
          )}
        </div>

        {/* BARRA DI PROGRESSO DELLA SHAKERATA */}
        <div className="relative z-10 space-y-1.5 pt-1">
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 px-1">
            <span className="flex items-center gap-1 text-cyan-400">
              <Snowflake size={11} className="animate-pulse" /> Raffreddamento
            </span>
            <span className="text-amber-400 font-extrabold">{progress}%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-950 border border-white/10 overflow-hidden p-0.5">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-amber-400 via-purple-500 to-cyan-400 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(245,158,11,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
