import React, { useState, useMemo } from "react";
import { Link, useLoaderData } from "react-router";

const BrowseTasks = () => {
  const allTasks = useLoaderData();

  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [...new Set(allTasks.map((task) => task.category))];

  const filteredAndSortedTasks = useMemo(() => {
    let filtered = [...allTasks];

    if (selectedCategory) {
      filtered = filtered.filter((task) => task.category === selectedCategory);
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.budget - b.budget);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.budget - a.budget);
    }

    return filtered;
  }, [allTasks, sortOrder, selectedCategory]);

  return (
    <div className="container mx-auto px-3 lg:px-0 pt-30 pb-10">
      <h2 className="text-3xl font-bold text-center mb-8">Browse All Tasks</h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div>
          <label className="mr-2 font-medium">Sort by Budget:</label>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered"
            defaultValue=""
          >
            <option value="">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {/* Filter by Category */}
        <div>
          <label className="mr-2 font-medium">Filter by Category:</label>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select select-bordered"
            defaultValue=""
          >
            <option value="">All</option>
            {categories.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 🧩 Task Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredAndSortedTasks.length > 0 ? (
          filteredAndSortedTasks.map((task) => (
            <div
              key={task._id}
              className="flex flex-col justify-between h-full shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
                <p className="text-sm mb-1">
                  <strong>Category:</strong> {task.category}
                </p>
                <p className="text-sm mb-1">
                  <strong>Budget:</strong> ${task.budget}
                </p>
                <p className="text-sm mb-1">
                  <strong>Deadline:</strong> {task.deadline} days
                </p>
                <p className="text-sm mb-3">
                  {task.description?.slice(0, 80)}...
                </p>
              </div>

              {/* Button Always at Bottom */}
              <Link to={`/task/${task._id}`} className="mt-4">
                <button className="btn btn-sm btn-primary w-full">
                  See Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No tasks found with current filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default BrowseTasks;
