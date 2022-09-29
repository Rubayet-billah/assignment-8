import React, { useState } from 'react';
import { getValuesFromLocalStorage, setValueToLocalStorage } from '../fakedb/fakedb';
import Personal from '../Personal/Personal';
import './Calculation.css'

const Calculation = (props) => {
    const [breakTime, setBreakTime] = useState('')
    const handleBreakTime = (e) => {
        setBreakTime(e.target.innerText);
        setValueToLocalStorage(e.target.innerText);
    }
    const storedBreakTime = getValuesFromLocalStorage();

    return (
        <div className='calculation pb-5 mt-5 ms-4 rounded-3'>
            <Personal></Personal>
            <div className='px-3'>
                <h3>Add A Break</h3>
                <div className='bg-white d-flex p-3 rounded-3'>
                    <button onClick={(e) => handleBreakTime(e)} className='break-times calculation p-2 mx-2 border border-0 rounded-3'>12h</button>
                    <button onClick={(e) => handleBreakTime(e)} className='break-times calculation p-2 mx-2 border border-0 rounded-3'>24h</button>
                    <button onClick={(e) => handleBreakTime(e)} className='break-times calculation p-2 mx-2 border border-0 rounded-3'>48h</button>
                    <button onClick={(e) => handleBreakTime(e)} className='break-times calculation p-2 mx-2 border border-0 rounded-3'>72h</button>

                </div>
            </div>
            <div className='px-3 my-4'>
                <h4>Course Details</h4>
                <div className='bg-white d-flex justify-content-between align-items-center px-4 my-4 rounded-3'>
                    <p className='fw-bold'>Course Time</p>
                    <p><span>{
                        props.cart.reduce((previous, current) => previous + current.time, 0)
                    }</span>h</p>
                </div>
                <div className='bg-white d-flex justify-content-between align-items-center px-4 my-4 rounded-3'>
                    <p className='fw-bold'>Break Time</p>

                    {
                        breakTime ? <p><span>{breakTime}</span></p> : <p><span>{storedBreakTime}</span></p>
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary w-75'>Course Complete</button>
            </div>
        </div>
    );
};

export default Calculation;