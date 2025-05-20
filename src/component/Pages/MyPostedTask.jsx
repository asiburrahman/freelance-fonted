import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../Loading/Loading';

const MyPostedTask = () => {
    const {user, loading, setLoading} = use(AuthContext)
    const [tasks, setTask] = useState([])
    




    useEffect(()=>{
                
                // console.log(location);
               fetch(`http://localhost:3000/task/${user.email}`,{
                method:"GET"
               }).then(res=> res.json()).then(data=>setTask(data)
               )
        
                
            },[user])

            
            
            
            // console.log(tasks);
            



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map( (task, index) => <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photoURL}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.displayName}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td >
                                {task.title}
                                <br />
                                <span className="badge badge-ghost badge-sm">Rate: {task.budget}$</span>
                            </td>
                            
                            <td>
                                {task.category}
                            </td>
                            <td>
                                {task.date}
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Update</button>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                                <button className="btn btn-ghost btn-xs">Bids</button>
                            </th>
                        </tr>)
                        }
                        
                        {/* <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photoURL}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.displayName}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <td>
                                <p>11-11-11</p>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                                <button className="btn btn-ghost btn-xs">details</button>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr> */}
                       
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyPostedTask;