
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      {/* Lightweight overlay for transparency effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-slate-800/50"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white/15 rounded-3xl p-8 sm:p-12 border border-white/30 shadow-2xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="block">次世代の</span>
            <span className="block text-blue-200">ITソリューション</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-left">
            ルミナ合同会社は、最新技術とイノベーションでお客様のビジネスの可能性を最大限に引き出します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <button 
              onClick={scrollToServices}
              className="bg-blue-500/70 hover:bg-blue-600/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-blue-400/40"
            >
              サービスを見る
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/20 border-2 border-white/50 text-white hover:bg-white/30 hover:border-white/70 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/20 rounded-full p-2">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
