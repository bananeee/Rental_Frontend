const user = JSON.parse(localStorage.getItem("user"));

const userState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

export default (state = userState, action) => {
    switch (action.type) {
    case "REGISTER_SUCCESS":
        return {
          ...state,
          isLoggedIn: false,
        };
      case "REGISTER_FAIL":
        return {
          ...state,
          isLoggedIn: false,
        };
      case "LOGIN_SUCCESS":
        console.log("true");
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
        };
      case "LOGIN_FAIL":
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case "LOGOUT":
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }

}

// const renterState = "";

// export default (state = renterState, action) => {
//     switch(action.type) {
//         case "USER":
//             return action.payload;
//         default:
//             return state;
//     }
// }
