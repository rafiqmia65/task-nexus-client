import React from "react";
import { Link, useLoaderData } from "react-router";

const BrowseTasks = () => {
  const allTasks = useLoaderData();

  return (
    <div className="container mx-auto px-3 lg:px-0 pt-30 pb-10">
      <h2 className="text-3xl font-bold text-center mb-8">Browse All Tasks</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allTasks.map((task) => (
          <div
            key={task._id}
            className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Category:</strong> {task.category}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Budget:</strong> ${task.budget}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Deadline:</strong> {task.deadline} days
            </p>
            <p className="text-sm text-gray-600 mb-3">
              {task.description?.slice(0, 80)}...
            </p>

            <Link to={`/task/${task._id}`}>
              <button className="btn btn-sm btn-primary w-full">
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
