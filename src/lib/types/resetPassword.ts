export interface ResetPasswordRequestProps {
    token: string
    newPassword: string,
    confirmedPassword: string
}

export interface ResetPasswordSuccessResponseProps {
    message?: string
}

export interface ResetPasswordErrorResponseProps {
    statusCode?: number
    errorMessage?: string
}

