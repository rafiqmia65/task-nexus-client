import React from "react";
import { useLoaderData } from "react-router";

const TaskDetails = () => {
  const task = useLoaderData();

  console.log(task);

  return (
    <div className="max-w-6xl mx-auto pt-30 pb-10 px-3 lg:px-0">
      <div className="bg-gradient-to-r from-blue-50 to-purple-100 p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-2">
          {task.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="mb-2">
              <span className="font-semibold text-gray-600">Category:</span>{" "}
              <span className="text-indigo-600">{task.category}</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-600">Deadline:</span>{" "}
              <span className="text-red-500">{task.deadline} days</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-600">Budget:</span>{" "}
              <span className="text-green-600">${task.budget}</span>
            </p>
          </div>

          <div>
            <p className="mb-2">
              <span className="font-semibold text-gray-600">Posted By:</span>{" "}
              {task.userName}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-600">Email:</span>{" "}
              {task.userEmail}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Description:
          </h3>
          <p className="text-gray-700 leading-relaxed bg-white p-4 rounded-lg border border-gray-200">
            {task.description}
          </p>
        </div>

        <button onClick={handleBid} className="btn btn-primary mt-5 w-full">Bid Now</button>
      </div>
    </div>
  );
};

export default TaskDetails;
