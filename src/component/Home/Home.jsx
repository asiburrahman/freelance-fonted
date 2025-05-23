import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import { ToastContainer } from 'react-toastify';
import TrustedCompanies from '../Pages/TrustedCompanies';
import CountUp from 'react-countup';
import Task from '../Pages/Task';
import TypewriterText from '../Typewriter/TypewriterText';
import ReactSweper from '../Swiper/ReactSweper';


const Home = () => {

    const [tasks, setTasks] = useState([])
// console.log(tasks);


            useEffect(() => {
  fetch('https://freelance-backend-eight.vercel.app/recentTasks')
    .then(res => res.json())
    .then(data => setTasks(data));
}, []);
    
    return (
        
        <div className='w-11/12 mx-auto '>
            <ToastContainer />
{/* slider section  */}
            <section > 

               <Slider>
            
            </Slider>

            </section>

            <section className='p-2 text-center py-10 '>
              <TypewriterText></TypewriterText>
            </section>
           



            <h2 className="text-2xl lg:text-4xl font-bold py-3 text-center">
    Bid The Task Soon</h2>

    
    
    
            <div className='grid justify-items-stretch  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* Added Task Soon */}


              {
                tasks.map((task, index)=> <Task task={task} key={index}></Task>)
              }

            </div>

            <section>


              {/* card slider section  */}
              <section className='p-1 py-10 mt-10 '>
                <ReactSweper></ReactSweper>
              </section>
            <div className=" py-16 px-6 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center shadow-2xl rounded-xl p-1">
        {/* Left Side - Images */}
        <div className="relative space-y-4 rounded-2xl">
          <div className=" rounded-xl overflow-hidden shadow-xl ">
            <img
              src="./Happy.jpg"
              alt="Check-in device"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-1 lg:flex gap-2 lg:space-x-4 rounded-xl">
            <div className="  overflow-hidden shadow-xl flex-1 rounded-xl ">
            <img
                src="./video.jpg"
                alt="Event badge pickup"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="  overflow-hidden shadow-xl flex-1">
              <img
                src="./web.jpg"
                alt="Event badge pickup"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold  leading-tight">
            Your all-in-one solution for every Task
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-semibold "><CountUp duration={10} end={7000} />+</h3>
              <p className=" text-sm">Task managed</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold "><CountUp duration={10} end={25000} />+</h3>
              <p className=" text-sm">Registrations processed</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold "><CountUp duration={10} end={1000} />+</h3>
              <p className=" text-sm">5-star ratings</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold "><CountUp duration={10} end={24} />/ <CountUp duration={10} end={7} /></h3>
              <p className=" text-sm">customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
            </section>


            <section>
                <TrustedCompanies></TrustedCompanies>
            </section>
           
        </div>
    );
};

export default Home;