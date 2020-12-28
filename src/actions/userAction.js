import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SENDINFO
} from "../constants/actionTypes.js";

import * as api from "../api/index.js";

export const renterLogin = (loginData) => async (dispatch) => {
    try {
        const resData = await api.renterLogin(loginData);

        localStorage.setItem("token", resData.token);

        localStorage.setItem("user", resData.user._id);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: resData,
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const hostLogin = (loginData) => async (dispatch) => {
    try {
        const resData = await api.hostLogin(loginData);

        localStorage.setItem("token", resData.token);

        localStorage.setItem("user", resData.user._id);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: resData,
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const renterRegister = (registerData) => async (dispatch) => {
    try {
        
        const resData = await api.renterRegister(registerData);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: resData,
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const hostRegister = (registerData) => async (dispatch) => {
    try {        
        const resData = await api.hostRegister(registerData);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: resData,
        });
    } catch (error) {
        console.log(error.message);
    }
};
