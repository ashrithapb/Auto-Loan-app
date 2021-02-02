const initialState = "";

export const verificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ELIGIBILITY_VERIFICATION":
      return action.payload; // data.msg from server

    default:
      return state;
  }
};
