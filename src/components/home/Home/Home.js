import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <ChooseUs/>
            <Footer/>
        </div>
    );
};

export default Home;