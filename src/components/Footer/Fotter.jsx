import React from "react";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import "../Footer/Footer.css";

const Fotter = () => {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-right"></div>
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <div className="footer-left">
          <p className="footer-links">
            <a className="link-1" href="#">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p>Company Name &copy; 2015</p>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
