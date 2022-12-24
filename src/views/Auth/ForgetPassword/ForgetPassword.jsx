import { useState } from "react";
import { Link } from "react-router-dom";
import fPwrdImg from "../../../assets/forgot-password.png";
import ForgotPassword from "../../../components/Auth/ForgotPassword";
import AuthCSS from "../../Auth/Auth.module.scss";

const ForgetPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className={AuthCSS.auth}>
      <div className={`${AuthCSS.inAuth} ${AuthCSS.inAuthFlexStart}`}>
        <div className={AuthCSS.left}>
          <div className={AuthCSS.top}>
            <div className={AuthCSS.desc}>
              <p>SECURE SOUCES</p>
            </div>
            <div className={AuthCSS.title}>
              <h1>Forgot Password?</h1>
            </div>
            <div className={AuthCSS.subtitle}>
              <h3 className={AuthCSS.fPwrdSub}>
                Please confirm your email address below and we’ll send you a
                verification code.
              </h3>
            </div>
          </div>
          <div className={AuthCSS.formContainer}>
            
            {!isSubmitted ? (
              <ForgotPassword submitForm={submitForm} />
            ) : (
              <div className={AuthCSS.successMsg}>
                <div className={AuthCSS.inSuccessMsg}>
                  <div className={AuthCSS.closeX} onClick={() => setIsSubmitted(false)} title="Close">X</div>
                  Verification link sent <br /> Check your email for verification link <br /> <Link to="/login">LOGIN</Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={AuthCSS.right}>
          <img src={fPwrdImg} alt="regImg" />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
