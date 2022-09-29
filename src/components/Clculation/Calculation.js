import React from 'react';
import Personal from '../Personal/Personal';

const Calculation = (props) => {
    console.log(props.cart);
    return (
        <div className='bg-light'>
            <Personal></Personal>
            <div>
                <h3>Add A Break</h3>
                <div className='bg-white d-flex p-3'>
                    <div className='bg-light p-2 mx-2 rounded-3'><span>12</span>h</div>
                    <div className='bg-light p-2 mx-2 rounded-3'><span>24</span>h</div>
                    <div className='bg-light p-2 mx-2 rounded-3'><span>36</span>h</div>
                    <div className='bg-light p-2 mx-2 rounded-3'><span>48</span>h</div>
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
                    <p><span></span>h</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary w-75'>Course Complete</button>
            </div>
        </div>
    );
};

export default Calculation;