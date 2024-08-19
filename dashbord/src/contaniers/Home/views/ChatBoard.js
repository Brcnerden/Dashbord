import Icons from "@/Icons";
import React from "react";

export const ChatBoard = () => {
  return (
    <div className="ml-[148px] max-w-[920px] w-full  mt-[44px] max-lg:ml-0 max-sm:hidden">
      <div className="flex font-Quicksand font-medium text-[16px] leading-6 text-gray300">
        <div>
          <Icons.ChevronUp className="mb-[4px] fill-gray200" />
          <Icons.ChevronColor />
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="ml-[8px] mb-[12px] w-[320px] max-lg:w:[220px] ">Campaigns</div>
          <div className="flex">
            <div className="w-[118px] mb-[12px] flex justify-end">Efficiency</div>
            <div className="w-[118px] mb-[12px] flex justify-end">Plays</div>
            <div className="w-[118px] mb-[12px] flex justify-end">Finished</div>
            <div className="w-[118px] mb-[12px] flex justify-end">Likes</div>
            <div className="w-[118px] mb-[12px] flex justify-end">Comments</div>
          </div>
        </div>
      </div>
      <div className="w-auto border-b  border-white200"></div>
      <div className="flex w-full h-[64px]  justify-between items-center">
        <div className=" font-medium text-[20px] max-lg:text-[16px] w-[330px] leading-7">
          Instagram stories marketing
          <div className="font-normal ml-[14px] text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-turquois100 ml-[-14px]">Draft</span> · Customize · Edit ·
            Referrers
          </div>
        </div>

        <div className="flex  font-medium text-[20px]  max-lg:text-[16px] items-center h-[64px]  leading-7 text-gray100">
          <div className="w-[118px]  flex justify-end ">186</div>
          <div className="w-[118px]  flex justify-end">186</div>
          <div className="w-[118px]  flex justify-end ">92</div>
          <div className="w-[118px]  flex justify-end">8</div>
          <div className="w-[118px]  flex justify-end ">1</div>
        </div>
      </div>

      <div className="w-auto  border-b   border-white200"></div>
      <div className="flex w-full h-[64px] justify-between  items-center">
        <div className="  font-medium text-[20px]  max-lg:text-[16px] w-[330px] leading-7">
          Social Networks traffic
          <div className=" font-normal ml-[14px] text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-yellow100 ml-[-14px]">Paused</span>· Customize · Settings
          </div>
        </div>

        <div className="flex font-medium text-[20px]  max-lg:text-[16px] items-center leading-7 text-gray100">
          <div className="w-[118px] flex justify-end text-red100 ">95</div>
          <div className="w-[118px] flex justify-end">95</div>
          <div className="w-[118px] flex justify-end ">31</div>
          <div className="w-[118px] flex justify-end">11</div>
          <div className="w-[118px] flex justify-end ">0</div>
        </div>
      </div>

      <div className="flex w-[952px] max-lg:w-auto justify-around  ml-[-16px] border  border-white200  pl-[16px]  h-[64px] items-center bg-white100 rounded-2xl ">
        <div className=" font-medium text-[20px]  max-lg:text-[16px]  w-[330px] leading-7">
          Visitors from video sources
          <div className=" font-normal ml-[14px] text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-blue100 ml-[-14px]">Active</span>· Customize · Settings
          </div>
        </div>

        <div className="flex  font-medium text-[20px]  max-lg:text-[16px] max-lg:mr-0 mr-[16px] items-center leading-7 text-gray100">
          <div className="w-[118px] flex justify-end  ">329</div>
          <div className="w-[118px] flex justify-end">329</div>
          <div className="w-[118px] flex justify-end ">256</div>
          <div className="w-[118px] flex justify-end">32</div>
          <div className="w-[118px] flex justify-end ">4</div>
        </div>
      </div>
      <div className="flex w-full  h-[64px] items-center justify-between">
        <div className="  font-medium text-[20px]  max-lg:text-[16px] w-[330px] leading-7">
        Other Referrers
          <div className=" font-normal ml-[14px] text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-blue100 ml-[-14px]">Active</span>· Customize · Settings
            
          </div>
        </div>

        <div className="flex  font-medium text-[20px]  max-lg:text-[16px] items-center leading-7 text-gray100">
          <div className="w-[118px] roboto-medium flex justify-end text-green100 ">804</div>
          <div className="w-[118px] flex justify-end">804</div>
          <div className="w-[118px] flex justify-end ">697</div>
          <div className="w-[118px] flex justify-end">40</div>
          <div className="w-[118px] flex justify-end ">22</div>
        </div>
      </div>

    </div>
  );
};
