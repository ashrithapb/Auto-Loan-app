export default function validateInfo(values) {
  let errors = {};
  let isAnyErrors = false;

  if (!values.autoPrice) {
    errors.autoPrice = "Auto purchase price is required";
    isAnyErrors = true;
  }
  if (!values.autoMake) {
    errors.autoMake = "Auto Make is required";
    isAnyErrors = true;
  }

  if (!values.autoModel) {
    errors.autoModel = "Auto Model is required";
    isAnyErrors = true;
  }
  if (!values.userYearlyIncome) {
    errors.userYearlyIncome = "Yearly Income is required";
    isAnyErrors = true;
  }
  if (!values.userCreditScore) {
    errors.userCreditScore = "Credit Score is required";
    isAnyErrors = true;
  } else if (values.userCreditScore < 300) {
    errors.userCreditScore = "Credit score should be greater than 300";
    isAnyErrors = true;
  } else if (values.userCreditScore > 850) {
    errors.userCreditScore = "Credit score should be less than 850";
    isAnyErrors = true;
  }
  if (isAnyErrors) {
    return errors;
  } else {
    return false;
  }
}
