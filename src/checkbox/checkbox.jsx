import React from 'react';
import './checkbox.css'
const CheckBox = ({ isDisable, checked, onChange }) => {
    return (
        <label class='checkbox'>
            <input onChange={e => { onChange(!checked) }} className={checked ? 'checked' : 'inputCheckBox'} type='checkbox' disabled={isDisable} />
            <span className='slider round'></span>
        </label>
    )
}
export default CheckBox