export default function validateSignupInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be >=8 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password is required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
}
