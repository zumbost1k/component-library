import React from "react"
import './input.css'
const Input = (props) => {
    const isDisable = props.disabled === 'true' ? true : false
    const typeCheker = (type, inputItem) => {
        if (inputItem === "both" || inputItem === type) { return type }
        if (inputItem !== type) { return "hidden" }
    }
    return (
        <div className="input"><div className={typeCheker('label', props.inputItem)} /><input type="text" placeholder='Placeholder text' disabled={isDisable} /><div className={typeCheker('caption', props.inputItem)}/></div>
    )
}

export default Input