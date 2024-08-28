import React from "react";
import love from "./../../assets/love-icon.png";
import comment from "./../../assets/comment.png";
import repost from "./../../assets/repost.png";

export default function Post() {
  return (
    <div>
      <div className="bg-[#EDEBEB] w-[648px] mt-[10px] rounded-lg">
        <div className="py-[15px] px-[15px]">
          <div className=" flex">
            <img
              className="h-[40px] w-[40px] bg-black rounded-full"
              src=""
              alt=""
            />
            <div className="mt-[-05px] ml-[10px]">
              <h1>mdmahiromjan</h1>
              <p className="mt-[-5px]">time</p>
            </div>
          </div>
          <div>
            <h1 className="w-[545px] ">
              NEXT.JS ফুলস্ট্যাক ওয়েব ডেভেলপার রোডম্যাপ |কোথায় থেকে শুরু করবেন,
              কি কি শিখবেন
            </h1>
          </div>
          <div className="h-[320px] bg-slate-500 mt-[10px]">
            <img src="" alt="" />
          </div>
          <div className="pt-[15px] flex justify-center items-center gap-[246px]">
            <div>
              <img src={love} alt="" />
            </div>
            <div>
              <img src={comment} alt="" />
            </div>
            <div>
              <img src={repost} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
