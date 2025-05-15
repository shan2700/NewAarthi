import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

const products: ProductProps[] = [
  {
    id: 1,
    name: 'Traditional Lotus Aarthi',
    image: 'https://i.ibb.co/zfRVrCH/aarthi1.jpg',
    price: 1199,
    description: 'Beautiful golden plate with lotus design and LED candles. Perfect for pooja ceremonies.',
    category: 'traditional'
  },
  {
    id: 2,
    name: 'Floral Festival Aarthi',
    image: 'https://i.ibb.co/khgB6hg/aarthi2.jpg',
    price: 1299,
    description: 'Red and yellow marigold decorated plate with green center light. Ideal for festival celebrations.',
    category: 'festival'
  },
  {
    id: 3,
    name: 'Premium Wedding Aarthi',
    image: 'https://i.ibb.co/dJQKVXH/aarthi3.jpg',
    price: 1699,
    description: 'Elegant plate with silver horse statue, surrounded by vibrant flowers. Perfect for wedding ceremonies.',
    category: 'wedding'
  },
  {
    id: 4,
    name: 'Decorative Figurine Aarthi',
    image: 'https://i.ibb.co/bW7BBDs/aarthi4.jpg',
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
  }
];

const Products: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Featured <span className="text-amber-600">Products</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of handcrafted aarthi plates designed for various occasions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          ₹{product.price}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg font-semibold mb-2 text-gray-800">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Category: {product.category}</span>
          <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-md transition-colors duration-300">
            Inquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;