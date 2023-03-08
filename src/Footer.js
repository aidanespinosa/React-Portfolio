import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a
              href="https://github.com/aidanespinosa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a href="mailto:aidanespinosa3@gmail.com">Email</a>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Aidan Espinosa
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
