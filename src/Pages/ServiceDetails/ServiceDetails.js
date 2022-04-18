import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    let { servicesId } = useParams();
    return (
        <div>

            <h1>info : {servicesId}</h1>

        </div>
    );
};

export default ServiceDetails;