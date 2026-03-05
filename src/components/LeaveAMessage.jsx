import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: { scale: 1.04, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)" },
  tap: { scale: 0.98 },
};

const LeaveAMessage = () => {
  return (
    <div id="contact-us" className="bg-white py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center justify-center">
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl text-black font-bold text-center pb-10 md:pb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Leave us a message
      </motion.h1>

      {/* Form Container */}
      <motion.form
        className="w-full max-w-3xl bg-gray-50 p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-300 shadow-2xl flex flex-col gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Name */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label className="text-lg sm:text-xl font-bold text-black">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="border-2 border-gray-300 rounded-xl text-lg px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </motion.div>

        {/* Surname */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label className="text-lg sm:text-xl font-bold text-black">Surname</label>
          <input
            type="text"
            placeholder="Enter your surname"
            required
            className="border-2 border-gray-300 rounded-xl text-lg px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label className="text-lg sm:text-xl font-bold text-black">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="border-2 border-gray-300 rounded-xl text-lg px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <label className="text-lg sm:text-xl font-bold text-black">Message</label>
          <textarea
            placeholder="Leave us a message..."
            rows={5}
            required
            className="border-2 border-gray-300 rounded-xl text-lg px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-black text-white text-lg sm:text-xl font-bold py-3 px-8 rounded-2xl shadow-md hover:bg-gray-800 transition-colors duration-300 mt-4"
        >
          Submit Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default LeaveAMessage;