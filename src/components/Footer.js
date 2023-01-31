import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://instagram.com/oksiddhant" target="_blank" rel="noreferrer">
        <InstagramIcon />
        </a>

        <a href="https://www.facebook.com/oksiddhant?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
        <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/siddhant-singh-15b3531b7/" target="_blank" rel="noreferrer">
        <LinkedInIcon />
        </a>
        
      </div>
      <p> &copy; 2022 Siddhant Singh</p>
    </div>
  );
}

export default Footer;
