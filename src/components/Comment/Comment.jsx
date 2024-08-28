import React from "react";

export default function Comment() {
  return (
    <div className="bg-[#EDEBEB] w-[648px] mt-[10px] rounded-lg">
      <div className="flex ">
        <div className="h-[40px] w-[40px] bg-[#D9D9D9] ml-[14px] mt-[10px] rounded-full"></div>
        <button className="h-[40px] w-[568px] bg-[#D9D9D9] ml-[12px] mt-[10px] rounded-lg" />
      </div>
      <div className="flex ">
        <div className="h-[40px] w-[40px] bg-[#D9D9D9] ml-[14px] mt-[10px] rounded-full"></div>
        <button className="h-[80px] w-[568px] bg-[#D9D9D9] ml-[12px] mt-[10px] rounded-lg" />
      </div>
    </div>
  );
}
