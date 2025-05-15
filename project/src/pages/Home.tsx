import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Collections />
      <Products />
      <Testimonials />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Home;