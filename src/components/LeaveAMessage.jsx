import React from "react";

const LeaveAMessage = () => {
    return (
        <div id="contact-us" className="bg-white py-20 px-4 flex flex-col items-center justify-center">
            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl text-black font-bold text-center pb-10">
                Leave us a message
            </h1>

            {/* Form Container */}
            <form className="w-full max-w-3xl bg-gray-50 p-8 rounded-2xl border border-gray-300 shadow-2xl flex flex-col gap-6">
                {/* Name */}
                <label className="text-xl font-bold text-black">Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="border-2 border-gray-300 rounded-xl text-lg px-4 py-3 shadow-md"
                />

                {/* Surname */}
                <label className="text-xl font-bold text-black">Surname</label>
                <input
                    type="text"
                    placeholder="Enter your surname"
                    className="border-2 border-gray-300 rounded-xl text-lg px-4 py-3 shadow-md"
                />

                {/* Email */}
                <label className="text-xl font-bold text-black">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="border-2 border-gray-300 rounded-xl text-lg px-4 py-3 shadow-md"
                />

                {/* Message */}
                <label className="text-xl font-bold text-black">Message</label>
                <textarea
                    placeholder="Leave us a message"
                    rows={5}
                    className="border-2 border-gray-300 rounded-xl text-lg px-4 py-3 shadow-md resize-none"
                />

                {/* Button */}
                <button
                    type="submit"
                    className="bg-black text-white text-xl font-bold py-3 px-6 rounded-2xl hover:bg-gray-800 transition duration-300"
                >
                    Submit Message
                </button>
            </form>
        </div>
    );
};

export default LeaveAMessage;
