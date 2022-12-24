import { useState } from "react";
import { Link } from "react-router-dom";
import regImg from "../../../assets/register.png"
import RegForm from "../../../components/Auth/RegForm";
import AuthCSS from "../../Auth/Auth.module.scss";

const Register = () => {
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
              <h1>Create Your Account</h1>
            </div>
            <div className={AuthCSS.subtitle}>
              <h3 className={AuthCSS.rSub}>Create new account to secure your documents</h3>
            </div>
          </div>
          <div className={AuthCSS.formContainer}>
            {!isSubmitted ? (
              <RegForm submitForm={submitForm} />
            ) : (
              <div className={AuthCSS.successMsg}>
                <div className={AuthCSS.inSuccessMsg}>
                  <div className={AuthCSS.closeX} onClick={() => setIsSubmitted(false)} title="Close">X</div>
                    Registration Successfully <Link to="/login">LOGIN</Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={AuthCSS.right}>
          <img src={regImg} alt="regImg" />
        </div>
      </div>
    </div>
  );
};

export default Register;
