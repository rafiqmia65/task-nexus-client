import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = use(AuthContext);

  const handleAddTask = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const tasksData = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/allTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tasksData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your task has been added successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        } else {
          Swal.fire({
            title: "Failed!",
            text: "Task could not be added.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="pt-30 pb-10">
      <div className="container mx-auto px-3 lg:px-0">
        <h2 className="text-2xl font-bold mb-5 text-center">Add New Task</h2>
        <form
          onSubmit={handleAddTask}
          className="space-y-4 md:max-w-lg mx-auto bg-white shadow-md p-10 rounded"
        >
          <label className="label">Task Title</label>
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            className="input input-bordered w-full"
            required
          />
          <label className="label">Select Category</label>
          <select
            name="category"
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
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            rows={4}
            required
          ></textarea>
          <label className="label">Deadline</label>
          <input
            type="text"
            name="deadline"
            className="input input-bordered w-full"
            required
          />
          <label className="label">Budget</label>
          <input
            type="text"
            name="budget"
            placeholder="Budget"
            className="input input-bordered w-full"
            required
          />
          <label className="label">Name</label>
          <input
            type="text"
            name="userName"
            value={user?.displayName}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />

          <label className="label">Email</label>
          <input
            type="text"
            name="userEmail"
            value={user?.email}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />

          <button type="submit" className="btn btn-primary w-full">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
