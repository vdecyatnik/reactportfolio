import React from "react";
import photo from "../../images/IMG_1463.JPG";

function About() {
  return (
    <div className="container-fluid">
      <div className="row no-gutters bg-light position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src={photo} className="w-100" alt="..." />
        </div>
        <div className="col-md-6 position-static p-4 pl-md-0">
          <h5 className="mt-0">Columns with stretched link</h5>
          <p>
            Another instance of placeholder content for this other custom
            component. It is intended to mimic what some real-world content
            would look like, and we're using it here to give the component a bit
            of body and size.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
