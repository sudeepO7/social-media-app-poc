import { LoginStart, LoginSuccess, LoginFailure } from "../context/AuthActions"
import { userLogin } from "./Api"
import { post } from "./Http"
import { defaultError } from "./Helper"

export const login = async (loginCred, dispatch) => {
    dispatch(LoginStart());
    try {
        post(userLogin(), {}, loginCred)
        .then(res => {
            if (res && res.data.user) {
                dispatch(LoginSuccess(res.data.user));
            } else if (res && res.message) {
                dispatch(LoginFailure(res.data.message));
            } else {
                dispatch(LoginFailure(defaultError));
            }
        }).catch(err => {
            dispatch(LoginFailure(err));
        })
    } catch(err) {
        dispatch(LoginFailure(err));
    }
}