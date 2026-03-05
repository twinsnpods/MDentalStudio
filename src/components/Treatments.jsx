import React from "react";
import Calendar from "./Calander"; // ← Fixed typo in name (rename file/component if needed)
import { motion } from "motion/react";
import { FaPhone } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.4 },
  },
};

const stepTitleVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const contentVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.96 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  hover: { scale: 1.04, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.3)" },
};

const buttonVariants = {
  hover: { scale: 1.08, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const Treatments = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Step 1 */}
      <motion.h1
        className="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-10"
        variants={stepTitleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        1. Your First Step
      </motion.h1>

      <motion.div
        className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center mb-20 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={contentVariants} className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black">Schedule Your Visit</h2>
          <p className="text-black text-lg sm:text-xl md:text-2xl leading-relaxed max-w-lg mx-auto lg:mx-0">
            Effortlessly book your appointment through our simple website — choose a time that fits your schedule perfectly.
          </p>
        </motion.div>

        <motion.div
          variants={contentVariants}
          className="flex-1 w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
        >
          <Calendar />
        </motion.div>
      </motion.div>

      {/* Step 2 */}
      <motion.h1
        className="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-12"
        variants={stepTitleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        2. Your Second Step
      </motion.h1>

      <motion.div
        className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center justify-center mb-20 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img
          src="boy.png"
          alt="Patient during dental consultation"
          className="w-full max-w-[450px] h-auto rounded-2xl shadow-2xl object-cover"
          variants={imageVariants}
          whileHover="hover"
        />

        <motion.div variants={contentVariants} className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black">Tailored Consultation</h2>
          <p className="text-black text-lg sm:text-xl md:text-2xl leading-relaxed max-w-lg mx-auto lg:mx-0">
            Our experienced dentists will carefully assess your oral health and design a personalized treatment plan just for you.
          </p>
        </motion.div>
      </motion.div>

      {/* Step 3 */}
      <motion.h1
        className="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-12"
        variants={stepTitleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        3. Achieve Your Perfect Smile
      </motion.h1>

      <motion.div
        className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center mb-16 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={contentVariants} className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black">Achieve Your Perfect Smile</h2>
          <p className="text-black text-lg sm:text-xl md:text-2xl leading-relaxed max-w-lg mx-auto lg:mx-0">
            Follow your custom treatment plan — designed specifically for your needs — to reveal a healthy, confident, radiant smile.
          </p>
        </motion.div>

        <motion.img
          src="streetGirl.png"
          alt="Happy patient with beautiful smile after treatment"
          className="w-full max-w-[450px] h-auto rounded-2xl shadow-2xl object-cover"
          variants={imageVariants}
          whileHover="hover"
        />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white text-black text-xl font-semibold border-2 border-black rounded-xl px-8 py-4 shadow-md hover:bg-gray-100 transition-colors"
        >
          Book Appointment
        </motion.button>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-black text-white text-xl font-semibold rounded-xl px-8 py-4 shadow-md flex items-center gap-3 hover:bg-gray-800 transition-colors"
        >
          Book Callback <FaPhone className="text-lg" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Treatments;