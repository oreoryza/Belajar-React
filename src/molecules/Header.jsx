import React from "react";
import "../App.css";

const Header = ({title}) => {
  return (
      <header className="about-header container">
        <h1>{title}</h1>
        <h3>Home / {title}</h3>
      </header>
  )
}

export default Header;
