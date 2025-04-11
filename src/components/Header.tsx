import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import CustomIcon from './CustomIcon';

// Import your custom eye icon
import eyeIcon from '../assets/cok.png';
// Set to true to use custom icon, false to use default Lucide icon
const useCustomEyeIcon = false;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <CustomIcon 
            iconComponent={<Eye />}
            imagePath={useCustomEyeIcon ? eyeIcon : undefined}
            size={32}
            className="text-primary mr-2"
          />
          <span className="font-orbitron text-xl font-bold gradient-text">$BDE</span>
        </div>
        
        <div>
          <button className="glow-button bg-accent hover:bg-accent/90 text-white font-bold py-2 px-6 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
            Buy $BDE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
