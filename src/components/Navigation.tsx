
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-light text-slate-900 tracking-wide">
              LUMINA
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-indigo-900 transition-colors duration-300 font-light text-sm tracking-wide uppercase relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-px bg-copper transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-slate-700 hover:text-indigo-900 transition-colors duration-300 font-light text-sm tracking-wide uppercase relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-px bg-copper transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-indigo-900 transition-colors duration-300 font-light text-sm tracking-wide uppercase relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-px bg-copper transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-slate-300 text-slate-700 hover:bg-indigo-900 hover:text-white hover:border-indigo-900 px-6 py-2 font-light text-sm tracking-wide uppercase transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-indigo-900 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-white border-t border-slate-200">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-indigo-900 transition-colors duration-200 font-light text-sm tracking-wide uppercase"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-indigo-900 transition-colors duration-200 font-light text-sm tracking-wide uppercase"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-indigo-900 transition-colors duration-200 font-light text-sm tracking-wide uppercase"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 border border-slate-300 text-slate-700 font-light text-sm tracking-wide uppercase"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
