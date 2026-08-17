import React from 'react';
import { GlassWater } from 'lucide-react';

interface GlassIconProps {
  type: string;
  className?: string;
}

export const GlassIcon: React.FC<GlassIconProps> = ({ type, className = 'w-6 h-6' }) => {
  switch (type) {
    case 'Coupe':
    case 'Nick & Nora':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12a6 6 0 0 1-6 6 6 6 0 0 1-6-6Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 9v9" />
          <path d="M8 21h8" />
          <path d="M4 3h16" />
        </svg>
      );
    case 'Martini':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 14 3 4h18L12 14Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 14v7" />
          <path d="M8 21h8" />
        </svg>
      );
    case 'Old Fashioned':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M5 8h14" />
          <path d="M8 12h8" />
        </svg>
      );
    case 'Highball':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12v17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M6 7h12" />
          <circle cx="10" cy="11" r="1" fill="currentColor" />
          <circle cx="14" cy="15" r="1" fill="currentColor" />
        </svg>
      );
    case 'Hurricane':
    case 'Tiki Mug':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3h10s-2 5 0 9 2 9-2 9H9c-4 0-2-5 0-9s0-9 0-9Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M7 3v2" />
          <path d="M17 3v2" />
        </svg>
      );
    case 'Flute':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3h6v9a3 3 0 0 1-6 0V3Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 12v8" />
          <path d="M9 20h6" />
        </svg>
      );
    case 'Copper Mug':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="5" width="12" height="15" rx="2" fill="currentColor" fillOpacity="0.15" />
          <path d="M17 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        </svg>
      );
    default:
      return <GlassWater className={className} />;
  }
};
