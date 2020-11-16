import React from 'react';
import fitness from '../../../resources/Images/Group 87.png';
import cardio from '../../../resources/Images/Group 88.png';
import membership from '../../../resources/Images/gift-2.png';
import './ChooseUs.scss'

const ChooseUs = () => {
    return (
        <div className="container workOut">
            <h3 className="d-flex justify-content-center choose">WHY <span className="text-warning">CHOOSE US</span></h3>
            <div className="row ">
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-body d-flex align-items-center Choose-card ">
                            <div>
                                <img src={fitness} alt="" />
                                <h6 className="card-title">FREE FITNESS TRAINING</h6>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body d-flex align-items-center Choose-card">
                            <div>
                                <img src={cardio} alt="" />
                                <h6 className="card-title text-warning">TONS OF CARDIO AND STRENTH</h6>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body d-flex align-items-center Choose-card">
                            <div>
                                <img src={membership} alt="" />
                                <h6 className="card-title">NO COMMITMENT MEMBERSHIPS</h6>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;