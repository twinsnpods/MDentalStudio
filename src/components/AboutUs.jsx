import React from 'react';
import Rct from './Rct';

const AboutUs = () => {
  return (
    <div id="about-us" className="bg-white">
      {/* Header Section */}
      <div className="relative w-full px-8 py-16">
        <h1 className="text-5xl text-black text-center font-bold">About Us</h1>
        <img
          src="/DentalStudio2.png"
          alt="Dental Studio Logo"
          className="h-20 w-auto hover:scale-150 transition-transform duration-300 absolute right-10 top-1/2 transform -translate-y-1/2"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center px-8 pb-16">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-5xl text-black font-bold pb-2 text-start">Motlokwa</h2>
          <h2 className="text-5xl text-black font-bold pb-6 text-start">Dental Studio</h2>
          <p className="text-2xl text-black leading-relaxed text-start">
            At Motlokwa Dental Studio, we believe a healthy, radiant smile can truly enhance your life.
            Conveniently located at 3 Molyneux, Springs Elcourt 1560, we proudly provide top-quality dental care
            to patients of all ages in Pretoria and surrounding areas.
            <br className='text-start'/><br />
            We know that visiting the dentist can feel overwhelming for some, which is why we prioritize a warm,
            welcoming, and comfortable experience for every patient. Our team of skilled young dentists and compassionate
            staff are dedicated to delivering exceptional care with a personal touch.
            <br className='text-start'/><br />
            From routine cleanings to advanced dental procedures, we combine expertise with state-of-the-art equipment
            and the latest techniques to ensure the highest standard of care. Our mission is to help you achieve and
            maintain excellent oral health while giving you a confident, beautiful smile.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="/AboutUsPic.png"
            alt="Dental Studio"
            className="w-[500px] h-auto rounded-2xl shadow-2xl mt-8 lg:mt-12"
          />
        </div>
      </div>

      {/* Reusable Component Section */}
      <div className="pt-16">
        <Rct />
      </div>
    </div>
  );
};

export default AboutUs;

