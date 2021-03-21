import React from "react";
import photo from "../../images/IMG_1463.JPG";

function About() {
  return (
    // <div className="container-fluid fixheight">
    //   <div className="clearfix">
    //     <img
    //       src={photo}
    //       className="col-md-3 float-md-left mb-3 ms-md-3 "
    //       alt="..."
    //     />
    //     <p className="mt-3">
    //       Hi my name is Valentina Decyatnik. I recently decided to change
    //       careers after working with children for seventeen years. I've always
    //       been curious about computer programming and decided to give it a try.
       
        
    //       Completing the six month Coding Bootcamp at the University of
    //       Washington has given me a great foundation of new skills that I can
    //       keep building on. I've learned that I can quickly learn new languages
    //       and technogolies. A year ago I had no idea what career path I wanted
    //       to take. Now I have a passion for learning new skills and putting them
    //       to use creating websites and full stack applications. My goal is to
    //       become a video game developer one day.
      
    //       I have experience using MySQl, MongoDB, Bootstrap, Handlebars,
    //       React.js, Node, Express, and Javascript. I enjoy learning new
    //       technologies, problem solving, working on a team and being creative
    //       when building applications. I love that working in this field I am
    //       always learning something new! I'm excited to see where my newly
    //       learned skills will take me on my career path.
    //     </p>
    //   </div>
       <div className="row no-gutters bg-light position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src={photo} className="w-100" alt="..." />
        </div>
        <div className="col-md-6 position-static p-4 pl-md-0">
          <h5 className="mt-0">About Me</h5>
          <p>
           Hi my name is Valentina Decyatnik. I recently decided to change
          careers after working with children for seventeen years. I've always
          been curious about computer programming and decided to give it a try.
       </p>
        <p>
          Completing the six month Coding Bootcamp at the University of
          Washington has given me a great foundation of new skills that I can
          keep building on. I've learned that I can quickly learn new languages
          and technogolies. A year ago I had no idea what career path I wanted
          to take. Now I have a passion for learning new skills and putting them
          to use creating websites and full stack applications. My goal is to
          become a video game developer one day.
      </p>
      <p>
          I have experience using MySQl, MongoDB, Bootstrap, Handlebars,
          React.js, Node, Express, and Javascript. I enjoy learning new
          technologies, problem solving, working on a team and being creative
          when building applications. I love that working in this field I am
          always learning something new! I'm excited to see where my newly
          learned skills will take me on my career path.
          </p>
        </div>
      </div> 
    
  );
}

export default About;
