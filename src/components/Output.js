"use strict"

function Output(props) {
    return (
        <form>
        <label>
            <textarea value={props.text} />
        </label>
    </form>
    );
};

export default Output;