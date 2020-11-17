import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="imgBg">
            <nav className="navbar navbar-expand-lg navbar-dark bg-color">
                <div className="container">
                    <a className="navbar-brand text-white" href="/">POWER <span style={{color: 'orange', fontWeight: 'bold'}}>X</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"   >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/home">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/ourClasses">Our Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/aboutUs">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/contactUs">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container d-flex align-items-center">
                <div className="row">
                    <div style={{marginTop:'10%'}} className="col-md-6 text-white">
                        <h1> <span style={{fontSize: '130%'}} >THE BEST FITNESS</span> <br/> STUDIO IN TOWN</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis corporis eveniet omnis nemo optio dignissimos. Nisi, laboriosam ratione? Nesciunt doloribus soluta architecto. Amet, iusto eos. Aliquid aliquam...</p>
                        <Link to={"/"}><button type="button" className="btn btn-warning">JOIN US</button></Link>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;