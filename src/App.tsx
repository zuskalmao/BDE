import React, { useEffect, useState } from 'react';
import { Rocket, Sparkles, Flame, TrendingUp, Droplets, Zap } from 'lucide-react';
import Header from './components/Header';
import BulgeCard from './components/BulgeCard';
import BuyCTA from './components/BuyCTA';
import SocialLinks from './components/SocialLinks';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden relative">
      {/* Background blobs */}
      <div className="blob" style={{ top: '-200px', left: '-200px', opacity: 0.4 }}></div>
      <div className="blob" style={{ bottom: '-200px', right: '-200px', opacity: 0.3 }}></div>
      
      {/* Background rockets - distributed across the viewport */}
      <div className="rocket-anim-1 fixed z-0 opacity-20" style={{ top: '15%', left: '10%' }}>
        <Rocket size={100} className="text-accent" />
      </div>
      <div className="rocket-anim-2 fixed z-0 opacity-15" style={{ top: '70%', right: '15%' }}>
        <Rocket size={60} className="text-primary" />
      </div>
      <div className="rocket-anim-3 fixed z-0 opacity-10" style={{ top: '40%', right: '5%' }}>
        <Rocket size={80} className="text-secondary" />
      </div>
      <div className="rocket-anim-4 fixed z-0 opacity-20" style={{ bottom: '20%', left: '20%' }}>
        <Rocket size={50} className="text-accent" />
      </div>
      <div className="rocket-anim-5 fixed z-0 opacity-15" style={{ top: '30%', left: '30%' }}>
        <Rocket size={120} className="text-primary" />
      </div>
      <div className="rocket-small-1 fixed z-0 opacity-10" style={{ bottom: '10%', right: '25%' }}>
        <Rocket size={30} className="text-white" />
      </div>
      <div className="rocket-small-2 fixed z-0 opacity-10" style={{ top: '55%', left: '5%' }}>
        <Rocket size={25} className="text-accent" />
      </div>
      <div className="rocket-small-3 fixed z-0 opacity-10" style={{ top: '85%', right: '35%' }}>
        <Rocket size={20} className="text-primary" />
      </div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
        <div className="max-w-6xl mx-auto text-center z-10">
          <div 
            className="mb-6 transform transition-transform duration-500" 
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 font-orbitron gradient-text">
              BIG DICK ENERGY
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
              The $BDE Solana Memecoin You've Been <i>Waiting For</i>
            </h2>
          </div>
          
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-xl mb-8 text-gray-300">
              Not compensating for <i>anything</i>. $BDE is the memecoin with the swagger, 
              confidence, and <span className="text-accent font-bold">absolute MAGNITUDE</span> to 
              dominate the Solana ecosystem.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full">
                <Flame className="text-accent mr-2" size={24} />
                <span>Massive Gains</span>
              </div>
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full">
                <TrendingUp className="text-accent mr-2" size={24} />
                <span>Impressive Growth</span>
              </div>
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full">
                <Zap className="text-accent mr-2" size={24} />
                <span>Powerful Community</span>
              </div>
            </div>
          </div>
          
          <BuyCTA />
        </div>
      </section>
      
      {/* Image Space 1 */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-orbitron">
            Swagger <span className="text-accent">Overload</span>
          </h2>
          
          <div className="w-full aspect-[16/9] bg-gray-800/40 rounded-3xl backdrop-blur-sm flex items-center justify-center mb-8 overflow-hidden">
            <div className="text-gray-400 text-xl">
              <Sparkles className="mx-auto mb-4" size={48} />
              <p>Image Space 1</p>
              <p className="text-sm">(Add your GIF/image here)</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            When you hold $BDE, people can <i>sense</i> it. You walk differently. 
            You enter rooms with an aura that makes everyone stop and stare.
            It's not about what you have, it's about how you <span className="text-accent font-bold">carry</span> yourself.
          </p>
        </div>
      </section>
      
      {/* Cards Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center font-orbitron">
            Why Your Portfolio <span className="text-accent">Needs</span> $BDE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <BulgeCard 
              title="The Confidence Effect"
              description="Hold $BDE and instantly feel the psychological benefits. Your portfolio will stand taller, perform better, and satisfy investors more fully."
              icon={<Zap className="text-accent" size={32} />}
            />
            
            <BulgeCard 
              title="Size Does Matter"
              description="In a market full of shy, underperforming coins, $BDE isn't afraid to show its full potential. We're here for the long, strong growth trajectory."
              icon={<TrendingUp className="text-accent" size={32} />}
            />
            
            <BulgeCard 
              title="No Premature Selloffs"
              description="$BDE holders are known for their stamina. While other coins pump and dump, we maintain our position until complete satisfaction is achieved."
              icon={<Flame className="text-accent" size={32} />}
            />
            
            <BulgeCard 
              title="Impressive Liquidity"
              description="Our pools are deep and always ready to go. With $BDE, you'll never be left high and dry when you need to make your move."
              icon={<Droplets className="text-accent" size={32} />}
            />
          </div>
        </div>
      </section>
      
      {/* Image Space 2 */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-orbitron">
            The <span className="text-accent">Bulge</span> Effect
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 aspect-square bg-gray-800/40 rounded-3xl backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <div className="text-gray-400 text-xl">
                <Sparkles className="mx-auto mb-4" size={48} />
                <p>Image Space 2</p>
                <p className="text-sm">(Add your GIF/image here)</p>
              </div>
            </div>
            
            <div className="flex-1 aspect-square bg-gray-800/40 rounded-3xl backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <div className="text-gray-400 text-xl">
                <Sparkles className="mx-auto mb-4" size={48} />
                <p>Image Space 3</p>
                <p className="text-sm">(Add your GIF/image here)</p>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-10">
            When your wallet is packing $BDE, you'll notice the difference immediately.
            Other traders can see the bulge in your portfolio from a mile away.
            The confidence is <span className="text-accent font-bold">unmistakable</span>.
          </p>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-orbitron gradient-text">
            GET SOME $BDE
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Stop compensating with virgin coins. It's time to pack your wallet with <span className="font-bold">Big Dick Energy</span>.
          </p>
          
          <BuyCTA large={true} />
          
          <p className="mt-8 text-gray-400 text-sm">
            $BDE is a memecoin. Do your own research before investing.
          </p>
        </div>
      </section>
      
      {/* Social Links Section */}
      <SocialLinks />
      
      <footer className="py-8 px-4 text-center text-gray-500 border-t border-gray-800">
        <p>© 2023 Big Dick Energy ($BDE) — The Mightiest Memecoin in the Solana Ecosystem</p>
      </footer>
    </div>
  );
}

export default App;
