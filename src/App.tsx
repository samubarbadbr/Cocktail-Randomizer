import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { COCKTAILS_DATABASE } from './data/cocktailsDb';
import { CocktailItem, NavTab } from './types';
import { CocktailShakerModal } from './components/CocktailShakerModal';
import { 
  SlidersHorizontal, 
  BookOpen, 
  Dices, 
  Heart, 
  Volume2, 
  VolumeX, 
  Search, 
  Share2, 
  ChevronRight, 
  X, 
  Wine, 
  Flame, 
  GlassWater, 
  Sparkles,
  Award,
  Check,
  RotateCcw,
  Users
} from 'lucide-react';

// =========================================================================
// 👑 LOGO VETTORIALE ALCHEMIS (Minimal Geometric Luxury)
// =========================================================================
export const AlchemisLogo: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = "" }) => (
  <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="alch_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="50%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="alch_gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="alch_accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="14" fill="url(#alch_bg)" stroke="url(#alch_accent)" strokeWidth="1.75" />
      <path d="M14 15L24 28L34 15H14Z" fill="url(#alch_accent)" fillOpacity="0.45" stroke="url(#alch_gold)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M24 28V37M18 37H30" stroke="url(#alch_gold)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="21" r="2.5" fill="#ffffff" />
      <path d="M24 8L25.2 11.2L28.4 12.4L25.2 13.6L24 16.8L22.8 13.6L19.6 12.4L22.8 11.2L24 8Z" fill="url(#alch_gold)" />
    </svg>
  </div>
);

// =========================================================================
// 🔊 MOTORE AUDIO WEBAUDIO APIS & HAPTIC
// =========================================================================
class SoundEngine {
  ctx: AudioContext | null = null;
  enabled: boolean = true;

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  click() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {}
  }

  success() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.22);
      });
    } catch {}
  }

  dice() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      for (let i = 0; i < 5; i++) {
        const time = this.ctx.currentTime + i * 0.045;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(280 + Math.random() * 200, time);
        gain.gain.setValueAtTime(0.05, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.035);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(time);
        osc.stop(time + 0.035);
      }
    } catch {}
  }
}

const sound = new SoundEngine();

export default function App() {
  const [activeNav, setActiveNav] = useState<NavTab>('filter');
  const [selectedSpirit, setSelectedSpirit] = useState<string>('Tutti');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('Tutti');
  const [selectedStrength, setSelectedStrength] = useState<string>('Tutti');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCocktail, setSelectedCocktail] = useState<CocktailItem | null>(null);
  const [servings, setServings] = useState<number>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(true);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const [favorites, setFavorites] = useState<CocktailItem[]>(() => {
    try {
      const saved = localStorage.getItem('alchemis_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    sound.enabled = isSoundOn;
  }, [isSoundOn]);

  useEffect(() => {
    try {
      localStorage.setItem('alchemis_favorites', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  }, []);

  const spiritList = useMemo(() => [
    'Tutti', 'Gin', 'Vodka', 'Rum', 'Tequila', 'Whisky', 'Campari/Aperol', 'Cognac/Brandy', 'Vino/Prosecco', 'Analcolico'
  ], []);

  const flavorList = useMemo(() => [
    'Tutti', 'Fresco', 'Agrumato', 'Dolce', 'Aromatico', 'Amaricante', 'Fruttato', 'Speziato', 'Secco', 'Erbe Alpine', 'Caffè/Cioccolato'
  ], []);

  const strengthList = useMemo(() => [
    'Tutti', 'Leggero', 'Medio', 'Forte', 'Analcolico'
  ], []);

  const categoryList = useMemo(() => [
    'Tutti', 'IBA Classici', 'Cult Anni 90', 'Aperitivi', 'Tiki Tropical', 'Mocktail'
  ], []);

  const matchSpirit = useCallback((cocktail: CocktailItem, spirit: string) => {
    if (spirit === 'Tutti') return true;
    const base = (cocktail.baseSpirit || '').toLowerCase();
    const cat = (cocktail.category || '').toLowerCase();
    const s = spirit.toLowerCase();
    if (s === 'campari/aperol') return base.includes('campari') || base.includes('aperol') || base.includes('vermouth');
    if (s === 'cognac/brandy') return base.includes('cognac') || base.includes('brandy');
    if (s === 'vino/prosecco') return base.includes('prosecco') || base.includes('champagne') || base.includes('vino') || base.includes('spumante');
    if (s === 'analcolico') return base.includes('analcolico') || cat.includes('mocktail') || (cocktail.strength || '').toLowerCase().includes('analcolico');
    if (s === 'whisky') return base.includes('whisky') || base.includes('bourbon') || base.includes('scotch') || base.includes('rye');
    return base.includes(s);
  }, []);

  const matchFlavor = useCallback((cocktail: CocktailItem, flavor: string) => {
    if (flavor === 'Tutti') return true;
    const flavors = (cocktail.flavors || []).map(f => f.toLowerCase());
    const f = flavor.toLowerCase();
    if (f === 'erbe alpine') return flavors.some(x => x.includes('erbe') || x.includes('alpino') || x.includes('balsamico') || x.includes('erbaceo'));
    if (f === 'caffè/cioccolato') return flavors.some(x => x.includes('caffè') || x.includes('cioccolato') || x.includes('cremoso') || x.includes('tostato'));
    return flavors.some(x => x.includes(f));
  }, []);

  const matchStrength = useCallback((cocktail: CocktailItem, strength: string) => {
    if (strength === 'Tutti') return true;
    const str = (cocktail.strength || '').toLowerCase();
    const s = strength.toLowerCase();
    if (s === 'analcolico') return str.includes('analcolico') || str.includes('zero');
    if (s === 'leggero') return str.includes('leggero') || str.includes('bassa');
    if (s === 'medio') return str.includes('medio') || str.includes('media');
    if (s === 'forte') return str.includes('forte') || str.includes('alta') || str.includes('high proof');
    return true;
  }, []);

  const matchCategory = useCallback((cocktail: CocktailItem, catFilter: string) => {
    if (catFilter === 'Tutti') return true;
    const cat = (cocktail.category || '').toLowerCase();
    const badge = (cocktail.badge || '').toLowerCase();
    if (catFilter === 'IBA Classici') return cat.includes('iba') || cat.includes('classico') || cat.includes('the unforgettables') || cat.includes('modern classic');
    if (catFilter === 'Cult Anni 90') return cat.includes('cult') || cat.includes('disco') || cat.includes('90') || cat.includes('00') || badge.includes('90') || badge.includes('cult');
    if (catFilter === 'Aperitivi') return cat.includes('aperitivo') || cat.includes('pre-dinner') || cat.includes('spritz');
    if (catFilter === 'Tiki Tropical') return cat.includes('tiki') || cat.includes('tropical') || cat.includes('rum');
    if (catFilter === 'Mocktail') return cat.includes('mocktail') || cat.includes('analcolico') || (cocktail.strength || '').toLowerCase().includes('analcolico');
    return true;
  }, []);

  const filteredCocktails = useMemo(() => {
    return COCKTAILS_DATABASE.filter(c => {
      if (!matchSpirit(c, selectedSpirit)) return false;
      if (!matchFlavor(c, selectedFlavor)) return false;
      if (!matchStrength(c, selectedStrength)) return false;
      if (!matchCategory(c, selectedCategory)) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = c.name.toLowerCase().includes(q);
        const matchIngr = (c.ingredients || []).some(i => i.name.toLowerCase().includes(q));
        const matchFlav = (c.flavors || []).some(f => f.toLowerCase().includes(q));
        const matchCat = (c.category || '').toLowerCase().includes(q);
        if (!matchName && !matchIngr && !matchFlav && !matchCat) return false;
      }
      return true;
    });
  }, [selectedSpirit, selectedFlavor, selectedStrength, selectedCategory, searchQuery, matchSpirit, matchFlavor, matchStrength, matchCategory]);

  const counts = useMemo(() => {
    const spirits: Record<string, number> = {};
    spiritList.forEach(sp => {
      spirits[sp] = COCKTAILS_DATABASE.filter(c => matchSpirit(c, sp)).length;
    });
    const flavors: Record<string, number> = {};
    flavorList.forEach(fl => {
      flavors[fl] = COCKTAILS_DATABASE.filter(c => matchFlavor(c, fl)).length;
    });
    const categories: Record<string, number> = {};
    categoryList.forEach(ct => {
      categories[ct] = COCKTAILS_DATABASE.filter(c => matchCategory(c, ct)).length;
    });
    return { spirits, flavors, categories };
  }, [spiritList, flavorList, categoryList, matchSpirit, matchFlavor, matchCategory]);

  const handleRandomize = () => {
    const pool = filteredCocktails.length > 0 ? filteredCocktails : COCKTAILS_DATABASE;
    if (pool.length === 0) return;
    setIsShuffling(true);
  };

  const toggleFavorite = (cocktail: CocktailItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sound.click();
    setFavorites(prev => {
      const exists = prev.some(f => f.id === cocktail.id);
      if (exists) {
        showToast(`Rimosso dai preferiti: ${cocktail.name}`);
        return prev.filter(f => f.id !== cocktail.id);
      } else {
        showToast(`Aggiunto ai preferiti: ${cocktail.name}`);
        return [...prev, cocktail];
      }
    });
  };

  const openDetail = (cocktail: CocktailItem) => {
    sound.click();
    setServings(1);
    setCheckedIngredients({});
    setSelectedCocktail(cocktail);
  };

  const handleShare = async (cocktail: CocktailItem) => {
    sound.click();
    const text = `🍸 ${cocktail.name} - ${cocktail.description}\nScoperto su Alchemis!`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: cocktail.name,
          text: text,
          url: window.location.href
        });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(text);
        showToast('Ricetta copiata negli appunti!');
      } catch {}
    }
  };

  const resetAllFilters = () => {
    setSelectedSpirit('Tutti');
    setSelectedFlavor('Tutti');
    setSelectedStrength('Tutti');
    setSelectedCategory('Tutti');
    setSearchQuery('');
    sound.click();
  };

  const hasActiveFilters = selectedSpirit !== 'Tutti' || selectedFlavor !== 'Tutti' || selectedStrength !== 'Tutti' || selectedCategory !== 'Tutti' || searchQuery.trim() !== '';

  const isCurrentFav = selectedCocktail && favorites.some(f => f.id === selectedCocktail.id);

  // Formatta l'importo degli ingredienti moltiplicato per le porzioni
  const formatIngredientAmount = (amount: number | string, unit?: string, mult: number = 1) => {
    if (typeof amount === 'number' && amount > 0) {
      const scaled = Math.round(amount * mult * 10) / 10;
      return `${scaled} ${unit || 'ml'}`;
    }
    if (typeof amount === 'string') {
      const numMatch = amount.match(/^([\d.]+)\s*(.*)$/);
      if (numMatch) {
        const val = parseFloat(numMatch[1]);
        if (!isNaN(val)) {
          const scaled = Math.round(val * mult * 10) / 10;
          const u = numMatch[2] || unit || '';
          return `${scaled} ${u}`.trim();
        }
      }
      return amount;
    }
    return 'Q.b.';
  };

  return (
    <div className="min-h-screen max-w-md w-full mx-auto relative flex flex-col justify-between bg-[#070913] text-slate-100 px-3.5 pt-[env(safe-area-inset-top,20px)] pb-[calc(env(safe-area-inset-bottom,16px)+80px)]">
      
      {/* ================================================================= */}
      {/* 🎩 1. HEADER ALCHEMIS CLEAN & MINIMAL                             */}
      {/* ================================================================= */}
      <header className="sticky top-[env(safe-area-inset-top,0px)] z-30 mb-3 flex items-center justify-between w-full p-2.5 sm:p-3 bg-slate-900/85 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-lg gap-2 mt-1">
        
        {/* SINISTRA: Logo Alchemis + Titolo */}
        <div 
          onClick={() => { setActiveNav('filter'); sound.click(); }}
          className="flex items-center gap-2.5 cursor-pointer active:scale-95 transition min-w-0 flex-1"
        >
          <AlchemisLogo size={36} />
          <div className="min-w-0 flex-1">
            <div className="text-base font-black tracking-wider text-white flex items-center gap-1.5 truncate">
              <span className="bg-gradient-to-r from-amber-300 via-purple-300 to-amber-200 bg-clip-text text-transparent">ALCHEMIS</span>
            </div>
            <div className="text-[10px] tracking-wide text-slate-400 font-semibold truncate">
              {COCKTAILS_DATABASE.length} Ricette
            </div>
          </div>
        </div>

        {/* DESTRA: Accesso Rapido Catalogo + Toggle Audio */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => { setActiveNav('catalog'); sound.click(); }}
            className={`h-8 px-3 rounded-xl border flex items-center gap-1.5 active:scale-95 transition text-xs font-semibold ${
              activeNav === 'catalog' 
                ? 'bg-purple-500/25 text-purple-200 border-purple-400/50 shadow-[0_0_12px_rgba(192,132,252,0.4)] font-bold' 
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
            }`}
            title="Vedi Catalogo Completo"
          >
            <BookOpen size={14} />
            <span className="text-xs font-bold">Catalogo</span>
            <span className="text-[10px] px-1.5 py-0.5 bg-white/10 rounded-md text-purple-300 font-extrabold ml-0.5">
              {COCKTAILS_DATABASE.length}
            </span>
          </button>

          <button
            onClick={() => { setIsSoundOn(!isSoundOn); sound.click(); }}
            className={`h-8 px-2.5 rounded-xl border flex items-center gap-1.5 active:scale-95 transition text-xs font-semibold ${
              isSoundOn 
                ? 'bg-amber-500/10 text-amber-300 border-amber-400/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]' 
                : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
            }`}
            title={isSoundOn ? "Disattiva Audio" : "Attiva Audio"}
          >
            {isSoundOn ? <Volume2 size={13} /> : <VolumeX size={13} />}
            <span className="text-[10px] font-bold">{isSoundOn ? 'FX' : 'OFF'}</span>
          </button>
        </div>
      </header>

      {/* ================================================================= */}
      {/* 📱 CONTENUTO PRINCIPALE                                           */}
      {/* ================================================================= */}
      <main className="flex-1 space-y-4">

        {/* TAB 1: FILTRI & SCOPRI */}
        {activeNav === 'filter' && (
          <div className="space-y-3.5">
            
            {/* 1. SELETTORE DISTILLATI & BASI */}
            <div className="space-y-1.5 w-full">
              <div className="flex justify-between items-center px-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Wine size={13} /> 1. Base / Distillato
                </span>
                {selectedSpirit !== 'Tutti' && (
                  <button 
                    onClick={() => { setSelectedSpirit('Tutti'); sound.click(); }}
                    className="text-[11px] text-amber-400 hover:text-amber-300 underline font-medium"
                  >
                    Azzera
                  </button>
                )}
              </div>
              
              <div className="flex overflow-x-auto no-scrollbar gap-2 py-0.5 w-full">
                {spiritList.map(spirit => {
                  const count = counts.spirits[spirit] || 0;
                  const isSel = selectedSpirit === spirit;
                  return (
                    <button
                      key={spirit}
                      onClick={() => { setSelectedSpirit(isSel ? 'Tutti' : spirit); sound.click(); }}
                      className={`min-h-[38px] px-3.5 py-1.5 rounded-2xl whitespace-nowrap flex-shrink-0 text-xs font-semibold flex items-center gap-2 transition active:scale-95 border ${
                        isSel 
                          ? 'bg-amber-500 text-slate-950 border-amber-300 font-bold shadow-md shadow-amber-500/20' 
                          : 'bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800'
                      }`}
                    >
                      <span>{spirit}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isSel ? 'bg-black/25 text-slate-950 font-bold' : 'bg-white/10 text-slate-400'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. SELETTORE GUSTI & NOTE AROMATICHE */}
            <div className="space-y-1.5 w-full">
              <div className="flex justify-between items-center px-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-purple-400 flex items-center gap-1.5">
                  <Sparkles size={13} /> 2. Gusto & Profilo
                </span>
                {selectedFlavor !== 'Tutti' && (
                  <button 
                    onClick={() => { setSelectedFlavor('Tutti'); sound.click(); }}
                    className="text-[11px] text-purple-400 hover:text-purple-300 underline font-medium"
                  >
                    Azzera
                  </button>
                )}
              </div>
              
              <div className="flex overflow-x-auto no-scrollbar gap-2 py-0.5 w-full">
                {flavorList.map(flavor => {
                  const count = counts.flavors[flavor] || 0;
                  const isSel = selectedFlavor === flavor;
                  return (
                    <button
                      key={flavor}
                      onClick={() => { setSelectedFlavor(isSel ? 'Tutti' : flavor); sound.click(); }}
                      className={`min-h-[38px] px-3.5 py-1.5 rounded-2xl whitespace-nowrap flex-shrink-0 text-xs font-semibold flex items-center gap-2 transition active:scale-95 border ${
                        isSel 
                          ? 'bg-purple-600 text-white border-purple-400 font-bold shadow-md shadow-purple-500/20' 
                          : 'bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800'
                      }`}
                    >
                      <span>{flavor}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isSel ? 'bg-white/20 text-white font-bold' : 'bg-white/10 text-slate-400'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. CATEGORIE SELEZIONATE (Minimal Quick Filter) */}
            <div className="space-y-1.5 w-full">
              <div className="flex justify-between items-center px-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-rose-400 flex items-center gap-1.5">
                  <Award size={13} /> 3. Stile & Selezione
                </span>
                {selectedCategory !== 'Tutti' && (
                  <button 
                    onClick={() => { setSelectedCategory('Tutti'); sound.click(); }}
                    className="text-[11px] text-rose-400 hover:text-rose-300 underline font-medium"
                  >
                    Azzera
                  </button>
                )}
              </div>
              
              <div className="flex overflow-x-auto no-scrollbar gap-2 py-0.5 w-full">
                {categoryList.map(cat => {
                  const count = counts.categories[cat] || 0;
                  const isSel = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(isSel ? 'Tutti' : cat); sound.click(); }}
                      className={`min-h-[38px] px-3 py-1.5 rounded-2xl whitespace-nowrap flex-shrink-0 text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 border ${
                        isSel 
                          ? 'bg-rose-600 text-white border-rose-400 font-bold shadow-sm' 
                          : 'bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isSel ? 'bg-white/20 text-white font-bold' : 'bg-white/10 text-slate-400'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. GRADAZIONE RAPIDA */}
            <div className="space-y-1.5 w-full">
              <div className="flex justify-between items-center px-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Flame size={13} /> 4. Gradazione
                </span>
                {selectedStrength !== 'Tutti' && (
                  <button 
                    onClick={() => { setSelectedStrength('Tutti'); sound.click(); }}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 underline font-medium"
                  >
                    Azzera
                  </button>
                )}
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {strengthList.map(str => {
                  const isSel = selectedStrength === str;
                  return (
                    <button
                      key={str}
                      onClick={() => { setSelectedStrength(isSel ? 'Tutti' : str); sound.click(); }}
                      className={`h-9 rounded-2xl text-xs font-semibold transition active:scale-95 border flex items-center justify-center ${
                        isSel 
                          ? 'bg-cyan-500 text-slate-950 border-cyan-300 font-bold shadow-sm shadow-cyan-500/20' 
                          : 'bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800'
                      }`}
                    >
                      {str}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. SCHEDA RIEPILOGO MINIMAL FORMULA */}
            <div className="glass-card rounded-3xl p-4 text-center space-y-3 border border-white/10 shadow-xl mt-2">
              <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <SlidersHorizontal size={14} color="#fbbf24" />
                <span>Formula Alchemica</span>
              </div>

              <div className="space-y-0.5">
                <div className="text-3xl font-black text-white">
                  <span className="bg-gradient-to-r from-amber-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                    {filteredCocktails.length}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 ml-2">
                    {filteredCocktails.length === 1 ? 'Cocktail trovato' : 'Cocktail trovati'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 max-w-xs mx-auto leading-relaxed">
                  {filteredCocktails.length > 0 
                    ? "Tocca MIX per un'estrazione casuale o consulta l'elenco nel Catalogo."
                    : "Nessun cocktail corrisponde alla combinazione scelta."
                  }
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 pt-0.5">
                {filteredCocktails.length > 0 && (
                  <button
                    onClick={() => { setActiveNav('catalog'); sound.click(); }}
                    className="h-9 px-4 rounded-2xl bg-purple-600/30 hover:bg-purple-600/40 text-purple-200 border border-purple-400/40 text-xs font-bold flex items-center gap-2 active:scale-95 transition shadow-sm"
                  >
                    <BookOpen size={14} />
                    <span>Catalogo ({filteredCocktails.length})</span>
                  </button>
                )}
                
                {hasActiveFilters && (
                  <button
                    onClick={resetAllFilters}
                    className="h-9 px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold active:scale-95 transition flex items-center gap-1.5"
                  >
                    <RotateCcw size={12} />
                    <span>Azzera</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: LISTA COMPLETA & CATALOGO RICERCA */}
        {activeNav === 'catalog' && (
          <div className="space-y-3">
            
            {/* BARRA DI RICERCA */}
            <div className="relative shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cerca per nome, ingrediente o aroma..."
                className="w-full h-10 px-4 pl-10 rounded-2xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/70 focus:ring-1 focus:ring-amber-400/50 transition shadow-inner font-medium"
              />
              <span className="absolute left-3.5 top-2.5 text-slate-400">
                <Search size={15} />
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-slate-300 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* INTESTAZIONE CATALOGO & STATO FILTRI */}
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                {hasActiveFilters
                  ? `Risultati Filtrati (${filteredCocktails.length})`
                  : `Catalogo Completo (${COCKTAILS_DATABASE.length})`}
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={resetAllFilters}
                  className="text-[11px] text-amber-400 hover:underline font-semibold"
                >
                  Mostra Tutti ({COCKTAILS_DATABASE.length})
                </button>
              )}
            </div>

            {/* LISTA DEI COCKTAIL */}
            {filteredCocktails.length > 0 ? (
              <div className="space-y-2">
                {filteredCocktails.map(item => {
                  const isFav = favorites.some(f => f.id === item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => openDetail(item)}
                      className="p-3 rounded-2xl glass-card glass-card-hover flex items-center justify-between cursor-pointer transition active:scale-98"
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <div 
                          className="w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-black text-sm shrink-0 shadow-md"
                          style={{ background: item.color || '#a855f7' }}
                        >
                          <Wine size={16} color="#0f172a" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-bold text-white text-xs truncate">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 truncate mt-0.5">
                            {item.category} • {item.baseSpirit}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={(e) => toggleFavorite(item, e)}
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 active:scale-90 transition"
                          title="Preferito"
                        >
                          <Heart 
                            size={15} 
                            className={isFav ? "fill-rose-500 text-rose-500" : "text-slate-400"} 
                          />
                        </button>
                        <ChevronRight size={15} className="text-amber-400" />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="glass-card rounded-2xl p-6 text-center space-y-3 border border-white/10">
                <AlchemisLogo size={40} className="mx-auto" />
                <h4 className="font-bold text-xs text-amber-300">Nessun cocktail trovato</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Nessuna ricetta corrisponde ai criteri attuali.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="h-9 px-4 rounded-2xl bg-amber-500 text-slate-950 font-bold text-xs uppercase active:scale-95 transition"
                >
                  Azzera Filtri
                </button>
              </div>
            )}

          </div>
        )}

        {/* TAB 3: PREFERITI */}
        {activeNav === 'favorites' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <Heart size={14} className="fill-rose-400 text-rose-400" /> Preferiti ({favorites.length})
              </h3>
              {favorites.length > 0 && (
                <button
                  onClick={() => { setFavorites([]); showToast('Preferiti svuotati'); }}
                  className="text-[11px] text-slate-400 hover:text-rose-300 underline font-medium"
                >
                  Svuota
                </button>
              )}
            </div>

            {favorites.length > 0 ? (
              <div className="space-y-2">
                {favorites.map(item => (
                  <div
                    key={item.id}
                    onClick={() => openDetail(item)}
                    className="p-3 rounded-2xl glass-card glass-card-hover flex items-center justify-between cursor-pointer transition active:scale-98"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <div 
                        className="w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-black text-sm shrink-0 shadow-md"
                        style={{ background: item.color || '#fb7185' }}
                      >
                        <Wine size={16} color="#0f172a" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-bold text-white text-xs truncate">
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate mt-0.5">
                          {item.baseSpirit} • {(item.flavors || []).slice(0, 2).join(', ')}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={(e) => toggleFavorite(item, e)}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-rose-400 active:scale-90 transition"
                      >
                        <Heart size={15} className="fill-rose-500 text-rose-500" />
                      </button>
                      <ChevronRight size={15} className="text-amber-400" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass-card rounded-3xl p-8 text-center space-y-3 border border-white/10">
                <div className="w-11 h-11 mx-auto rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <Heart size={20} className="text-rose-400" />
                </div>
                <h4 className="font-bold text-xs text-white">Nessun preferito salvato</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tocca il cuore su una scheda per salvarla tra i preferiti.
                </p>
                <button
                  onClick={() => setActiveNav('filter')}
                  className="h-9 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-purple-600 to-amber-500 text-white font-bold text-xs uppercase active:scale-95 shadow-md"
                >
                  Esplora Ricette
                </button>
              </div>
            )}
          </div>
        )}

      </main>

      {/* ================================================================= */}
      {/* 📱 2. BOTTOM NAVIGATION BAR SIMMETRICA A 3 ELEMENTI               */}
      {/* ================================================================= */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto backdrop-blur-xl bg-slate-950/95 border-t border-white/10 px-4 pt-1.5 pb-[env(safe-area-inset-bottom,16px)] flex items-center justify-between shadow-2xl">
        
        {/* 1. FILTRI (SINISTRA) */}
        <button
          onClick={() => { setActiveNav('filter'); sound.click(); }}
          className={`relative flex-1 flex flex-col items-center justify-center h-14 rounded-2xl active:scale-95 transition ${
            activeNav === 'filter' 
              ? 'text-amber-400 font-bold drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]' 
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <SlidersHorizontal size={20} />
          <span className="text-[11px] mt-1 font-semibold">Filtri</span>
          {activeNav === 'filter' && (
            <div className="absolute bottom-0 w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full shadow-[0_0_12px_#fbbf24] animate-pulse" />
          )}
        </button>

        {/* 🍸 2. PULSANTE CENTRALE ELEVATO MIX CON SHAKER */}
        <div className="relative -top-5 flex flex-col items-center px-4 shrink-0">
          <button
            onClick={() => { handleRandomize(); sound.dice(); }}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-purple-600 to-amber-400 p-[2.5px] shadow-[0_0_22px_rgba(245,158,11,0.55)] border border-amber-300/40 active:scale-90 transition transform"
            title="Consigliami un cocktail (Shakerata)"
          >
            <div className="w-full h-full rounded-full bg-slate-950/80 flex items-center justify-center text-white shadow-inner">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="2" width="4" height="2.5" rx="1" fill="#fde047" />
                <path d="M8 5C8 4.2 9 3.5 12 3.5C15 3.5 16 4.2 16 5L17.5 9.5H6.5L8 5Z" fill="#fbbf24" stroke="#fef08a" strokeWidth="0.75" />
                <path d="M6.5 9.5L8 21C8.2 21.6 9.5 22 12 22C14.5 22 15.8 21.6 16 21L17.5 9.5H6.5Z" fill="#f59e0b" stroke="#fef08a" strokeWidth="0.75" />
                <line x1="10" y1="10" x2="10.8" y2="20.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
                <line x1="6.5" y1="9.5" x2="17.5" y2="9.5" stroke="#ffffff" strokeWidth="1" />
              </svg>
            </div>
          </button>
          <span className="text-[11px] font-black tracking-wider text-amber-400 mt-1 uppercase">
            Mix
          </span>
        </div>

        {/* 3. PREFERITI (DESTRA) */}
        <button
          onClick={() => { setActiveNav('favorites'); sound.click(); }}
          className={`relative flex-1 flex flex-col items-center justify-center h-14 rounded-2xl active:scale-95 transition ${
            activeNav === 'favorites' 
              ? 'text-rose-400 font-bold drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]' 
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="relative">
            <Heart 
              size={20} 
              className={favorites.length > 0 ? "fill-rose-500 text-rose-500" : "text-slate-400"} 
            />
            {favorites.length > 0 && (
              <span className="absolute -top-1.5 -right-2.5 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                {favorites.length}
              </span>
            )}
          </div>
          <span className="text-[11px] mt-1 font-semibold">Preferiti</span>
          {activeNav === 'favorites' && (
            <div className="absolute bottom-0 w-12 h-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full shadow-[0_0_12px_#fb7185] animate-pulse" />
          )}
        </button>

      </nav>

      {/* ================================================================= */}
      {/* 🪟 3. BOTTOM SHEET / MODAL DETTAGLIO COCKTAIL                     */}
      {/* ================================================================= */}
      {selectedCocktail && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end justify-center p-0">
          <div 
            className="w-full max-w-md max-h-[90vh] overflow-y-auto glass-sheet rounded-t-3xl p-5 space-y-4 shadow-2xl border-t border-white/15 pb-[calc(env(safe-area-inset-bottom,16px)+24px)]"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* BARRA SUPERIORE MODALE */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div 
                  className="w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-black text-sm shadow-md"
                  style={{ background: selectedCocktail.color || '#f59e0b' }}
                >
                  <Wine size={18} color="#0f172a" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                    {selectedCocktail.category}
                  </span>
                  <h3 className="text-base font-extrabold text-white">
                    {selectedCocktail.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => toggleFavorite(selectedCocktail)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-rose-400 active:scale-90 transition"
                  title="Preferito"
                >
                  <Heart 
                    size={18} 
                    className={isCurrentFav ? "fill-rose-500 text-rose-500" : "text-slate-300"} 
                  />
                </button>
                <button
                  onClick={() => handleShare(selectedCocktail)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 active:scale-90 transition"
                  title="Condividi"
                >
                  <Share2 size={18} />
                </button>
                <button
                  onClick={() => setSelectedCocktail(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 active:scale-90 transition"
                  title="Chiudi"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* BADGES METADATI */}
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <Wine size={12} /> {selectedCocktail.baseSpirit}
              </span>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                <Flame size={12} /> {selectedCocktail.strength}
              </span>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center gap-1">
                <GlassWater size={12} /> {selectedCocktail.glass}
              </span>
              {selectedCocktail.badge && (
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <Award size={12} /> {selectedCocktail.badge}
                </span>
              )}
            </div>

            {/* DESCRIZIONE INTRODUTTIVA */}
            <p className="text-xs text-slate-300 leading-relaxed bg-black/25 p-3 rounded-2xl border border-white/5">
              {selectedCocktail.description}
            </p>

            {/* INGREDIENTI DOSATI CON CALCOLATORE PORZIONI (MINIMAL STEPPER) */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <span>🧪</span> Ingredienti
                </h4>
                
                {/* CALCOLATORE DOSI COMPATTO: 1x / 2x / 3x / 4x */}
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                  <Users size={12} className="text-slate-400 ml-1 mr-0.5" />
                  {[1, 2, 3, 4].map(num => (
                    <button
                      key={num}
                      onClick={() => { setServings(num); sound.click(); }}
                      className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition ${
                        servings === num 
                          ? 'bg-amber-400 text-black shadow-sm' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {num}x
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                {(selectedCocktail.ingredients || []).map((ing, idx) => {
                  const isChecked = !!checkedIngredients[`${selectedCocktail.id}-${idx}`];
                  return (
                    <div 
                      key={idx} 
                      onClick={() => {
                        sound.click();
                        setCheckedIngredients(prev => ({
                          ...prev,
                          [`${selectedCocktail.id}-${idx}`]: !prev[`${selectedCocktail.id}-${idx}`]
                        }));
                      }}
                      className={`flex justify-between items-center text-xs p-2 rounded-xl border cursor-pointer transition select-none ${
                        isChecked 
                          ? 'bg-amber-500/10 border-amber-500/30 text-slate-400' 
                          : 'bg-white/5 border-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0 pr-2">
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition ${
                          isChecked ? 'bg-amber-400 border-amber-400 text-black' : 'border-white/20 bg-black/20'
                        }`}>
                          {isChecked && <Check size={11} strokeWidth={3} />}
                        </div>
                        <span className={`font-medium truncate ${isChecked ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                          {ing.name}
                        </span>
                      </div>
                      <span className={`font-bold shrink-0 ${isChecked ? 'text-amber-400/60' : 'text-amber-300'}`}>
                        {formatIngredientAmount(ing.amount, ing.unit, servings)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PROCEDIMENTO & PREPARAZIONE */}
            {selectedCocktail.recipe && selectedCocktail.recipe.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                  <span>⚡</span> Preparazione
                </h4>
                <div className="space-y-1.5">
                  {selectedCocktail.recipe.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-300 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CONSIGLI DEL BARTENDER & CURIOSITÀ */}
            {(selectedCocktail.tips || selectedCocktail.story) && (
              <div className="space-y-2 pt-1">
                {selectedCocktail.tips && (
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-xs space-y-1">
                    <div className="font-bold text-amber-300 flex items-center gap-1.5">
                      <span>💡</span> Segreto del Bartender:
                    </div>
                    <div className="text-slate-300 leading-relaxed">
                      {selectedCocktail.tips}
                    </div>
                  </div>
                )}
                {selectedCocktail.story && (
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/25 text-xs space-y-1">
                    <div className="font-bold text-purple-300 flex items-center gap-1.5">
                      <span>📜</span> Curiosità & Storia:
                    </div>
                    <div className="text-slate-300 leading-relaxed">
                      {selectedCocktail.story}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* PULSANTE CHIUDI */}
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => setSelectedCocktail(null)}
                className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider active:scale-98 transition"
              >
                Chiudi Scheda
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* 🍸 OVERLAY SHAKERATA CASUALE (Cocktail Shaker Animation)          */}
      {/* ================================================================= */}
      <CocktailShakerModal
        isOpen={isShuffling}
        pool={filteredCocktails.length > 0 ? filteredCocktails : COCKTAILS_DATABASE}
        isSoundOn={isSoundOn}
        onComplete={(cocktail) => {
          setIsShuffling(false);
          setServings(1);
          setCheckedIngredients({});
          setSelectedCocktail(cocktail);
        }}
      />

      {/* ================================================================= */}
      {/* 🔔 TOAST NOTIFICHE TOUCH                                          */}
      {/* ================================================================= */}
      {toastMsg && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-slate-900/90 text-amber-300 border border-amber-500/30 text-xs font-semibold shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150">
          {toastMsg}
        </div>
      )}

    </div>
  );
}
