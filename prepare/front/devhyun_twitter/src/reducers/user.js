export const initialsate = {
  IsLogedin: true,
  user: null,
  signupData: {},
  loginData: {},
};

const loginAction = (data) => {
  return {
    type: "Log_In",
    data,
  };
};

const logoutAction = (data) => {
  return {
    type: "Log_Out",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Log_In":
      return {
        ...state,
        IsLogedin: true,
        user: action.data,
      };
    case "Log_Out":
      return {
        ...state.user,
        IsLogedin: false,
        user: null,
      };
    default:
      return state;
  }
};
