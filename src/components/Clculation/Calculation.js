import React, { useState } from 'react';
import Personal from '../Personal/Personal';

const Calculation = (props) => {
    const [breakTime, setBreakTime] = useState([]);

    const displayBreakTime = (time) => {
        setBreakTime(time);
        document.getElementById('break-time').innerText = breakTime;
    }
    // console.log(props.cart);
    return (
        <div className='bg-light'>
            <Personal></Personal>
            <div>
                <h3>Add A Break</h3>
                <div className='bg-white d-flex p-3'>
                    <button onClick={() => displayBreakTime(12)} className='bg-light p-2 mx-2 border border-0 rounded-3'><span id='break-one'>12</span>h</button>
                    <button onClick={() => displayBreakTime(24)} className='bg-light p-2 mx-2 border border-0 rounded-3'><span>24</span>h</button>
                    <button onClick={() => displayBreakTime(36)} className='bg-light p-2 mx-2 border border-0 rounded-3'><span>36</span>h</button>
                    <button onClick={() => displayBreakTime(48)} className='bg-light p-2 mx-2 border border-0 rounded-3'><span>48</span>h</button>
                </div>
            </div>
            <div>
                <h4>Course Details</h4>
                <div className='bg-white d-flex justify-content-between align-items-center px-4 my-2'>
                    <p className='fw-bold'>Course Time</p>
                    <p><span>{
                        props.cart.reduce((previous, current) => previous + current.time, 0)
                    }</span>h</p>
                </div>
                <div className='bg-white d-flex justify-content-between align-items-center px-4 my-2'>
                    <p className='fw-bold'>Break Time</p>
                    <p><span id='break-time'></span>h</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary w-75'>Course Complete</button>
            </div>
        </div>
    );
};

export default Calculation;