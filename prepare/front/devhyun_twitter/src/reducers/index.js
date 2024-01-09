const initialsate = {
  user: {
    IsLogedin: true,
    user: null,
    signupData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HYDRATE":
      return {
        ...state,
        ...action.payload,
      };
    case "Log_In":
      return {
        ...state,
        user: {
          ...state.user,
          IsLogedin: true,
          user: action.data,
        },
      };
    case "Log_Out":
      return {
        ...state,
        user: {
          ...state.user,
          IsLogedin: false,
          user: null,
        },
      };
    default:
      return state;
  }
};
