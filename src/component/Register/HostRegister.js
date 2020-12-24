import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { hostRegister, login } from "../../actions/userAction";
import style from "./host.register.module.css";
import M from "materialize-css";

function HostRegister() {
    const [registerData, setRegisterData] = useState({
        username: "",
        password: "",
        phoneNumber: "",
        fullName: "",
        idNumber: "",
        email: "",
        address: "",
    });

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (
        //     !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        //         registerData.email
        //     )
        // ) {
        //     M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
        //     return;
        // }

        try {
            dispatch(hostRegister(registerData));
            history.push("/host/login");
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setRegisterData({
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
                                <a href="/host/login">Log in</a>
                            </p>
                            <label for="name">Full name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className={style.type_in}
                                id={style.name}
                                onChange={handleChange}
                                value={registerData.fullName}
                                name="fullName"
                            />
                            <label for="id">ID number</label>
                            <input
                                type="text"
                                placeholder="123456789"
                                className={style.type_in}
                                id={style.id}
                                onChange={handleChange}
                                value={registerData.idNumber}
                                name="idNumber"
                            />
                            {/* <label for="address">Address</label>
                            <input
                                type="text"
                                placeholder="Hanoi"
                                className={style.type_in}
                                id={style.address}
                                onChange={handleChange}
                                value={registerData.address}
                                name="address"
                            /> */}
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
                            <label for="email">Email</label>
                            <input
                                type="text"
                                placeholder="abc@xyz.com"
                                className={style.type_in}
                                id={style.email}
                                onChange={handleChange}
                                value={registerData.email}
                                name="email"
                            />
                            <label for="username">Username</label>
                            <input
                                type="text"
                                placeholder="Johndoe123"
                                className={style.type_in}
                                id={style.username}
                                onChange={handleChange}
                                value={registerData.username}
                                name="username"
                            />
                            <label for="password">Password</label>
                            <input
                                type="password"
                                className={style.type_in}
                                id={style.password}
                                onChange={handleChange}
                                value={registerData.password}
                                name="password"
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

export default HostRegister;
