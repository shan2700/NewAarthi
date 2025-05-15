import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-amber-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-center text-amber-100 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for inquiries and orders.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;