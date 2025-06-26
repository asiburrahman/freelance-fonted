import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Task from './Task';

const BrowseTask = () => {
  const loadedTasks = useLoaderData();
  const [tasks, setTasks] = useState(loadedTasks);
  const [sortOrder, setSortOrder] = useState(""); // 'asc' or 'desc'
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    let updatedTasks = [...loadedTasks];

    // Filter
    if (filterCategory !== "All") {
      updatedTasks = updatedTasks.filter(task => task.category === filterCategory);
    }

    // Sort
    if (sortOrder === "asc") {
      updatedTasks.sort((a, b) => a.budget - b.budget);
    } else if (sortOrder === "desc") {
      updatedTasks.sort((a, b) => b.budget - a.budget);
    }

    setTasks(updatedTasks);
  }, [sortOrder, filterCategory, loadedTasks]);

  return (
    <div className='w-11/12 mx-auto'>
      {/* Filters and Sort Options */}
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center my-6">
        {/* Sort */}
        <div className="flex gap-2 items-center">
          <label className='font-semibold'>Sort by Budget:</label>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered select-sm"
          >
            <option value="">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {/* Filter */}
        <div className="flex gap-2 items-center">
          <label className='font-semibold'>Filter by Category:</label>
          <select
            onChange={(e) => setFilterCategory(e.target.value)}
            className="select select-bordered select-sm"
          >
            <option value="All">All</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphics Design">Graphics Design</option>
            <option value="Content Writing">Content Writing</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Video Editing">Video Editing</option>
            <option value="UI/UX design">UI/UX design</option>
            <option value="Internet of Things Solutions">IoT (Internet of Things) Solutions</option>
          </select>
        </div>
      </div>

      {/* Task Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {tasks.map((task, index) => (
          <Task task={task} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BrowseTask;