import { createContext, useReducer, useEffect } from 'react'
import { User } from "../dummyData"
import { setStorage, getStorage, KEYS } from "../helpers/Helper"
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
    useEffect(() => {
        setStorage(KEYS.CURRENT_USER, state.user);
    }, [state.user]);
    return (
        <AuthContext.Provider value={{
            user: state.user ? state.user : getStorage(KEYS.CURRENT_USER),
            isFetching: state.isFetching,
            error: state.error,
            appTitle: state.appTitle,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}