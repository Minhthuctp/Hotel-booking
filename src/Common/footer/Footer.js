import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid">
          <div className="box">
            <h2>ABOUT US</h2>
            <p>
              Welcome to our hotel booking management system! We are a leading
              provider of hotel booking services, offering a seamless and
              convenient experience for travelers to book their accommodations
              online. Our platform is designed to make the process of finding
              and booking hotels easy, efficient, and enjoyable.
            </p>

            <div className="icon flex_space">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>

          <div className="box">
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/destinations">Destinations</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="box post">
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>The Most Advance Business Plan</p>
                <label className="fa fa-calendar-alt"></label>
                <span>01 Jan 2023</span>
              </li>
              <li>
                <p>Beautiful Home Page</p>
                <label className="fa fa-calendar-alt"></label>
                <span>15 Feb 2023</span>
              </li>
              <li>
                <p>Modern Design Concept</p>
                <label className="fa fa-calendar-alt"></label>
                <span>21 Mar 2023</span>
              </li>
            </ul>
          </div>

          <div className="box">
            <h2>NEWSLETTER</h2>
            <p>You can give your email for us to receive the new information</p>

            <input type="text" name="" id="" />
            <input type="text" className="primary-btn" value="REGISTER" />
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>© 2022 All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
