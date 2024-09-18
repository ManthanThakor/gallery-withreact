export const setSelectedVideo = (video) => ({
  type: "SET_SELECTED_VIDEO",
  payload: video,
});

export const setSuggestedVideos = (videos) => ({
  type: "SET_SUGGESTED_VIDEOS",
  payload: videos,
});
