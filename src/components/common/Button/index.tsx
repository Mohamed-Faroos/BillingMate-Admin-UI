import React from "react";

import "./style.scss";

interface ButtonProps {
    label?: string
    icon?: React.ReactNode
    size: "sm" | "md" | "lg"
    variant: "primary" | "secondary" | "success" | "danger" | "transparent"
    disabled?: boolean
    className?: string
    onClick: React.MouseEventHandler
}

const Button: React.FC<ButtonProps> = ({ label, icon, size, variant, disabled = false, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`invomate-button invomate-button-${size} invomate-button-${variant} ${className}`}
            disabled={disabled}>
            {icon && <div className="invomate-button-icon">{icon}</div>}
            {label}
        </button>
    )
}

export default Button;