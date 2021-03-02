"use strict"

import React from 'react';

function Heading(props) {

    const australianHeading = props.flipString("text flipper");
    const heading = "text flipper";

    return (

        props.isAustralian ? <h1>{ australianHeading }</h1> : <h1>{ heading }</h1>

    );
};

export default Heading;