import { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
    appTitle: process.env.REACT_APP_TITLE
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            appTitle: state.appTitle,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}