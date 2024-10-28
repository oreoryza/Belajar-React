import React from "react";
import "../App.css";
import SectionText from "../atoms/SectionText";
import Card from "../atoms/Card";

const Section = ({title, subTitle, text}) => {
  return (
    <div className="about-us container">
      <img
        className="about-img"
        src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?cs=srgb&dl=pexels-fauxels-3182773.jpg&fm=jpg"
        alt=""
      />
      <div className="section-text">
        <SectionText title={title} subTitle={subTitle} text={text}/>
        <Card/>
      </div>
    </div>
  );
};

export default Section