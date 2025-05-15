import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Flame className="h-8 w-8 text-amber-600" />
            <div className="ml-2">
              <h1 className={`font-serif font-bold text-xl md:text-2xl ${scrolled ? 'text-amber-700' : 'text-amber-600'}`}>
                Keerthana's Aarthi
              </h1>
              <p className={`text-xs italic ${scrolled ? 'text-gray-600' : 'text-amber-500'}`}>
                Elegance in every plate
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" scrolled={scrolled}>Home</NavLink>
            <NavLink to="/collections" scrolled={scrolled}>Collections</NavLink>
            <NavLink to="/gallery" scrolled={scrolled}>Gallery</NavLink>
            <NavLink to="/about" scrolled={scrolled}>About Us</NavLink>
            <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-amber-700 hover:bg-amber-50' : 'text-amber-600 hover:bg-amber-100/20'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/collections" onClick={() => setIsOpen(false)}>Collections</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  scrolled: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, scrolled, children }) => {
  return (
    <Link 
      to={to} 
      className={`font-medium text-sm hover:text-amber-700 transition-colors ${
        scrolled ? 'text-gray-800' : 'text-white hover:text-amber-200'
      }`}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, onClick, children }) => {
  return (
    <Link 
      to={to} 
      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;