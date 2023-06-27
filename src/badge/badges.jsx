import React from 'react';
import './badge.css'

const Badge = ({ type }) => {
    const className = `badge ${type}`
    return (
       
            <span className={className}><span>{type}</span></span>
       
    )
}
export default Badge