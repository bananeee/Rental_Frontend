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
        <nav style={navbg} className={style.navbar}>
            <label className={style.burger} tabindex="0">
                <div className={style.line}></div>
                <div className={style.line}></div>
                <div className={style.line}></div>
            </label>
            <div className={style.logo}>NavBar</div>
            <ul className={style.smallNav}>
                <li>
                    <NavLink to="/" activeClassName="selected">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts" activeClassName="selected">
                        Listing
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/renter/login" activeClassName="selected">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/renter/register" activeClassName="selected">
                        Sign up
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/host/login" activeClassName="selected">
                        Become Host
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default Nav;
