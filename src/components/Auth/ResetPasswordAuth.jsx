import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthFormCSS from "./Form.module.scss";
import {registerOptions} from "./FormErrorMsg";

const ResetPasswordAuth = ({ submitForm }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = () => {
    submitForm();
  };
  const password = watch("password");
  const handleError = () => {};
  return (
    <div className={AuthFormCSS.authForm}>
      <form
        className={AuthFormCSS.form}
        onSubmit={handleSubmit(onSubmit, handleError)}
        noValidate
      >
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            placeholder="Password"
            {...register("password", registerOptions.password)}
          />
          {errors?.password && (
            <p className={AuthFormCSS.form_errors}>{errors.password.message}</p>
          )}
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type={passwordShown ? "text" : "password"}
            name="confirmNewPassword"
            placeholder="Confirm New Password"
            {...register("confirmNewPassword", {
              required: "Confirm new password is required",
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
          />
          {errors?.confirmNewPassword && (
            <p className={AuthFormCSS.form_errors}>
              {errors.confirmNewPassword.message}
            </p>
          )}
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
            <button className={AuthFormCSS.submitBtn}>RESET PASSWORD</button>{" "}
            <span>OR</span>
            <Link to="/login" className={AuthFormCSS.authLinks}>
              LOGIN
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordAuth;
