import React from 'react';
import Footer from '../component/Layout/Footer/Footer';
import Nav from '../component/Layout/Nav/Nav';
import LoginMain from "../component/Login/Login";

function Login() {
    return (
        <div>
            <Nav />
            <LoginMain />
            <Footer />
        </div>
    );
}

export default Login;
