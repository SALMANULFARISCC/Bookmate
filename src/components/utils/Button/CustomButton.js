import * as React from "react";
import './button.css';

const STYLES = [
    "btn--primary--solid",
    "btn--secondary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",

]

const SIZE = ["btn--medium","btn--large"]

export  const  CustomButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize


}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
        </button>
    );

};