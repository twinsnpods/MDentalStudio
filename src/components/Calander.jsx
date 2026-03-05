import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaChevronLeft, FaChevronRight, FaTooth } from "react-icons/fa6";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get first day of month (0 = Sunday)
  const firstDay = new Date(year, month, 1).getDay();
  // Get number of days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate array of days for the grid
  const daysArray = [];
  for (let i = 0; i < firstDay; i++) {
    daysArray.push(null); // Empty slots
  }
  for (let day = 1; day <= daysInMonth; day++) {
    daysArray.push(day);
  }

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(year, month, day);
    setSelectedDate(clickedDate);
  };

  // Fake availability (you can expand this later)
  const isAvailable = (day) => {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 6; // Closed on weekends
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 flex items-center justify-between">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-white/20 rounded-full transition-all active:scale-90"
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <FaTooth className="text-2xl" />
            Dr Vhulahani Dental
          </div>
          <p className="text-2xl font-bold tracking-tight mt-1">
            {monthNames[month]} {year}
          </p>
        </div>

        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-white/20 rounded-full transition-all active:scale-90"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-px bg-gray-100 px-4 pt-4 text-xs font-medium text-gray-500">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-100 p-4">
        {daysArray.map((day, index) => (
          <motion.button
            key={index}
            onClick={() => day && handleDateClick(day)}
            disabled={!day || !isAvailable(day)}
            whileHover={day && isAvailable(day) ? { scale: 1.1 } : {}}
            whileTap={day && isAvailable(day) ? { scale: 0.95 } : {}}
            className={`
              aspect-square flex items-center justify-center text-lg font-medium rounded-2xl transition-all relative
              ${!day ? "invisible" : ""}
              ${day && !isAvailable(day) ? "text-gray-300 cursor-not-allowed" : "hover:bg-blue-50"}
              ${
                selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === month &&
                selectedDate.getFullYear() === year
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white"
              }
            `}
          >
            {day}
            {day && isAvailable(day) && selectedDate?.getDate() !== day && (
              <div className="absolute bottom-1 w-1.5 h-1.5 bg-green-400 rounded-full" />
            )}
          </motion.button>
        ))}
      </div>

      {/* Selected Date Info */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-100 p-6 bg-white"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl">
                📅
              </div>
              <div>
                <p className="text-sm text-gray-500">You selected</p>
                <p className="text-2xl font-bold text-black">
                  {selectedDate.toLocaleDateString("en-ZA", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-green-600 font-medium flex items-center justify-center gap-2">
                ✓ Available — Mobile Dentist Pretoria
              </p>
              <button
                onClick={() => alert(`✅ Booking request sent for ${selectedDate.toLocaleDateString("en-ZA")}! We will call you shortly.`)}
                className="mt-4 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-2xl text-lg active:scale-95 transition-transform"
              >
                Book This Day
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Calendar;