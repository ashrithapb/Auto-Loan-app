import React, { useState } from "react";
import "./FormSignup.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./../FormSuccess";

const SignupForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="signupForm">
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default SignupForm;
