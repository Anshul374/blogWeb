import React from "react";
import "../Css/About.css";
import travel from "../images/calendar.png";
import destination from "../images/google-maps.png";
import itinerary from "../images/maps.png";
import bucket from "../images/to-do-list.png";

export default function About() {
  return (
    <>
      <div>
        <div className="about_img_div">
          <div className="over_img_text_div">
            <h2>ABOUT NOMADIC MONK</h2>
            <p>
              Hi, I am Anshul, the founder of this{" "}
              <strong>award-winning travel blog</strong>. Since i started
              Nomadic Monk in 2016, i have become expert in travel space and was
              even named{" "}
              <strong>Top Travel Influencers by Forbes Magazine</strong>.{" "}
            </p>
            <h3>WE WANT TO HELP YOU TRAVEL MORE!</h3>
          </div>
        </div>
        <div className="mid_body_div">
          <div className="mantra_div">
            <div className="mantra_img_div">
              <div className="mantra_text_div">
                <h3>My Mantra</h3>
                <p>
                  I live by the motto "
                  <strong style={{ color: "white" }}>
                    Adventure is for Everyone
                  </strong>
                  " because we believe that you don't have to be uber-athlete,
                  adrenaline junkie, or a part of the ultra-rich to be an
                  adventurer! All you need is the desire to achieve something{" "}
                  <em>more</em>!
                </p>
              </div>
            </div>
            <p className="visit_state">
              Since 2020 i have visited over 20 states in India and have worked
              hard to become the leading source of detailed city guides,
              personal travel tips, inspiring stories and so much more.
            </p>
          </div>
          <div className="about_self_div">
            <div className="about_self_in_div">
              <div className="self_text_div">
                <h3>About Anshul</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique rerum ab quia! consectetur adipisicing elit.
                  Similique rerum ab quia!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique rerum ab quia! consectetur adipisicing elit.
                  Similique rerum ab quia!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique rerum ab quia! consectetur adipisicing elit.
                  Similique rerum ab quia!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique rerum ab quia! consectetur adipisicing elit.
                  Similique rerum ab quia!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique rerum ab quia!consectetur adipisicing elit.
                </p>
              </div>
              <div className="self_img_div"></div>
            </div>
            <h3 className="forbes_text">
              Forbes names the Nomadic Monk one of the{" "}
              <strong>Top 10 Influencers</strong> in the world!
            </h3>
          </div>
          <div className="feature_div">
            <h3>FEATURED ON:</h3>
            <div className="feature_logo_div">
              <img
                src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Natgeologo.svg"
                alt="National Geographic"
              />
              <img
                src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Forbes_logo.svg"
                alt="Forbes"
              />
              <img
                src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/BBC-1.svg"
                alt="BBC"
              />
              <img
                src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/cnn-logo.svg"
                alt="CNN"
              />
              <img
                src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/cbc-1.svg"
                alt="CBC"
              />
              <img
                src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/today-show-seeklogo.com_.svg"
                alt="Today"
              />
            </div>
          </div>
          <h3 className="award_2">
            Nomadic Monk is a <em>two-time</em> winner of{" "}
            <strong>Thomas Awards Travel Blog of the Year</strong>.
          </h3>
          <div className="why_div">
            <h3>WHY FOLLOW ME?</h3>
            <div className="why_in_div">
              <div className="why_in_left_img_div"></div>
              <div className="why_in_right_div">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique rerum ab quia! consectetur adipisicing elit.
                  Similique rerum ab quia!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique rerum ab quia! consectetur adipisicing elit.
                  Similique rerum ab quia!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique rerum ab quia! consectetur adipisicing elit.
                  Similique rerum ab quia!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique rerum ab quia! consectetur adipisicing elit.
                  Similique rerum ab quia!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique rerum ab quia! consectetur adipisicing elit.
                  Similique rerum ab quia!
                </p>
              </div>
            </div>
          </div>
          <div className="help_you">
            <h3>HOW CAN THIS BLOG HELP YOU?</h3>
            <div className="help_you_in_div">
              <div className="help_you_pdiv">
                <p>
                  Over the past 15 years, The Planet D has become the go-to
                  resource for people seeking detailed city guides, personal
                  travel tips, inspiring stories and so much more.
                </p>
                <p>
                  Over 1 lakh people visit this site every month and benefit
                  from our accumulated knowledge from around the globe
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae iusto numquam culpa, aut odit architecto omnis ad
                  veritatis itaque sequi!
                </p>
              </div>
              <div className="help_you_in_img_div"></div>
            </div>
          </div>
          <div className="expect_div">
            <h3>HERE IS WHAT YOU CAN EXPECT ON THIS BLOG!</h3>
            <div className="expect_logos_div">
              <div className="expect_img_div">
                <img src={destination} alt="destination" />
                <h4>DESTINATION GUIDES</h4>
              </div>
              <div className="expect_img_div">
                <img src={bucket} alt="bucketlist" />
                <h4>BUCKETLIST EXPERIENCES</h4>
              </div>
              <div className="expect_img_div">
                <img src={itinerary} alt="itinerary" />
                <h4>DETAILED ITINERARIES</h4>
              </div>
              <div className="expect_img4_div">
                <img src={travel} alt="travel" />
                <h4>TRAVEL TIPS</h4>
              </div>
            </div>
          </div>
          <div className="footer_img_div">
            <h3>
              ANYTHING IS POSSIBLE YOU JUST HAVE TO WANT IT BAD ENOUGH. SO TUCK
              IN, GRAB A COFFEE AND BE INSPIRED.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
