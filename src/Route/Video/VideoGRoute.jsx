import React from "react";
import VideoG from "../../components/videoSec/VideoG";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient();

const VideoGRoute = () => {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <VideoG />
      {/* </QueryClientProvider> */}
    </>
  );
};

export default VideoGRoute;
