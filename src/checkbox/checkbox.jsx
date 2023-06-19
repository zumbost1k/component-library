import React from 'react';
import './checkbox.css'
const CheckBox = ({ isDisable }) => {
    return (
        <label class='checkbox'>
            <input className='inputCheckBox' type='checkbox' disabled={isDisable} />
            <span className='slider round'></span>
        </label>
    )
}
export default CheckBox