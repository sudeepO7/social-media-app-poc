import { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: {
        "_id": "624c2c9287d8ad52f56938c8",
        "username": "sudeep07",
        "firstName": "Sudeep",
        "lastName": "Mukherjee",
        "email": "sudeep71195@gmail.com",
        "password": "$2b$10$pCY0h2cXHMCVPGIOBPo7uOBQHEv1UGnV8LZzTxR2hdV9DIMJysmYG",
        "profilePicture": "person/sudeep.jpg",
        "coverPicture": "post/3.jpeg",
        "followers": [
            "624c3fd16593b0cedb993725",
            "624d78456e9ebedce788111b"
        ],
        "following": [],
        "isAdmin": false,
        "createdAt": {
            "$date": {
                "$numberLong": "1649159314161"
            }
        },
        "updatedAt": {
            "$date": {
                "$numberLong": "1649250353365"
            }
        },
        "__v": {
            "$numberInt": "0"
        },
        "bio": "Love to travel. Food lover. Coding enthusiast.",
        "city": "Lucknow",
        "state": "Uttar Pradesh"
    },
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