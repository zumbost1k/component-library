import React from 'react';
import './radioButton.css'

const RadioButtons = ({ isDisabled, chekedRadio, change }) => {
    return (
        <div>
            <div className='button'>
                <div>
                    <input className='custom-radio' checked={chekedRadio} onChange={e => change(!chekedRadio)} type='radio' id='contactChoice' name='contact' disabled={isDisabled} />
                    <label for='contactChoice'></label>
                </div>
            </div>

        </div>
    )
}

export default RadioButtons