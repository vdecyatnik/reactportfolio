import React from "react";
import pic from "../../images/water.jpg";

import "./index.css";

function Home(){


    return(
       
        <div className= "container">

            <img src={pic} className= "img-fluid" alt="..."></img>
        </div>

       


    )
}

export default Home;