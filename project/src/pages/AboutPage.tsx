import React from 'react';
import AboutUs from '../components/AboutUs';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">About Us</h1>
          <p className="text-center text-purple-200 max-w-2xl mx-auto">
            Learn more about Keerthana's Aarthi and our founder's journey
          </p>
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default AboutPage;