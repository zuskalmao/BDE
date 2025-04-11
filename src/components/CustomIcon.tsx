import React from 'react';

interface CustomIconProps {
  iconComponent?: React.ReactElement;
  imagePath?: string;
  size?: number;
  className?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ 
  iconComponent, 
  imagePath, 
  size = 24, 
  className = "" 
}) => {
  // If image path is provided, use the image
  if (imagePath) {
    return (
      <img 
        src={imagePath} 
        alt="Custom Icon" 
        width={size} 
        height={size} 
        className={className}
      />
    );
  }
  
  // Otherwise, use the provided icon component
  return iconComponent ? React.cloneElement(iconComponent, { 
    size, 
    className 
  }) : null;
};

export default CustomIcon;
