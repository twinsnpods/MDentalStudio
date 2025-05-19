import React from "react";
import Calander from "./Calander";
import { FaPhone } from "react-icons/fa6";

const Treatments = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-16 px-4">
      
      {/* Step 1 */}
      <h1 className="text-black text-5xl sm:text-6xl font-bold mb-8">1. Your First Step</h1>
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mb-16">
        <div className="flex-1">
          <h2 className="text-4xl text-black font-bold mb-4">Schedule Your Visit</h2>
          <p className="text-black text-2xl">
            Effortlessly schedule your appointment on our easy-to-use website at a time that suits you.
          </p>
        </div>
        <div className="flex-1">
          <Calander />
        </div>
      </div>

      {/* Step 2 */}
      <h1 className="text-black text-5xl sm:text-6xl font-bold mb-8">2. Your Second Step</h1>
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mb-16">
        <img
          src="/boy.png"
          alt="Consultation"
          className="w-[300px] h-auto rounded-2xl shadow-2xl"
        />
        <div className="flex-1">
          <h2 className="text-4xl text-black font-bold mb-4">Tailored Consultation</h2>
          <p className="text-black text-2xl">
            Our experienced dentists will evaluate your oral health and recommend customized treatment options just for you.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <h1 className="text-black text-5xl sm:text-6xl font-bold mb-8">3. Third and Final Step</h1>
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mb-16">
        <div className="flex-1">
          <h2 className="text-4xl text-black font-bold mb-4">Achieve Your Perfect Smile</h2>
          <p className="text-black text-2xl">
            Our personalized treatment plan is designed to meet your needs, ensuring a healthy and radiant smile.
          </p>
        </div>
        <img
          src="/streetGirl.png"
          alt="Smile"
          className="w-[300px] h-auto rounded-2xl shadow-2xl"
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        <button className="bg-white text-black text-xl border-2 border-black rounded-xl px-6 py-3">
          Book Appointment
        </button>
        <button className="bg-black text-white text-xl rounded-xl px-6 py-3 flex items-center gap-2">
          Book Callback <FaPhone />
        </button>
      </div>
    </div>
  );
};

export default Treatments;
