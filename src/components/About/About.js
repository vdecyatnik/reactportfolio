import React from "react";
import photo from "../../images/IMG_1463.JPG";

function About() {
  return (
    <div className="container-fluid">
      <div className="clearfix">
        <img
          src={photo}
          className="col-md-3 float-md-left mb-3 ms-md-3 "
          alt="..."
        />

        <p className="mt-3">
          A paragraph of placeholder text. We're using it here to show the use
          of the clearfix class. We're adding quite a few meaningless phrases
          here to demonstrate how the columns interact here with the floated
          image.
        </p>

        <p>
          As you can see the paragraphs gracefully wrap around the floated
          image. Now imagine how this would look with some actual content in
          here, rather than just this boring placeholder text that goes on and
          on, but actually conveys no tangible information at. It simply takes
          up space and should not really be read.
        </p>

        <p>
          And yet, here you are, still persevering in reading this placeholder
          text, hoping for some more insights, or some hidden easter egg of
          content. A joke, perhaps. Unfortunately, there's none of that here.
        </p>
      </div>
      {/* <div className="row no-gutters bg-light position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src={photo} className="w-100" alt="..." />
        </div>
        <div className="col-md-6 position-static p-4 pl-md-0">
          <h5 className="mt-0">Columns with stretched link</h5>
          <p>
          
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default About;
