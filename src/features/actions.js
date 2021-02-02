import axios from "axios";

export const checkEligibility = (formData) => async (dispatch) => {
  // LOADING (BEFORE FETCH)
  dispatch({
    type: "LOADING",
  });

  try {
    const response = await axios.post(
      "http://localhost:3002/getDetails",
      formData
    );
    console.log(response);

    // RESPONSE FROM SERVER API
    dispatch({
      type: "ELIGIBILITY_VERIFICATION",
      payload: response.data.msg,
    });
  } catch (error) {
    console.log(error);
    // SERVER ERROR
    dispatch({
      type: "ERROR",
      payload: error,
    });
  }
};

export const signUp = (formData) => {
  return {
    type: "COLLECT_SIGNUP_FORM",
    payload: formData,
  };
};
