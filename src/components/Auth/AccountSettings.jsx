import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerOptions } from "./FormErrorMsg";
import AuthFormCSS from "./Form.module.scss";
import * as Unicons from '@iconscout/react-unicons';
import { accountSettingsData } from "../data";

const AccountSettings = ({ submitForm }) => {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    submitForm();
  };
  const handleError = (errors) => {};

  return (
    <div
      className={`${AuthFormCSS.authForm} ${AuthFormCSS.AccountSettingsAuthForm}`}
    >
      <form className={AuthFormCSS.form}>
        <div className={AuthFormCSS.profile_upload_box}>
          <div className={AuthFormCSS.avatar_image_upload}>
            {imgData ? (
              <label for="file-input">
                <div className={AuthFormCSS.avatar_display}>
                  <img src={imgData} alt="" />
                  <div className={AuthFormCSS.overlay}>
                    <svg
                      width="50"
                      height="41"
                      viewBox="0 0 50 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.4932 6.46676C13.6542 6.24291 13.8331 5.96888 14.0611 5.59937C14.1444 5.46436 14.3716 5.08952 14.5408 4.81042C14.6311 4.66146 14.7048 4.53977 14.7314 4.49639C16.6154 1.41452 17.985 0 20.4545 0H31.8182V4.54545H20.4545C20.2574 4.54545 19.6375 5.18573 18.6095 6.86724C18.5883 6.90194 18.5251 7.00634 18.4443 7.13965C18.2737 7.4211 18.025 7.83141 17.9293 7.98657C17.6498 8.43936 17.4176 8.79518 17.1832 9.12104C16.1645 10.5373 15.1462 11.3636 13.6364 11.3636H6.81818C5.56299 11.3636 4.54545 12.3812 4.54545 13.6364V34.0909C4.54545 35.3461 5.56299 36.3636 6.81818 36.3636H43.1818C44.437 36.3636 45.4545 35.3461 45.4545 34.0909V20.4545H50V34.0909C50 37.8565 46.9474 40.9091 43.1818 40.9091H6.81818C3.0526 40.9091 0 37.8565 0 34.0909V13.6364C0 9.87078 3.0526 6.81818 6.81818 6.81818H13.2186C13.2943 6.73168 13.387 6.61438 13.4932 6.46676ZM36.3636 11.3635V6.81803H40.9091V2.27254H45.4545V6.81803H50V11.3635H45.4545V15.9089H40.9091V11.3635H36.3636ZM25 34.0908C18.724 34.0908 13.6364 29.0031 13.6364 22.7272C13.6364 16.4512 18.724 11.3635 25 11.3635C31.276 11.3635 36.3636 16.4512 36.3636 22.7272C36.3636 29.0031 31.276 34.0908 25 34.0908ZM25 29.5454C28.7656 29.5454 31.8182 26.4928 31.8182 22.7272C31.8182 18.9616 28.7656 15.909 25 15.909C21.2344 15.909 18.1818 18.9616 18.1818 22.7272C18.1818 26.4928 21.2344 29.5454 25 29.5454Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </label>
            ) : (
              <label for="file-input">
                <div className={AuthFormCSS.upload_btn}>
                  <svg
                    width="50"
                    height="41"
                    viewBox="0 0 50 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.4932 6.46676C13.6542 6.24291 13.8331 5.96888 14.0611 5.59937C14.1444 5.46436 14.3716 5.08952 14.5408 4.81042C14.6311 4.66146 14.7048 4.53977 14.7314 4.49639C16.6154 1.41452 17.985 0 20.4545 0H31.8182V4.54545H20.4545C20.2574 4.54545 19.6375 5.18573 18.6095 6.86724C18.5883 6.90194 18.5251 7.00634 18.4443 7.13965C18.2737 7.4211 18.025 7.83141 17.9293 7.98657C17.6498 8.43936 17.4176 8.79518 17.1832 9.12104C16.1645 10.5373 15.1462 11.3636 13.6364 11.3636H6.81818C5.56299 11.3636 4.54545 12.3812 4.54545 13.6364V34.0909C4.54545 35.3461 5.56299 36.3636 6.81818 36.3636H43.1818C44.437 36.3636 45.4545 35.3461 45.4545 34.0909V20.4545H50V34.0909C50 37.8565 46.9474 40.9091 43.1818 40.9091H6.81818C3.0526 40.9091 0 37.8565 0 34.0909V13.6364C0 9.87078 3.0526 6.81818 6.81818 6.81818H13.2186C13.2943 6.73168 13.387 6.61438 13.4932 6.46676ZM36.3636 11.3635V6.81803H40.9091V2.27254H45.4545V6.81803H50V11.3635H45.4545V15.9089H40.9091V11.3635H36.3636ZM25 34.0908C18.724 34.0908 13.6364 29.0031 13.6364 22.7272C13.6364 16.4512 18.724 11.3635 25 11.3635C31.276 11.3635 36.3636 16.4512 36.3636 22.7272C36.3636 29.0031 31.276 34.0908 25 34.0908ZM25 29.5454C28.7656 29.5454 31.8182 26.4928 31.8182 22.7272C31.8182 18.9616 28.7656 15.909 25 15.909C21.2344 15.909 18.1818 18.9616 18.1818 22.7272C18.1818 26.4928 21.2344 29.5454 25 29.5454Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </label>
            )}
            <input
              id="file-input"
              name="myfile"
              type="file"
              onChange={onChangePicture}
            />
            <div className={`${AuthFormCSS.tooLips} ${AuthFormCSS.arrowTop} `}>
              {imgData ? <>Change profile image</> : <>Upload profile image</>}
            </div>
          </div>
        </div>
      </form>
      <form
        className={`${AuthFormCSS.form} ${AuthFormCSS.AccountSettingsForm}`}
        onSubmit={handleSubmit(onSubmit, handleError)}
        noValidate
      >
        {accountSettingsData.map((accountSettingd) => (
          <>
          <div className={AuthFormCSS.form_field}>
          <Unicons.UilUserCircle className={AuthFormCSS.Unicons}/>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={accountSettingd.fullName}
            {...register("fullName", registerOptions.fullName)}
          />
          <Unicons.UilPen className={AuthFormCSS.AccSettingsIcons}/>
          {errors?.fullName && (
            <p className={AuthFormCSS.form_errors}>{errors.fullName.message}</p>
          )}
        </div>
        <div className={AuthFormCSS.form_field}>
          <Unicons.UilAt className={AuthFormCSS.Unicons} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={accountSettingd.email}
            {...register("email", registerOptions.email)}
          />
          <Unicons.UilPen className={AuthFormCSS.AccSettingsIcons}/>
          {errors?.email && (
            <p className={AuthFormCSS.form_errors}>{errors.email.message}</p>
          )}
        </div>
        <div className={AuthFormCSS.form_field}>
          <Unicons.UilMobileAndroid className={AuthFormCSS.Unicons}/>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={accountSettingd.phone}
            {...register("phone", registerOptions.phone)}
          />
          <Unicons.UilPen className={AuthFormCSS.AccSettingsIcons}/>
          {errors?.phone && (
            <p className={AuthFormCSS.form_errors}>{errors.phone.message}</p>
          )}
        </div>
        <div className={AuthFormCSS.form_field}>
          <Unicons.UilLock className={AuthFormCSS.Unicons}/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={accountSettingd.password}
            {...register("password", registerOptions.password)}
          />
          <Unicons.UilPen className={AuthFormCSS.AccSettingsIcons}/>
          {errors?.password && (
            <p className={AuthFormCSS.form_errors}>{errors.password.message}</p>
          )}
        </div>
          </>
        ))}
        
        <div className={AuthFormCSS.formLinks}>
          <div className={AuthFormCSS.button}>
            <button className={AuthFormCSS.submitBtn}>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountSettings;
