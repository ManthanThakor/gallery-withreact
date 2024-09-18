const initialState = {
  selectedVideo: null,
  suggestedVideos: [],
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_VIDEO":
      return { ...state, selectedVideo: action.payload };
    case "SET_SUGGESTED_VIDEOS":
      return { ...state, suggestedVideos: action.payload };
    default:
      return state;
  }
};

export default videoReducer;
