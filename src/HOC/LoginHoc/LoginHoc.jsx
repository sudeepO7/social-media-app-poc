import { useContext } from 'react'
import { AppContext } from '../../AppContext';
import "./loginHoc.scss"

export default function LoginHoc({ children }) {
  const { globalState } = useContext(AppContext);
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="appLogo">{globalState?.appTitle}</h3>
                <span className="appDesc">
                    Connect with friends and the world around you on {globalState?.appTitle}.
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
}
