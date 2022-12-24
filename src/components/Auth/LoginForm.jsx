import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {registerOptions} from "./FormErrorMsg"
import { Link, useNavigate } from "react-router-dom";
import AuthFormCSS from "./Form.module.scss";

const LoginForm = ({ submitForm, setIsLoggedIn }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode:'onTouched'
  });

  const navigate = useNavigate();

  const onSubmit = data => {
    navigate("/dashboard/files");
    setIsLoggedIn(true);
  };
  const handleError = (errors) => {};

  return (
    <div className={AuthFormCSS.authForm}>
      <form className={AuthFormCSS.form} onSubmit={handleSubmit(onSubmit, handleError)} noValidate>
        <div className={AuthFormCSS.form_field}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 14H18L16 17H12L10 14H4M24 14V20C24 20.5304 23.7893 21.0391 23.4142 21.4142C23.0391 21.7893 22.5304 22 22 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V14M24 14L20.55 7.11C20.3844 6.77679 20.1292 6.49637 19.813 6.30028C19.4967 6.10419 19.1321 6.0002 18.76 6H9.24C8.86792 6.0002 8.50326 6.10419 8.18704 6.30028C7.87083 6.49637 7.61558 6.77679 7.45 7.11L4 14"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type="email" name="email" placeholder="Email" {...register('email', registerOptions.email)} />
          {errors?.email && <p className={AuthFormCSS.form_errors}>{errors.email.message}</p>}
        </div>
        <div className={AuthFormCSS.form_field}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 13V9C9 7.67392 9.52678 6.40215 10.4645 5.46447C11.4021 4.52678 12.6739 4 14 4C15.3261 4 16.5979 4.52678 17.5355 5.46447C18.4732 6.40215 19 7.67392 19 9V13M7 13H21C22.1046 13 23 13.8954 23 15V22C23 23.1046 22.1046 24 21 24H7C5.89543 24 5 23.1046 5 22V15C5 13.8954 5.89543 13 7 13Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type={passwordShown ? "text" : "password"} name="password" placeholder="Password" {...register('password', registerOptions.password)} />
          {errors?.password && <p className={AuthFormCSS.form_errors}>{errors.password.message}</p>}
        </div>
        <div className={AuthFormCSS.show_pwd}>
          <span>Show Password</span>
          <label className={AuthFormCSS.switch} onChange={togglePassword}>
            <input type="checkbox" />
            <span
              className={`${AuthFormCSS.slider} ${AuthFormCSS.round}`}
            ></span>
          </label>
        </div>
        <div className={AuthFormCSS.formLinks}>
          <div className={AuthFormCSS.button}>
            <button type="submit" className={AuthFormCSS.submitBtn}>
              LOGIN
            </button>
            <Link to="/register" className={AuthFormCSS.authLinks}>
              REGISTER
            </Link>
          </div>
          <Link className={AuthFormCSS.forgotpswdLink} to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
        <div className={AuthFormCSS.loginWithBtn}>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 0H18C19.1046 0 20 0.89543 20 2V18C20 19.1046 19.1046 20 18 20H2C0.89543 20 0 19.1046 0 18V2C0 0.89543 0.89543 0 2 0ZM2 2V18H18V2H2ZM9.13306 10.0044H11V16H13V10.0044H14.9824V8.00439H13V7C13 6.44772 13.4477 6 14 6H15V4H14C12.3431 4 11 5.34315 11 7V8.00439H9.13306V10.0044Z"
                fill="white"
              />
            </svg>
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 11V9H20V10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C13.0799 0 15.9313 1.4025 17.8167 3.76259L16.2542 5.01093C14.7443 3.12095 12.4653 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.0796 18 17.446 14.9463 17.9381 11H11Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
