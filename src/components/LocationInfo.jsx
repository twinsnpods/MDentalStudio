import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";

const Locationinfo = () => {
    return (
        <section className="relative w-full min-h-screen bg-black">
            {/* Background Image */}
            <img 
                src="/bkimage.png" 
                alt="Dental clinic background" 
                className="absolute inset-0 w-full h-full object-cover z-0" 
            />
            
            {/* Black + blur overlay - full width and height */}
            <div className="absolute inset-0 w-full h-full bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-6 px-4 py-8 md:px-8 md:py-16 text-center">
                
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-[800px]">
                    Trusted Family Dentist in East Rand
                </h1>

                <div className="flex items-center gap-2 mt-2">
                    <FaLocationPin className="h-5 w-5 text-blue-500" />
                    <p className="text-white text-lg sm:text-xl">
                        1234 Dental St, Tooth City, CA 90210
                    </p>
                </div>

                <div className="flex items-center gap-2 bg-black bg-opacity-70 px-4 py-2 rounded-full mt-4">
                    <h3 className="text-white text-base sm:text-lg">Shining smiles, Guaranteed!</h3>
                    <FaSmile className="text-white text-xl" />
                </div>

                <div className="flex flex-wrap gap-4 mt-6 justify-center">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-white text-black px-6 py-2 rounded-full transition-transform duration-300 hover:scale-105">
                        Book Appointment
                    </button>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-white to-cyan-400 text-black px-6 py-2 rounded-full transition-transform duration-300 hover:scale-105">
                        Request Callback
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Locationinfo;




