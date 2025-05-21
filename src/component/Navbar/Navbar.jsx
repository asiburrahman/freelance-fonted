import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
// import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import Theme from '../ChangeTheme/Theme';
// import { ToastContainer } from 'react-toastify';



const Navbar = () => {

    const {user, singOutUser} = use(AuthContext)
    const navigate = useNavigate()
    //  console.log(user);
     
     const handleSignOut =()=>{
        singOutUser().then(()=>{
            // console.log('singOut Successfully');
            navigate('/')
            toast.success("User SingOut Successfully!!");
        }).catch((error)=>{
            console.log(error);
            
        })
     }
    

    // const userInfo = use(AuthContext)
    // console.log(userInfo);
    
    const link = <>
                   
                  <li><NavLink to='/'>Home</NavLink></li>
                  {/* { !user && <><li><NavLink to='/login'>Login</NavLink></li>
                  <li><NavLink to='/register'>Register</NavLink></li></>} */}
                  <li><NavLink to='/browseTask'>Browse Task</NavLink></li>
                  {user && <>
                             
                             <li><NavLink to='/addTask'>Add Task</NavLink></li>
                             <li><NavLink to='/myTask'>My Posted Task</NavLink></li>
                        </>
                  }
                </>
    return (
        <>
        {/* <ToastContainer /> */}
        
        <div className='bg-gray-100'>
        
            <div className="navbar   w-11/12 mx-auto">
            <div className="navbar-start ">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  {link}
                </ul>
                </div>
                <Link to='/' className="text-xl font-bold  md:text-2xl lg:text-3xl">FreelanceNation</Link> 
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {link}
                </ul>
            </div>
            <div className="navbar-end">

                 {
                !user && <Link className='hover:bg-gray-200 p-2 px-4 rounded' to="/register">Sign Up </Link>
               }

               

               {
                user?
                
                <div className="navbar  justify-end  space-x-1">
      <div className="dropdown dropdown-hover dropdown-end ">
        <label tabIndex={0} className="">
          <img  className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
        >
          <li>
            <a href="/#">{user.displayName}</a>
          </li>
          <li>
            <button onClick={handleSignOut} >Sign Out</button>
          </li>
        </ul>

        
      </div>
      <Theme></Theme>
    </div>
                
                // < div className='flex justify-center items-center gap-2'>
                
                    
                    /* <img title={user.displayName} className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                <a onClick={handleSignOut} className="btn border-none  ">Sign Out </a>
                </div>  */
                 : <Link className='hover:bg-gray-200 p-2 px-4 rounded' to="/login">Login </Link>
                 

               } 

              
            </div>
            </div>
        </div>


        
                </>    
    );
};

export default Navbar;