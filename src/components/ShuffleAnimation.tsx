import React, { useEffect, useState } from 'react';
import { COCKTAILS_DATABASE } from '../data/cocktails';
import { soundFx } from '../utils/audio';
import { Sparkles, Dice5 } from 'lucide-react';

interface ShuffleAnimationProps {
  onComplete?: () => void;
}

export const ShuffleAnimation: React.FC<ShuffleAnimationProps> = () => {
  const [currentName, setCurrentName] = useState('Paper Plane');
  const [category, setCategory] = useState('Modern Classic');

  useEffect(() => {
    let count = 0;
    const totalShuffles = 16;
    const intervalTime = 50; // ms

    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * COCKTAILS_DATABASE.length);
      const item = COCKTAILS_DATABASE[randomIdx];
      setCurrentName(item.name);
      setCategory(item.category);
      soundFx.playTick();

      count++;
      if (count >= totalShuffles) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto px-4 my-6">
      <div className="glass-panel-glow p-8 rounded-3xl text-center border border-amber-500/30 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden">
        {/* Glow ambient circle */}
        <div className="absolute inset-0 bg-amber-500/10 blur-2xl rounded-full" />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/40 animate-spin">
            <Dice5 className="w-6 h-6 text-amber-400" />
          </div>

          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            {category}
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-syne text-white tracking-tight shuffle-blur">
            {currentName}
          </h2>

          <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            Mescolando gli ingredienti...
          </p>
        </div>
      </div>
    </div>
  );
};
