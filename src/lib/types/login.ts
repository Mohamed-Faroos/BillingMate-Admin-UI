export interface LoginRequestProps {
    email: string
    password: string
}

export interface LoginSuccessData {
    userId?: string
    accessToken?: string
    refreshToken?: string
}

export interface LoginErrorData {
    statusCode?: number
    errorMessage?: string
}