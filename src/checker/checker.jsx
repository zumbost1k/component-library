import React from 'react';
import './checker.css'

const Checker = ({ isDisabled, checked, onChange }) => {
    return (
        
            <div className='cheker'>
                <div>
                    <input onChange={e => { onChange(!checked) }} className={checked ? 'checked' : 'custom-checkbox'} type='checkbox' id='checkbox1' name='contact' disabled={isDisabled} />
                    <label for='checkbox1'></label>
                </div>
            </div>
    )
}

export default Checker