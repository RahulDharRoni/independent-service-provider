import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 m-5'>
            <h4>Q1-What is the different between Authorization and Authentication?</h4>
            <hr />
            <p>A- Authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to.Authentication is concerned with identifying an entity (i.e user, server, or device)A web application may request a username and password when identifying a user.Authorization permits one party to get access to another .A home key is a good example of how permission varies from authentication.</p>
            <h4>Q1-Why are we using firebase? What other option available there? </h4>
            <hr />
            <p>A- Firebase provides detailed documentation and cross-platform SDKs to help you build website and web app. Firebase is a Google based application development software that enables developers to develop iOS, Android and Web apps.Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment which will make a developers work easer and faster. Thats why we use firebase.

                <br />
                Other Option- flutter, AWS Amplify, Back4App, Couchbase, RxDBetc
            </p>
            <h4>Q1-What other service does firebase does firebase providers? </h4>
            <hr />
            <p>There are many services which Firebase provides, Most useful of them are:Cloud FireStore, Cloud Functions, Authentication, Hosting,Cloud Storage,Google Analytics,Predictions,Cloud Messaging,
            </p>



        </div>
    );
};

export default Blogs;