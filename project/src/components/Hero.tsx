import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  "https://i.ibb.co/zfRVrCH/aarthi1.jpg",
  "https://i.ibb.co/khgB6hg/aarthi2.jpg",
  "https://i.ibb.co/dJQKVXH/aarthi3.jpg",
  "https://i.ibb.co/bW7BBDs/aarthi4.jpg"
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
            <div className="animate-fade-in-up">
              <h2 className="inline-block px-4 py-2 bg-amber-600/80 text-white text-sm font-medium mb-4">
                Premium Aarthi Plate Decorations
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Beautiful <span className="text-amber-400">Aarthi Plates</span> for All Occasions
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl">
                Handcrafted aarthi plates that add a touch of elegance and tradition to your ceremonies and celebrations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  to="/collections"
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  View Collections
                  <ChevronRight size={16} className="ml-2" />
                </Link>
                <Link 
                  to="/contact"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md backdrop-blur-sm transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-amber-500' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;