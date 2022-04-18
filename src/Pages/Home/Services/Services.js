import React, { useEffect, useState } from 'react';
import { BeakerIcon } from '@heroicons/react/solid'
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
            <h1 id='Services' className='our-service'>My Services</h1>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className="bg-danger w-25"></div>

                <BeakerIcon className="icon" />

                <div style={{ height: '1px' }} className="bg-danger w-25"></div>
            </div>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>

        </>
    );
};

export default Services;