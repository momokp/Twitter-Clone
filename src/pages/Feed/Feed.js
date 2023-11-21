import React from 'react';
import { useEffect, useState } from "react";
import Post from "./Post/Post";
import './Feed.css';
import TweetBox from "./TweetBox/TweetBox";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/post`)
        .then(res => res.json())
        .then(data => {
            setPosts(data);
        })
}, [posts])

  return (
    <div className="feed">
      <div className="feed_header">
         <h2>Home</h2>
      </div>
      <TweetBox />
      {
                posts.map(p => <Post key={p._id} p={p} />)
            }
    </div>
  );
};

export default Feed;