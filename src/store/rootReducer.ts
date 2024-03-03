import { combineReducers } from "redux";

import loginReducer from "./session/login";
import forgotPasswordReducer from "./session/forgotPassword";
import resetPasswordReducer from "./session/resetPassword";

const rootReducer = combineReducers({
    session: combineReducers({
        token: loginReducer,
        forgotPassword: forgotPasswordReducer,
        resetPassword: resetPasswordReducer
    })
});

export default rootReducer;