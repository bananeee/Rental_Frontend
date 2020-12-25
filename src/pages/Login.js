import React from 'react';
import Footer from '../component/Layout/Footer/Footer';
import Nav from '../component/Layout/Nav/Nav';
import HostLogin from '../component/Login/HostLogin';
import RenterLogin from '../component/Login/RenterLogin';

function Login({ match }) {
    return (
        <div>
            <Nav />
            {/* <LoginMain path={match.path}/> */}
            {match.path === "/host/login" && <HostLogin />}
            {match.path === "/renter/login" && <RenterLogin />}
            <Footer />
        </div>
    );
}

export default Login;
