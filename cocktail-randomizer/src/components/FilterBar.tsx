import React from 'react';
import { FilterCategory } from '../types';
import { Sparkles, Flame, Citrus, Wine, ShieldCheck } from 'lucide-react';

interface FilterBarProps {
  activeFilter: FilterCategory;
  onSelectFilter: (filter: FilterCategory) => void;
  availableCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onSelectFilter, availableCount }) => {
  const filters: Array<{ id: FilterCategory; label: string; icon: React.ReactNode }> = [
    { id: 'all', label: 'Tutti i cocktail', icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" /> },
    { id: 'amaro', label: 'Amari & Erbe', icon: <Flame className="w-3.5 h-3.5 text-red-400" /> },
    { id: 'agrumato', label: 'Agrumati & Freschi', icon: <Citrus className="w-3.5 h-3.5 text-yellow-400" /> },
    { id: 'forte', label: 'Secchi & Forti', icon: <Wine className="w-3.5 h-3.5 text-amber-500" /> },
    { id: 'mocktail', label: 'Analcolici (Mocktail)', icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> },
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 py-2">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs">
        {filters.map((f) => {
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => onSelectFilter(f.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full whitespace-nowrap font-medium transition-all duration-200 border ${
                isActive
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm shadow-amber-500/10'
                  : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-slate-200'
              }`}
            >
              {f.icon}
              <span>{f.label}</span>
            </button>
          );
        })}
      </div>
      <div className="text-[11px] text-slate-400 text-center mt-1">
        Pool di estrazione: <span className="font-semibold text-amber-400">{availableCount} cocktail</span>
      </div>
    </div>
  );
};
