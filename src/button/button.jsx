import React from "react"
import './button.css'

const iconTypeCheker = (icon, color, size, type) => {
    if (size === 'small' && type === 'right_arrow' && icon === 'left_chat') {
        return 'left_chat_small'
    }
    if (size === 'small' && type === "center_chat" && icon === 'left_chat') { return "hidden" }
    if ((icon === 'center_chat' || icon === 'left_chat') && type === "center_chat") {
        if (icon === 'left_chat') {
            if (size !== "small") { return 'left_chat' }
            else { return 'left_chat_small' }
        }
        if (icon === 'center_chat') {
            if (size === "large") { return 'center_chat_large' }
            if (size === "block") { return 'center_chat' }
            else { return 'center_chat_small' }
        }
    }

    if (icon === 'right_arrow'&&type==='right_arrow') {
        if (size !== "small") { return 'right_arrow' }
        else { return 'right_arrow_small' }
    }
    if (type !== icon) { return "hidden" }
}
const Button = (props) => {
    const isDisable = props.disabled === 'true' ? true : false
    const size = props.icon && props.icon !== `right_arrow` && props.size !== 'block' ? `${props.size}_with_icon_left` : props.icon && props.size !== 'block' ? `${props.size}_with_icon_right` : props.size
    const className = `${props.color} ${size} `

    return (
        <div>
            <button className={className} disabled={isDisable}>
                <svg type="center_chat" className={iconTypeCheker(props.icon, props.color, props.size, "center_chat")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                        stroke="currentColor" stroke-width="1.5" />
                </svg>
                {`${props.size} + ${props.color}`}
                <svg type="right_arrow" className={iconTypeCheker(props.icon, props.color, props.size, "right_arrow")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 4.99988M19 12L12 18.9999" stroke="currentColor" fill="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


            </button>
        </div>
    )

}
export default Button