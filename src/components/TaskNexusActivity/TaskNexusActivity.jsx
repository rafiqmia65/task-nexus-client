import React from "react";
import {
  FaUserPlus,
  FaBriefcase,
  FaCheckCircle,
  FaGavel,
} from "react-icons/fa";

const TaskNexusActivity = () => {
  const stats = [
    {
      icon: <FaUserPlus size={30} className="text-blue-600" />,
      label: "New Users This Week",
      value: "342+",
    },
    {
      icon: <FaBriefcase size={30} className="text-yellow-600" />,
      label: "Tasks Posted",
      value: "127+",
    },
    {
      icon: <FaCheckCircle size={30} className="text-green-600" />,
      label: "Tasks Completed",
      value: "95+",
    },
    {
      icon: <FaGavel size={30} className="text-purple-600" />,
      label: "Live Bids",
      value: "48+",
    },
  ];

  return (
    <div className="pt-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          📈 What's Happening on TaskNexus
        </h2>
        <p className="mb-10 text-gray-600">
          See how active and vibrant our freelancing platform is right now!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskNexusActivity;
