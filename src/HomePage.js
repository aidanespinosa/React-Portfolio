import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./HomePage.css";
import Navigation from "./Navigation";

function HomePage() {
  return (
    <>
      <div className="landing-page">
        <Navigation />

        <div className="landing-page-content">
          <h1 className="landing-page-title">My Portfolio</h1>
          <p className="landing-page-description">
            Hi, my name is Aidan Espinosa and I am a Full Stack Engineering
            student. I have experience with React, Node.js, Express, MySQL,
            MongoDB and more.
          </p>
          <p className="landing-page-action">
            <Link to="/portfolio" className="landing-page-button">
              View My Work
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });
//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );

// }

export default HomePage;
