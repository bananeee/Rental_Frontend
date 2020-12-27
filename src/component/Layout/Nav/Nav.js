import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./nav.module.css";
import NavLogin from "./NavLogin";
import NavLogout from "./NavLogout";

function Nav({ layout }) {
    const userState = useSelector((state) => state.userState);
    return (
        <div>{userState.user === null ? <NavLogin /> : <NavLogout />}</div>
    );
}

export default Nav;
