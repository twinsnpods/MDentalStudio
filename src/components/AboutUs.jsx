import React from 'react';
import { motion } from 'motion/react';
import Rct from './Rct';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: 'easeOut' },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transition: { duration: 0.4 },
  },
};

const AboutUs = () => {
  return (
    <div id="about-us" className="bg-white">
      {/* Header Section */}
      <div className="relative w-full px-6 sm:px-8 py-16 md:py-20 overflow-hidden">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl text-black text-center font-bold mb-8 md:mb-0"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>

        <motion.img
          src="mobiledentist.jpg"
          alt="Dr Vhulahani's Mobile Dentist logo / team"
          className="hidden lg:block h-40 w-auto absolute right-10 xl:right-20 top-1/2 transform -translate-y-1/2 rounded-full shadow-xl"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        />
      </div>

      {/* Main Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center px-6 sm:px-8 lg:px-12 pb-16 md:pb-24 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Text Section */}
        <motion.div variants={itemVariants} className="flex-1 text-left">
          <h2 className="text-4xl sm:text-5xl text-black font-bold pb-2">Dr Vhulahani's</h2>
          <h2 className="text-4xl sm:text-5xl text-black font-bold pb-6">Mobile Dentist Practice</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
            At Dr Vhulahani's mobile dentist practice, we believe a healthy, radiant smile can truly enhance your life.
            Conveniently located at Medicare, Unit 1, Amanda Court, Cnr Thabo Sehume & Francis Baard, Pretoria, 0007, we proudly provide top-quality dental care
            to patients of all ages in Pretoria and surrounding areas.
            <br /><br />
            We know that visiting the dentist can feel overwhelming for some, which is why we prioritize a warm,
            welcoming, and comfortable experience for every patient. Our team of skilled young dentists and compassionate
            staff are dedicated to delivering exceptional care with a personal touch.
            <br /><br />
            From routine cleanings to advanced dental procedures, we combine expertise with state-of-the-art equipment
            and the latest techniques to ensure the highest standard of care. Our mission is to help you achieve and
            maintain excellent oral health while giving you a confident, beautiful smile.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <motion.img
            src="AboutUsPic.png"
            alt="Dr Vhulahani's dental team providing mobile care"
            className="w-full max-w-[500px] h-auto rounded-2xl shadow-2xl object-cover"
            whileHover="hover"
          />
        </motion.div>
      </motion.div>

      {/* Reusable Component (e.g., Reviews/CTA) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="pt-12 md:pt-16"
      >
        <Rct />
      </motion.div>
    </div>
  );
};

export default AboutUs;