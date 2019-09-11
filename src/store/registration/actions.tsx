import { 
    REGISTRATION_CHANGE_NAME_VALUE, 
    REGISTRATION_CHANGE_PASSWORD_VALUE, 
    REGISTRATION_CHANGE_REPEAT_PASSWORD_VALUE 
} from './constants'

export interface RegistrationData {
    name: string,
    password: number,
    repeatPassword: number
}

export const setNameText = (name: string) => ({
    type: typeof REGISTRATION_CHANGE_NAME_VALUE,
    payload: name
})

export const setPasswordText = (password: number) => ({
    type: typeof REGISTRATION_CHANGE_PASSWORD_VALUE,
    payload: password
})

export const setRepeatPasswordText = (repeatPassword: number) => ({
    type: typeof REGISTRATION_CHANGE_REPEAT_PASSWORD_VALUE,
    payload: repeatPassword
})