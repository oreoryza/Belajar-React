import React from "react";
import "../App.css";
import Button from "../atoms/button";

const Banner = ({text}) => {
  return (
    <div className="hero container">
        <div className="banner">
            <h2>{text}</h2>
            <Button name="Get In Touch"/>
        </div>
    </div>
  )
}

export default Banner
