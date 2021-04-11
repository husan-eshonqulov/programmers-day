import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import DetDate from './DetDate';

function App() {
    const [year, setYear] = useState(null);

    const handleSubmit = (inputVal) => {
        if (inputVal !== '') {
            setYear(inputVal);
        }
    }

    return (
        <div className="container text-center">
            <Header />
            <Form handleSubmit={handleSubmit} />
            <DetDate year={year} />
        </div>
    );
}

export default App;