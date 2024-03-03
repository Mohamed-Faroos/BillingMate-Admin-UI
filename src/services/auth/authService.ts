import networkClient from ".."
import { ForgotPasswordRequestProps } from "../../lib/types/forgotPassword"
import { LoginRequestProps } from "../../lib/types/login"
import { ResetPasswordRequestProps } from "../../lib/types/resetPassword"
import * as END_POINTS from "./endpoints"

export const loginService = (payload: LoginRequestProps) => {
    return networkClient().request({
        method: "post",
        url: END_POINTS.LOGIN_API_URL,
        data: payload
    })
}

export const forgotPasswordService = (payload: ForgotPasswordRequestProps) => {
    console.log({ payload });

    return networkClient().request({
        method: "post",
        url: END_POINTS.FORGOT_PASSWORD_API_URL,
        data: payload
    })
}

export const resetPasswordService = (payload: ResetPasswordRequestProps) => {
    console.log({ payload });

    return networkClient().request({
        method: "put",
        url: END_POINTS.RESET_PASSWORD_API_URL,
        data: payload
    })
}