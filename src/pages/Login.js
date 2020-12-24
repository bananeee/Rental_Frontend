import React from 'react';
import Footer from '../component/Layout/Footer/Footer';
import Nav from '../component/Layout/Nav/Nav';
import LoginMain from "../component/Login/LoginMain";

function Login({ match }) {
    
    return (
        <div>
            {/* <Nav /> */}
            <LoginMain path={match.path}/>
            {/* <Footer /> */}
        </div>
    );
}

export default Login;
