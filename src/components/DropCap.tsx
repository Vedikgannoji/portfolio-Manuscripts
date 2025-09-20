import React from 'react';

interface DropCapProps {
  letter: string;
  className?: string;
}

const DropCap: React.FC<DropCapProps> = ({ letter, className = '' }) => {
  return (
    <span className={`float-left text-8xl leading-none font-bold text-amber-800 mr-3 mt-2 font-serif ${className}`}>
      {letter}
    </span>
  );
};

export default DropCap;