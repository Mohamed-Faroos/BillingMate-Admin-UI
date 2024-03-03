import React from "react"

import AuthLayout from "../common/layout";
import TextInput from "../../common/TextInput";
import Button from "../../common/Button";
import Alert from "../../common/Alert";

import { FORGOT_PASSWORD_URL } from "../../../lib/constants";
import * as properties from "../../../lib/properties";
import useLoginAction from "./useLoginAction";

import "./../style.scss";

const Login: React.FC = () => {
    const { stateSession, formData, errorMessage,
        onChangeInput, onSubmit } = useLoginAction();
    return (
        <AuthLayout>
            <h3 className="invomate-auth-h1">
                {properties.SIGN_IN_HEADER}
            </h3>
            <div className="invomate-auth-form">
                {(errorMessage || stateSession.error?.errorMessage) &&
                    <Alert message={errorMessage || stateSession.error?.errorMessage} type="warning" />
                }

                <div className="invomate-auth-form-control">
                    <TextInput
                        type="text"
                        name={"email"}
                        value={formData.email}
                        placeholder="Email"
                        onchange={onChangeInput}
                    />
                </div>
                <div className="invomate-auth-form-control">
                    <TextInput
                        type="password"
                        name={"password"}
                        value={formData.password}
                        placeholder="Password"
                        onchange={onChangeInput}
                    />
                </div>
                <a href={FORGOT_PASSWORD_URL} className="invomate-forgot-password-link">
                    Forgot Password
                </a>
                <div className="invomate-auth-form-control">
                    <Button
                        label="Login"
                        size="lg"
                        variant="secondary"
                        disabled={!!errorMessage || stateSession.get_login_loading || !(formData.email && formData.password)}
                        onClick={onSubmit}
                    />
                </div>
            </div>
        </AuthLayout>
    )
};

export default Login;