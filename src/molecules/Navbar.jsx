import React from "react";
import "../App.css";
import Button from "../atoms/button";
import Logo from "../atoms/Logo";

const LandingPage = () => {
  return (
    <nav className="container">
      <Logo/>
      <div className="nav-link">
        <ul className="nav-list">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Our Services</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <Button name="Get In Touch" />
      </div>
    </nav>
  );
};

export default LandingPage;
