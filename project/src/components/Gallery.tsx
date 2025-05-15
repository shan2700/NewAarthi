import React, { useState } from 'react';

const images = [
  {
    id: 1,
    src: 'https://i.ibb.co/zfRVrCH/aarthi1.jpg',
    alt: 'Traditional Aarthi Plate with Candles',
    category: 'traditional'
  },
  {
    id: 2,
    src: 'https://i.ibb.co/khgB6hg/aarthi2.jpg',
    alt: 'Festival Aarthi Plate with Flowers',
    category: 'festival'
  },
  {
    id: 3,
    src: 'https://i.ibb.co/dJQKVXH/aarthi3.jpg',
    alt: 'Wedding Aarthi Plate with Figurine',
    category: 'wedding'
  },
  {
    id: 4,
    src: 'https://i.ibb.co/bW7BBDs/aarthi4.jpg',
    alt: 'Decorative Aarthi Plate with Statue',
    category: 'decorative'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/5759962/pexels-photo-5759962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Diwali Celebration Plate',
    category: 'festival'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/5760444/pexels-photo-5760444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Traditional Lamp Decoration',
    category: 'traditional'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/6044278/pexels-photo-6044278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Wedding Ceremonial Plate',
    category: 'wedding'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Corporate Gift Aarthi Plate',
    category: 'corporate'
  }
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'traditional', name: 'Traditional' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'festival', name: 'Festival' },
  { id: 'decorative', name: 'Decorative' },
  { id: 'corporate', name: 'Corporate' }
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const currentImage = images.find(img => img.id === selectedImage);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our <span className="text-amber-600">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of beautifully crafted aarthi plates for various occasions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image.id)}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-medium truncate">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closeModal}>
            <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
              <button 
                className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {currentImage && (
                <>
                  <img 
                    src={currentImage.src} 
                    alt={currentImage.alt}
                    className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                  />
                  <div className="bg-white p-4 mt-2 rounded-md">
                    <p className="text-gray-800 font-medium">{currentImage.alt}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;