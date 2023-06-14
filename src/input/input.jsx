import React from 'react'
import './input.css'
const Input = ({ value, setValue, error, inputItem, disabled }) => {    
    return (
        <div className='input'>
            {(inputItem === 'label' || inputItem === 'both') && <div className='label' />}
            <input className={error && 'errorState'} type='text' placeholder='Placeholder text' disabled={disabled} value={value} onInput={e => setValue(e.target.value)} />
            {(error || inputItem === 'caption' || inputItem === 'both') && (error ? <div className='error' /> : <div className='caption' />)}
        </div>
    )
}

export default Input