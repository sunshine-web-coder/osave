import React, { useState } from "react";
import LoginForm from "../Auth/LoginForm";

const SuccessMessage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="successModal">
      {!isSubmitted ? (
        <LoginForm submitForm={submitForm} />
      ) : (
        <div className="successMsg">Login Successful</div>
      )}
    </div>
  );
};

export default SuccessMessage;
