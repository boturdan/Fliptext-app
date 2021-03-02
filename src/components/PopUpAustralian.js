"use strict"

import React from 'react';


function PopUpAustralian(props) {
    console.log(props.isAustralian)
    return (
        <div className="overlay">
            <div className="popup">
                <form>
                    <label>are you australian?</label>
                    <input type="radio" id="yes" value="true"/* onClick={} */ />
                    <label for="yes">yes</label>
                    <input type="radio" id="no" value="false"/* onClick={}  *//>
                    <label for="no">no</label>
                </form> 
            </div>
        </div>
    )
};

export default PopUpAustralian;