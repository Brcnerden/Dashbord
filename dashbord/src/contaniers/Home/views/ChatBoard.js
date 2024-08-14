import Icons from "@/Icons";
import React from "react";

export const ChatBoard = () => {
  return (
    <div className="ml-[148px] mt-[44px] max-sm:hidden">
      <div className="flex font-[Quicksand] font-medium text-[16px] leading-6 text-gray300">
        <div>
          <Icons.ChevronUp className="mb-[9px]" />
          <Icons.ChevronColor />
        </div>
        <div className="flex w-full justify-between">
          <div className="ml-[8px] w-[320px] ">Campaigns</div>
          <div className="flex">
            <div className="w-[118px] flex justify-end">Efficiency</div>
            <div className="w-[118px] flex justify-end">Plays</div>
            <div className="w-[118px] flex justify-end">Finished</div>
            <div className="w-[118px] flex justify-end">Likes</div>
            <div className="w-[118px] flex justify-end">Comments</div>
          </div>
        </div>
      </div>
      <div className="w-auto border-b-[2px] mt-[12px] border-white200"></div>
      <div className="flex w-full justify-between">
        <div className="font-[Roboto] py-3 font-medium text-[20px] w-[330px] leading-7">
          Instagram stories marketing
          <div className="font-[Roboto] font-normal ml-[14px] text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-turquois100">Draft</span> · Customize · Edit ·
            Referrers
          </div>
        </div>

        <div className="flex font-[Roboto] mt-[12px] font-medium text-[20px] items-center leading-7 text-gray100">
          <div className="w-[118px] flex justify-end ">186</div>
          <div className="w-[118px] flex justify-end">186</div>
          <div className="w-[118px] flex justify-end ">92</div>
          <div className="w-[118px] flex justify-end">8</div>
          <div className="w-[118px] flex justify-end ">1</div>
        </div>
      </div>

      <div className="w-auto border-b-[2px] mt-[12px] border-white200"></div>
      <div className="flex w-full justify-between">
        <div className="font-[Roboto] py-3 font-medium text-[20px] w-[330px] leading-7">
          Social Networks traffic
          <div className="font-[Roboto] font-normal ml-[14px] text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-yellow100">Paused</span>· Customize · Settings
          </div>
        </div>

        <div className="flex font-[Roboto] mt-[12px] font-medium text-[20px] items-center leading-7 text-gray100">
          <div className="w-[118px] flex justify-end text-red100 ">95</div>
          <div className="w-[118px] flex justify-end">95</div>
          <div className="w-[118px] flex justify-end ">31</div>
          <div className="w-[118px] flex justify-end">11</div>
          <div className="w-[118px] flex justify-end ">0</div>
        </div>
      </div>

      <div className="w-auto border-b-[2px] mt-[12px] border-white200"></div>
      <div className="flex w-full justify-between bg-white100 rounded-2xl ">
        <div className="font-[Roboto] py-3 font-medium text-[20px]  w-[330px] leading-7">
          Visitors from video sources
          <div className="font-[Roboto] font-normal ml-[14px] text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-blue100">Active</span>· Customize · Settings
          </div>
        </div>

        <div className="flex font-[Roboto] mt-[12px] font-medium text-[20px] items-center leading-7 text-gray100">
          <div className="w-[118px] flex justify-end  ">329</div>
          <div className="w-[118px] flex justify-end">329</div>
          <div className="w-[118px] flex justify-end ">256</div>
          <div className="w-[118px] flex justify-end">32</div>
          <div className="w-[118px] flex justify-end ">4</div>
        </div>
      </div>
      <div className="w-auto border-b-[2px] mt-[12px] border-white200"></div>
      <div className="flex w-full justify-between">
        <div className="font-[Roboto] py-3 font-medium text-[20px] w-[330px] leading-7">
        Other Referrers
          <div className="font-[Roboto] font-normal ml-[14px] text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-blue100">Active</span>· Customize · Settings
            
          </div>
        </div>

        <div className="flex font-[Roboto] mt-[12px] font-medium text-[20px] items-center leading-7 text-gray100">
          <div className="w-[118px] flex justify-end text-green100 ">804</div>
          <div className="w-[118px] flex justify-end">804</div>
          <div className="w-[118px] flex justify-end ">697</div>
          <div className="w-[118px] flex justify-end">40</div>
          <div className="w-[118px] flex justify-end ">22</div>
        </div>
      </div>

    </div>
  );
};
