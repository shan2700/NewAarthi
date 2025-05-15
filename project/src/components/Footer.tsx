import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube as YouTube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-amber-400">Keerthana's Aarthi</h3>
            <p className="text-gray-400 mb-4">
              Bringing elegance to your ceremonial occasions with beautifully crafted aarthi plates
              for all types of events and celebrations.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                <YouTube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-amber-400 transition-colors">Collections</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-amber-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Collections */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-amber-400">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/collections/traditional" className="text-gray-400 hover:text-amber-400 transition-colors">Traditional Aarthi</Link>
              </li>
              <li>
                <Link to="/collections/wedding" className="text-gray-400 hover:text-amber-400 transition-colors">Wedding Specials</Link>
              </li>
              <li>
                <Link to="/collections/festive" className="text-gray-400 hover:text-amber-400 transition-colors">Festival Collections</Link>
              </li>
              <li>
                <Link to="/collections/corporate" className="text-gray-400 hover:text-amber-400 transition-colors">Corporate Gifts</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-amber-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                <span className="ml-3 text-gray-400">
                  No.7 Mahasakthi Nagar, Nehru Nagar, Ramanathapuram-623504
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="ml-3 text-gray-400">+91 9865018649</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="ml-3 text-gray-400">info@keerthanasaarthi.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Keerthana's Aarthi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;