import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = (props) => {
    const { id, name, price, img, description } = props.service;

    const navigate = useNavigate()
    const handalNavigateToServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <h5>{price}</h5>
            <button onClick={() => handalNavigateToServiceDetails(id)} className='btn-org'>More Information</button>
        </div>
    );
};

export default Service;