import { ForgotPasswordErrorResponseProps, ForgotPasswordSuccessResponseProps } from "../../../lib/types/forgotPassword"
import TYPES from "./types"

export interface ForgotPasswordStateProps {
    data?: ForgotPasswordSuccessResponseProps
    error?: ForgotPasswordErrorResponseProps
    forgot_password_loading: boolean
    forgot_password_success: boolean
}
const initialState: ForgotPasswordStateProps = {
    forgot_password_loading: false,
    forgot_password_success: false
}

export interface Action {
    payload: ForgotPasswordSuccessResponseProps | ForgotPasswordErrorResponseProps
    type: TYPES
}

const forgotPasswordReducer = (state = initialState, action: Action): ForgotPasswordStateProps => {
    switch (action.type) {
        case TYPES.FORGOT_PASSWORD:
            return {
                ...state,
                forgot_password_loading: true,
                forgot_password_success: false
            }
        case TYPES.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                data: action.payload as ForgotPasswordSuccessResponseProps,
                error: undefined,
                forgot_password_loading: false,
                forgot_password_success: true
            }
        case TYPES.FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                error: action.payload as ForgotPasswordErrorResponseProps,
                data: undefined,
                forgot_password_loading: false,
                forgot_password_success: false
            }
        case TYPES.FORGOT_PASSWORD_CLEAR:
            return {
                ...state,
                error: undefined,
                data: undefined,
                forgot_password_loading: false,
                forgot_password_success: false
            }
        default:
            return state;
    }
};

export default forgotPasswordReducer;