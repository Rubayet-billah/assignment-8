import React from 'react';

const Subject = (props) => {
    const { id, name, img, category, credit, time } = props.subject;
    return (
        <div className='col-md-6 col-lg-4'>
            <h1>from subject</h1>
        </div>
    );
};

export default Subject;