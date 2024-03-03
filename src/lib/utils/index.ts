import { emailRegex } from "../constants"

export const isEmail = (value:string) => {
    return value.toLowerCase().match(emailRegex)
}