import React from 'react'
import './input.css'
const Input = ({ value, setValue, error, disabled, label, caption, type }) => {
    return (
        <div className='input'>
            {label && <div className='label' >{type} Label</div>}
            <input className={error && 'errorState'} type={type} placeholder='Placeholder text' disabled={disabled} value={value} onInput={e => setValue(e.target.value)} />
            {(error || caption) && (error ? <div className='error' >Error Message</div> : <div className='caption' >caption</div>)}
        </div>
    )
}

export default Input