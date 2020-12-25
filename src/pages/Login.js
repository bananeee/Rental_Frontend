import React from "react";
import { useSelector } from "react-redux";
import Footer from "../component/Layout/Footer/Footer";
import Nav from "../component/Layout/Nav/Nav";
import NavLogout from "../component/Layout/Nav/NavLogout";
import HostLogin from "../component/Login/HostLogin";
import RenterLogin from "../component/Login/RenterLogin";

function Login({ match }) {
    return (
        <div>
            <Nav />
            {match.path === "/host/login" && <HostLogin />}
            {match.path === "/renter/login" && <RenterLogin />}
            <Footer />
        </div>
    );
}

export default Login;
