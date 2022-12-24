import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../../assets/login.png";
import LoginForm from "../../../components/Auth/LoginForm";
import AuthCSS from "../../Auth/Auth.module.scss";

const Login = ({ setIsLoggedIn }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className={AuthCSS.auth}>
      <div className={AuthCSS.inAuth}>
        <div className={AuthCSS.left}>
          <div className={AuthCSS.top}>
            <div className={AuthCSS.desc}>
              <p>SECURE SOUCES</p>
            </div>
            <div className={AuthCSS.title}>
              <h1>Access Your Account</h1>
            </div>
            <div className={AuthCSS.subtitle}>
              <h3>Login into your cloud documents</h3>
            </div>
          </div>
          <div className={AuthCSS.formContainer}>
            {!isSubmitted ? (
              <LoginForm submitForm={submitForm} setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <div className={AuthCSS.successMsg}>
                <div className={AuthCSS.inSuccessMsg}>
                  <div className={AuthCSS.closeX} onClick={() => setIsSubmitted(false)} title="Close">X</div>
                  <div className="successMsg">Login Successfully. <br /> <Link to="/dashboard">Dashboard </Link></div>
                </div>
              </div>
              
            )}
          </div>
        </div>
        <div className={AuthCSS.right}>
          <img src={loginImg} alt="loginImg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
