import React from "react";
import "../App.css";
import Button from "../atoms/button";

const Footer = () => {
  return (
      <footer>
        <div className="footer-content container">
            <div className="footer-item">
                <h3>Subcribe Us</h3>
                <div className="line"></div>
                <p>It is a long established fact that a reader will be distracted by the readable</p>
                <form action="">
                    <input type="email" placeholder="Email" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="footer-item">
                <h3>Subcribe Us</h3>
                <div className="line"></div>
                <p>It is a long established fact that a reader will be distracted by the readable</p>
                <form action="">
                    <input type="email" placeholder="Email" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="footer-item">
                <h3>Subcribe Us</h3>
                <div className="line"></div>
                <p>It is a long established fact that a reader will be distracted by the readable</p>
                <form action="">
                    <input type="email" placeholder="Email" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
      </footer>
  )
}

export default Footer
