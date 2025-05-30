import React from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaWhatsappSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const SMedia = () => {
    return (
        <div className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
                {/* Social Icons */}
                <div className="flex flex-wrap justify-center gap-8">
                    <FaTwitterSquare className="text-black text-5xl sm:text-6xl hover:scale-125 transition-transform duration-300" />
                    <FaInstagramSquare className="text-pink-500 text-5xl sm:text-6xl hover:scale-125 transition-transform duration-300" />
                    <FaFacebookSquare className="text-blue-600 text-5xl sm:text-6xl hover:scale-125 transition-transform duration-300" />
                    <FaWhatsappSquare className="text-green-500 text-5xl sm:text-6xl hover:scale-125 transition-transform duration-300" />
                    <FaYoutubeSquare className="text-red-500 text-5xl sm:text-6xl hover:scale-125 transition-transform duration-300" />
                    <FaTiktok className="text-black text-5xl sm:text-6xl hover:scale-125 transition-transform duration-300" />
                </div>

                {/* Follow Us Text */}
                <h1 className="text-2xl sm:text-4xl font-semibold text-black text-center">
                    Follow us on social media
                </h1>

                {/* Footer Credit */}
                <p className="text-sm sm:text-base text-black text-center">
                    Website designed by TwinProduction-SA
                </p>
            </div>
        </div>
    );
};

export default SMedia;