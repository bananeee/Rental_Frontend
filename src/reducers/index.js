import { combineReducers } from "redux";

import userState from "./authReducer";

// import userRole from "./userRoleReducer";

export const reducers = combineReducers({ userState });
