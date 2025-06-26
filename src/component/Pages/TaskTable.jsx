import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";
import { useLoaderData } from 'react-router'; // Make sure to use react-router-dom, not 'react-router'

const TaskTable = () => {
    const tasks = useLoaderData()
  return (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full text-sm text-left   rounded-lg shadow-md">
        <thead className="bg-base-300  uppercase text-xs">
          <tr>
            <th className="p-4">Freelancer</th>
            <th className="p-4">Task Title</th>
            <th className="p-4">Deadline</th>
            <th className="p-4">Budget</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id} className="  hover:bg-base-200 transition">
              <td className="p-4 flex items-center gap-2">
                <img
                  src={task.photoUrl || "/images.jpeg"}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium">{task.name}</span>
                <FaCheckCircle className="text-green-500 ml-1" />
              </td>

              <td className="p-4 font-semibold">{task.title}</td>
              <td className="p-4">{task.date}</td>
              <td className="p-4 font-bold text-emerald-600">${task.budget}</td>
              <td className="p-4">
                <Link
                  to={`/taskDetail/${task._id}`}
                  className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white"
                >
                  See Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
