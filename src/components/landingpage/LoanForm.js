import React from "react";
import "./LoanForm.css";
import UserLoanForm from "./UserLoanForm";
import { useSelector } from "react-redux";
import Disqualify from "../Disqualify";
import SignupForm from "../accountCreation/SignupForm";

const LoanForm = () => {
  const message = useSelector((state) => state.message);

  return (
    <div className="userForm">
      {(message === "" || message === "Bad request") && (
        <UserLoanForm message={message} />
      )}
      {message === "qualified" && <SignupForm />}
      {message === "disqualified" && <Disqualify />}
    </div>
  );
};

export default LoanForm;
