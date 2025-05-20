import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link, useLoaderData } from "react-router";

const MyPostedTasks = () => {
  const { user } = use(AuthContext);
  const allTasks = useLoaderData();
  const { displayName, email } = user;

  const [myTasks, setMyTasks] = useState([]);

  useEffect(() => {
    const filterTasks = allTasks.filter(
      (task) => task.userName === displayName && task.userEmail === email
    );
    setMyTasks(filterTasks);
  }, [allTasks, displayName, email]);

  console.log(myTasks);

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0 pt-30 pb-10">
        {myTasks.length === 0 && (
          <div className="text-center py-10 bg-gray-50 border border-dashed border-gray-300 rounded-lg mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Tasks Found
            </h3>
            <p className="text-gray-500">
              You haven't posted any tasks yet. Start by creating a new one!
            </p>
            <Link to="/addTask">
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                Post a Task
              </button>
            </Link>
          </div>
        )}

        <h2 className="text-3xl font-bold mb-6 text-center">My Posted Tasks</h2>

        <div className="overflow-x-auto ">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-5 text-left">Title</th>
                <th className="py-3 px-5 text-left">Category</th>
                <th className="py-3 px-5 text-left">Budget</th>
                <th className="py-3 px-5 text-left">Deadline</th>
                <th className="py-3 px-5 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.map((task) => (
                <tr key={task._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-5">{task.title}</td>
                  <td className="py-3 px-5">{task.category}</td>
                  <td className="py-3 px-5">${task.budget}</td>
                  <td className="py-3 px-5">{task.deadline} days</td>
                  <td className="py-3 px-5">
                    <div className="flex flex-wrap gap-2">
                      <Link to={`/updateTask/${task._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                          Update
                        </button>
                      </Link>
                      <button
                        // onClick={() => handleDelete(task._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                      >
                        Delete
                      </button>
                      <Link to={`/bids/${task._id}`}>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm">
                          Bids
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPostedTasks;
