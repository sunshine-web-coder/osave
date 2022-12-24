import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {registerOptions} from "./FormErrorMsg"
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import AuthFormCSS from "./Form.module.scss";

const RegForm = ({ submitForm }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode:'onTouched'
  });
  
  const [passwordShown, setPasswordShown] = useState(false);
  
  const onSubmit = data => {
    submitForm();
  };
  const password = watch('password')
  const handleError = (errors) => {};

  return (
    <div className={AuthFormCSS.authForm}>
      <form className={AuthFormCSS.form} onSubmit={handleSubmit(onSubmit, handleError)} noValidate>
        <div className={AuthFormCSS.form_field}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 14H18L16 17H12L10 14H4M24 14V20C24 20.5304 23.7893 21.0391 23.4142 21.4142C23.0391 21.7893 22.5304 22 22 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V14M24 14L20.55 7.11C20.3844 6.77679 20.1292 6.49637 19.813 6.30028C19.4967 6.10419 19.1321 6.0002 18.76 6H9.24C8.86792 6.0002 8.50326 6.10419 8.18704 6.30028C7.87083 6.49637 7.61558 6.77679 7.45 7.11L4 14" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <input type="text" name="fullName" placeholder="Full Name" {...register('fullName', registerOptions.fullName)} />
          {errors?.fullName && <p className={AuthFormCSS.form_errors}>{errors.fullName.message}</p>}
        </div>
        <div className={AuthFormCSS.form_field}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_16_313)">
          <path d="M17.7437 10.2002V15.2002C17.7437 15.9959 18.0597 16.7589 18.6223 17.3215C19.185 17.8841 19.948 18.2002 20.7437 18.2002C21.5393 18.2002 22.3024 17.8841 22.865 17.3215C23.4276 16.7589 23.7437 15.9959 23.7437 15.2002V14.2002C23.7435 11.9432 22.9799 9.75269 21.5769 7.98475C20.174 6.2168 18.2142 4.97544 16.0163 4.46251C13.8184 3.94959 11.5116 4.19526 9.47101 5.15958C7.43042 6.12391 5.77606 7.75017 4.77692 9.77394C3.77778 11.7977 3.49263 14.1 3.96783 16.3063C4.44303 18.5127 5.65064 20.4934 7.39429 21.9265C9.13795 23.3595 11.3151 24.1606 13.5717 24.1994C15.8284 24.2382 18.0318 23.5125 19.8237 22.1402M17.7437 14.2002C17.7437 16.4094 15.9528 18.2002 13.7437 18.2002C11.5345 18.2002 9.74366 16.4094 9.74366 14.2002C9.74366 11.9911 11.5345 10.2002 13.7437 10.2002C15.9528 10.2002 17.7437 11.9911 17.7437 14.2002Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_16_313">
          <rect width="28" height="28" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          <input type="email" name="email" placeholder="Email" {...register('email', registerOptions.email)} />
          {errors?.email && <p className={AuthFormCSS.form_errors}>{errors.email.message}</p>}
        </div>
        <div className={AuthFormCSS.form_field}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_16_317)">
            <mask id="path-1-inside-1_16_317" fill="white">
            <path d="M18.9839 3.60773H8.98389C7.87932 3.60773 6.98389 4.50316 6.98389 5.60773V21.6077C6.98389 22.7123 7.87932 23.6077 8.98389 23.6077H18.9839C20.0885 23.6077 20.9839 22.7123 20.9839 21.6077V5.60773C20.9839 4.50316 20.0885 3.60773 18.9839 3.60773Z"/>
            <path d="M14.9839 19.6077C14.9839 20.16 14.5362 20.6077 13.9839 20.6077C13.4316 20.6077 12.9839 20.16 12.9839 19.6077C12.9839 19.0554 13.4316 18.6077 13.9839 18.6077C14.5362 18.6077 14.9839 19.0554 14.9839 19.6077Z"/>
            </mask>
            <path d="M8.98389 4.60773H18.9839V2.60773H8.98389V4.60773ZM18.9839 4.60773C19.5362 4.60773 19.9839 5.05544 19.9839 5.60773H21.9839C21.9839 3.95087 20.6407 2.60773 18.9839 2.60773V4.60773ZM19.9839 5.60773V21.6077H21.9839V5.60773H19.9839ZM19.9839 21.6077C19.9839 22.16 19.5362 22.6077 18.9839 22.6077V24.6077C20.6407 24.6077 21.9839 23.2646 21.9839 21.6077H19.9839ZM18.9839 22.6077H8.98389V24.6077H18.9839V22.6077ZM8.98389 22.6077C8.4316 22.6077 7.98389 22.16 7.98389 21.6077H5.98389C5.98389 23.2646 7.32703 24.6077 8.98389 24.6077V22.6077ZM7.98389 21.6077V5.60773H5.98389V21.6077H7.98389ZM7.98389 5.60773C7.98389 5.05544 8.4316 4.60773 8.98389 4.60773V2.60773C7.32703 2.60773 5.98389 3.95087 5.98389 5.60773H7.98389ZM13.9839 19.6077V21.6077C15.0885 21.6077 15.9839 20.7123 15.9839 19.6077H13.9839ZM13.9839 19.6077H11.9839C11.9839 20.7123 12.8793 21.6077 13.9839 21.6077V19.6077ZM13.9839 19.6077V17.6077C12.8793 17.6077 11.9839 18.5032 11.9839 19.6077H13.9839ZM13.9839 19.6077H15.9839C15.9839 18.5032 15.0885 17.6077 13.9839 17.6077V19.6077Z" fill="black" mask="url(#path-1-inside-1_16_317)"/>
            </g>
            <defs>
            <clipPath id="clip0_16_317">
            <rect width="28" height="28" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          <input type="text" name="phone" placeholder="Phone" {...register('phone', registerOptions.phone)}/>
          {errors?.phone && <p className={AuthFormCSS.form_errors}>{errors.phone.message}</p>}
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
          <input type={passwordShown ? "text" : "password"} name="password" placeholder="Password" {...register('password', registerOptions.password)} />
          {passwordShown ? (
          <BsEyeSlashFill className={AuthFormCSS.faEyeToggle} onClick={() => setPasswordShown(false)} />
          ): (
          <BsEyeFill className={AuthFormCSS.faEyeToggle} onClick={() => setPasswordShown(true)} />
          )}
          
          {errors?.password && <p className={AuthFormCSS.form_errors}>{errors.password.message}</p>}
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
          <input type={passwordShown ? "text" : "password"} name="confirmPassword"  placeholder="Confirm Password" {...register('confirmPassword', { required: "Confirm password is required",
            validate: (value) =>
            value === password || "The passwords do not match",
            })} />
            {passwordShown ? (
          <BsEyeSlashFill className={AuthFormCSS.faEyeToggle} onClick={() => setPasswordShown(false)} />
          ): (
          <BsEyeFill className={AuthFormCSS.faEyeToggle} onClick={() => setPasswordShown(true)} />
          )}
          {errors?.confirmPassword && <p className={AuthFormCSS.form_errors}>{errors.confirmPassword.message}</p>}
        </div>
        <div className={AuthFormCSS.form_terms_field}>
          <label className={AuthFormCSS.agreeTerms}>Terms and Conditions
            <input type="checkbox" name="agreeTerm" {...register('agreeTerm', registerOptions.agreeTerm)}/>
            <span className={AuthFormCSS.checkmark}></span>
          </label>
          {errors?.agreeTerm && <p className={AuthFormCSS.form_errors}>{errors.agreeTerm.message}</p>}
        </div>

        <div className={AuthFormCSS.formLinks}>
          <div className={AuthFormCSS.button}>
            <button type="submit" className={AuthFormCSS.submitBtn}>REGISTER</button>
            <Link to="/login" className={AuthFormCSS.authLinks}>LOGIN</Link>
          </div>
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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

export default RegForm;
