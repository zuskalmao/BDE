import React from 'react';
import { Twitter, Send } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-orbitron">
          Join the <span className="text-accent">Movement</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Follow us on social media for updates, memes, and to connect with other holders packing some serious $BDE.
        </p>
        
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://twitter.com/BDEcoin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <div className="bg-gradient-to-br from-primary/20 to-primary/40 p-5 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group">
              <Twitter size={40} className="text-[#1DA1F2] group-hover:animate-pulse" />
            </div>
            <span className="block mt-3 font-medium">Twitter</span>
          </a>
          
          <a 
            href="https://t.me/BDEcoin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <div className="bg-gradient-to-br from-primary/20 to-primary/40 p-5 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group">
              <Send size={40} className="text-[#26A5E4] group-hover:animate-pulse" />
            </div>
            <span className="block mt-3 font-medium">Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
