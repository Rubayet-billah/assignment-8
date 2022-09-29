import React from 'react';

const Personal = () => {
    return (
        <div className='px-3'>
            <div>
                <img src="images/profile1.jpg" alt="" />
                <h3>Rubayet Billah</h3>
                <p>Khulna,Bangladesh</p>
            </div>
            <div className='d-flex justify-content-between pe-5'>
                <div>
                    <span className='h3'>68</span><span>kg</span>
                    <p>Weight</p>
                </div>
                <div>
                    <span className='h3'>5.8</span><span>ft</span>
                    <p>Height</p>
                </div>
                <div>
                    <span className='h3'>23</span><span>yrs</span>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Personal;