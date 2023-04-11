// Code Keypad Component Here
import React from 'react';
import EyesOnMe from './EyesOnMe';

function Keypad (){
    function handleChange() {
        console.log("Entering password...");
    }

    return (
        <div>
            <input 
                type="password"
                onChange={handleChange} 
                placeholder='Input here...'
            />
            <EyesOnMe />
        </div>
    )
}

export default Keypad;