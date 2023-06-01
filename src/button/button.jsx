import React from "react"
import './button.css'
import arrow from "../icons/arrow.svg"
import chat from "../icons/chat.svg"
const iconTypeCheker = (icon, color, size) => {
    if (icon === 'left_chat' && color === 'primary') {
        if (size === "large") { return 'left_chat_primary_large' }
        if (size !== "small") { return 'left_chat_primary' }
        else { return 'left_chat_primary_small' }
    }
    if (icon === 'right_arrow' && color === 'primary') {
        if (size !== "small") { return 'right_arrow_primary' }
        else { return 'right_arrow_primary_small' }
    }
    if (icon === 'center_chat' && color === 'primary') {
        if (size !== "small") { return 'center_chat_primary' }
        else { return 'center_chat_primary_small' }
    }
    if (icon === 'left_chat') {
        if (size === "large") { return 'left_chat_large' }
        if (size !== "small") { return 'left_chat' }
        else { return 'left_chat_small' }
    }
    if (icon === 'right_arrow') {
        if (size !== "small") { return 'right_arrow' }
        else { return 'right_arrow_small' }
    }
    if (icon === 'center_chat') {
        if (size !== "small") { return 'center_chat' }
        else { return 'center_chat_small' }
    }
    else { return '' }
}
const svgChecker = (icon, size, color) => {
    const iconType = (icon === 'center_chat' || icon === 'left_chat' || icon === 'right_arrow') ? (icon === 'center_chat' || icon === 'left_chat') && size !== 'small' ? chat : size === 'small' && icon === 'center_chat' ? chat : arrow : ""
    if (iconType !== '') {
        return <img src={iconType} alt="logo" className={iconTypeCheker(icon, color, size)} />
    }
    else { return '' }
}
const Button = (props) => {
    const isDisable = props.disabled === 'true' ? true : false
    const size = props.icon && props.icon !== `right_arrow` && props.size !== 'block' ? `${props.size}_with_icon_left` : props.icon && props.size !== 'block' ? `${props.size}_with_icon_right` : props.size
    const className = `${props.color} ${size} `

    return (
        <div>
            <button className={className} disabled={isDisable}>{svgChecker(props.icon, props.size, props.color)}{`${props.size} + ${props.color}`}</button>
        </div>
    )

}
export default Button