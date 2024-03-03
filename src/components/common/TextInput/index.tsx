import React from "react"

import "./style.scss"

interface TextInputProps {
    type: React.HTMLInputTypeAttribute
    value: number | string
    placeholder: string | ""
    name: string
    className?: string
    onchange: React.ChangeEventHandler,
}
const TextInput: React.FC<TextInputProps> = ({ type, value, name, placeholder, className, onchange }) => {
    return (
        <input
            className={"invomate-text-input " + className}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onchange}
        />
    )
}

export default TextInput;