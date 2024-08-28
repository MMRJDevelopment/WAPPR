import { useState } from "react";
import image from "./../../assets/Group (1).png";
import Ask from "./../../assets/Vector (4).png";
import Event from "./../../assets//Vector (5).png";

export default function PostStatus() {
  return (
    <div>
      <div className="bg-[#EDEBEB] w-[648px] h-[95px] mt-[10px] rounded-lg">
        <div className="flex ">
          <div className="h-[40px] w-[40px] bg-[#D9D9D9] ml-[14px] mt-[10px] rounded-full"></div>
          <button className="h-[40px] w-[568px] bg-[#D9D9D9] ml-[12px] mt-[10px] rounded-lg" />
        </div>
        <div className="flex justify-center items-center gap-[122px] align-middle mt-[8px]">
          <div className="flex">
            <img src={image} alt="" />
            <p className="font-mon font-normal text-[#03014C] text-[20px] ml-[7px] ">
              Photo/Video
            </p>
          </div>
          <div className="flex ">
            <img src={Ask} alt="" />
            <p className="ml-[7px] font-mon font-normal text-[#03014C] text-[20px]">
              Ask
            </p>
          </div>
          <div className="flex">
            <img src={Event} alt="" />
            <p className="ml-[7px] font-mon font-normal text-[#03014C] text-[20px]">
              Event
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
