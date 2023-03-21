import React from "react";
import "../styles/home_styles.css";

const Footer = () => {
  return (
    <div className="section3">
      <div className="contacts">
        <div className="contact_section">
          <ul>
            <li>
              Telephone <i className="fas fa-phone-square-alt"></i>
            </li>
            <li>
              Email <i className="fas fa-envelope-square"></i>
            </li>
          </ul>
        </div>
        <div className="contact_section">
          <ul>
            <li>
              Instagram <i className="fab fa-instagram-square"></i>
            </li>
            <li>
              Twitter <i className="fab fa-twitter-square"></i>
            </li>
            <li>
              Facebook <i className="fab fa-facebook-square"></i>
            </li>
          </ul>
          <p className="website-rights">
            © Developherj 2022 | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
