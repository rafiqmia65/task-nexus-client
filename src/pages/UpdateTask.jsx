import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const updateTask = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());

    fetch(`https://task-nexus-server.vercel.app/allTasks/${updateTask._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Task updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Update error:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while updating.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="pt-30 pb-10">
      <div className="container mx-auto px-3 lg:px-0">
        <h2 className="text-3xl font-semibold text-center mb-6">Update Task</h2>
        <form
          onSubmit={handleUpdate}
          className="space-y-4 md:max-w-lg mx-auto  p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-default"
        >
          <label className="label">Task Title</label>
          <input
            type="text"
            name="title"
            defaultValue={updateTask.title}
            placeholder="Task Title"
            className=" border py-2 rounded indent-3 w-full"
            required
          />
          <label className="label">Select Category</label>
          <select
            name="category"
            defaultValue={updateTask.category}
            className=" border py-2 rounded indent-3 w-full"
            placeholder="Select Category"
            required
          >
            <option value="Select Category" disabled>
              Select Category
            </option>
            <option value="Web Development" className="text-gray-900">
              Web Development
            </option>
            <option value="Graphic Design" className="text-gray-900">
              Graphic Design
            </option>
            <option value="Writing" className="text-gray-900">
              Writing
            </option>
            <option value="Marketing" className="text-gray-900">
              Marketing
            </option>
            <option value="Ui/Ux Design" className="text-gray-900">
              Ui/Ux Design
            </option>
            <option value="React Developer" className="text-gray-900">
              React Developer
            </option>
          </select>
          <label className="label">Description</label>
          <textarea
            name="description"
            defaultValue={updateTask.description}
            placeholder="Description"
            className=" border py-2 rounded indent-3 w-full"
            rows={4}
            required
          ></textarea>
          <label className="label">Deadline</label>
          <input
            type="text"
            defaultValue={updateTask.deadline}
            name="deadline"
            className=" border py-2 rounded indent-3 w-full"
            required
          />
          <label className="label">Budget</label>
          <input
            type="text"
            name="budget"
            defaultValue={updateTask.budget}
            placeholder="Budget"
            className=" border py-2 rounded indent-3 w-full"
            required
          />
          <label className="label">Name</label>
          <input
            type="text"
            name="userName"
            value={updateTask.userName}
            className=" border  py-2 rounded indent-3 w-full"
            readOnly
          />
          <label className="label">Email</label>
          <input
            type="text"
            name="userEmail"
            value={updateTask.userEmail}
            className=" border py-2 rounded indent-3 w-full"
            readOnly
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
