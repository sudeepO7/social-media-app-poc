import LoginHoc from "../../HOC/LoginHoc/LoginHoc"
import "./login.scss"

export default function Login() {
  return (
      <LoginHoc>
        <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegister">
                Create a New Account
            </button>
        </div>
      </LoginHoc>
  )
}
