import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    };
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark" className='text-white bg-danger font-size-bold'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="" width='100' height='50' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/home'>Services</Link>
                            {/* <Nav.Link href="ser" to='/services'>Services</Nav.Link> */}
                            <Nav.Link href="Home#Expert">Expert</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                        </Nav>
                        {
                            user ? <Nav>
                                <Nav.Link onClick={handleSignOut} as={Link} to="login" >
                                    logOut
                                </Nav.Link>
                            </Nav> : <Nav>

                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;