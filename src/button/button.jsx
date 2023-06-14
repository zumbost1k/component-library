import React from 'react'
import './button.css'

const Button = ({ color, size, Icon, iconPosition, disabled }) => {
    const className = ['button', color, size].filter(Boolean).join(' ')
    return (
        <div >
            <button className={className} disabled={disabled}>
                {Icon && <Icon className={iconPosition} />}
                <div className={Icon && 'text' + iconPosition}>{`${size} + ${color}`}</div>


            </button>
        </div>
    )

}
export default Button