
import { useState, useEffect } from 'react';

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white bg-opacity-90`}>
      <div className="mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/LUMINA LOGO.png"
              alt="LUMINA LLC Logo"
              className="h-10 w-10 mr-3 object-contain"
            />
            <h1 className="text-2xl font-light text-slate-900 tracking-wide">
              LUMINA LLC
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
