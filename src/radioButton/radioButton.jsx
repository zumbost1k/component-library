import React from "react";
import './radioButton.css'

const RadioButtons = ({ isDisabled }) => {
    return (
        <div>
            <div className="buttons">
                <div>
                    <input className="custom-radio" type="radio" id="contactChoice1" name="contact" disabled={isDisabled} />
                    <label for="contactChoice1"></label></div>
                <div>
                    <input className="custom-radio" type="radio" id="contactChoice2" name="contact" disabled={isDisabled} />
                    <label for="contactChoice2"></label>
                </div>
            </div>

        </div>
    )
}

export default RadioButtons