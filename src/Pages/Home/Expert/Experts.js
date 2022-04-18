import React from 'react';

const Experts = (props) => {
    const { id, name, descriotion, img } = props.expert
    return (

        <div className="card col-12 col-md-3 mx-auto padding-sm-10">
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className='card-text text-danger'>{name}</h5>
                <p className="card-text">{descriotion}</p>
                <h5>YoUR PERSONAL FITNESS AND GYM TRAINER</h5>
            </div>
        </div>
    );
};

export default Experts;