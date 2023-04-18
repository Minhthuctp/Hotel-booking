import React from "react";
import "./About.css";
import AboutCard from "./AboutCard";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our <span>Features</span>
            </h1>
            <p>
              Our hotel booking management system is packed with an array of
              features that are designed to make your hotel booking experience
              seamless, efficient, and enjoyable.
            </p>
            <p>
              We are constantly innovating and enhancing our platform to provide
              the best possible experience to our customers, making hotel
              bookings a breeze and ensuring a memorable stay for all travelers.
            </p>
            <button className="secondary-btn">
              Explore More <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div className="row image">
            <img src="/images/feature-img-1.jpg" alt="" />
            <div className="control-btn">
              <button className="prev">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
