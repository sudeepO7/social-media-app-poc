import { useRef, useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { register } from "../../helpers/apiCalls"
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from "@material-ui/core"
import LoginHoc from "../../HOC/LoginHoc/LoginHoc"
import Toast from "../../components/Toast/Toast"
import "./register.scss"

export default function Register() {
  const [ login, setLogin ] = useState(false);
  const [ showToast, setShowToast ] = useState(false);
  const { dispatch, isFetching, error } = useContext(AuthContext);
  const toastMessage = {
    message: `User created successfully`,
    handleClose: () => setShowToast(false),
    severity: 'success'
  };
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const handleRegister = (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
      return;
    }
    register({
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    }, dispatch, () => {
      setShowToast(true);
      setTimeout(() => {
        setLogin(true);
      }, 1000);
    });
  };
  const handleClick = () => {
    setLogin(true)
  };

  const RegisterForm = () => {
    return (
      <form className="registerBox" onSubmit={handleRegister}>
        <div className="doubleInput">
          <input placeholder="First Name" ref={firstName} className="loginInput nameFieldLeft" required />
          <input placeholder="Last Name" ref={lastName} className="loginInput nameFieldRight" required />
        </div>
        <input placeholder="Username" ref={username} 
               minLength="3" maxLength="30" className="loginInput" required />
        <input placeholder="Email" ref={email} type="email" className="loginInput" required />
        <input type="password" ref={password} placeholder="Password" 
               minLength="6" maxLength="25" className="loginInput" required />
        <input type="password" ref={passwordAgain} placeholder="Password Again" 
               minLength="6" maxLength="25" className="loginInput" required />
        <button className="loginButton" disabled={isFetching}>{
            isFetching ? <CircularProgress color="inherit" size="20px" /> : 'Sign Up'
        }</button>
        <button className="loginRegister" type="button" disabled={isFetching} onClick={handleClick}>{
            isFetching ? <CircularProgress color="inherit" size="20px" /> : 'Log into Account'
        }</button>
      </form>
    );
  }
  
  return (
    <LoginHoc>
      {
          !login ? <>
            <Toast open={showToast} {...toastMessage} />
            <RegisterForm />
          </> : <Navigate to="/login" />
      }
    </LoginHoc>
  )
}
