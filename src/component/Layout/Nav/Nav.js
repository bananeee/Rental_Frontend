import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import style from "./nav.module.css";

function Nav({ layout }) {
    const [navbg, setNavbg] = useState({});

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
        if (layout === "Home") {
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
                position: "fixed",
                backgroundColor: 'white',
                color: 'black',
                boxShadow: '0 -4px 25px -5px rgba(0, 0, 0, 0.274)'
            })
            
        }
    }, [layout]);

    return (
        <nav style={navbg}>
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

                <NavLink to="/login" activeClassName="selected">
                    <li>Login</li>
                </NavLink>

                <NavLink to="/host" activeClassName="selected">
                    <li>Host</li>
                </NavLink>

                <NavLink to="/detail" activeClassName="selected">
                    <li>Detail</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Nav;
