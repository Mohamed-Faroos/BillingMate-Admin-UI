import React from "react"

import AuthLayout from "../common/layout";
import TextInput from "../../common/TextInput";
import Button from "../../common/Button";
import Alert from "../../common/Alert";
import * as properties from "../../../lib/properties"
import useResetPassword from "./useResetPassword";
import { BACK_ARROW_ICON } from "../../../assets/icons";

const ResetPassword: React.FC = () => {

    const { stateResetPassword, stateResetPasswordData, stateResetPasswordError, formData, errorMessage,
        onChangeInput, onSubmit, goBackToLogin } = useResetPassword();

    return (
        <AuthLayout>
            <h3 className="invomate-auth-h1">
                {properties.RESET_PASSWORD_HEADER}
            </h3>
            <h2 className="invomate-auth-h2">
                {properties.RESET_PASSWORD_SUB_HEADER}
            </h2>
            <div className="invomate-auth-form">
                {stateResetPasswordData &&
                    <Alert message={stateResetPasswordData.message} type="success" />
                }

                {(errorMessage || stateResetPasswordError?.errorMessage) &&
                    <Alert message={errorMessage || stateResetPasswordError?.errorMessage} type="warning" />
                }
                {
                    !stateResetPasswordData ?
                        <>
                            <div className="invomate-auth-form-control">
                                <TextInput
                                    type="password"
                                    name={"password"}
                                    value={formData.newPassword}
                                    placeholder="Password"
                                    onchange={onChangeInput}
                                />
                            </div>
                            <div className="invomate-auth-form-control">
                                <TextInput
                                    type="password"
                                    name={"confirmedPassword"}
                                    value={formData.confirmedPassword}
                                    placeholder="Confirmed Password"
                                    onchange={onChangeInput}
                                />
                            </div>
                            <div className="invomate-auth-form-control">
                                <Button
                                    label="Reset password"
                                    size="lg"
                                    variant="secondary"
                                    disabled={!!errorMessage ||
                                        stateResetPassword.reset_password_loading ||
                                        !(formData.newPassword) ||
                                        !(formData.confirmedPassword)}
                                    onClick={onSubmit}
                                />
                            </div>
                        </>
                        :
                        <Button
                            label="Login"
                            icon={<img src={BACK_ARROW_ICON} alt="back arrow" />}
                            size="lg"
                            variant="transparent"
                            onClick={goBackToLogin}
                        />
                }
            </div>
        </AuthLayout>
    )
}

export default ResetPassword;