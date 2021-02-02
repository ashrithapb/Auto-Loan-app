import React from "react";
import validate from "./validateInfo";
import eligibilityHelperForm from "./LoanHelperForm";
import "./LoanForm.css";
import CurrencyInput from "./CurrencyInput";
import Marketing from "./Marketing";

const UserLoanForm = ({ message }) => {
  const { handleChange, handleSubmit, values, errors } = eligibilityHelperForm(
    validate
  );

  return (
    <div className="userLoanForm">
      <div className="userLoanForm__division">
        <h1 className="userLoanForm__heading">Aoto Loan Application</h1>
        <form onSubmit={handleSubmit} className="userLoanForm__form" noValidate>
          {message !== "" && (
            <p className="userLoanForm__error">
              {message} due to due to higher Auto Purchase Rate!
            </p>
          )}
          <div className="userLoanForm__div">
            <label className="userLoanForm__label">Auto Purchase Price</label>
            <CurrencyInput
              className="userLoanForm__input"
              type="text"
              name="autoPrice"
              placeholder="$0.00"
              value={values.autoPrice}
              onChange={handleChange}
            />

            {errors.autoPrice && (
              <p className="userLoanForm__error">{errors.autoPrice}</p>
            )}
          </div>
          <div className="userLoanForm__div">
            <label className="userLoanForm__label">Auto Make</label>
            <input
              className="userLoanForm__input"
              type="text"
              name="autoMake"
              placeholder="Auto Make"
              value={values.autoMake}
              onChange={handleChange}
            />
            {errors.autoMake && (
              <p className="userLoanForm__error">{errors.autoMake}</p>
            )}
          </div>
          <div className="userLoanForm__div">
            <label className="userLoanForm__label">Auto Model</label>
            <input
              className="userLoanForm__input"
              type="text"
              name="autoModel"
              placeholder="Auto Model"
              value={values.autoModel}
              onChange={handleChange}
            />
            {errors.autoModel && (
              <p className="userLoanForm__error">{errors.autoModel}</p>
            )}
          </div>
          <div className="userLoanForm__div">
            <label className="userLoanForm__label">Your Yearly Income</label>
            <CurrencyInput
              className="userLoanForm__input"
              type="text"
              name="userYearlyIncome"
              placeholder="$0.00"
              value={values.userYearlyIncome}
              onChange={handleChange}
            />

            {errors.userYearlyIncome && (
              <p className="userLoanForm__error">{errors.userYearlyIncome}</p>
            )}
          </div>

          <div className="userLoanForm__div">
            <label className="userLoanForm__label">Your Credit Score</label>
            <input
              className="userLoanForm__input"
              type="number"
              name="userCreditScore"
              placeholder="Credit Score"
              value={values.userCreditScore}
              onChange={handleChange}
            />
            {errors.userCreditScore && (
              <p className="userLoanForm__error">{errors.userCreditScore}</p>
            )}
          </div>

          <div className="userLoanForm__div-btn">
            <button className="userLoanForm__btn" type="submit">
              Apply
            </button>
          </div>
        </form>
      </div>
      <div className="userLoanForm__marketing">
        <Marketing />
      </div>
    </div>
  );
};

export default UserLoanForm;
