import React, { useEffect, useState } from 'react';
import Calculation from '../Clculation/Calculation';
import Header from '../Header/Header';
import Subject from '../Subject/Subject';

const Main = () => {
    const [subjects, setSubjects] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('subjects.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    const handleAddToCart = (subject) => {
        // console.log(subject);
        const newCart = [...cart, subject];
        setCart(newCart);
    }
    return (
        <div className='container d-flex flex-column flex-md-row'>
            <div>
                <Header></Header>
                <div className='row g-5'>
                    {
                        subjects.map(subject => <Subject key={subject.id} subject={subject} handleAddToCart={handleAddToCart}></Subject>)
                    }
                </div>
            </div>
            <Calculation cart={cart}></Calculation>
        </div>
    );
};

export default Main;