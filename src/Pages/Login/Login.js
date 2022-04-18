import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Register/SocialLogIn/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    if (user) {
        navigate('/checkout')
    }


    const navigateToRegister = event => {
        navigate('/register')
    }
    return (
        <div className='w-50 p-3 mx-auto border my-5 rounded'>
            <h1 className='text-danger text-center'>Login In Now</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <div className=''>
                    <p>Dont have any account? <small onClick={navigateToRegister} className="text-danger font-weight-bold">Sign Up Here!</small> </p>
                    <p>Forget Password? <small onClick={resetPassword} className="text-danger font-weight-bold">Reset Password</small> </p>
                </div>



            </Form>

            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-danger w-50"></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className="bg-danger w-50"></div>
            </div>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;