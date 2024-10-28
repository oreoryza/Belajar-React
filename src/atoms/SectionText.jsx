import React from "react";
import "../App.css";

const SectionText = ({title, subTitle, text}) => {
    return (
        <div className="section-text">
            <h3>\ {title} \</h3>
            <h2>{subTitle}</h2>
            <p>{text}</p>
        </div>
    )
}

export default SectionText