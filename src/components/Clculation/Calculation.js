import React, { useState } from 'react';
import Personal from '../Personal/Personal';

const Calculation = (props) => {
    // const [breakTime, setBreakTime] = useState([]);

    // const displayBreakTime = (time) => {
    //     // console.log(time);
    //     setBreakTime(time);
    //     document.getElementById('break-time').innerText = breakTime;
    // }
    // console.log(props.cart);
    const breakTimes = document.getElementsByClassName('break-times');
    for (const breakTime of breakTimes) {
        breakTime.addEventListener('click', function (event) {
            console.log(event.target.innerText);
            document.getElementById('display-break-time').innerText = event.target.innerText;
        })
    }
    return (
        <div className='bg-light'>
            <Personal></Personal>
            <div>
                <h3>Add A Break</h3>
                <div className='bg-white d-flex p-3'>
                    <button className='break-times bg-light p-2 mx-2 border border-0 rounded-3'>12h</button>
                    <button className='break-times bg-light p-2 mx-2 border border-0 rounded-3'>24h</button>
                    <button className='break-times bg-light p-2 mx-2 border border-0 rounded-3'>48h</button>
                    <button className='break-times bg-light p-2 mx-2 border border-0 rounded-3'>72h</button>

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
                    <p><span id='display-break-time'>0h</span></p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary w-75'>Course Complete</button>
            </div>
        </div>
    );
};

export default Calculation;