import React from "react";
import validate from "./validateSignupInfo";
import useForm from "./useForm";
import "./FormSignup.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="formSignup">
      <h1 className="formSignup__heading">Create your Account</h1>
      <form onSubmit={handleSubmit} className="formSignup__form" noValidate>
        <div className="formSignup__div">
          <label className="formSignup__label">Email</label>
          <input
            className="formSignup__input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="formSignup__error">{errors.email}</p>}
        </div>
        <div className="formSignup__div">
          <label className="formSignup__label">Password</label>
          <input
            className="formSignup__input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="formSignup__error">{errors.password}</p>
          )}
        </div>
        <div className="formSignup__div">
          <label className="formSignup__label">Confirm Password</label>
          <input
            className="formSignup__input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="formSignup__error">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="formSignup__div-btn">
          <button className="formSignup__btn" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
