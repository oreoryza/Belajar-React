import React from "react";
import "../App.css";

const Member = ({name, position, image}) => {
    return (
        <div className="member">
            <img src={image} alt="" />
            <h3><span>{name}</span></h3>
            <h4>{position}</h4>
        </div>
    )
}

export default Member