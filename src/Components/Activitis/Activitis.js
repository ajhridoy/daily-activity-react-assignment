import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import GymActivity from '../GymActivity/GymActivity';
import ActivitisCart from '../ActivitisCart/ActivitisCart';
// import GymActivities from '../GymActivitis/GymActivities';
import './Activitis.css'

const Activitis = () => {
        const [activitis, setActivities] = useState([]);
        const [cart, setCart] = useState([]);
        useEffect( ()=>{
            fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
        }, [])
    const listBtn = (activity) =>{
        // console.log(activity)
        const newActivity = [...cart, activity]
        setCart(newActivity);
    }
    return (
        <div className='activitis'>
             <div>
            <h1 className='text-3xl text-center mt-14 mb-8 font-bold text-orange-400 font-mono'><span><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> My Daily GYM Activitis</h1>
            <p className='text-xl text-center mb-8 font-bold'>Select Exercise:</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24 mx-10'>
            {
                activitis.map(activity => <GymActivity
                    activity = {activity}
                    listBtn = {listBtn}
                    key = {activity.id}
                ></GymActivity>)
            }
            </div>
        </div>
            <div>
            <ActivitisCart cart = {cart}></ActivitisCart>
            </div>
        </div>
    );
};

export default Activitis;