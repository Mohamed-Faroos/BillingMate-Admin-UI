
import { call, put } from "redux-saga/effects";
import TYPES from "./types";
import { resetPasswordService } from "../../../services/auth/authService";
import { AxiosResponse, HttpStatusCode } from "axios";
import { ResetPasswordErrorResponseProps, ResetPasswordRequestProps, ResetPasswordSuccessResponseProps } from "../../../lib/types//resetPassword";

/* Actions */
export const getResetPassword = (payload: ResetPasswordRequestProps) => ({
    type: TYPES.RESET_PASSWORD,
    payload: payload
});

const getResetPasswordSuccess = (payload: ResetPasswordSuccessResponseProps) => ({
    type: TYPES.RESET_PASSWORD_SUCCESS,
    payload: payload
});

const getResetPasswordError = (payload: ResetPasswordErrorResponseProps) => ({
    type: TYPES.RESET_PASSWORD_ERROR,
    payload: payload
});

export const clearResetPassword = () => ({
    type: TYPES.RESET_PASSWORD_CLEAR
});

/* Saga method */
export function* getResetPasswordSaga({ payload }: ReturnType<typeof getResetPassword>) {
    try {
        const response: AxiosResponse = yield call(resetPasswordService, payload);
        if (response.status === HttpStatusCode.Ok) {
            yield put(getResetPasswordSuccess(response.data))
        }
    } catch (error: unknown) {
        yield put(getResetPasswordError(error as ResetPasswordErrorResponseProps))
    }
}

