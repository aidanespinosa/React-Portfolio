import React from "react";
import Project from "./Project.js";
import "./Project.css";

function Portfolio() {
  return (
    <div className="container">
      <Project
        title="HomeCooked"
        description="Search for delicious meals based on specific ingredients."
        technologies="Restful API, Node.js,"
        imageUrl="https://user-images.githubusercontent.com/98136350/199370414-6a73ca5c-40b0-48dc-806d-48c8fc3fe298.png"
        deployedLink={"https://aidanespinosa.github.io/home-cooked/"}
        githubLink={"https://github.com/aidanespinosa/home-cooked"}
      />
      <Project
        title="Media Map"
        description="Entertainment search tool."
        technologies="Node Js, Rest, Express, MySQL, sequelize"
        imageUrl="https://user-images.githubusercontent.com/112655058/211417826-7ddd5812-b494-4735-89b8-ceaa19f87d0b.png"
        deployedLink={"https://stream-team.herokuapp.com/"}
        githubLink={"https://github.com/aidanespinosa/Media-Map"}
      />
      <Project
        title="Community Compass"
        description="A neighboorhood directory."
        technologies="React, GraphQl, MongooseDB"
        imageUrl="https://example.com/project3-image.jpg"
        deployedLink={"https://github.com/username/project3"}
        githubLink={"https://github.com/aidanespinosa/Community-Compass"}
      />
    </div>
  );
}
export default Portfolio;
