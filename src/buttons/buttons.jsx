import React from "react"
import './buttons.css'

const iconTypeCheker = (icon, color, size) => {
    if (icon === 'left_chat' && color === 'primary') {
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


const Buttons = (props) => {
    const size = props.icon && props.icon !== `right_arrow` && props.size !== 'block' ? `${props.size}_with_icon_left` : props.icon && props.size !== 'block' ? `${props.size}_with_icon_right` : props.size
    const className = `${props.color} ${size} ${iconTypeCheker(props.icon, props.color, props.size)}`
    return (
        <div><button className={className} >{`${props.size} + ${props.color}`}</button></div>
    )

}
export default Buttons