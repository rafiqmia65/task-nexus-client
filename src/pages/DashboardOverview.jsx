import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import {
  FaTasks,
  FaClipboardCheck,
  FaHourglassHalf,
  FaUserAlt,
  FaSpinner,
  FaUsers,
} from "react-icons/fa";

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);

  const stats = [
    {
      title: "Total Tasks",
      value: 150,
      icon: <FaTasks className="text-blue-500" size={30} />,
    },
    {
      title: "My Posted Tasks",
      value: 12,
      icon: <FaUserAlt className="text-green-500" size={30} />,
    },
    {
      title: "Completed Tasks",
      value: 8,
      icon: <FaClipboardCheck className="text-purple-500" size={30} />,
    },
    {
      title: "Pending Bids",
      value: 4,
      icon: <FaHourglassHalf className="text-yellow-500" size={30} />,
    },
    {
      title: "Tasks In Progress",
      value: 3,
      icon: <FaSpinner className="text-pink-500 animate-spin" size={30} />,
    },
    {
      title: "Total Bidders",
      value: 45,
      icon: <FaUsers className="text-orange-500" size={30} />,
    },
  ];

  return (
    <div className="space-y-10">
      {/* Top section with user info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-lg shadow">
        <img
          src={user?.photoURL || "https://i.ibb.co/2kR5zq0/avatar.png"}
          alt="User Profile"
          className="w-16 h-16 rounded-full border"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-1">
            👋 Welcome, {user?.displayName || "User"}!
          </h2>
          <p className="text-sm mb-3">Email: {user?.email}</p>

          {/* User related message */}
          <p className="text-sm max-w-md">
            Thank you for being a valued member of TaskNexus. Your active
            participation helps our community grow stronger every day. Keep up
            the great work and continue to explore exciting projects!
          </p>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-lg shadow hover:shadow-md border border-gray-100 flex items-center gap-4 transition "
          >
            <div>{item.icon}</div>
            <div>
              <p className="text-2xl font-bold">{item.value}</p>
              <p className=" text-sm">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Company information section */}
      <div className="p-6  rounded-lg shadow max-w-4xl mx-auto text-center">
        <h3 className="text-lg font-semibold mb-2">About TaskNexus</h3>
        <p className="text-sm max-w-xl mx-auto">
          TaskNexus is a cutting-edge freelancing platform dedicated to
          connecting talented freelancers with clients across the globe. We
          pride ourselves on fostering a transparent, secure, and user-friendly
          environment where quality work and professional growth come first.
          Join us and be part of a community that values your skills and
          ambition.
        </p>
      </div>
    </div>
  );
};

export default DashboardOverview;
