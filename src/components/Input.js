"use strict"

function Input(props) {

    function handleChange(evt) {
        props.updateFunction(evt.target.value)
    }

    return (
        <form>
            <label>
                Please enter your text here: 
                <textarea name="original" onChange={handleChange} />
            </label>
        </form>
    );
};

export default Input;