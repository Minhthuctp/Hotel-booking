import React from "react";
import "./About.css";

const AboutCard = () => {
  return (
    <>
      <div className="aboutCard mtop flex_space">
        <div className="row row1">
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to grow your business
          </h1>
          <p>
            Welcome to our hotel booking management system! We are a leading
            provider of hotel booking services, offering a seamless and
            convenient experience for travelers to book their accommodations
            online. Our platform is designed to make the process of finding and
            booking hotels easy, efficient, and enjoyable.
          </p>
          <p>
            At our hotel booking management system, we understand that finding
            the perfect hotel for your travel needs is an important part of
            planning any trip. That's why we have curated a wide selection of
            hotels, ranging from budget-friendly options to luxury resorts, to
            cater to the diverse needs and preferences of our customers.
          </p>
          <button className="secondary-btn">
            Explore More <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="row image">
          <img src="/images/about-img-1.jpg" alt="" />
          <div className="control-btn">
            <button className="prev">
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
