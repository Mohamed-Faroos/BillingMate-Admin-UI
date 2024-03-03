export interface ForgotPasswordRequestProps {
    email: string
}

export interface ForgotPasswordSuccessResponseProps {
    message?: string
}

export interface ForgotPasswordErrorResponseProps {
    statusCode?: number
    errorMessage?: string
}

