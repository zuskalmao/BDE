import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface BuyCTAProps {
  large?: boolean;
}

const BuyCTA: React.FC<BuyCTAProps> = ({ large = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex flex-col items-center">
      <button 
        className={`glow-button flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-lg 
          ${large 
            ? 'bg-accent text-white py-6 px-14 text-2xl hover:shadow-accent/40 hover:scale-110' 
            : 'bg-accent text-white py-4 px-10 text-xl hover:shadow-accent/30 hover:scale-105'
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="mr-2">GET $BDE NOW</span>
        <ArrowRight 
          size={large ? 24 : 20} 
          className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
        />
      </button>
      
      <div className={`mt-4 text-gray-400 ${large ? 'text-lg' : 'text-base'}`}>
        <span>Available on Raydium & Jupiter</span>
      </div>
    </div>
  );
};

export default BuyCTA;
