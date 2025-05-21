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

    fetch(`http://localhost:3000/allTasks/${updateTask._id}`, {
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
      <div className="max-w-4xl py-10 mx-auto px-3 lg:px-0 bg-white rounded shadow">
        <h2 className="text-3xl font-semibold text-center mb-6">Update Task</h2>
        <form onSubmit={handleUpdate} className="space-y-4 px-10">
          <label className="label">Task Title</label>
          <input
            type="text"
            name="title"
            defaultValue={updateTask.title}
            placeholder="Task Title"
            className="w-full input"
            required
          />
          <label className="label">Select Category</label>
          <select
            name="category"
            defaultValue={updateTask.category}
            className="select select-bordered w-full"
            placeholder="Select Category"
            required
          >
            <option value="Select Category" disabled>
              Select Category
            </option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Writing">Writing</option>
            <option value="Marketing">Marketing</option>
            <option value="Ui/Ux Design">Ui/Ux Design</option>
            <option value="React Developer">React Developer</option>
          </select>
          <label className="label">Description</label>
          <textarea
            name="description"
            defaultValue={updateTask.description}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            rows={4}
            required
          ></textarea>
          <label className="label">Deadline</label>
          <input
            type="text"
            defaultValue={updateTask.deadline}
            name="deadline"
            className="input input-bordered w-full"
            required
          />
          <label className="label">Budget</label>
          <input
            type="text"
            name="budget"
            defaultValue={updateTask.budget}
            placeholder="Budget"
            className="input input-bordered w-full"
            required
          />
          <label className="label">Name</label>
          <input
            type="text"
            name="userName"
            value={updateTask.userName}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
          <label className="label">Email</label>
          <input
            type="text"
            name="userEmail"
            value={updateTask.userEmail}
            className="input input-bordered w-full bg-gray-100"
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
