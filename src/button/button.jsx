import React from 'react'
import './button.css'

const Button = ({ color, size, IconClass, type, disabled, iconType }) => {
    const className = ['button',color,size].filter(Boolean).join(' ')
    return (
        <div >
            <button className={className} disabled={disabled}>
                {type === 'chatIcon' ? <IconClass className={iconType} /> : ''}
                <div className='text'>{`${size} + ${color}`}</div>
                {type === 'arrowIcon' ? <IconClass className={iconType} /> : ''}

            </button>
        </div>
    )

}
export default Button