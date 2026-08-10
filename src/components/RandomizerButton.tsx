import React from 'react';
import { Dice5, Sparkles, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

interface RandomizerButtonProps {
  onGenerate: () => void;
  isShuffling: boolean;
  hasResult: boolean;
}

export const RandomizerButton: React.FC<RandomizerButtonProps> = ({
  onGenerate,
  isShuffling,
  hasResult,
}) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 py-3 flex flex-col items-center">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        onClick={onGenerate}
        disabled={isShuffling}
        className={`relative w-full py-4 sm:py-5 px-6 rounded-2xl font-bold font-syne text-lg sm:text-xl tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden shadow-2xl border ${
          isShuffling
            ? 'bg-amber-600 text-black border-amber-400 amber-glow cursor-wait'
            : hasResult
            ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black border-amber-300 shadow-amber-500/30 hover:shadow-amber-500/50'
            : 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black border-amber-300 amber-glow hover:brightness-110'
        }`}
      >
        {/* Animated Background Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />

        {isShuffling ? (
          <>
            <RefreshCw className="w-6 h-6 animate-spin text-black" />
            <span className="tracking-widest animate-pulse">ESTRAZIONE IN CORSO...</span>
          </>
        ) : (
          <>
            <Dice5 className="w-6 h-6 text-black animate-bounce" />
            <span>{hasResult ? 'GENERA UN ALTRO COCKTAIL' : 'COSA BEVIAMO STASERA?'}</span>
            <Sparkles className="w-5 h-5 text-black/80" />
          </>
        )}
      </motion.button>
    </div>
  );
};
