import { useContext } from 'react'
import { Navigate } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'
import "./loginHoc.scss"

export default function LoginHoc({ children }) {
    const { appTitle, user } = useContext(AuthContext);
    const LandingPage = () => (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="appLogo">{appTitle}</h3>
                    <span className="appDesc">
                        Connect with friends and the world around you on {appTitle}.
                    </span>
                </div>
                <div className="loginRight">
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
    return (
        <>
            {
                !user ? <LandingPage /> : <Navigate to="/" />
            }
        </>
    )
}
