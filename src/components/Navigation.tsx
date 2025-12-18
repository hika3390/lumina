
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white bg-opacity-95'} backdrop-blur-sm`}>
      <div className="mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/LUMINA LOGO.png"
              alt="LUMINA LLC Logo"
              className="h-12 w-12 mr-4 object-contain"
            />
            <h1 className="text-xl font-light text-foreground tracking-widest uppercase">
              Lumina
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
