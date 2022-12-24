import { useState } from "react";
import { Link } from "react-router-dom";
import rPswrdImg from "../../../assets/reset-password.png"
import ResetPasswordAuth from "../../../components/Auth/ResetPasswordAuth";
import AuthCSS from "../../Auth/Auth.module.scss";

const ResetPassword = () => {
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
              <h1>Reset Password</h1>
            </div>
            <div className={AuthCSS.subtitle}>
              <h3>Enter a new password for your account.</h3>
            </div>
          </div>
          <div className={AuthCSS.formContainer}>
            {!isSubmitted ? (
              <ResetPasswordAuth submitForm={submitForm} />
            ) : (
              <div className={AuthCSS.successMsg}>
                <div className={AuthCSS.inSuccessMsg}>
                  <div className={AuthCSS.closeX} onClick={() => setIsSubmitted(false)} title="Close">X</div>
                  <div className="successMsg">Password Reset Successfully. <br /> <Link to="/login">Login </Link></div>
                </div>
              </div>
              
            )}
          </div>
        </div>
        <div className={AuthCSS.right}>
          <img src={rPswrdImg} alt="rPswrdImg" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
