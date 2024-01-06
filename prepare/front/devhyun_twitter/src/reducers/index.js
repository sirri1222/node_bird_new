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

const login = (data) => {
  return {
    type: "Log_In",
    data,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Log_In":
      return {
        ...state,
        name: action.data,
      };
  }
};
