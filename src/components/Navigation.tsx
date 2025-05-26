
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-200/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-black text-orange-600 tracking-tight">
              LUMINA
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-900 hover:text-orange-600 transition-colors duration-300 font-medium text-lg relative group"
              >
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-900 hover:text-orange-600 transition-colors duration-300 font-medium text-lg relative group"
              >
                SERVICES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-900 hover:text-orange-600 transition-colors duration-300 font-medium text-lg relative group"
              >
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                CONTACT
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-orange-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-white/95 border-t border-orange-200/30">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-3 text-gray-900 hover:text-orange-600 transition-colors duration-200 font-medium text-lg"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 text-gray-900 hover:text-orange-600 transition-colors duration-200 font-medium text-lg"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-gray-900 hover:text-orange-600 transition-colors duration-200 font-medium text-lg"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 bg-orange-600 text-white rounded-lg font-semibold"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
