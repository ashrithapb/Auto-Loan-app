import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkEligibility } from "../../features/actions";

const LoanHelperForm = (validate) => {
  const [values, setValues] = useState({
    autoPrice: "",
    autoMake: "",
    autoModel: "",
    userYearlyIncome: "",
    userCreditScore: 0,
  });

  const [errors, setErrors] = useState(false);

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
    if (Object.keys(validate(values)).length === 0) {
      // interact with the API
      // and set the response into Redux
      // according to the response, we can redirect from & to any component
      let newAutoprice = values.autoPrice.replace(/,/g, "").substring(1);

      let newIncome = values.userYearlyIncome.replace(/,/g, "").substring(1);

      dispatch(
        checkEligibility({
          autoPrice: newAutoprice,
          autoMake: values.autoMake,
          autoModel: values.autoModel,
          userYearlyIncome: newIncome,
          userCreditScore: values.userCreditScore,
        })
      );
    }
  };

  return { handleChange, handleSubmit, values, errors };
};

export default LoanHelperForm;
