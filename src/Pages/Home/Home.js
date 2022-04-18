import React from 'react';
import Expert from './Expert/Expert';
import Service from './Services/Services'
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <Expert></Expert>
        </div>
    );
};

export default Home;