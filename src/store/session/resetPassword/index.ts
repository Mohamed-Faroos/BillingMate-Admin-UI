import { ResetPasswordErrorResponseProps, ResetPasswordSuccessResponseProps } from "../../../lib/types/resetPassword"
import TYPES from "./types"

export interface ResetPasswordStateProps {
    data?: ResetPasswordSuccessResponseProps
    error?: ResetPasswordErrorResponseProps
    reset_password_loading: boolean
    reset_password_success: boolean
}
const initialState: ResetPasswordStateProps = {
    reset_password_loading: false,
    reset_password_success: false
}

export interface Action {
    payload: ResetPasswordSuccessResponseProps | ResetPasswordErrorResponseProps
    type: TYPES
}

const resetPasswordReducer = (state = initialState, action: Action): ResetPasswordStateProps => {
    switch (action.type) {
        case TYPES.RESET_PASSWORD:
            return {
                ...state,
                reset_password_loading: true,
                reset_password_success: false
            }
        case TYPES.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                data: action.payload as ResetPasswordSuccessResponseProps,
                error: undefined,
                reset_password_loading: false,
                reset_password_success: true
            }
        case TYPES.RESET_PASSWORD_ERROR:
            return {
                ...state,
                error: action.payload as ResetPasswordErrorResponseProps,
                data: undefined,
                reset_password_loading: false,
                reset_password_success: false
            }
        case TYPES.RESET_PASSWORD_CLEAR:
            return {
                ...state,
                error: undefined,
                data: undefined,
                reset_password_loading: false,
                reset_password_success: false
            }
        default:
            return state;
    }
};

export default resetPasswordReducer;