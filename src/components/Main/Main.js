import React, { useEffect, useState } from 'react';
import Calculation from '../Clculation/Calculation';
import Header from '../Header/Header';
import Subject from '../Subject/Subject';

const Main = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        fetch('subjects.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    return (
        <div className='container d-flex flex-column flex-md-row'>
            <div>
                <Header></Header>
                <div className='row g-5'>
                    {
                        subjects.map(subject => <Subject key={subject.id} subject={subject}></Subject>)
                    }
                </div>
            </div>
            <Calculation></Calculation>
        </div>
    );
};

export default Main;