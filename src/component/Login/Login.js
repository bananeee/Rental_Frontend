import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./login.module.css";


const Login = () => {
    const [loginData, setloginData] = useState({
        username: "",
        password: "",
    });

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resData = await axios.post("http://localhost:5000/renter/signin", loginData);
            
            // console.log(resData.data)
            localStorage.setItem("token", resData.data.token);

            localStorage.setItem("user", resData.data.user);

            dispatch({
                type: "LOGIN_SUCCESS",
                payload: resData.data.user,
            })
        
            history.push("/");

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setloginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div id={style.login}>
            <div className={style.bg_opacity}>
                <div className={style.login_container}>
                    <form className={style.login_form} onSubmit={handleSubmit}>
                        <p className={style.title}>Log In</p>

                        <label for="username">Username</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className={style.type_in}
                            id={style.username}
                            name="username"
                            onChange={handleChange}
                            value={loginData.username}
                        />
                        <label for="password">Password</label>

                        <input
                            type="password"
                            placeholder="Enter Password"
                            className={style.type_in}
                            id={style.password}
                            name="password"
                            onChange={handleChange}
                            value={loginData.password}
                        />

                        <button>
                            <h2>Log in</h2>
                        </button>

                        <p className={style.message}>
                            Not registered? <a href="">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
