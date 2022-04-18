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
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );

    const emailRef = useRef('')
    const passwordRef = useRef('')
    // const error = useRef('')
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

    let errorUpdate;
    if (error) {
        errorUpdate =
            <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/serviceDetails')
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

                {errorUpdate}

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <p>Dont have any account? <small onClick={navigateToRegister} className="text-danger font-weight-bold">Sign Up Here!</small> </p>
                <p>Forget Password? <small onClick={resetPassword} className="text-danger font-weight-bold">Reset Password</small> </p>

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