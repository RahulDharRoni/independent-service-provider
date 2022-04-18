import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../../../Images/1.png'
import '../../../Images/1111 (1).jpg'
import '../../../Images/222.jpg'
import '../../../Images/333.jpg'

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_1280.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='text-warning text-uppercase font-weight-bold'>Fitness advicsor</h1>
                    <h1 className='text-size-bold'>My Name is ROLAND QUEMAN</h1>
                    <p>Personal trainers, health fitness specialists, and fitness coaches educate and motivate clients in physical fitness, including cardiovascular exercise.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='text-warning text-uppercase font-weight-bold'>Fitness advicsor</h1>
                    <h1 className='text-size-bold'>My Name is ROLAND QUEMAN</h1>
                    <p>Personal trainers, health fitness specialists, and fitness coaches educate and motivate clients in physical fitness, including cardiovascular exercise.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-fluid w-100"
                    src="https://cdn.pixabay.com/photo/2018/09/26/13/02/barbell-3704578_1280.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='text-warning text-uppercase font-weight-bold'>Fitness advicsor</h1>
                    <h1 className='text-size-bold'>My Name is ROLAND QUEMAN</h1>
                    <p>Personal trainers, health fitness specialists, and fitness coaches educate and motivate clients in physical fitness, including cardiovascular exercise.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;