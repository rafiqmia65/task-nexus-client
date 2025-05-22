import React from "react";

const RecentTasks = ({ featuredTasks }) => {
  return (
    <div className="my-10 container mx-auto px-3 lg:px-0">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          Recently Posted Tasks with Upcoming Deadlines
        </h2>
        <p className="">
          Explore the most urgent tasks and grab the opportunity to bid now!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredTasks.map((task) => (
          <div
            key={task._id}
            className="p-6 rounded-lg border border-white shadow-md hover:shadow-lg transition cursor-default"
          >
            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
            <p className=" mb-1">
              <span className="font-medium">Category:</span> {task.category}
            </p>
            <p className=" mb-1">
              <span className="font-medium">Budget:</span> ${task.budget}
            </p>
            <p className="">
              <span className="font-medium">Deadline:</span> {task.deadline}{" "}
              days
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTasks;
