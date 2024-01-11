import { combineReducers } from "redux";

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

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case "HYDRATE":
        return {
          ...state,
          ...action.payload,
        };

      default:
        return state;
    }
  },
  user,
  post,
});
