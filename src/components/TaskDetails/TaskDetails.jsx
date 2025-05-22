import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthContext";

const TaskDetails = () => {
  const { user } = use(AuthContext);
  const task = useLoaderData();
  const [bidsCount, setBidsCount] = useState(task.bidsCount || 0);

  const handleBid = (task) => {
    const bidsDetails = {
      taskId: task._id,
      bidderName: user.displayName,
      bidderEmail: user.email,
      bidTime: new Date(),
    };

    fetch("https://task-nexus-server.vercel.app/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bidsDetails),
    })
      .then((res) => res.json())
      .then(() => {
        return fetch(
          `https://task-nexus-server.vercel.app/allTasks/${task._id}/bid`,
          {
            method: "PATCH",
          }
        );
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setBidsCount(bidsCount + 1);
          Swal.fire("Success!", "You bid for this task.", "success");
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto pt-30 pb-10 px-3 lg:px-0">
      <h2 className="text-2xl font-bold mb-4">
        You bid for {bidsCount} opportunities.
      </h2>

      <div className="p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold  mb-6 border-b pb-2">{task.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div>
            <p className="mb-2">
              <span className="font-semibold ">Category:</span>{" "}
              <span>{task.category}</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold ">Deadline:</span>{" "}
              <span>{task.deadline} days</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold ">Budget:</span>{" "}
              <span>${task.budget}</span>
            </p>
          </div>

          <div>
            <p className="mb-2">
              <span className="font-semibold ">Posted By:</span> {task.userName}
            </p>
            <p className="mb-2">
              <span className="font-semibold ">Email:</span> {task.userEmail}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold  mb-2">Description:</h3>
          <p className=" leading-relaxed  p-4 rounded-lg border border-gray-200">
            {task.description}
          </p>
        </div>

        <button
          onClick={() => handleBid(task)}
          className="btn btn-primary mt-5 w-full"
        >
          Bid Now
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
