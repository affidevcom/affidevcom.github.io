import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="https://raw.githubusercontent.com/eabdalmufid/eabdalmufid/refs/heads/main/logo-affidev.png" 
              alt="Affidev Logo" 
              className="w-auto h-12"
            />
          </div>

          <div className="items-center hidden space-x-8 md:flex">
            <button onClick={() => scrollToSection('services')} className="font-medium text-gray-700 transition-colors hover:text-indigo-600">Layanan</button>
            <button onClick={() => scrollToSection('portfolio')} className="font-medium text-gray-700 transition-colors hover:text-indigo-600">Portfolio</button>
            <button onClick={() => scrollToSection('testimonials')} className="font-medium text-gray-700 transition-colors hover:text-indigo-600">Testimoni</button>
            <button onClick={() => scrollToSection('faq')} className="font-medium text-gray-700 transition-colors hover:text-indigo-600">FAQ</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700">
              Hubungi Kami
            </Button>
          </div>

          <button 
            className="text-gray-700 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-white border-t md:hidden">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('services')} className="block w-full py-2 font-medium text-left text-gray-700 hover:text-indigo-600">Layanan</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full py-2 font-medium text-left text-gray-700 hover:text-indigo-600">Portfolio</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full py-2 font-medium text-left text-gray-700 hover:text-indigo-600">Testimoni</button>
            <button onClick={() => scrollToSection('faq')} className="block w-full py-2 font-medium text-left text-gray-700 hover:text-indigo-600">FAQ</button>
            <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-indigo-600 to-violet-600">
              Hubungi Kami
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;