import React from "react";
import "../App.css";

const Button = ({name}) => {
    return (
        <a className="btn" href="#">{name}</a>
    )
}

export default Button