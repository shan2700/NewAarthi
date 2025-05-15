import React from 'react';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Gallery</h1>
          <p className="text-center text-purple-100 max-w-2xl mx-auto">
            Browse our collection of beautifully crafted aarthi plates
          </p>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default GalleryPage;