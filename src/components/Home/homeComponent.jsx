import React from "react";
import Comment from "../Comment/Comment";
import Post from "../Post";
import PostStatus from "../PostUpdate/index";

export default function homeComponent() {
  return (
    <div className="container m-auto">
      <div className="flex justify-center items-center	">
        <div>
          <h1>helllllo</h1>
        </div>
        <div>
          <PostStatus />
          <Post />
          <Comment />
          <div className="w-full h-[10px] bg-black"></div>
        </div>
        <div className="justify-items-end">
          <h1>hellloooo</h1>
        </div>
      </div>
    </div>
  );
}
