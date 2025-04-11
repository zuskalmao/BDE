import React from 'react';
import { Sparkles } from 'lucide-react';

interface ContentImageProps {
  imagePath?: string;
  alt?: string;
  placeholder?: string;
  aspectRatio?: string; // e.g. "16/9" or "1/1"
}

const ContentImage: React.FC<ContentImageProps> = ({
  imagePath,
  alt = "Content Image",
  placeholder = "Add your GIF/image here",
  aspectRatio = "16/9"
}) => {
  // If image path is provided, display the image
  if (imagePath) {
    return (
      <div className={`aspect-[${aspectRatio}] bg-gray-800/40 rounded-3xl backdrop-blur-sm overflow-hidden`}>
        <img 
          src={imagePath} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  
  // Otherwise, show placeholder
  return (
    <div className={`aspect-[${aspectRatio}] bg-gray-800/40 rounded-3xl backdrop-blur-sm flex items-center justify-center overflow-hidden`}>
      <div className="text-gray-400 text-xl text-center">
        <Sparkles className="mx-auto mb-4" size={48} />
        <p>{alt}</p>
        <p className="text-sm">({placeholder})</p>
      </div>
    </div>
  );
};

export default ContentImage;
