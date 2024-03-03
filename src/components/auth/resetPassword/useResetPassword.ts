import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { ResetPasswordRequestProps } from "../../../lib/types/resetPassword";
import { AppDispatch, RootStateType } from "../../../store";
import { getResetPassword, clearResetPassword } from "../../../store/session/resetPassword/resetPassword";
import { useNavigate } from "react-router";
import { LOGIN_URL } from "../../../lib/constants";

const useResetPassword = () => {
    const stateResetPassword = useSelector((state: RootStateType) => state.session.resetPassword);
    const stateResetPasswordData = stateResetPassword.data
    const stateResetPasswordError = stateResetPassword.error

    const [formData, setFormData] = useState<ResetPasswordRequestProps>({
        token: "",
        newPassword: "",
        confirmedPassword: ""
    });
    const [errorMessage, setErrorMessage] = useState<string>('');

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate();

    /* This ensures that the `clearForgotPassword` action is dispatched only once when the component is
    initially rendered. */
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const token = searchParams.get('token');

        if (token) {
            setFormData({
                ...formData,
                token: token
            })
        }

        dispatch(clearResetPassword())
    }, []);

    /**
     * The onChangeInput function handles input changes for password and confirmed password fields,
     * updating form data and displaying error messages accordingly.
     */
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputName: string = event.target.name;
        const inputValue: string = event.target.value;

        if (inputName === "password") {
            setFormData({ ...formData, newPassword: inputValue })
            if (!inputValue) {
                setErrorMessage('Password is required');
            } else if (inputValue.length < 8) {
                setErrorMessage('Password must be at least 8 characters long');
            } else {
                setErrorMessage('');
                setFormData({
                    ...formData,
                    newPassword: inputValue
                })
            }
        }

        if (inputName === "confirmedPassword") {
            setFormData({ ...formData, confirmedPassword: inputValue })
            if (!inputValue) {
                setErrorMessage('Please confirm your password');
            } else if (formData.newPassword !== inputValue) {
                setErrorMessage('Passwords do not match');
            } else {
                setErrorMessage('');
                setFormData({ ...formData, confirmedPassword: inputValue })
            }
        }
    }

    /**
     * The `goBackToLogin` function navigates back to the login page.
     */
    const goBackToLogin = () => {
        navigate(LOGIN_URL);
    }

    /**
     * The `onSubmit` function dispatches a `getResetPassword` action with the `formData` as a
     * parameter.
     */
    const onSubmit = () => {
        dispatch(getResetPassword(formData))
    }

    return { stateResetPassword, stateResetPasswordData, stateResetPasswordError, formData, errorMessage, onChangeInput, onSubmit, goBackToLogin };
};

export default useResetPassword;