import React from 'react';
import ActivitisCart from '../ActivitisCart/ActivitisCart';
import GymActivities from '../GymActivitis/GymActivities';
import './Activitis.css'

const Activitis = () => {
    return (
        <div className='activitis'>
            <GymActivities></GymActivities>
            <ActivitisCart></ActivitisCart>
        </div>
    );
};

export default Activitis;