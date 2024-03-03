import React from "react";

import "./style.scss";

interface AlertProps {
    message?: string,
    type: "success" | "danger" | "warning" | undefined
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
    if (!message) {
        return null;
    }

    return (
        <div className={`invomate-alert invomate-alert-${type}`} >
            {message}
        </div>
    )
}

export default Alert;