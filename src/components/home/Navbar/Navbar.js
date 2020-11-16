import React from 'react';
import './Navbar.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import {  Link } from "react-router-dom";

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 20){
          setSticky(true)
        }else{
          setSticky(false)
        }
      })
    }, []);

    return (
        <nav className={isSticky ? "fade in show navbar navbar-expand-sm fixed-top navbar-dark bg-dark " : "fade out show navbar navbar-expand-sm fixed-top navbar-dark "}>
            <div className="container">
                <Link className="navbar-brand" to="/home">POWER <strong className="text-yellow">X</strong></Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/classes">Our Classes</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;