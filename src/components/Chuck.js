import React, { useState, useEffect } from 'react';


function ChuckJoke() {

    const [joke, setJoke] = useState({})

    useEffect(async () => {
        const response = await fetch("https://api.chucknorris.io/jokes/random")
        const resData = await response.json()
        setJoke(resData)
    }, [])

    return (
       <p> { joke.value } </p>
    )
};

export default ChuckJoke;