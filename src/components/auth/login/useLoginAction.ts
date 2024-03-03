import { useEffect, useState } from "react";
import { LoginRequestProps } from "../../../lib/types/login";
import { useDispatch } from "react-redux";
import { AppDispatch, RootStateType } from "../../../store";
import { clearLoginError, getLogin } from "../../../store/session/login/login";
import { isEmail } from "../../../lib/utils";
import { useSelector } from "react-redux";

const useLoginAction = () => {

    const stateSession = useSelector((state: RootStateType) => state.session.token)

    const [formData, setFormData] = useState<LoginRequestProps>({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState<string>("");
    
    const dispatch = useDispatch<AppDispatch>()

    /* This ensures that the `clearLoginError` action is dispatched only once when the
    component is initially rendered. */
    useEffect(() => {
        dispatch(clearLoginError());
    }, [])

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
        } else if (inputName === "password") {
            setFormData({ ...formData, password: inputValue })
        }
    }

    /**
     * The `onSubmit` function dispatches a `getLogin` action with the `formData` as a parameter.
     */
    const onSubmit = () => {
        dispatch(getLogin(formData))
    }

    return { stateSession, formData, errorMessage, onChangeInput, onSubmit }
}

export default useLoginAction;