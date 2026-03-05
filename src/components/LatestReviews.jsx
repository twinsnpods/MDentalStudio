import React from "react";
import { FaStar } from "react-icons/fa6";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Thabo Mokoena",
    date: "12 March 2025",
    image: "jacob.png",
    title: "Excellent Service!",
    text: "I had a fantastic experience at Dr Vhulahani's mobile dentist practice. The staff was friendly, and the treatment was quick and painless. My teeth have never looked better. Highly recommend — best service ever!",
  },
  {
    name: "Lerato Ndlovu",
    date: "27 February 2025",
    image: "theresa.png",
    title: "Gentle & Professional Care",
    text: "I was really nervous about my first deep cleaning in years, but the team made me feel completely at ease. Dr Vhulahani explained everything step by step, and there was zero pain during or after. My smile feels so fresh and healthy now — thank you!",
  },
  {
    name: "Sipho Dlamini",
    date: "3 January 2025",
    image: "tommy.png",
    title: "Life-Changing Emergency Fix",
    text: "I chipped my front tooth right before a big family event and was panicking. Called Dr Vhulahani's practice, and they got me in the same day. The repair was fast, looks perfect, and I felt no discomfort at all. The whole team is so caring and efficient — highly recommended!",
  },
];

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

const cardVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  hover: {
    scale: 1.04,
    boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.4 },
  },
};

const titleVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const LatestReviews = () => {
  return (
    <div id="blog" className="bg-white flex flex-col gap-4 items-center justify-center py-16 sm:py-20 px-4 sm:px-6">
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-5xl text-black font-bold text-center pb-10"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Latest Reviews
      </motion.h1>

      {/* Cards Container */}
      <motion.div
        className="flex flex-col lg:flex-row gap-8 sm:gap-10 items-center justify-center w-full max-w-screen-xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center border-2 border-gray-300 rounded-2xl shadow-xl bg-white w-full max-w-md p-6 overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Stars - full 5 for 5-star reviews */}
            <div className="flex flex-row gap-1 items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-2xl sm:text-3xl text-amber-400" />
              ))}
            </div>

            {/* Review Title */}
            <div className="text-xl sm:text-2xl text-black font-bold text-center pt-5 pb-3">
              {review.title}
            </div>

            {/* Review Body */}
            <p className="text-base sm:text-lg text-gray-800 text-center pb-6 leading-relaxed">
              {review.text}
            </p>

            {/* Reviewer Info */}
            <div className="flex flex-row items-center gap-4 pt-4 border-t border-gray-200 w-full justify-center sm:justify-start">
              <motion.img
                src={review.image}
                alt={`${review.name}'s profile`}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover border-2 border-gray-300 rounded-full shadow-lg"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3 }}
              />
              <div className="text-left">
                <h2 className="text-lg sm:text-xl font-bold text-black">{review.name}</h2>
                <p className="text-sm sm:text-base text-gray-600">{review.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LatestReviews;