import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
        REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from './AuthTypes'

export const LoginStart = () => ({
    type: LOGIN_START
})

export const LoginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
})

export const LoginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
})

export const RegisterStart = () => ({
    type: REGISTER_START
})

export const RegisterSuccess = () => ({
    type: REGISTER_SUCCESS
})

export const RegisterFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error
})