import React from 'react';
import { Cocktail } from '../types';
import { X, History, Trash2, ChevronRight, Sparkles } from 'lucide-react';
import { GlassIcon } from './GlassIcon';

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  history: Cocktail[];
  onSelectCocktail: (cocktail: Cocktail) => void;
  onClearHistory: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({
  isOpen,
  onClose,
  history,
  onSelectCocktail,
  onClearHistory,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-sm h-full bg-[#121218] border-l border-white/10 p-5 flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <History className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold font-syne text-base text-white">Cronologia Serata</h3>
                <p className="text-[11px] text-slate-400">Cocktail estrassi durante la sessione</p>
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

          {/* List of items */}
          {history.length === 0 ? (
            <div className="text-center py-12 px-4">
              <Sparkles className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-300">Nessuna estrazione ancora</p>
              <p className="text-xs text-slate-400 mt-1">
                Premi "Cosa beviamo stasera?" per iniziare la serata!
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {history.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => {
                    onSelectCocktail(item);
                    onClose();
                  }}
                  className="group flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-amber-500/10 border border-white/5 hover:border-amber-500/30 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-black/40 text-amber-400">
                      <GlassIcon type={item.glass} className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-slate-400">{item.category}</span>
                        <span className="text-[10px] font-mono text-amber-400/80">• {item.glass}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {history.length > 0 && (
          <div className="pt-4 border-t border-white/10 mt-6">
            <button
              onClick={onClearHistory}
              className="w-full py-2.5 px-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold text-xs transition flex items-center justify-center gap-2 border border-red-500/20"
            >
              <Trash2 className="w-4 h-4" />
              Svuota cronologia
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
