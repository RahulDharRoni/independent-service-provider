import React from 'react';
import roni from '../../Images/roni.png'

const About = () => {
    return (

        <div className="d-flex align-items-center">
            <div className='w-50 p-5'>
                <h1>Rahul Dhar Roni</h1>
                <p>I am MERN stake developer. I have been working as a freelancer for last 2 years in fiverr and upwork based other platform. I am good at wordpress , Clickfunnel, shopify and other CMS site builders. Although i am a MBA holder, still i want to developer my carrier as a web engineer. I am always free for work , always eager to work international clients. As a freelancer i have 50+ client work experience.</p>
                <div className='d-flex'>
                    <button className='bg-primary rounded py-2 px-5 text-white border'>Facebook</button>
                    <button className='bg-dark rounded py-2 px-5 text-white border mx-2'>LinkedIn</button>
                    <button className='bg-warning rounded py-2 px-5 text-white border'>Twitter</button>
                </div>
            </div>
            <div><img src={roni} alt="" /></div>
        </div>
    );
};

export default About;