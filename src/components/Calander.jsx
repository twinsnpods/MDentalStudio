import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white m-0">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Pick a Date</h1>

        <div className="inline-block border border-gray-300 rounded-lg p-2 bg-white shadow">
          <DatePicker
            onChange={setDate}
            value={date}
            clearIcon={null}
            calendarIcon={null}
            className="text-sm"
          />
        </div>

        <p className="mt-4 text-gray-600">
          Selected: <span className="font-medium">{date?.toDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export default Calendar;
