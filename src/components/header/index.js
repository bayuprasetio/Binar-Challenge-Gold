import React, { useState } from "react";
import "./style.css";
import Logo from "./assets/logo.svg";
import Menu from "./assets/menu.svg";
import CloseButton from "./assets/close.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  const openSidebar = () => {
    setActive(true);
  };
  const closeButton = () => {
    setActive(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <Link to={"/"} className="logo">
            <img src={Logo} alt="logo saya" />
          </Link>
          <div className={`overlay-bg ${active ? "menu-active" : ""}`} />
          <div
            className={`sidebar ${active ? "menu-active" : ""}`}
            onClick={closeButton}
          >
            <div className="top-sidebar">
              <h3>BCR</h3>
              <div className="close-icon">
                <img src={CloseButton} alt="" />
              </div>
            </div>
            <ul className="menu">
              <li>
                <a href="#our-service">Our Services</a>
              </li>
              <li>
                <a href="#WhyUs">Why Us</a>
              </li>
              <li>
                <a href="#Testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#Faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="burger-icon" onClick={openSidebar}>
            <img src={Menu} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
