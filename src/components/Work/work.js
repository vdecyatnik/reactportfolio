import React from "react";

import burger from "../../cardimages/burger-.png";
import home from "../../cardimages/homepage.png";

import covid from "../../cardimages/covid.png";
import recipe from "../../cardimages/recipe.png";
import quiz from "../../cardimages/quiz.png";
import emptracker from "../../cardimages/Emp1.png";

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
    image: emptracker,
    title: "Employee Tracker",
    description:"This application was made using React.js and Bootstrap. Users are able to view all employees in the directory as well as filter by name and sort by age." ,
    livesite: "https://employtrack.herokuapp.com/",
    githubrepo: "https://github.com/vdecyatnik/employee-tracker",
  },

  {
    image: burger,
    title: "Burger App",
    description:
      "A burger app created using MySql, Node, Express, Bootstrap and Handlebars. Order a burger you would like to eat and get ready to devour it! Burgers are entered into a  MySql database and deleted after being devoured. ",
    livesite: "https://ancient-atoll-04123.herokuapp.com/",
    githubrepo: "https://github.com/vdecyatnik/Burger-App",
  },

  {
    image: recipe,
    title: "Recip Now",
    description:
      "Create an account on Recip Now to save, share and find new recipes to try at home. All recipes are stored into a MySql database. ",
    livesite: "https://rocky-peak-18836.herokuapp.com/",
    githubrepo: "https://github.com/zehrl/RecipNow",
  },

  {
    image: quiz,
    title: "JavaScript Quiz",
    description:
      "A multiple choice timed Javascript themed quiz created with vanilla Javascript. Your iniitials and score will be saved into local storage and onto a score page. Go back and try to beat your highest score! q 4rd ",
    livesite: "https://vdecyatnik.github.io/Code-Quiz/",
    githubrepo: "https://github.com/vdecyatnik/Code-Quiz",
  },
];

function Work() {
  return (
   
    <div className="container">
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
                <br />
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
