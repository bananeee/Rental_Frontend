import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { renterRegister } from "../../actions/userAction";
import style from "./renter.register.module.css";

function RenterRegister() {
    const [registerData, setregisterData] = useState({
        username: "",
        password: "",
        phoneNumber: "",
    });

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(renterRegister(registerData));
            history.push("/renter/login");
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setregisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div id={style.container}>
            <div className={style.bg_opacity}>
                <div className={style.info_container}>
                    <div className={style.info}>
                        {/* <h1>Title</h1>
                        <p>Text here Text here Text here</p>
                        <p>Text here Text here Text here</p>
                        <p>Text here</p>
                        <p>Text here</p>
                        <p>Text here</p> */}
                    </div>
                </div>

                <div className={style.signup_container}>
                    <div className={style.form_container}>
                        <form
                            className={style.signup_form}
                            onSubmit={handleSubmit}>
                            <h1>Create an account</h1>
                            <p>
                                Already have an account?{" "}
                                <a href="/login">Log in</a>
                            </p>

                            <label for="phone">Phone number</label>
                            <input
                                type="text"
                                placeholder="123456789"
                                className={style.type_in}
                                id={style.phone}
                                onChange={handleChange}
                                value={registerData.phoneNumber}
                                name="phoneNumber"
                            />

                            <label for="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Johndoe123"
                                className={style.type_in}
                                id={style.username}
                                onChange={handleChange}
                                value={registerData.username}
                            />

                            <label for="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                className={style.type_in}
                                id={style.password}
                                onChange={handleChange}
                                value={registerData.password}
                            />

                            <button className={style.signup_button}>
                                <p>Create Account</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RenterRegister;
