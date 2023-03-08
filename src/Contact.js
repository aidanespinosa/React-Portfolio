import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, you can reach me at:</p>
        <ul>
          <li>
            <a href="mailto:aidanespinosa3@gmail.com">
              aidanespinosa3@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/aidanespinosa">
              https://github.com/aidanespinosa
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
