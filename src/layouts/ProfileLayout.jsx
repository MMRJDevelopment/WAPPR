import React from "react";
import Comment from "../components/Comment/Comment";
import Post from "../components/Post";
import PostStatus from "../components/PostUpdate";
import Profileinfo from "../components/Profile/Profileinfo";
import Profileimg from "../components/Profile/cover&profileimg";
import ProfileOptions from "../components/ProfileOptions/ProfileOptions";
import Topbar from "../components/Topbar";

export default function ProfileLayout() {
  return (
    <div>
      <Topbar />
      <div className="container mx-auto">
        <Profileimg />
        <Profileinfo />
      </div>
      <div className="bg-black w-full h-[2px] mt-[12px]"></div>
      <div className="container mx-auto">
        <ProfileOptions />
        <PostStatus />
        <Post />
        <Comment />
      </div>
    </div>
  );
}
