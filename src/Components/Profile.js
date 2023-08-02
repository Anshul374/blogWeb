import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Css/Profile.css";
import "../Css/Footer.css";
import "../Css/Navbar.css";
import profile from "../images/IMG_20220823_203838_893.jpg";
export default function Profile() {
  return (
    <>
      <div className="prof_div">
        <div className="prof_div1">
          <h3 className="name">Anshul Thakur</h3>
          <div className="prof_out_div">
            <div className="prof_left_div">
              <img src={profile} alt="profile" />
              <div className="prof_left_inner_div">
                <div className="contact">
                  <p className="center">Contact me</p>
                  <p className="center text">9816161374</p>
                </div>
                <div className="blogger">
                  <p className="center">On Blogger since</p>
                  <p className="center text">March 2020</p>
                </div>
                <div className="profile_views">
                  <p className="center">Profile views-</p>
                  <p className="center text">18672</p>
                </div>
              </div>
            </div>
            <div className="prof_right_div">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident, minima.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Provident, minima.
              </p>
              <div className="about_me">
                <p>About me</p>
                <table>
                  <tr>
                    <td>Gender</td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <td>Industry</td>
                    <td>Tourism</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>Himachal Pradesh</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
