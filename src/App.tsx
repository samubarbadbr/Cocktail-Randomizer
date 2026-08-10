import { useState, useEffect, useMemo, useCallback } from 'react';
import { COCKTAILS_DATABASE } from './data/cocktails';
import { Cocktail, FilterCategory } from './types';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { RandomizerButton } from './components/RandomizerButton';
import { CocktailCard } from './components/CocktailCard';
import { ShuffleAnimation } from './components/ShuffleAnimation';
import { HistoryDrawer } from './components/HistoryDrawer';
import { FavoritesModal } from './components/FavoritesModal';
import { soundFx } from './utils/audio';
import { triggerHaptic } from './utils/haptics';
import { Sparkles, GlassWater, Dices, Flame, Info } from 'lucide-react';

export default function App() {
  const [currentCocktail, setCurrentCocktail] = useState<Cocktail | null>(null);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [history, setHistory] = useState<Cocktail[]>([]);
  const [favorites, setFavorites] = useState<Cocktail[]>(() => {
    try {
      const saved = localStorage.getItem('cocktail_randomizer_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);
  const [lastExtractedId, setLastExtractedId] = useState<string | null>(null);

  // Sync audio setting with SoundManager
  useEffect(() => {
    soundFx.enabled = isAudioEnabled;
  }, [isAudioEnabled]);

  // Persist favorites
  useEffect(() => {
    try {
      localStorage.setItem('cocktail_randomizer_favs', JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  // Filter available pool
  const filteredPool = useMemo(() => {
    return COCKTAILS_DATABASE.filter((item) => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'amaro') {
        return item.flavor.some((f) => f.includes('Amaro') || f.includes('Erbaceo'));
      }
      if (activeFilter === 'agrumato') {
        return item.flavor.some((f) => f.includes('Agrumato') || f.includes('Fresco'));
      }
      if (activeFilter === 'forte') {
        return item.abv === 'Elevato' || item.abv === 'Molto Elevato';
      }
      if (activeFilter === 'mocktail') {
        return item.category === 'Mocktail' || item.abv === 'Analcolico';
      }
      return true;
    });
  }, [activeFilter]);

  // Main generation logic with anti-repetition rule
  const handleGenerate = useCallback(() => {
    if (filteredPool.length === 0 || isShuffling) return;

    triggerHaptic([15, 20]);
    setIsShuffling(true);

    // Filter out last extracted item if pool > 1
    let poolToUse = filteredPool;
    if (poolToUse.length > 1 && lastExtractedId) {
      poolToUse = poolToUse.filter((c) => c.id !== lastExtractedId);
    }

    const randomIndex = Math.floor(Math.random() * poolToUse.length);
    const chosenCocktail = poolToUse[randomIndex];

    // Suspense shuffle timer
    setTimeout(() => {
      setCurrentCocktail(chosenCocktail);
      setLastExtractedId(chosenCocktail.id);

      // Add to history (limit 20)
      setHistory((prev) => [chosenCocktail, ...prev.filter((h) => h.id !== chosenCocktail.id)].slice(0, 20));

      setIsShuffling(false);
      soundFx.playRevealChime();
      triggerHaptic([30, 40, 50]);
    }, 850);
  }, [filteredPool, isShuffling, lastExtractedId]);

  // Toggle favorite
  const handleToggleFavorite = useCallback((cocktail: Cocktail) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === cocktail.id);
      if (exists) {
        return prev.filter((item) => item.id !== cocktail.id);
      } else {
        triggerHaptic(20);
        return [cocktail, ...prev];
      }
    });
  }, []);

  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col justify-between bg-[#0b0b0e] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* App Header */}
      <Header
        historyCount={history.length}
        favoritesCount={favorites.length}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        isAudioEnabled={isAudioEnabled}
        onToggleAudio={() => setIsAudioEnabled(!isAudioEnabled)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-md mx-auto flex flex-col justify-between py-2 px-3 sm:px-4">
        {/* Filter Bar */}
        <FilterBar
          activeFilter={activeFilter}
          onSelectFilter={(f) => setActiveFilter(f)}
          availableCount={filteredPool.length}
        />

        {/* Center Display Area */}
        <div className="flex-1 flex flex-col justify-center items-center py-2 my-auto">
          {isShuffling ? (
            <ShuffleAnimation />
          ) : currentCocktail ? (
            <CocktailCard
              cocktail={currentCocktail}
              isFavorite={favorites.some((f) => f.id === currentCocktail.id)}
              onToggleFavorite={handleToggleFavorite}
              onReshuffle={handleGenerate}
            />
          ) : (
            /* Initial Hero Landing Banner before first click */
            <div className="w-full max-w-md mx-auto px-5 py-6 text-center flex flex-col items-center my-auto">
              {/* Glass / Cocktail Icon with Glowing Ring */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse-slow" />
                <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-b from-amber-500/20 to-black/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-2xl backdrop-blur-md">
                  <GlassWater className="w-10 h-10" />
                </div>
              </div>

              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-2.5">
                Nightlife Generator
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-syne text-white tracking-tight leading-tight mb-2">
                Cosa beviamo stasera?
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed max-w-xs mb-5">
                Tocca il grande pulsante qui sotto per estrarre il cocktail perfetto per la tua serata tra amici.
              </p>

              {/* Quick stats highlight */}
              <div className="grid grid-cols-3 gap-2.5 w-full max-w-xs bg-white/5 p-2.5 rounded-2xl border border-white/5 text-center">
                <div>
                  <span className="block text-sm font-extrabold font-syne text-amber-400">{COCKTAILS_DATABASE.length}</span>
                  <span className="text-[10px] text-slate-400">Cocktail</span>
                </div>
                <div>
                  <span className="block text-sm font-extrabold font-syne text-amber-400">100%</span>
                  <span className="text-[10px] text-slate-400">Casuale</span>
                </div>
                <div>
                  <span className="block text-sm font-extrabold font-syne text-amber-400">0</span>
                  <span className="text-[10px] text-slate-400">Attesa</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Primary CTA Button Fixed in thumb reach zone */}
        <div className="sticky bottom-0 z-30 pt-1">
          <RandomizerButton
            onGenerate={handleGenerate}
            isShuffling={isShuffling}
            hasResult={!!currentCocktail}
          />
        </div>
      </main>

      {/* History Slide-over Drawer */}
      <HistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelectCocktail={(item) => setCurrentCocktail(item)}
        onClearHistory={() => setHistory([])}
      />

      {/* Favorites Modal */}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onSelectCocktail={(item) => setCurrentCocktail(item)}
      />
    </div>
  );
}
