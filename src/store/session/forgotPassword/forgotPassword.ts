
import { call, put } from "redux-saga/effects";
import TYPES from "./types";
import { forgotPasswordService } from "../../../services/auth/authService";
import { AxiosResponse, HttpStatusCode } from "axios";
import { ForgotPasswordErrorResponseProps, ForgotPasswordRequestProps, ForgotPasswordSuccessResponseProps } from "../../../lib/types/forgotPassword";

/* Actions */
export const getForgotPassword = (payload: ForgotPasswordRequestProps) => ({
    type: TYPES.FORGOT_PASSWORD,
    payload: payload
});

const getForgotPasswordSuccess = (payload: ForgotPasswordSuccessResponseProps) => ({
    type: TYPES.FORGOT_PASSWORD_SUCCESS,
    payload: payload
});

const getForgotPasswordError = (payload: ForgotPasswordErrorResponseProps) => ({
    type: TYPES.FORGOT_PASSWORD_ERROR,
    payload: payload
});

export const clearForgotPassword = () => ({
    type: TYPES.FORGOT_PASSWORD_CLEAR
});

/* Saga method */
export function* getForgotPasswordSaga({ payload }: ReturnType<typeof getForgotPassword>) {
    try {
        const response: AxiosResponse = yield call(forgotPasswordService, payload);
        if (response.status === HttpStatusCode.Ok) {
            yield put(getForgotPasswordSuccess(response.data))
        }
    } catch (error: unknown) {
        yield put(getForgotPasswordError(error as ForgotPasswordErrorResponseProps))
    }
}

