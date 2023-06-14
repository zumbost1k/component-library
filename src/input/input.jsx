import React from 'react'
import './input.css'
const Input = ({ value, setValue, error, inputItem, disabled }) => {
    const typeCheker = (type, inputItem) => {
        if (inputItem === 'both' || inputItem === type) { return type }
        if (inputItem !== type) { return 'hidden' }
    }
    return (
        <div className='input'>
            <div className={typeCheker('label', inputItem)} />
            <input className={error && 'errorState'} type='text' placeholder='Placeholder text' disabled={disabled} value={value} onInput={e => setValue(e.target.value)} />
            {(error || typeCheker('caption', inputItem) !== 'hidden') && (error ? <div className='error' /> : <div className='caption' />)}
        </div>
    )
}

export default Input