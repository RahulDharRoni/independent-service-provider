import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css'


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <h1 id='Services' className='our-service'>Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>

        </>
    );
};

export default Services;