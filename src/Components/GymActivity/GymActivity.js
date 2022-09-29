import React from 'react';
import './GymActivity.css'

const GymActivity = ({activity, listBtn}) => {
    const {img, name, time, title} = activity
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='card-img' src={img} alt="gym" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><small>{title.slice(0, 120)} ...</small></p>
                    <p>Time Required: <span className='font-bold'>{time}m</span></p>
                    <div className="card-actions justify-center mt-5">
                    <button onClick={()=>listBtn(activity)} className="btn btn-primary font-bold">Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GymActivity;