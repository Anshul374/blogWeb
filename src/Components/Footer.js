import React from "react";
import logo from "../images/logo.png";
import "../Css/Footer.css";
import fb from "../images/facebook (2).png";
import insta from "../images/instagram.png";
import twitter from "../images/twitter (2).png";
import youtube from "../images/youtube.png";

export default function Footer() {
  console.log("hello");
  return (
    <footer className="footer_div">
      <p className="footer_left">© Copyright 2016 NomadicMonk</p>
      <div className="footer_right_div">
        <p className="follow">Follow me on</p>
        <div className="social_logos">
          <a href="https://www.facebook.com/anshul.thakur.56829">
            <img src={fb} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/anshul374/">
            <img src={insta} alt="instagram" />
          </a>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="/">
            <img src={youtube} alt="youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
}
