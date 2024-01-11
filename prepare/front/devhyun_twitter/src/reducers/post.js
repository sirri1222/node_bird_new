export const initialsate = {
  mainPosts: [
    {
      id: 1,
      User: { id: 1, nickname: "데브현" },
      content: "ddd",
      Image: [{ src: "" }, { src: "" }, { src: "" }],
      Comments: [
        {
          User: {
            nickname: "11",
          },
          comment: "얼른사고싶어요1",
        },
        {
          User: {
            nickname: "22",
          },
          comment: "얼른사고싶어요2",
        },
      ],
      imagePath: [],
      postAdded: false,
    },
  ],
  postAdd: false,
};
const ADD_POST = "ADD_POST";
export const addPost = { type: ADD_POST };

const dummyPost = [
  {
    id: 1,
    User: { id: 1, nickname: "데브현" },
    content: "ddd",
    Image: [{ src: "" }, { src: "" }, { src: "" }],
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    default:
      return state;
  }
};
