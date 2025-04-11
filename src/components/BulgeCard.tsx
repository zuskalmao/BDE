import React from 'react';

interface BulgeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BulgeCard: React.FC<BulgeCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 hover:bg-gray-800/60 transition-all duration-300 bulge-hover shadow-xl">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 font-orbitron text-white">{title}</h3>
        <p className="text-gray-300 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default BulgeCard;
