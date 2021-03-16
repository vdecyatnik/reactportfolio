import React from "react";
import photo from "../../images/IMG_1463.JPG";

function About() {
  return (
    <div className="container-fluid">
      <div className="row g-0 bg-light position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src={photo} className="w-100" alt="img" />
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h5 className="mt-0"> About Me</h5>

          <p>
            {" "}
            My name is Valentina. I am a Full Stack Web Developer. I have
            experience using multiple databases, CSS frameworks and languages. I
            am passionate in web design. I enjoy learning new technologies,
            problem solving, working on a team and being creative when building
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
