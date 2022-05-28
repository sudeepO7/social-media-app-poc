import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
        REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from './AuthTypes'

const AuthReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_START:
        case REGISTER_START:
            return {
                ...state,
                user: null,
                isFetching: true,
                error: false
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
                error: false
            };
            
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return {
                ...state,
                user: null,
                isFetching: false,
                error: action.payload
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                user: null,
                isFetching: false,
                error: false
            };
    
        default:
            return state;
    }
};

export default AuthReducer;