import React from "react";
import { motion } from "motion/react"; // or "framer-motion" if you prefer the old package
import { FaSmile } from "react-icons/fa"; // Removed unused FaLocationPin

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
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: { scale: 1.08, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const Locationinfo = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="background.jpg" // Replace with a real path or URL (e.g., dental-themed stock image)
        alt="Mobile dental practice background – smiling patients and modern care"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay with blur */}
      <div className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-6 px-4 py-12 md:px-12 md:py-20 text-center">
        <motion.div
          className="flex flex-col items-center gap-6 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Coming Soon */}
          <motion.h1
            variants={itemVariants}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Coming Soon!
          </motion.h1>

          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            Mobile Dental Practice
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-white text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed px-4"
          >
            We are a mobile dentist healthcare practice passionate about perfecting your company's and family's smiles. We provide a wide range of services for all ages.
          </motion.p>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 bg-black/70 px-6 py-3 rounded-full mt-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-white text-lg sm:text-xl font-semibold">
              Shining smiles, Guaranteed!
            </h3>
            <FaSmile className="text-white text-2xl sm:text-3xl" />
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 md:gap-6 mt-8 justify-center"
            variants={containerVariants}
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-white text-black font-semibold px-8 py-4 rounded-full shadow-lg transition-colors hover:from-blue-500 hover:to-white"
            >
              Book Appointment
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center gap-2 bg-gradient-to-r from-white to-cyan-400 text-black font-semibold px-8 py-4 rounded-full shadow-lg transition-colors hover:from-cyan-300 hover:to-white"
            >
              Request Callback
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center gap-2 bg-gradient-to-r from-white to-cyan-400 text-black font-semibold px-8 py-4 rounded-full shadow-lg transition-colors hover:from-cyan-300 hover:to-white"
            >
              Send Email
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Locationinfo;