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
                backgroundColor: "white",
                color: "white !important",
            });
        }
    };

    useEffect(() => {
        if (layout === "Home") {
            setNavbg({
                boxShadow: "none",
                color: "white !important",
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
        <nav style={navbg} className={style.navbar}>
            <label className={style.burger} tabindex="0">
                <div className={style.line}></div>
                <div className={style.line}></div>
                <div className={style.line}></div>
            </label>
            <div className={style.logo}>Housie</div>
            <ul className={style.smallNav}>
                <li>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts" activeClassName={style.selected}>
                        Listing
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/renter/login" activeClassName={style.selected}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/renter/register" activeClassName={style.selected}>
                        Sign in
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/host/login" activeClassName={style.selected}>
                        Become Host
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default Nav;
