import React from 'react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const titleVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  hover: {
    scale: 1.04,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transition: { duration: 0.4 },
  },
};

const InfoPanel = () => {
  return (
    <section id="home" className="bg-white text-black flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 max-w-4xl leading-tight"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Expert Dental Care with a Compassionate Touch
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch justify-center w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Card 1 */}
        <motion.div
          className="flex flex-col justify-between text-center p-6 md:p-8 border-2 border-gray-200 rounded-2xl shadow-xl bg-white flex-1 hover:border-blue-300 transition-colors"
          variants={cardVariants}
          whileHover="hover"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Healthy Smiles</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              At Dr Vhulahani's mobile dentist practice, we deliver expert, compassionate care in a warm, welcoming environment. From routine check-ups to advanced treatments — we help keep your smile healthy and confident.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="flex flex-col justify-between text-center p-6 md:p-8 border-2 border-gray-200 rounded-2xl shadow-xl bg-white flex-1 hover:border-blue-300 transition-colors"
          variants={cardVariants}
          whileHover="hover"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Your Smile, Our Priority</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Experience high-quality dental care from our skilled professionals at Dr Vhulahani's mobile practice. Your health, comfort, and beautiful smile are always our top priorities — personalized, gentle, and dedicated.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="flex flex-col justify-between items-center text-center p-6 md:p-8 border-2 border-gray-200 rounded-2xl shadow-xl bg-white flex-1 hover:border-blue-300 transition-colors"
          variants={cardVariants}
          whileHover="hover"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Carefree & Smiling :)</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Your comfort is everything at Dr Vhulahani's mobile dentist practice. We provide gentle, personalized dental care designed for a lifetime of healthy, radiant smiles — stress-free from start to finish.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InfoPanel;