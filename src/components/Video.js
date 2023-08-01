import React from "react";

function Video ({ video, handleUpvote, handleDownvote }) {
    return ( 
        <div>
            <iframe width="919"
            height="515"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="video.title"
        />
            <h2>{video.title}</h2>
            <p>{`Views: ${video.views} | Created At: ${video.createdAt}`}</p>
      <p>{`Upvotes: ${video.upvotes} | Downvotes: ${video.downvotes}`}</p>
      <button onClick={handleUpvote}>👍</button>
      <button onClick={handleDownvote}>👎</button>
    </div>
    );
}

export default Video;