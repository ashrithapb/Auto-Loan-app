import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../features/actions";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(
        signUp({
          email: values.email,
          password: values.password,
        })
      );
      callback();
    }
  }, [errors, isSubmitting, callback, dispatch, values]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
