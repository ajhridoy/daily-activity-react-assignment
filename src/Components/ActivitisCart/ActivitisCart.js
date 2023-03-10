import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ActivitisCart.css'

const ActivitisCart = ({cart}) => {
    const [brTime, setBrTime] = useState([])
    useEffect(()=>{
        const getData = localStorage.getItem('break-Time');
        setBrTime(getData)
    }, [])
    const breakBtn = (time)=>{
         setBrTime(time)
         localStorage.setItem('break-Time', JSON.stringify(time))
    }
    let time = 0;
    for(const value of cart){
        time = time + value.time;
    }
    const activeBtn = ()=>{
        toast.success('Activity Completed Successfully!!', {
            position: "top-center",
        })
    }
    return (
        <div className='bg-teal-300 px-5 py-8 cart'>
            <div className='sticky top-0'>
            <div className='flex flex-row'>
                <img className='rounded-full w-14 h-14' src="http://www.marrybd.com/application/views/member/member_images/IMG_75282.JPG" alt="" />
                <div className='ml-3'>
                    <h3 className='text-lg font-bold'>AJ Hridoy</h3>
                    <p>Rajshahi, Bangladesh</p>
                </div>
            </div>
            <div className='flex flex-row mt-5 bg-slate-100 p-4 rounded-lg justify-center'>
                <div>
                    <h3 className='text-lg font-bold'>70<small>kg</small></h3>
                    <p>Weight</p>
                </div>
                <div className='ml-4'>
                    <h3 className='text-lg font-bold'>5.8</h3>
                    <p>Height</p>
                </div>
                <div className='ml-4'>
                    <h3 className='text-lg font-bold'>23<small>yrs</small></h3>
                    <p>Age</p>
                </div>
            </div>
            <div className='bg-slate-100 mt-5 p-3 rounded-lg'>
                <h2 className='text-xl font-bold'>Add a Break:</h2>
                <div className='grid grid-cols-2 gap-3 mt-2'>
                <button onClick={()=>breakBtn(10)} className="btn btn-base-100 rounded-lg">10m</button>
                <button onClick={()=>breakBtn(15)} className="btn btn-base-100 rounded-lg">15m</button>
                <button onClick={()=>breakBtn(25)} className="btn btn-base-100 rounded-lg">25m</button>
                <button onClick={()=>breakBtn(30)} className="btn btn-base-100 rounded-lg">30m</button>
                <button onClick={()=>breakBtn(40)} className="btn btn-base-100 rounded-lg">40m</button>
                <button onClick={()=>breakBtn(50)} className="btn btn-base-100 rounded-lg">50m</button>
                </div>
            </div>
            <div className='my-5'>
                <h3 className='text-xl font-bold text-center lg:text-left'>Exercise Details:</h3>
                <p className='bg-slate-100 text-lg font-semibold p-3 my-3 rounded-lg text-center'>Exercise time <span className='ml-2'>{time}</span> <small>min</small></p>
                 <p className='bg-slate-100 text-lg font-semibold p-3 my-3 rounded-lg text-center'>Break time <span className='ml-2'>{brTime}</span> <small>min</small></p>
            </div>
            <div>
              <button onClick={activeBtn} className='btn btn-info font-bold justify-center'>Activity Completed</button>
              <ToastContainer />
            </div>
            </div>
        </div>
    );
};

export default ActivitisCart;