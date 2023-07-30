import React, { useState } from 'react';

const GreetingCard = () => {
    const [name, setName] = useState('');

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
            <center>
            <div className="main">
                <h2>Greetings!</h2>
                <input type="text" value={name} onChange={handleInputChange} placeholder="Enter your name"/>
                <p>{name ? `Hello, ${name}!` : ' '}</p>
            </div>
            </center>
    );
};

export default GreetingCard;
