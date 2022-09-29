import React from 'react';

const Subject = (props) => {
    const { id, name, img, category, credit, time } = props.subject;
    return (
        <div className='col-md-6 col-lg-4'>
            <div>
                <img className='img-fluid' src={img} alt="" />
                <h3>Subject: {name}</h3>
                <p>Category: {category}</p>
                <p>Credit: {credit}</p>
                <p>Time: {time} h</p>
            </div>
        </div>
    );
};

export default Subject;