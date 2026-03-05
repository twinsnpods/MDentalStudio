import React from 'react';
import { motion } from 'motion/react'; // ← Updated import (or use "framer-motion" if preferred)
import { FaEnvelope, FaTiktok, FaFacebookF, FaInstagram } from 'react-icons/fa';

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
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

function Footer() {
  return (
    <div id="more" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        {/* Address Section */}
        <motion.div
          className="flex flex-col m-6 md:m-10 flex-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl font-bold pb-3 text-center md:text-left text-black"
          >
            Dr Vhulahani
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl pb-2 text-center md:text-left text-black"
          >
            Medicare, Unit 1, Amanda Court,<br />
            Cnr Thabo Sehume & Francis Baard,<br />
            Pretoria, 0007
          </motion.p>
          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl pb-2 text-center md:text-left text-black">
            Phone: +27 84 541 7695
          </motion.p>
          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl pb-2 text-center md:text-left text-black">
            Email: info@mobiledentist.co.za
          </motion.p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          className="flex flex-col m-6 md:m-10 flex-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl font-bold pb-3 text-center md:text-left text-black"
          >
            LINKS
          </motion.h1>
          {['Home', 'About Us', 'Services', 'Our Shop', 'Appointment', 'Contact'].map((link, i) => (
            <motion.p
              key={i}
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl pb-2 text-center md:text-left text-black cursor-pointer hover:text-blue-600 transition-colors"
            >
              {link}
            </motion.p>
          ))}
        </motion.div>

        {/* Social Media & Map Section */}
        <motion.div
          className="flex flex-col m-6 md:m-10 flex-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl font-bold pb-3 text-center md:text-left text-black"
          >
            SOCIAL MEDIA
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start gap-6 md:gap-10 pt-4 pb-8 text-black"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <FaEnvelope className="text-3xl sm:text-4xl" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="TikTok"
            >
              <FaTiktok className="text-3xl sm:text-4xl" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Facebook"
            >
              <FaFacebookF className="text-3xl sm:text-4xl" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl sm:text-4xl" />
            </motion.a>
          </motion.div>

          {/* Google Map with animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full rounded-xl overflow-hidden shadow-2xl border-2 border-gray-200"
          >
            <iframe
              title="Dr Vhulahani Mobile Dentist Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.5!2d28.18857!3d-25.74922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560f000000001%3A0x0!2sAmanda+Court%2C+Cnr+Thabo+Sehume+%26+Francis+Baard%2C+Pretoria%2C+0007!5e0!3m2!1sen!2sza!4v1741280000000!5m2!1sen!2sza"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;