import React from "react"
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () =>
    <footer className="page-footer font-small bg-danger pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Footer Content</h5>
                    <p>I am MERN stake developer. I have been working as a freelancer for last 2 years in fiverr and upwork based other platform. I am good at wordpress , clickfunnel, shopify and other CMS site builders. </p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Menu</h5>
                    <ul className="text-decoration-none text-dark">
                        <Link to='home' className="text-decoration-none text-dark m-2">Home</Link>
                        <Link to='services' className="text-decoration-none text-dark m-2">Services</Link>
                        <Link to='about' className="text-decoration-none text-dark m-2">About</Link>
                        <Link to='Expert' className="text-decoration-none text-dark m-2">Expert</Link>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Link</h5>
                    <ul className="">
                        <FaFacebookSquare />
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3 text-white">Developed By @
            <a href="www.google.com" className="text-decoration-none text-white"> Rahul Dhar Roni</a>
        </div>

    </footer >


export default Footer;