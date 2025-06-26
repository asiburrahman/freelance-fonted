import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { FaHome, FaBoxOpen, FaMoneyCheckAlt, FaUserEdit, FaSearchLocation } from 'react-icons/fa';

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>

                </div>
                {/* Page content here */}
                <Outlet></Outlet>
                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li>
                        <div className='flex items-center justify-center gap-2'>
                  <img src="/images.jpeg" className='w-10 h-10 rounded-full hidden md:inline-block '  alt="" />
                  <Link to='/' className="text-sm font-bold   md:text-2xl lg:text-3xl">FreelanceNation</Link> 
                  
                </div>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FaHome className="inline-block mr-2" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/browseTask">
                            <FaBoxOpen className="inline-block mr-2" />
                            All Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myTask">
                            <FaMoneyCheckAlt className="inline-block mr-2" />
                            My Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addTask">
                            <FaSearchLocation className="inline-block mr-2" />
                            Add Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile">
                            <FaUserEdit className="inline-block mr-2" />
                            Update Profile
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;