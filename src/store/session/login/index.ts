import { LoginErrorData, LoginSuccessData } from "../../../lib/types/login"
import TYPES from "./types"

export interface LoginStateProps {
    data?: LoginSuccessData
    error?: LoginErrorData
    get_login_loading: boolean
    get_login_success: boolean
}

export interface Action {
    payload: LoginSuccessData | unknown
    type: TYPES
}

const initialState: LoginStateProps = {
    get_login_loading: false,
    get_login_success: false,
}

const loginReducer = (state = initialState, action: Action): LoginStateProps => {
    switch (action.type) {
        case TYPES.LOGIN:
            return {
                ...state,
                get_login_loading: true,
                get_login_success: false
            }
        case TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                get_login_loading: false,
                get_login_success: true,
                data: action?.payload as LoginSuccessData,
                error: {}
            }
        case TYPES.LOGIN_ERROR:
            return {
                ...state,
                get_login_loading: false,
                get_login_success: false,
                error: action?.payload as LoginErrorData,
                data: {}
            }
        case TYPES.LOGIN_ERROR_CLEAR:
            return {
                ...state,
                error: {},
            }
        case TYPES.LOGOUT:
            return {
                ...state,
                get_login_loading: false,
                data: {},
                error: {}
            }
        default:
            return state;
    }
}

export default loginReducer;