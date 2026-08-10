import React from 'react';
import { Cocktail } from '../types';
import { X, Heart, ChevronRight, Sparkles } from 'lucide-react';
import { GlassIcon } from './GlassIcon';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Cocktail[];
  onSelectCocktail: (cocktail: Cocktail) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  onSelectCocktail,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-sm max-h-[85vh] bg-[#121218] border border-white/10 rounded-3xl p-5 flex flex-col justify-between shadow-2xl overflow-y-auto">
        <div>
          {/* Top Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400">
                <Heart className="w-5 h-5 fill-rose-500" />
              </div>
              <div>
                <h3 className="font-bold font-syne text-base text-white">Cocktail Preferiti</h3>
                <p className="text-[11px] text-slate-400">{favorites.length} salvati nella tua lista</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition"
              aria-label="Chiudi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Favorites List */}
          {favorites.length === 0 ? (
            <div className="text-center py-10 px-4">
              <Sparkles className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-300">Nessun preferito salvato</p>
              <p className="text-xs text-slate-400 mt-1">
                Tocca il cuore su un cocktail per aggiungerlo alla tua lista personale!
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectCocktail(item);
                    onClose();
                  }}
                  className="group flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-rose-500/10 border border-white/5 hover:border-rose-500/30 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-black/40 text-amber-400">
                      <GlassIcon type={item.glass} className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-rose-300 transition">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-slate-400">{item.category}</span>
                        <span className="text-[10px] text-amber-400 font-mono">• {item.glass}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 mt-6 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
