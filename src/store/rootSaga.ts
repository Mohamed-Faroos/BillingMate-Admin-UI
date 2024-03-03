import { takeLatest } from "redux-saga/effects";

import LOGIN_TYPES from "./session/login/types";
import { getLoginSaga } from "./session/login/login";

import FORGOT_PASSWORD_TYPES from "./session/forgotPassword/types"
import { getForgotPasswordSaga } from "./session/forgotPassword/forgotPassword"

import RESET_PASSWORD_TYPES from "./session/resetPassword/types"
import { getResetPasswordSaga } from "./session/resetPassword/resetPassword"

export function* rootSaga() {
    yield takeLatest(LOGIN_TYPES.LOGIN, getLoginSaga);
    yield takeLatest(FORGOT_PASSWORD_TYPES.FORGOT_PASSWORD, getForgotPasswordSaga);
    yield takeLatest(RESET_PASSWORD_TYPES.RESET_PASSWORD, getResetPasswordSaga);
}