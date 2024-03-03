import React from "react"

import { LOGO_LG } from "../../../assets/images";
import "./../style.scss";

interface AuthLayoutProps {
    children: React.ReactNode
}

/**
 * The AuthLayout component is a React functional component that renders a main container with a logo
 * and children components
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="invomate-auth-main-container">
            <div className="invomate-auth-main-content">
                <img src={LOGO_LG} className="invomate-auth-logo" alt="Invomate logo" />
                {children}
            </div>
        </div>
    )
};

export default AuthLayout;