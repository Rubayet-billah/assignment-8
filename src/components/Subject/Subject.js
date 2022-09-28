import React from 'react';

const Subject = (props) => {
    const { id, name, img, category, credit, time } = props.subject;
    return (
        <div className='col-md-6 col-lg-4'>
            <div>
                <h3>name:{name}</h3>
                <img className='img-fluid' src={img} alt="" />
                <h3>Category:{category}</h3>
                <h3>Credit:{credit}</h3>
                <h3>Time:{time} h</h3>
            </div>
        </div>
    );
};

export default Subject;