import { useEffect, useState } from "react";
import { ForgotPasswordRequestProps } from "../../../lib/types/forgotPassword";
import { isEmail } from "../../../lib/utils";
import { useDispatch } from "react-redux";
import { AppDispatch, RootStateType } from "../../../store";
import { getForgotPassword, clearForgotPassword } from "../../../store/session/forgotPassword/forgotPassword";
import { useSelector } from "react-redux";

const useForgotPasswordAction = () => {
    const stateForgotPassword = useSelector((state: RootStateType) => state.session.forgotPassword);
    const stateForgotPasswordData = stateForgotPassword.data
    const stateForgotPasswordError = stateForgotPassword.error

    const [errorMessage, setErrorMessage] = useState<string>();
    const [formData, setFormData] = useState<ForgotPasswordRequestProps>({ email: "" });

    const dispatch = useDispatch<AppDispatch>()

    /* This ensures that the `clearForgotPassword` action is dispatched only once when the component is
    initially rendered. */
    useEffect(() => {
        dispatch(clearForgotPassword())
    }, []);

    /**
     * The onChangeInput function handles input changes for email and password fields, validating the
     * email format and updating the form data accordingly.
     */
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputName: string = event.target.name;
        const inputValue: string = event.target.value;

        if (inputName === "email") {
            if (isEmail(inputValue)) {
                setErrorMessage("");
            } else {
                setErrorMessage("Enter valid email address");
            }
            setFormData({ ...formData, email: inputValue.toLowerCase() })
        }
    }

    /**
     * The `onSubmit` function dispatches a `getForgotPassword` action with the `formData` as a
     * parameter.
     */
    const onSubmit = () => {
        dispatch(getForgotPassword(formData))
    }
    
    return { stateForgotPassword, stateForgotPasswordData, stateForgotPasswordError, formData, errorMessage, setFormData, onChangeInput, onSubmit };
};

export default useForgotPasswordAction;