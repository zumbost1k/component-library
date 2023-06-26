import React from 'react';
import './budges.css'

const Budge = ({ type }) => {
    const className = `budge ${type}`
    return (
        <div>
            <button className={className}><span>{type}</span></button>
        </div >
    )
}
export default Budge