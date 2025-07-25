import React, { useState } from "react";

const subjects = ["Math", "English", "Science"];
const TOTAL_MODULES = 10;

export default function StudyProgressTracker() {
  const [progress, setProgress] = useState({
    Math: 0,
    English: 0,
    Science: 0,
  });

  const handleCompleteModule = (subject) => {
    setProgress((prev) => ({
      ...prev,
      [subject]: Math.min(prev[subject] + 1, TOTAL_MODULES),
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-center">📘 Study Progress Tracker</h1>
      {subjects.map((subject) => {
        const completed = progress[subject];
        const percentage = (completed / TOTAL_MODULES) * 100;

        return (
          <div key={subject} className="space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{subject}</h2>
              <span className="text-sm text-gray-600">{percentage}% completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: ${percentage}% }}
              />
            </div>
            <button
              onClick={() => handleCompleteModule(subject)}
              className="mt-2 px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm"
            >
              Mark Module Complete
            </button>
          </div>
        );
      })}
    </div>
  );
}