import React from "react";
import { city, image, name } from "../data/data";

function About() {
   return (
      <div id="about">
         <h2>About Me</h2>
         <p>
            {name} is a Web Developer from {city}
         </p>
         <img src={image} alt="I made this" />
      </div>
   );
}

export default About;
