"use strict"

import React, { useState } from 'react';


function PopUpAustralian(props) {

    const [isYes, setIsYes] = useState()
    
    function handleSubmit(evt) {
        
        evt.preventDefault()
        
        isYes ? props.setIsAustralian(true) : props.setIsAustralian(false);

    }

    async function getMyText() {
        const response = await fetch("http://localhost:8080/users", {mode: "no-cors"});

        console.log(response);
        return response;
        
    }

    let myText = getMyText().theText;

    return (
        <div className="overlay">
            <div className="popup">
                <form onSubmit={handleSubmit}>
                    <p> are you australian? </p> 
                    <label className="flexbox">
                        <p>yes 🇦🇺</p>
                        <input
                            type="radio"
                            name="australian"
                            value="yes"
                            onClick={() => setIsYes(true)}
                        />
                    </label>
                    
                    <label className="flexbox"> 
                        <p>no 🌍</p>
                        <input
                            type="radio"
                            name="australian"
                            value="no"
                            onClick={() => setIsYes(false)}
                        />
                    </label>
                    
                    <div className="buttonWrapper">
                        <button type="submit">
                            {myText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default PopUpAustralian;