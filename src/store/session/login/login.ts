
import { call, put } from "redux-saga/effects";
import { LoginErrorData, LoginRequestProps, LoginSuccessData } from "../../../lib/types/login";
import TYPES from "./types";
import { loginService } from "../../../services/auth/authService";
import { AxiosResponse, HttpStatusCode } from "axios";

/* Actions */
export const getLogin = (payload: LoginRequestProps) => ({
    type: TYPES.LOGIN,
    payload: payload
});

const getLoginSuccess = (payload: LoginSuccessData) => ({
    type: TYPES.LOGIN_SUCCESS,
    payload: payload
});

const getLoginError = (payload: LoginErrorData) => ({
    type: TYPES.LOGIN_ERROR,
    payload: payload
});

export const clearLoginError = ()=> ({
    type: TYPES.LOGIN_ERROR_CLEAR
});

export const logout = () => ({
    type: TYPES.LOGOUT
});

/* Saga method */
export function* getLoginSaga({ payload }: ReturnType<typeof getLogin>) {
    try {        
        const response: AxiosResponse = yield call(loginService, payload);
        if (response.status === HttpStatusCode.Ok) {
            yield put(getLoginSuccess(response.data))
        }
    } catch (error: unknown) {
        yield put(getLoginError(error as LoginErrorData))
    }
}

