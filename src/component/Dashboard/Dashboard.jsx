import React, { useContext, useEffect, useState } from 'react';

import { FaTasks, FaUserCheck, FaPlusCircle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [allTasks, setAllTasks] = useState([]);
  const [myTasks, setMyTasks] = useState([]);

  useEffect(() => {
    // Fetch all tasks
    fetch('http://localhost:3000/task')
      .then(res => res.json())
      .then(data => setAllTasks(data));

    // Fetch tasks for logged-in user
    fetch(`http://localhost:3000/task/${user?.email}`)
      .then(res => res.json())
      .then(data => setMyTasks(data));
  }, [user]);

  return (
    <div className="p-6 lg:p-10">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <FaUserCheck className="text-4xl text-blue-500" />
          <div>
            <h2 className="text-xl font-semibold">Logged-in User</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <FaTasks className="text-4xl text-green-500" />
          <div>
            <h2 className="text-xl font-semibold">Total Tasks</h2>
            <p className="text-gray-600">{allTasks.length}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <FaTasks className="text-4xl text-purple-500" />
          <div>
            <h2 className="text-xl font-semibold">My Tasks</h2>
            <p className="text-gray-600">{myTasks.length}</p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Dashboard;
