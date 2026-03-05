import React from "react";
import {
  FaBookBookmark,
  FaGear,
  FaHouse,
  FaLocationDot,
  FaSuitcaseMedical,
  FaThumbsUp,
} from "react-icons/fa6";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const boxVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.4 },
  },
};

const WhyChooseUs = () => {
  const features = [
    { img: "1.png", label: "We're Careful" },
    { img: "2.png", label: "We're Professionals" },
    { img: "6.png", label: "We're Family" },
  ];

  return (
    <div className="bg-white">
      {/* Main Title */}
      <motion.div
        className="text-center pt-12 pb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-black text-3xl sm:text-5xl font-bold">
          Why Choose Us?
        </h1>
      </motion.div>

      {/* Top Three Feature Boxes */}
      <motion.div
        className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 items-center justify-center px-6 sm:px-10 pb-16 md:pb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center border-2 border-gray-300 rounded-2xl shadow-xl p-6 w-full max-w-xs sm:w-72 bg-white"
            variants={boxVariants}
            whileHover="hover"
          >
            <img
              className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-3xl shadow-lg border border-gray-200"
              src={feature.img}
              alt={`${feature.label} - Dr Vhulahani's Mobile Dentist`}
            />
            <p className="text-xl sm:text-2xl font-semibold text-black pt-5 pb-2 text-center">
              {feature.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Most Importantly Title */}
      <motion.div
        className="text-center pt-10 pb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-5xl text-black font-bold">
          Most Importantly
        </h1>
      </motion.div>

      {/* Info Rows */}
      <motion.div
        className="flex flex-col gap-12 px-6 sm:px-10 pb-16 md:pb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          <motion.div variants={itemVariants}>
            <InfoBlock
              Icon={FaBookBookmark}
              title="Personalized Care"
              text="At Dr Vhulahani's mobile dental practice, we focus entirely on you. We take time to listen to your concerns and craft personalized treatment plans that match your unique needs and goals."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <InfoBlock
              Icon={FaHouse}
              title="Comfortable Environment"
              text="Our clinic offers a warm, welcoming space to make your dental visits pleasant and stress-free, supported by a compassionate team always ready to help."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <InfoBlock
              Icon={FaThumbsUp}
              title="Patient-Centered Approach"
              text="Your comfort and satisfaction are our top priorities. We strive to exceed expectations with exceptional, convenient care tailored just for you."
            />
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          <motion.div variants={itemVariants}>
            <InfoBlock
              Icon={FaLocationDot}
              title="Convenient & Safe Location"
              text="Medicare, Unit 1, Amanda Court, Cnr Thabo Sehume & Francis Baard, Pretoria, 0007. Easily accessible with flexible scheduling to suit your lifestyle."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <InfoBlock
              Icon={FaGear}
              title="State-of-the-Art Technology"
              text="We utilize the latest dental equipment and techniques for precise diagnoses and effective, long-lasting treatments — delivering the highest standard of care."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <InfoBlock
              Icon={FaSuitcaseMedical}
              title="Highly Experienced Team"
              text="Our team of highly experienced dentists ensures expert care in every procedure. Trust us to provide reliable, top-quality dental treatment every time."
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const InfoBlock = ({ Icon, title, text }) => (
  <motion.div
    className="flex flex-row gap-5 items-start border border-gray-300 rounded-xl p-6 w-full max-w-md bg-white shadow-md hover:shadow-xl transition-all duration-300"
    whileHover={{ scale: 1.03 }}
  >
    <Icon className="text-5xl sm:text-6xl text-black flex-shrink-0 mt-1" />
    <div className="flex flex-col">
      <h2 className="text-xl sm:text-2xl text-black font-semibold">{title}</h2>
      <p className="text-base sm:text-lg text-gray-800 pt-2 leading-relaxed">
        {text}
      </p>
    </div>
  </motion.div>
);

export default WhyChooseUs;