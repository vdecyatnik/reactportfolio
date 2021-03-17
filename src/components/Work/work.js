import React from "react";

import burger from "../../cardimages/burger-.png";
import home from "../../cardimages/homepage.png";
import weather from "../../cardimages/weatherDashboard.png";
import covid from "../../cardimages/covid.png";
import recipe from "../../cardimages/recipe.png";
import quiz from "../../cardimages/quiz.png";



const projects = [
  {
    image: home,
    alt: "",
    title: "Note Taker",
    description:
      "Note Taker application created using an express backend to save and retrieve note data.",
    livesite: "https://secret-escarpment-48794.herokuapp.com/",
    githubrepo: "https://github.com/vdecyatnik/Note-Taker",
  },

  {
    image: covid,
    title: "Covid State Tracker",
    description:
      "Application used to track Covid Data across the United States. Search for your city and get current and historic stats on positive cases and hospitalizations. This application pulls data from an API and uses Javascript to render the data to the webpage ",
    livesite: "https://uwcode-group-5.github.io/State-COVID-Tracker/",
    githubrepo: "https://github.com/UWCode-Group-5/State-COVID-Tracker",
  },

  {
    image: weather,
    title: "Weather Dashboard",
    description:
      "Simple weather application pulling weather data from a weather API. Search for your city and get the current weather along with a five day forecast. ",
    livesite: "https://vdecyatnik.github.io/Weather-Dashboard/",
    githubrepo: "https://github.com/vdecyatnik/Weather-Dashboard",
  },

  {
    image: burger,
    title: "Burger App",
    description:
      "A burger app created using MySql, Node, Express and Handlebars. Order a burger you would like to eat and get ready to devour it! Burgers are entered into a  MySql database and deleted after being devoured. ",
    livesite: "https://ancient-atoll-04123.herokuapp.com/",
    githubrepo: "https://github.com/vdecyatnik/Burger-App",
  },

  {
    image: recipe,
    title: "Recip Now",
    description:
      "Create an account to enter recipes to be shared online or to search for new recipes to try at home.",
    livesite: "https://rocky-peak-18836.herokuapp.com/",
    githubrepo: "https://github.com/zehrl/RecipNow",
  },

  {
    image: quiz,
    title: "JavaScript Quiz",
    description:
      "A multiple choice timed Javascript themed quiz created with vanilla Javascript. Save your name and score in local storage. ",
    livesite: "https://vdecyatnik.github.io/Code-Quiz/",
    githubrepo: "https://github.com/vdecyatnik/Code-Quiz",
  },
];

function Work() {
  return (
    <div className="container-fluid">


      <div className="row mt-3 m-3 ">
        {projects.map((prj) => {
          return (
            <div className="row no-gutters  position-relative shadow-lg p-3 mb-5 rounded">

      
              <div className="col-md-6 mb-md-0 p-md-4">
                <img src={prj.image} className="w-100" alt="..." />
              </div>
              <div className="col-md-6 position-static p-4 pl-md-0">
                <h5 className="mt-0">{prj.title}</h5>
                <p>{prj.description}</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={prj.livesite}
                  className="stretched-link"
                >
                  Live Application 
                </a>
               
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={prj.githubrepo}
                  className="stretched-link"
                >
                  Git Hub Repo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
