import React from 'react';

const ActivitisCart = () => {
    return (
        <div className='bg-teal-300 px-5 py-8'>
            <div className='flex flex-row'>
                <img className='rounded-full w-14 h-14' src="http://www.marrybd.com/application/views/member/member_images/IMG_75282.JPG" alt="" />
                <div className='ml-3'>
                    <h3 className='text-lg font-bold'>AJ Hridoy</h3>
                    <p>Rajshahi, Bangladesh</p>
                </div>
            </div>
            <div className='flex flex-row mt-5 bg-slate-100 p-4 rounded-lg '>
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
            <div className='bg-slate-100 mt-5 p-3'>
                <h2 className='text-xl font-bold'>Add a Break:</h2>
                <div className='grid grid-cols-2 gap-3 mt-2'>
                <button className="btn btn-base-100 rounded-lg">10m</button>
                <button className="btn btn-base-100 rounded-lg">15m</button>
                <button className="btn btn-base-100 rounded-lg">25m</button>
                <button className="btn btn-base-100 rounded-lg">30m</button>
                <button className="btn btn-base-100 rounded-lg">40m</button>
                <button className="btn btn-base-100 rounded-lg">50m</button>
                </div>
            </div>
        </div>
    );
};

export default ActivitisCart;