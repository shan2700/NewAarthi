import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Founder" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-amber-500 rounded-lg z-0"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 border-4 border-purple-600 rounded-lg z-0"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About <span className="text-amber-600">Us</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            
            <div className="mb-8">
              <h3 className="text-xl font-serif font-semibold text-purple-700 mb-2">Our Story</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Keerthana's Aarthi was founded with a vision to preserve and enhance the beauty of traditional ceremonial plates. 
                What started as a passion project has now evolved into a distinguished brand known for its intricate designs and attention to detail.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in creating custom aarthi plates for all types of events including weddings, religious ceremonies, 
                housewarmings, and festivals. Each plate is carefully handcrafted to bring elegance and auspiciousness to your special occasions.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-serif font-semibold text-purple-700 mb-2">Founder's Message</h3>
              <p className="text-gray-600 leading-relaxed">
                "My journey began with a deep appreciation for the cultural significance of aarthi plates in our traditions. 
                I believe that these ceremonial elements should not only serve their purpose but also be a feast for the eyes. 
                At Keerthana's Aarthi, we blend tradition with creativity to create pieces that become cherished memories."
              </p>
              <div className="mt-3 flex items-center">
                <p className="font-serif text-lg font-semibold text-gray-800">Prabavathy Chandran</p>
                <div className="w-8 h-0.5 bg-amber-500 mx-3"></div>
                <p className="text-gray-600">Founder</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-semibold text-purple-700 mb-2">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                We promise to deliver the highest quality of craftsmanship, using premium materials and paying attention to every detail. 
                Our commitment is to make your special occasions even more memorable with our beautiful aarthi plate decorations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;