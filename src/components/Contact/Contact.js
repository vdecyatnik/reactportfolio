import React from "react";
import Resume from "../../ResumeFolder/2021valResume.pdf";
import "./index.css";

function Contact() {
  return (

   
    <div className="container-fluid">
      <div className="jumbotron mt-3  bg-light">
        <div className="container">
          <h1 className="display-4">Contact Me</h1>
          <p className="lead">Let's Chat!</p>

          <div className="row">
            <div className="col">
              <div className="mb-0">
                <ul className="list-group">
                  <li>
                    <a href="mailto:vdecyatnik@gmail.com" style={{color:"black"}}>
                      Vdecyatnik@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/valentinadecyatnik/" style={{color:"black"}}>
                      Linked In
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/vdecyatnik" style={{color:"black"}}>Git Hub</a>
                  </li>
                  <li>
                    <a href="tel:2068830308" style={{color:"black"}}>(206)-883-0308</a>
                  </li>
                  <li>
                  <a href={Resume} download="Resume.pdf" style={{color:"black"}}>Resume</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </div>
   
    
    
  );
}

export default Contact;
