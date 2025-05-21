import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyPostedTasks = () => {
  const { user } = useContext(AuthContext);
  const allTasks = useLoaderData();
  const { displayName, email } = user;

  const [myTasks, setMyTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bidsList, setBidsList] = useState([]);

  useEffect(() => {
    const filterTasks = allTasks.filter(
      (task) => task.userName === displayName && task.userEmail === email
    );
    setMyTasks(filterTasks);
  }, [allTasks, displayName, email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/allTasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
              const remaining = myTasks.filter((task) => task._id !== id);
              setMyTasks(remaining);
            }
          });
      }
    });
  };

  const handleViewBids = (id) => {
    fetch(`http://localhost:3000/bids/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBidsList(data);
        setShowModal(true);
      });
  };

  return (
    <div className="container mx-auto px-4 pt-30 py-10">
      {myTasks.length === 0 ? (
        <div className="text-center py-10 bg-gray-100 border border-dashed rounded-lg">
          <h3 className="text-xl font-semibold mb-2">No Tasks Found</h3>
          <p className="text-gray-500">
            You haven't posted any tasks yet. Start by creating one!
          </p>
          <Link to="/addTask">
            <button className="mt-4 btn btn-primary">Post a Task</button>
          </Link>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-center mb-6">
            My Posted Tasks ({myTasks.length})
          </h2>

          <div className="overflow-x-auto">
            <table className="table w-full bg-white shadow-md rounded-lg">
              <thead className="bg-base-200">
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Budget</th>
                  <th>Deadline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myTasks.map((task) => (
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.category}</td>
                    <td>${task.budget}</td>
                    <td>{task.deadline} days</td>
                    <td>
                      <div className="flex flex-wrap gap-2">
                        <Link to={`/updateTask/${task._id}`}>
                          <button className="btn btn-sm btn-info">
                            Update
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(task._id)}
                          className="btn btn-sm btn-error"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleViewBids(task._id)}
                          className="btn btn-sm btn-success"
                        >
                          View Bids
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Modal at the end */}
      {showModal && (
        <dialog id="bids_modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Bids List {bidsList.length}</h3>
            {bidsList.length > 0 ? (
              <ul className="space-y-2 max-h-60 overflow-y-auto mt-4">
                {bidsList.map((bid, idx) => (
                  <li key={idx} className="border-b pb-2">
                    <p>
                      <span className="font-semibold">Name:</span>{" "}
                      {bid.bidderName}
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      {bid.bidderEmail}
                    </p>
                    <p>
                      <span className="font-semibold">Bid Time:</span>{" "}
                      {new Date(bid.bidTime).toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4">No bids yet.</p>
            )}
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn"
                  onClick={() => {
                    setShowModal(false);
                    setBidsList([]);
                  }}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyPostedTasks;
