import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import GymActivity from '../GymActivity/GymActivity';

const GymActivities = () => {
    const [activitis, setActivities] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center mt-14 mb-8 font-bold text-orange-400 font-mono'><span><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> My Daily GYM Activitis</h1>
            <p className='text-xl text-center mb-8 font-bold'>Select Exercise:</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 mx-10'>
            {
                activitis.map(activity => <GymActivity
                    activity = {activity}
                    key = {activity.id}
                ></GymActivity>)
            }
            </div>
        </div>
    );
};

export default GymActivities;