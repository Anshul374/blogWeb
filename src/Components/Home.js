import React from "react";
import "../Css/Home.css";
import { useNavigate } from "react-router-dom";
import card_desc from "./Card_data.js";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home_img_div">
        <img
          src="https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80"
          alt="home_page_image"
          className="home_img"
        />
      </div>
      <div className="nomad_monk">
        <h1>NOMADIC MONK</h1>
        <p>Stories of an Indian Traveller across India!</p>
      </div>
      <button className="read_more">Read More...</button>
      <div className="blogs_outer_div">
        <p className="latest_posts">LATEST POSTS</p>
        <div className="blogs_inner_div">
          {card_desc.map((item) => {
            return (
              <div key={item.id} className="blog_card">
                <img src={item.img} alt="1st blog" />
                <p className="date">{item.date}</p>
                <h3>{item.title}</h3>
                <p className="blog_short_content">{item.desc}</p>
                <button className="article_btn">Read Article</button>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="hr1" />
      <div className="profile">
        <div className="image_div"></div>
        <h3>Anshul Thakur</h3>
        <p onClick={() => navigate("Profile")}>VISIT PROFILE</p>
      </div>
      <div className="footer_img_div">
        <h3>
          ANYTHING IS POSSIBLE YOU JUST HAVE TO WANT IT BAD ENOUGH. SO TUCK IN,
          GRAB A COFFEE AND BE INSPIRED.
        </h3>
      </div>
    </>
  );
}
