import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

const collections = [
  { id: 'all', name: 'All Collections' },
  { id: 'traditional', name: 'Traditional Aarthi' },
  { id: 'wedding', name: 'Wedding Specials' },
  { id: 'festival', name: 'Festival Collections' },
  { id: 'corporate', name: 'Corporate Gifts' },
  { id: 'decorative', name: 'Decorative Aarthi' }
];

const products: Product[] = [
  {
    id: 1,
    name: 'Traditional Lotus Aarthi',
    image: 'https://i.ibb.co/zfRVrCH/aarthi1.jpeg',
    price: 1199,
    description: 'Beautiful golden plate with lotus design and LED candles. Perfect for pooja ceremonies.',
    category: 'traditional'
  },
  {
    id: 2,
    name: 'Floral Festival Aarthi',
    image: 'https://i.ibb.co/khgB6hg/aarthi2.jpeg',
    price: 1299,
    description: 'Red and yellow marigold decorated plate with green center light. Ideal for festival celebrations.',
    category: 'festival'
  },
  {
    id: 3,
    name: 'Premium Wedding Aarthi',
    image: 'https://i.ibb.co/dJQKVXH/aarthi3.jpeg',
    price: 1699,
    description: 'Elegant plate with silver horse statue, surrounded by vibrant flowers. Perfect for wedding ceremonies.',
    category: 'wedding'
  },
  {
    id: 4,
    name: 'Decorative Figurine Aarthi',
    image: 'https://i.ibb.co/bW7BBDs/aarthi4.jpeg',
    price: 1499,
    description: 'Pink base with elegant golden figurine and water sphere. Ideal for special occasions and gifts.',
    category: 'decorative'
  },
  {
    id: 5,
    name: 'Classic Diwali Aarthi',
    image: 'https://images.pexels.com/photos/5759962/pexels-photo-5759962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1299,
    description: 'Traditional design with diyas and flower petals. Perfect for Diwali celebrations.',
    category: 'festival'
  },
  {
    id: 6,
    name: 'Engagement Ceremony Aarthi',
    image: 'https://images.pexels.com/photos/5760444/pexels-photo-5760444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1599,
    description: 'Beautifully designed plate with traditional lamps and floral decoration. Ideal for engagement ceremonies.',
    category: 'wedding'
  },
  {
    id: 7,
    name: 'Corporate Gift Aarthi',
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1799,
    description: 'Elegant design perfect for corporate gifting during festivals and special occasions.',
    category: 'corporate'
  },
  {
    id: 8,
    name: 'Puja Special Aarthi',
    image: 'https://images.pexels.com/photos/6044278/pexels-photo-6044278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1399,
    description: 'Traditional design with special arrangements for regular puja ceremonies.',
    category: 'traditional'
  }
];

const CollectionsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-amber-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Our Collections</h1>
          <p className="text-center text-amber-100 max-w-2xl mx-auto">
            Browse our beautiful aarthi plate collections for every occasion
          </p>
        </div>
      </div>
      
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {collections.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm md:text-base transition-colors ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div 
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                      ₹{product.price}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <button className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors duration-300">
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;