import React from 'react';
import youtube from '../../../resources/Images/bxl-youtube.png'
import fb from '../../../resources/Images/bxl-facebook.png'
import insta from '../../../resources/Images/bxl-instagram.png'
import twitter from '../../../resources/Images/bxl-twitter.png'
import whatsapp from '../../../resources/Images/bxl-whatsapp.png'
import { Link } from 'react-router-dom';
import './footer.scss'

const Footer = () => {
    return (
        <div className="footer-block">
            <div className="row pt-4">
                <div className="col-3">
                    <h4>POWER <strong className="text-yellow">X</strong></h4>
                </div>
                <div className="col-2">
                    <Link className="font-weight-bold" href='/'>Need Help?</Link><br/>
                    <Link href='/'>Help Center</Link><br/>
                    <Link href='/signup'>Email Support</Link><br/>
                    <Link href='/'>Live Chat</Link><br/>
                    <Link href='/'>Gift Certificates</Link><br/>
                    <Link href='/'>Send Us Feedback</Link><br/>
                </div>
                <div className="col-2">
                    <Link className="font-weight-bold" href='/'>Digital Resources</Link><br/>
                    <Link href='/'>Articles</Link><br/>
                    <Link href='/'>E-books</Link><br/>
                </div>
                <div className="col-2">
                    <Link className="font-weight-bold" href='/'>Contact With Us</Link><br/>
                    <Link href='/'><img src={youtube} alt=""/></Link>
                    <Link href='/'><img src={fb} alt=""/></Link>
                    <Link href='/'><img src={insta} alt=""/></Link>
                    <Link href='/'><img src={twitter} alt=""/></Link>
                    <Link href='/'><img src={whatsapp} alt=""/></Link><br/>
                    <Link href='/'>Forum</Link><br/>
                </div>
                <div className="col-2">
                    <Link className="font-weight-bold" href='/'>Join Our Newsletter</Link><br/>
                    <p>Get exclusive news,features, and updates from The Shredder Weight Loss Academy.</p>
                </div>
            </div>
            <p className="text-center text-secondary"><small>Copyright © 2020 POWER-X</small></p>
        </div> 
    );
};

export default Footer;