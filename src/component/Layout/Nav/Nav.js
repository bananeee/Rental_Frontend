import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./nav.module.css";

function Nav({ layout }) {
    const [navbg, setNavbg] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();

    const userState = useSelector((state) => state.userState);
    const [layoutNav, setLayoutNav] = useState(layout)
    
    const handleScroll = () => {
        if (window.pageYOffset >= 100) {
            setNavbg({
                backgroundColor: "white",
                color: "black",
                boxShadow: "0 -4px 25px -5px rgba(0, 0, 0, 0.274)",
            });
        } else {
            setNavbg({
                boxShadow: "none",
                color: "white",
            });
        }
    };

    useEffect(() => {
        setLayoutNav(layout)
    }, [layout]);

    useEffect(() => {
        if (layoutNav === "Home") {
            setNavbg({
                boxShadow: "none",
                color: "white",
            });
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            setNavbg({
                position: "relative",
            });
        }
    }, [layoutNav]);

    return (
        <nav style={navbg}>
            {/* <div>Hello {userState.user.role}</div> */}
            <label className={style.burger} tabindex="0">
                <div className={style.line}></div>
                <div className={style.line}></div>
                <div className={style.line}></div>
            </label>
            <div className={style.logo}>NavBar</div>
            <ul>
                <NavLink to="/" activeClassName="selected">
                    <li>Home</li>
                </NavLink>

                <NavLink to="/post" activeClassName="selected">
                    <li>Listing</li>
                </NavLink>

                <NavLink to="/about" activeClassName="selected">
                    <li>About</li>
                </NavLink>

                {userState.user === null ? (
                    <NavLink to="/renter/login" activeClassName="selected">
                        <li>Login</li>
                    </NavLink>
                ) : (
                    <NavLink
                        to="#"
                        activeClassName="selected"
                        onClick={() => {
                            localStorage.clear();
                            dispatch({ type: "LOGOUT" });
                            history.push("/");
                        }}>
                        <li>Logout</li>
                    </NavLink>
                )}
                <NavLink to="/renter/register" activeClassName="selected">
                    <li>Register</li>
                </NavLink>

                <NavLink to="/host/login" activeClassName="selected">
                    <li>LoginHost</li>
                </NavLink>

                <NavLink to="/host/register" activeClassName="selected">
                    <li>RegisterHost</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Nav;
