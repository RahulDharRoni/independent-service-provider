import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    let errorUpdate;
    if (error) {
        errorUpdate = <div>
            <p>Error: {error.message}</p>
        </div>
    }

    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className=''>
                    <button onClick={() => signInWithGoogle()} className='btn btn-secondary  mx-2'>Google Sign In</button>
                </div>
                <div className=''>
                    <button onClick={() => signInWithGithub()} className='btn btn-dark text-white mx-2'>GitHub Sign In</button>
                </div>
                <div className=''>
                    <button onClick={() => signInWithFacebook()} className='btn btn-primary  mx-1'>Facebook Sign In</button>
                </div>
            </div>


            <h1>{errorUpdate}</h1>
        </div>


    );
};

export default SocialLogin;