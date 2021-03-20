import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <h1 className="navbar-brand" href="#">
          Valentina Decyatnik
        </h1>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Work"
              className={
                location.pathname === "/Work" ? "nav-link active" : "nav-link"
              }
            >
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/About"
              className={
                location.pathname === "/About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
