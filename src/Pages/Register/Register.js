import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogIn/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCpassword] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()


    const handleRegistration = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const cPassword = event.target.cPassword.value;
        if (password !== cPassword) {
            setErrors("Password did not match!")
        }
        if (password <= 6) {
            setErrors("Password must be more then equal six!")
        }
        createUserWithEmailAndPassword(email, password)
    }
    const navigateLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/Home')
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    let errorMessage;
    if (error) {
        errorMessage = <p>Error: {error.message}</p>
    };


    return (
        <div className='w-50 mx-auto shadow p-5 my-5 rounded border'>
            <h1 className='text-center text-danger'>Sign Up Now</h1>
            <form onSubmit={handleRegistration}>
                <div className='mb-3'>
                    <label className='form-label'>Email address</label>
                    <input type="text" className="form-control" name='email' />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input type="password" className='form-control' name='password'></input>
                </div>
                <div className='mb-3'>
                    <label for="exampleInputPassword1" className='form-label'>Confirm Password</label>
                    <input type="password" className='form-control' name='cPassword'></input>

                </div>
                <p className='text-danger'>{errors}</p>
                <button type="submit" className="btn btn-danger">Submit</button>
                <h3 className='text-danger'>{errorMessage}</h3>
                <p>Already Have an Account? <small onClick={navigateLogin}>Login Here</small> </p>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className="bg-danger w-50"></div>
                    <p className='mt-2 px-2'>Or</p>
                    <div style={{ height: '1px' }} className="bg-danger w-50"></div>
                </div>
                <SocialLogin></SocialLogin>

            </form>

        </div>
    );
};

export default Register;