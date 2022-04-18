import React from 'react';
import notfound from '../../Images/notfound.jpg'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <h1 className='my-auto'>404 Not-Found</h1>
            <img src={notfound} alt="" width='500px' />

        </div>
    );
};

export default NotFound;