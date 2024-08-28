import React from "react";

export default function Profileinfo() {
  return (
    <div className="">
      <div className="flex">
        <h1 className="font-mon font-bold text-[48px]">Md Mahi Romjan</h1>
        <p className="mt-[20px] ml-[10px] font-mon text-[24px] font-reguler">
          (happy man)
        </p>
      </div>
      <div className="flex  gap-4 font-mon text-[24px] font-reguler ">
        <p>@md_mahiromjan</p>
        <p> 1K followers </p>
        <p>50 following</p>
      </div>
      <div className="flex  gap-4 font-mon text-[24px] font-reguler mt-[15px]">
        <p>Graphic Designer</p>
        <p>Bangladesh Dhaka</p>
        <p>Joined December 2021</p>
      </div>
    </div>
  );
}
