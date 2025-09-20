import React from 'react';

interface OrnamentProps {
  className?: string;
  type?: 'flourish' | 'divider' | 'corner';
}

const Ornament: React.FC<OrnamentProps> = ({ className = '', type = 'flourish' }) => {
  const ornaments = {
    flourish: (
      <svg width="100" height="30" viewBox="0 0 100 30" className={`text-amber-700 ${className}`}>
        <path d="M10 15 Q25 5, 40 15 Q55 25, 70 15 Q85 5, 90 15" stroke="currentColor" fill="none" strokeWidth="1.5"/>
        <circle cx="50" cy="15" r="3" fill="currentColor"/>
        <circle cx="25" cy="15" r="1.5" fill="currentColor"/>
        <circle cx="75" cy="15" r="1.5" fill="currentColor"/>
      </svg>
    ),
    divider: (
      <svg width="200" height="20" viewBox="0 0 200 20" className={`text-amber-600 ${className}`}>
        <path d="M20 10 Q50 0, 80 10 Q110 20, 140 10 Q170 0, 180 10" stroke="currentColor" fill="none" strokeWidth="1"/>
        <path d="M10 10 Q40 18, 70 10 Q100 2, 130 10 Q160 18, 190 10" stroke="currentColor" fill="none" strokeWidth="0.5"/>
      </svg>
    ),
    corner: (
      <svg width="40" height="40" viewBox="0 0 40 40" className={`text-amber-600 ${className}`}>
        <path d="M5 5 Q20 5, 35 20 Q35 35, 20 35" stroke="currentColor" fill="none" strokeWidth="1"/>
        <path d="M8 8 Q20 8, 32 20 Q32 32, 20 32" stroke="currentColor" fill="none" strokeWidth="0.5"/>
      </svg>
    )
  };

  return ornaments[type];
};

export default Ornament;