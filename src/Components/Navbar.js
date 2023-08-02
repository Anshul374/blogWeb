import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Navbar.css";
import logo from "../images/logo.png";
import search from "../images/search (2).png";
import profile from "../images/account.png";
import like from "../images/love.png";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="travel_logo"
        className="logo"
        onClick={() => navigate("/")}
      />
      <div className="left_div">
        <h4>
          <Link to="/">Home</Link>
        </h4>
        <h4>
          <Link to="/">Places</Link>
        </h4>
        <h4>
          <Link to="/about">About</Link>
        </h4>
        <h4>
          <Link to="/contact">Contact</Link>
        </h4>
      </div>
      <div className="mid_div">
        <img src={search} alt="search" className="search_lo" />
        <input
          type="text"
          placeholder="Search for blogs"
          className="mid_input"
        />
      </div>
      <div className="right_div">
        <div className="profile_div" onClick={() => navigate("profile")}>
          <img src={profile} alt="profile" />
          <h4>Profile</h4>
        </div>
        <div className="like_div">
          <img src={like} alt="like" />
          <h4>Like</h4>
        </div>
      </div>
    </nav>
  );
}
