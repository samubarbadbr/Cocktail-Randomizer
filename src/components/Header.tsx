import React from 'react';
import { Volume2, VolumeX, History, Heart, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface HeaderProps {
  historyCount: number;
  favoritesCount: number;
  onOpenHistory: () => void;
  onOpenFavorites: () => void;
  isAudioEnabled: boolean;
  onToggleAudio: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  historyCount,
  favoritesCount,
  onOpenHistory,
  onOpenFavorites,
  isAudioEnabled,
  onToggleAudio,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 px-4 pb-3 pt-[max(env(safe-area-inset-top),3.25rem)] sm:px-6">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-black font-extrabold shadow-lg shadow-amber-500/20">
            <Sparkles className="w-5 h-5 text-black animate-pulse" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white leading-none font-syne">
              COCKTAIL <span className="text-amber-400">RANDOMIZER</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
              Cosa beviamo stasera?
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          {/* Audio Toggle */}
          <button
            onClick={onToggleAudio}
            aria-label={isAudioEnabled ? 'Disattiva audio' : 'Attiva audio'}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 transition text-slate-300 hover:text-amber-400 border border-white/5"
            title={isAudioEnabled ? 'Audio Attivo' : 'Audio Disattivato'}
          >
            {isAudioEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Favorites Button */}
          <button
            onClick={onOpenFavorites}
            aria-label="Mostra preferiti"
            className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 transition text-slate-300 hover:text-rose-400 border border-white/5"
            title="Preferiti"
          >
            <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* History Button */}
          <button
            onClick={onOpenHistory}
            aria-label="Mostra cronologia"
            className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 transition text-slate-300 hover:text-amber-400 border border-white/5"
            title="Cronologia sessione"
          >
            <History className="w-4 h-4" />
            {historyCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                {historyCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
