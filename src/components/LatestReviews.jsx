import React from "react";
import { FaStar } from "react-icons/fa6";

const reviews = [
  {
    name: "Thabo Mokoena",
    date: "12 March 2025",
    image: "jacob.png",
  },
  {
    name: "Lerato Ndlovu",
    date: "27 February 2025",
    image: "theresa.png",
  },
  {
    name: "Sipho Dlamini",
    date: "3 January 2025",
    image: "tommy.png",
  },
];

const LatestReviews = () => {
  return (
    <div id="blog" className="bg-white flex flex-col gap-4 items-center justify-center py-20 px-4">
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl text-black font-bold text-center pb-10">
        Latest Reviews
      </h1>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full max-w-screen-xl">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl shadow-2xl w-full max-w-md p-6"
          >
            {/* Stars */}
            <div className="flex flex-row gap-2 items-start justify-center">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-2xl text-amber-300" />
              ))}
              <FaStar className="text-2xl text-gray-300" />
            </div>

            {/* Title */}
            <div className="text-2xl sm:text-3xl text-black font-bold text-center pt-4 pb-2">
              Excellent Service!
            </div>

            {/* Body */}
            <div className="text-md sm:text-xl text-black text-center pb-5">
              I had a fantastic experience at Motlokwa Dental Studio. The staff was friendly,
              and the treatment was quick and painless. My teeth have never looked better.
              Highly recommend!
            </div>

            {/* Reviewer */}
            <div className="flex flex-row items-center gap-4 pt-4">
              <img
                className="w-16 h-16 border border-gray-400 rounded-full shadow-2xl"
                src={review.image}
                alt={review.name}
              />
              <div className="text-left">
                <h1 className="text-lg font-bold text-black">{review.name}</h1>
                <p className="text-sm text-black">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestReviews;
