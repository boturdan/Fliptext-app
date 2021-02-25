"use strict"

function Button() {

    function copyFlippedText() {
        let copyText = document.querySelector("#flipped");
        copyText.select();
        document.execCommand("copy");
    }
    
    return (
        <button id="copyButton" onClick={ copyFlippedText }>copy flipped text</button>
    );
};

export default Button;