
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-copper rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center px-8 lg:px-12 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light text-slate-900 mb-8 tracking-tight leading-tight">
            Crafting
            <br />
            <span className="font-normal text-indigo-900">Digital</span>
            <br />
            <span className="font-extralight">Excellence</span>
          </h1>
          
          <div className="w-24 h-px bg-copper mx-auto mb-12"></div>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-16 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            革新的なテクノロジーと洗練されたデザインで、
            <br />
            あなたのビジネスに新たな価値を創造します。
          </p>
          
          <button 
            onClick={scrollToServices}
            className="border border-slate-300 text-slate-700 hover:bg-indigo-900 hover:text-white hover:border-indigo-900 px-12 py-4 font-light text-sm tracking-widest uppercase transition-all duration-500 transform hover:scale-105"
          >
            Discover More
          </button>
        </div>
      </div>
      
      {/* Animated element */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="w-px h-16 bg-gradient-to-b from-copper to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
