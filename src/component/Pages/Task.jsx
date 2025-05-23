import React from 'react';
import { FaCheckCircle, FaStar, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { Link } from 'react-router';
const Task = ({task}) => {



    

    return (
        <div className=" rounded-xl overflow-hidden shadow-lg border">
      {/* Top image with heart icon */}
      <div className="relative">
        <Link to={`/taskDetail/${task._id}`} className="absolute top-3 right-3  rounded-full p-2 shadow-md hover:bg-gray-500">
          {/* <FaHeart className="text-gray-500" /> */}
          See Details
        </Link>
      </div>

      {/* Freelancer info */}
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={task.photoUrl? task.photoUrl : '/images.jpeg'}
            alt="Ava Anderson"
          />
          <span className="font-semibold ">{task.name}</span>
          <FaCheckCircle className="" />
        </div>

        <p className="mt-2 text-lg font-semibold ">
          {task.title}
        </p>

        {/* Rating */}
        <div className="flex items-center text-sm mt-2 ">
          
        </div>

        {/* Deadline */}
        <div className="flex items-center text-sm  mt-2">
          
          <span>Deadline: {task.date}</span>
        </div>

        {/* Price */}
        <div className="border-t mt-4 pt-2 text-sm  flex justify-between">
          <span>Starting from</span>
          <span className="font-bold ">${task.budget}</span>
        </div>
      </div>
    </div>
    );
};

export default Task;