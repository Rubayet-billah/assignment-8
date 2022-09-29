import React from 'react';
import Personal from '../Personal/Personal';

const Calculation = () => {
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
                    <p><span>200</span>h</p>
                </div>
            </div>
        </div>
    );
};

export default Calculation;