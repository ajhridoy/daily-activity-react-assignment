import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const GymActivities = () => {
    const [] = useState([])
    return (
        <div>
            <h1 className='text-3xl text-center my-14 font-bold text-orange-400'><span><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> My Daily GYM Activitis</h1>
        </div>
    );
};

export default GymActivities;