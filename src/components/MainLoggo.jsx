import React from "react";

const MainLoggo = () => {
    return (
        <section className="w-full min-h-screen bg-white flex items-center justify-center">
            <img 
                src="mobiledentist.jpg" 
                alt="Mobile Dentist full-screen logo" 
                className="w-full max-w-[800px] h-auto object-contain z-10 transition-transform duration-300 hover:scale-105 px-4 sm:px-6" 
            />
        </section>
    );
};

export default MainLoggo;
