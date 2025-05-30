import React from 'react';

const InfoPanel = () => {
  return (
    <section id="home" className="bg-white text-black flex flex-col items-center justify-center py-16 px-4">
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 max-w-4xl">
        Expert Dental Care with a Compassionate Touch
      </h1>

      <div className="flex flex-col md:flex-row gap-12 items-stretch justify-center w-full max-w-6xl">
        
        {/* Card 1 */}
        <div className="flex flex-col justify-between text-center p-6 border-2 border-gray-300 rounded-2xl shadow-2xl bg-white flex-1">
          <div>
            <h2 className="text-2xl font-bold mb-4">Healthy Smiles</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Motlokwa Dental Studio offers expert, compassionate care in a welcoming environment. 
              From checkups to advanced treatments, we keep your smile healthy.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between text-center p-6 border-2 border-gray-300 rounded-2xl shadow-2xl bg-white flex-1">
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Smile, Our Priority</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Receive high-quality dental treatment from our skilled professionals at Motlokwa Dental Studio, where your health, 
              comfort, and smile come first. We are dedicated to providing personalized care in a welcoming environment.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 border-2 border-gray-300 rounded-2xl shadow-2xl bg-white flex-1">
          <h2 className="text-2xl font-bold mb-4">Care Free :)</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Your comfort comes first at Motlokwa Dental Studio. We provide personalized dental care for a lifetime of healthy, beautiful smiles.
          </p>
        </div>

      </div>
    </section>
  );
};

export default InfoPanel;

