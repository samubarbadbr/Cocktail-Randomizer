import React, { useState } from 'react';
import { Cocktail } from '../types';
import { GlassIcon } from './GlassIcon';
import { Heart, Share2, Sparkles, BookOpen, Check, Layers, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

interface CocktailCardProps {
  cocktail: Cocktail;
  isFavorite: boolean;
  onToggleFavorite: (cocktail: Cocktail) => void;
  onReshuffle: () => void;
}

export const CocktailCard: React.FC<CocktailCardProps> = ({
  cocktail,
  isFavorite,
  onToggleFavorite,
  onReshuffle,
}) => {
  const [copied, setCopied] = useState(false);
  const [showStory, setShowStory] = useState(false);

  const handleShare = async () => {
    const text = `🍹 *${cocktail.name}* (${cocktail.category})\n` +
      `"Cosa beviamo stasera? ${cocktail.name}!"\n\n` +
      `🍸 *Bicchiere:* ${cocktail.glass}\n` +
      `🍋 *Garnish:* ${cocktail.garnish}\n\n` +
      `📋 *Ingredienti:*\n` +
      cocktail.ingredients.map(i => `• ${i.name}: ${i.amount}`).join('\n') +
      `\n\nGenerato con Cocktail Randomizer! 🚀`;

    if (typeof navigator !== 'undefined' && 'share' in navigator && navigator.share) {
      try {
        await navigator.share({
          title: cocktail.name,
          text: text,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // ignore
    }
  };

  // Color badge selector
  const getBadgeBg = (accent?: string) => {
    switch (accent) {
      case 'emerald': return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'purple': return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      case 'red': return 'bg-red-500/15 text-red-300 border-red-500/30';
      case 'rose': return 'bg-rose-500/15 text-rose-300 border-rose-500/30';
      case 'cyan': return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
      default: return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full max-w-md mx-auto px-4 my-3"
    >
      <div className="glass-card rounded-3xl p-6 sm:p-7 border border-amber-500/20 shadow-2xl relative overflow-hidden">
        {/* Background Subtle Color Glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl -z-10" />

        {/* Top Badges & Actions */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getBadgeBg(cocktail.colorAccent)}`}>
              {cocktail.category}
            </span>
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              ABV {cocktail.abv}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onToggleFavorite(cocktail)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 active:scale-90 transition border border-white/10 text-slate-300 hover:text-rose-400"
              title={isFavorite ? 'Rimuovi dai preferiti' : 'Salva nei preferiti'}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'text-rose-500 fill-rose-500' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 active:scale-90 transition border border-white/10 text-slate-300 hover:text-amber-400"
              title="Condividi cocktail"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Main Title Centerpiece */}
        <div className="text-center my-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-syne tracking-tight text-white drop-shadow-md mb-2">
            {cocktail.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xs mx-auto">
            {cocktail.description}
          </p>
        </div>

        {/* Flavor Profile Tags */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 my-4">
          {cocktail.flavor.map((f, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Ingredients Section */}
        <div className="bg-black/30 rounded-2xl p-4 sm:p-5 border border-white/10 my-5 backdrop-blur-md">
          <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 font-syne">
              <Layers className="w-4 h-4" />
              Ingredienti & Dosi
            </span>
            <span className="text-[10px] text-slate-400">Ricetta standard</span>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm">
            {cocktail.ingredients.map((ing, idx) => (
              <li key={idx} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                <span className="font-medium text-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {ing.name}
                </span>
                <span className="font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20 font-mono text-xs">
                  {ing.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Glassware & Garnish Info */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-white/5 rounded-2xl p-3 border border-white/5 flex items-center gap-2.5 min-w-0">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <GlassIcon type={cocktail.glass} className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[10px] uppercase tracking-wider text-slate-400">Bicchiere</span>
              <span className="text-xs font-semibold text-slate-200 block truncate">{cocktail.glass}</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-3 border border-white/5 flex items-center gap-2.5 min-w-0">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[10px] uppercase tracking-wider text-slate-400">Garnish</span>
              <span className="text-xs font-semibold text-slate-200 block leading-snug break-words" title={cocktail.garnish}>
                {cocktail.garnish}
              </span>
            </div>
          </div>
        </div>

        {/* Story / Curiosity Accordion */}
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 mb-5">
          <button
            onClick={() => setShowStory(!showStory)}
            className="w-full px-4 py-3 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white transition text-left"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              Curiosità & Storia
            </span>
            <span className="text-amber-400 text-xs font-bold">{showStory ? 'Nascondi' : 'Leggi'}</span>
          </button>
          {showStory && (
            <div className="px-4 pb-4 pt-1 text-xs text-slate-300 border-t border-white/5 leading-relaxed bg-black/20">
              {cocktail.story}
            </div>
          )}
        </div>

        {/* Action Bar Bottom */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/10">
          <button
            onClick={onReshuffle}
            className="w-full py-3 px-4 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 active:scale-95 transition text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-amber-500/30 shadow-md"
          >
            <RefreshCw className="w-4 h-4" />
            Genera di nuovo
          </button>
        </div>
      </div>
    </motion.div>
  );
};
