"use strict"

function Output(props) {

    return (
        <form>
            <label>
                <textarea id="flipped" name="flipped" value={props.text} />
            </label>
        </form>
    );
};

export default Output;