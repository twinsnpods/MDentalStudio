import React from "react";
import {
  FaBookBookmark,
  FaGear,
  FaHouse,
  FaLocationDot,
  FaSuitcaseMedical,
  FaThumbsUp,
} from "react-icons/fa6";

const WhyChoseUs = () => {
  return (
    <div className="bg-white">
      {/* Title */}
      <div>
        <h1 className="text-black text-3xl sm:text-5xl font-bold text-center pt-10 pb-10">
          Why Choose Us?
        </h1>
      </div>

      {/* Top Three Boxes */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center justify-center px-4 sm:px-10 pb-20">
        {[1, 2, 6].map((img, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl p-4 w-full sm:w-72"
          >
            <img
              className="w-36 h-36 border-gray-300 rounded-3xl shadow-2xl"
              src={`${img}.png`}
              alt="Why Choose Us"
            />
            <p className="text-xl sm:text-2xl text-black pt-4 pb-2 text-center capitalize">
              {index === 0 && "we’re careful"}
              {index === 1 && "we’re professionals"}
              {index === 2 && "we’re family"}
            </p>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div>
        <h1 className="text-3xl sm:text-5xl text-black font-bold text-center pt-10 pb-10">
          Most importantly
        </h1>
      </div>

      {/* Info Rows */}
      <div className="flex flex-col gap-10 px-4 sm:px-10 pb-20">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center">
          <InfoBlock
            Icon={FaBookBookmark}
            title="Personalized Care"
            text="At Motlokwa Dental Studio, we focus on you. We take time to understand your concerns and create personalized treatment plans that align with your unique needs and goals."
          />
          <InfoBlock
            Icon={FaHouse}
            title="Comfortable"
            text="Our clinic provides a warm, welcoming atmosphere to ensure your dental visits are as pleasant and stress-free as possible, with a compassionate staff ready to assist."
          />
          <InfoBlock
            Icon={FaThumbsUp}
            title="Patient-Centered"
            text="Your comfort and satisfaction are our priorities. We aim to exceed your expectations with exceptional care focused on your convenience."
          />
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center">
          <InfoBlock
            Icon={FaLocationDot}
            title="Safe Location"
            text="Located at 3 Molyneux, Springs Selcourt 1560, our clinic is easily accessible, with flexible scheduling."
          />
          <InfoBlock
            Icon={FaGear}
            title="State-of-the-Art"
            text="We use the latest dental technology and equipment to provide accurate diagnoses and effective treatments, ensuring the highest standard."
          />
          <InfoBlock
            Icon={FaSuitcaseMedical}
            title="Experienced"
            text="Our team of highly experienced dentists ensures you receive expert care in every procedure. Trust us to deliver top-quality care."
          />
        </div>
      </div>
    </div>
  );
};

const InfoBlock = ({ Icon, title, text }) => (
  <div className="flex flex-row gap-4 items-start border-2 border-b-black rounded-xl p-4 w-full max-w-md shadow-md">
    <Icon className="text-5xl sm:text-6xl text-black mt-1" />
    <div className="flex flex-col">
      <h1 className="text-xl sm:text-2xl text-black font-semibold">{title}</h1>
      <p className="text-sm sm:text-lg text-black pt-2">{text}</p>
    </div>
  </div>
);

export default WhyChoseUs;
