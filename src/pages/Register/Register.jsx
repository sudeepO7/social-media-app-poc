import LoginHoc from "../../HOC/LoginHoc/LoginHoc"
import "./register.scss"

export default function Register() {
  return (
    <LoginHoc>
      <div className="registerBox">
        <input placeholder="Username" className="loginInput" />
        <input placeholder="Email" className="loginInput" />
        <input type="password" placeholder="Password" className="loginInput" />
        <input type="password" placeholder="Password Again" className="loginInput" />
        <button className="loginButton">Sign Up</button>
        <button className="loginRegister">
            Log into Account
        </button>
      </div>
    </LoginHoc>
  )
}
