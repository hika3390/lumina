
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-yellow-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-orange-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight leading-none">
            NEXT
            <br />
            <span className="text-yellow-200">LEVEL</span>
            <br />
            IT
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            革新的なテクノロジーで、あなたのビジネスを次のステージへ。
            <br />
            ルミナ合同会社が描く、デジタル未来。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToServices}
              className="bg-white text-orange-600 px-12 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              EXPLORE SERVICES
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-12 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/20 rounded-full p-3">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
