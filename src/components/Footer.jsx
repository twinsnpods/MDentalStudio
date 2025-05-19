import React from "react";
import { FaLocationPin, FaMessage, FaPhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-white py-16 px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div className="flex flex-col gap-10 text-center lg:text-left">
                    <div className="flex flex-row items-center gap-4">
                        <FaMessage className="text-2xl sm:text-4xl text-blue-500" />
                        <p className="text-lg sm:text-2xl text-black break-all">Lerato08.lm@gmail.com</p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <FaPhone className="text-2xl sm:text-4xl text-blue-500" />
                        <p className="text-lg sm:text-2xl text-black">071 653 6220 / 072 559 7206</p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <FaLocationPin className="text-2xl sm:text-4xl text-blue-500" />
                        <p className="text-lg sm:text-2xl text-black">3 Molyneux, Springs Selcourt 15</p>
                    </div>
                </div>

                {/* Logo */}
                <div className="flex justify-center">
                    <img
                        src="DentalStudio2.png"
                        alt="Dental Studio Logo"
                        className="w-60 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
