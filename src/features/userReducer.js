const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COLLECT_SIGNUP_FORM":
      return action.payload;

    default:
      return state;
  }
};
