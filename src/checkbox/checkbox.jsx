import React from 'react';
import './checkbox.css'
const CheckBox = ({ isDisable, checked }) => {
    console.log(checked)
    return (
        <label class='checkbox'>
            <input className={checked ? 'checked' : 'inputCheckBox'} type='checkbox' disabled={isDisable} />
            <span className='slider round'></span>
        </label>
    )
}
export default CheckBox