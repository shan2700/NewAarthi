import React from 'react';
import { Link } from 'react-router-dom';

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  startingPrice: number;
}

const collections: Collection[] = [
  {
    id: 'traditional',
    name: 'Traditional Aarthi',
    description: 'Classic designs with traditional elements for auspicious occasions',
    image: 'https://i.ibb.co/zfRVrCH/aarthi1.jpeg',
    startingPrice: 800
  },
  {
    id: 'wedding',
    name: 'Wedding Specials',
    description: 'Elegant and ornate designs perfect for wedding ceremonies',
    image: 'https://i.ibb.co/dJQKVXH/aarthi3.jpeg',
    startingPrice: 1000
  },
  {
    id: 'festive',
    name: 'Festival Collections',
    description: 'Vibrant and colorful plates for Diwali, Navratri and other festivals',
    image: 'https://i.ibb.co/bW7BBDs/aarthi4.jpeg',
    startingPrice: 600
  },
  {
    id: 'corporate',
    name: 'Corporate Gifts',
    description: 'Sophisticated designs perfect for corporate events and gifting',
    image: 'https://i.ibb.co/khgB6hg/aarthi2.jpeg',
    startingPrice: 1500
  }
];

const CollectionsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our <span className="text-amber-600">Collections</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of exquisite aarthi plate designs crafted for various 
            occasions and ceremonies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/collections"
            className="inline-block px-6 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium rounded-md transition-colors duration-300"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={collection.image} 
          alt={collection.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-amber-300 font-medium">
            Starting from ₹{collection.startingPrice}
          </p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold mb-2 text-gray-800">
          {collection.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {collection.description}
        </p>
        <Link
          to={`/collections/${collection.id}`}
          className="text-amber-600 hover:text-amber-700 font-medium text-sm inline-flex items-center transition-colors"
        >
          View Collection
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CollectionsSection;