import React from "react";

import AuthLayout from "../common/layout";
import Alert from "../../common/Alert";
import TextInput from "../../common/TextInput";
import Button from "../../common/Button";

import * as properties from "../../../lib/properties"
import useForgotPasswordAction from "./useForgotPasswordAction";

const ForgotPassword: React.FC = () => {
    const { stateForgotPassword, stateForgotPasswordData, stateForgotPasswordError, errorMessage, formData,
        onChangeInput, onSubmit } = useForgotPasswordAction();

    return (
        <AuthLayout>
            <h3 className="invomate-auth-h1">
                {properties.FORGOT_PASSWORD_HEADER}
            </h3>
            <h2 className="invomate-auth-h2">
                {properties.FORGOT_PASSWORD_SUB_HEADER}
            </h2>
            <div className="invomate-auth-form">
                {stateForgotPasswordData &&
                    <Alert message={stateForgotPasswordData.message} type="success" />
                }

                {(errorMessage || stateForgotPasswordError?.errorMessage) &&
                    <Alert message={errorMessage || stateForgotPasswordError?.errorMessage} type="warning" />
                }
                {
                    !stateForgotPasswordData &&
                    <>
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
                            <Button
                                label="Reset password"
                                size="lg"
                                variant="secondary"
                                disabled={!!errorMessage || stateForgotPassword.forgot_password_loading || !(formData.email)}
                                onClick={onSubmit}
                            />
                        </div>
                    </>
                }
            </div>
        </AuthLayout>)
};

export default ForgotPassword;