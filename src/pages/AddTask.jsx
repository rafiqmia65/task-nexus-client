import React from "react";

const AddTask = () => {
  return (
    <div className="pt-30 pb-10">
      <div className="container mx-auto px-3 lg:px-0">
        <h2 className="text-2xl font-bold mb-5 text-center">Add New Task</h2>
        <form  className="space-y-4 md:max-w-lg mx-auto bg-white shadow-md p-10 rounded">
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            className="input input-bordered w-full"

            required
          />
          <select
            name="category"
            className="select select-bordered w-full"
            placeholder="Select Category"
            required
          >
            <option value="Web Development">Web Development</option>
            <option value="Design">Design</option>
            <option value="Writing">Writing</option>
            <option value="Marketing">Marketing</option>
            <option value="Marketing">Ui/Ux Design</option>
            <option value="Marketing">React Developer</option>
          </select>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            rows={4}
            required
          ></textarea>
          <input
            type="date"
            name="deadline"
            className="input input-bordered w-full"

            required
          />
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            className="input input-bordered w-full"

            required
          />

          <input
            type="text"
            // value={user?.email || ""}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
          <input
            type="text"
            // value={user?.displayName || ""}
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
