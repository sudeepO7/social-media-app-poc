import { LoginStart, LoginSuccess, LoginFailure,
        RegisterStart, RegisterSuccess, RegisterFailure } from "../context/AuthActions"
import { userLogin, userRegister } from "./Api"
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
};

export const register = async (userDetails, dispatch, cb) => {
    dispatch(RegisterStart());
    try {
        post(userRegister(), {}, userDetails)
        .then(res => {
            if (res && res.data.success) {
                dispatch(RegisterSuccess());
                cb();
            } else if (res && res.data.message) {
                dispatch(RegisterFailure(res.data.message));
            } else {
                dispatch(RegisterFailure(defaultError));
            }
        }).catch(err => {
            dispatch(RegisterFailure(err));
        })
    } catch(err) {
        dispatch(RegisterFailure(err));
    }
}