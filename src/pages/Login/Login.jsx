import { useRef, useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'
import LoginHoc from "../../HOC/LoginHoc/LoginHoc"
import { login } from "../../helpers/apiCalls"
import { CircularProgress } from "@material-ui/core"
import "./login.scss"

export default function Login() {
  const [ register, setRegister ] = useState(false);
  const { dispatch, isFetching, error } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    login({
      email: email.current.value,
      password: password.current.value
    }, dispatch);
  };
  const handleClick = () => {
    setRegister(true)
  };

  const LoginForm = () => {
    return (
      <form className="loginBox" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" 
                ref={email} className="loginInput" required />
          <input type="password" placeholder="Password" 
                  minLength="6" maxLength="25"
                  ref={password} className="loginInput" required />
          <button className="loginButton" disabled={isFetching}>{
            isFetching ? <CircularProgress color="inherit" size="20px" /> : 'Log In'
          }</button>
          <span className="loginForgot">Forgot password?</span>
          <button className="loginRegister" type="button" disabled={isFetching} onClick={handleClick}>{
            isFetching ? <CircularProgress color="inherit" size="20px" /> : 'Create a New Account'
          }</button>
      </form>
    );
  }

  return (
      <LoginHoc>
        {
            !register ? <LoginForm /> : <Navigate to="/register" />
        }
      </LoginHoc>
  )
}
