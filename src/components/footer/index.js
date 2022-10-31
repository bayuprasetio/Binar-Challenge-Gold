import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import facebook from "./assets/icon_facebook.png";
import instagram from "./assets/icon_instagram.png";
import mail from "./assets/icon_mail.png";
import twitch from "./assets/icon_twitch.png";
import twitter from "./assets/icon_twitter.png";
import logo from "./assets/logo.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container footer-bawah">
        <div className="row m-auto baris-footer">
          <div className="col-lg-3  first">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-lg-3 second">
            <p>
              <a href="#our-service">Our Services</a>
            </p>
            <p>
              <a href="#WhyUs">Why Us</a>
            </p>
            <p>
              <a href="#Testimonial">Testimonial</a>
            </p>
            <p>
              <a href="#Faq">FAQ</a>
            </p>
          </div>
          <div className="col-lg-3 thrid">
            <p>Connect with us</p>
            <img src={facebook} alt="icon_facebook" />
            <img src={instagram} alt="icon_instagram" />
            <img src={twitter} alt="icon_twitter" />
            <img src={mail} alt="icon_mail" />
            <img src={twitch} alt="icon_twitch" />
          </div>
          <div className="col-lg-3 fourth">
            <p>&copy; Copyright Binar 2022</p>
            <Link to={"/"} className="logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
