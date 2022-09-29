import React from 'react';

const Subject = (props) => {
    const { id, name, img, category, credit, time } = props.subject;
    return (
        <div className='col-md-6 col-lg-4'>
            <div className='border border-2 rounded-2'>
                <img className='img-fluid rounded-2' src={img} alt="" />
                <div className='px-3'>
                    <h3>{name}</h3>
                    <p>Category: {category}</p>
                    <p>Credit: {credit}</p>
                    <p>Time: {time}h</p>
                </div>
                <div className='mx-auto'>
                    <button className='btn btn-primary mx-auto'>Add Subject</button>
                </div>
            </div>
        </div>
    );
};

export default Subject;