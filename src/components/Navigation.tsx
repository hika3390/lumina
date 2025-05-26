
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Lumina LLC
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                ホーム
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                サービス
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                会社概要
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                お問い合わせ
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 border-t border-slate-200">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium w-full text-left"
              >
                ホーム
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium w-full text-left"
              >
                サービス
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium w-full text-left"
              >
                会社概要
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium w-full text-left"
              >
                お問い合わせ
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
