"use strict"

import { useState } from 'react';

function Input() {
    const [state, setState] = useState ({
        textInput: ""
    });

    return (
        <form>
            <label>
                Please enter your text here: 
                <input
                    type="textarea"
                    value={state.textInput}
                    onChange={handleChange}
                />
            </label>
        </form>
    );

    function handleChange(evt) {
        setState({ textInput: evt.target.value });
    }
};

export default Input;