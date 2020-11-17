import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="imgBg">
      <nav className="navbar navbar-expand-lg navbar-dark bg-color">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">
            POWER <span style={{ color: "orange", fontWeight: "bold" }}>X</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/ourClasses">
                  Our Classes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/aboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container d-flex align-items-center">
        <div className="row">
          <div style={{ marginTop: "10%" }} className="col-md-6 text-white">
            <h1>
              {" "}
              <span style={{ fontSize: "130%" }}>
                THE BEST FITNESS
              </span> <br /> STUDIO IN TOWN
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis corporis eveniet omnis nemo optio dignissimos. Nisi,
              laboriosam ratione? Nesciunt doloribus soluta architecto. Amet,
              iusto eos. Aliquid aliquam...
            </p>
            <Link to="/form">
              <button type="button" className="btn btn-warning">
                JOIN US
              </button>
            </Link>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
