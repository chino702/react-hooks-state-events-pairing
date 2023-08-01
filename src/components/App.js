import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video";
import CommentList from "./CommentList";

function App() {
  const [videoData, setVideoData] = useState(video);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => {
    setVideoData((prevVideoData) => ({
      ...prevVideoData,
      upvotes: prevVideoData.upvotes + 1,
    }));
  };

  const handleDownvote = () => {
    setVideoData((prevVideoData) => ({
      ...prevVideoData,
      downvotes: prevVideoData.downvotes + 1,
    }));
  };

  const toggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

  return (
    <div className="App">
      <Video
        video={videoData}
        handleUpvote={handleUpvote}
        handleDownvote={handleDownvote}
      />
      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <CommentList comments={videoData.comments} />}
    </div>
  );
}

export default App;