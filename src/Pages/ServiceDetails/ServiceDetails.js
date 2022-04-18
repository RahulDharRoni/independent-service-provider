import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = ({ id }) => {
    let { servicesId } = useParams();
    const [user, setUser] = useState('');

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div>

            <h1>info : {servicesId}</h1>

        </div>
    );
};

export default ServiceDetails;