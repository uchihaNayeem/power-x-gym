import React from 'react';
import img1 from '../../../resources/Images/bxl-youtube.png';
import img2 from '../../../resources/Images/bxl-facebook.png';
import img3 from '../../../resources/Images/bxl-instagram.png';
import img4 from '../../../resources/Images/bxl-twitter.png';
import img5 from '../../../resources/Images/bxl-whatsapp.png';

const FooterX = () => {
  return (
    <div style={{backgroundColor: '#171426'}} className=" pt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <h2 className="text-white font-weight-bold">
              Power <span style={{color: 'orange'}} >X</span>
            </h2>
          </div>

          <div style={{color: 'white'}} className="col-md-2">
            <p className="font-weight-bold">Need Help?</p>
            <p>Help Center</p>
            <p>Email Support</p>
            <p>Live Chat</p>
            <p>Gift Certifications</p>
            <p>Send Us Feedback</p>
          </div>

          <div style={{color: 'white'}} className="col-md-2">
            <p className="font-weight-bold">Digital Resources</p>
            <p>Articles</p>
            <p>E-books</p>
          </div>

          <div style={{color: 'white'}} className="col-md-2">
            <p className="font-weight-bold">Connect with Us</p>
             <div className="d-flex justify-content-between mb-3">
              <img src={img1} alt=""/>
              <img src={img2} alt=""/>
              <img src={img3} alt=""/>
              <img src={img4} alt=""/>
              <img src={img5} alt=""/>
              </div>
            <p>Forum</p>
          </div>

          <div style={{color: 'white'}} className="col-md-3">
            <p className="font-weight-bold">Join Our Newsletter</p>
            <p>
              Get exclusive news, features, and updates from The Shredder Weight
              Loss Academy.
            </p>
          </div>
          
        </div>
      </div>

      <small className="text-white d-flex justify-content-center pt-5 pb-3">©2020 Programming Hero. All Rights Reserved.</small>
    </div>
  );
};

export default FooterX;