export const initialsate = {
  mainPosts: [
    {
      id: 1,
      User: { id: 1, nickname: "데브현" },
      content: "ddd",
      Image: [{ src: "" }, { src: "" }, { src: "" }],
    },
  ],
  postAdd: false,
};
const ADD_POST = "ADD_POST";
export const addPost = { type: ADD_POST };

const reducer = (state = initialState, action) => {
  switch (action.type) {
   
    case ADD_POST:
      return {
        ...state.user,
        IsLogedin: false,
        user: null,
      };
    default:
      return state;
  }
};
