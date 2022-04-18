import React from 'react';

const Experts = (props) => {
    const { id, name, descriotion, img } = props.expert
    return (

        <div className="card col-12 col-md-3 mx-auto padding-sm-10">
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className='card-text'>{name}</h5>
                <p className="card-text">{descriotion}</p>
                <p className="card-text"><small className="text-muted">{id}</small></p>
            </div>
        </div>
    );
};

export default Experts;