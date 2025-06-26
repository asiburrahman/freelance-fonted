import React from 'react';
import { FaCheckCircle, FaStar, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { Link } from 'react-router';
const Task = ({task}) => {



    

    return (
        <div className=" bg-base-300 rounded-xl overflow-hidden shadow-lg border">
      {/* Top image with heart icon */}
      

      {/* Freelancer info */}
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={task.photoUrl? task.photoUrl : '/images.jpeg'}
            alt="Ava Anderson"
          />
          <span className="font-semibold  ">{task.name}</span>
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
        
        <div className=" py-4 w-full">
        <Link to={`/taskDetail/${task._id}`} className="inline-block w-full text-center bg-base-100 py-2 font-medium rounded-full  shadow-md hover:bg-gray-300">
          {/* <FaHeart className="text-gray-500" /> */}
          See Details
        </Link>
      </div>
      </div>
      
    </div>
    );
};

export default Task;