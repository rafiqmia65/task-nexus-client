import React from "react";

const RecentTasks = ({ featuredTasks }) => {
  return (
    <div className="my-10 container mx-auto px-3 lg:px-0">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Recently Posted Tasks with Upcoming Deadlines
        </h2>
        <p className="text-gray-500 mt-2">
          Explore the most urgent tasks and grab the opportunity to bid now!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredTasks.map((task) => (
          <div
            key={task._id}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-400"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {task.title}
            </h3>
            <p className="text-gray-700 mb-1">
              <span className="font-medium text-gray-900">Category:</span>{" "}
              {task.category}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium text-gray-900">Budget:</span> $
              {task.budget}
            </p>
            <p className="text-gray-700">
              <span className="font-medium text-gray-900">Deadline:</span>{" "}
              {task.deadline} days
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTasks;
