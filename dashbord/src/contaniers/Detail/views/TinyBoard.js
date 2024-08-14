import Icons from "@/Icons";
import React from "react";

export const TinyBoard = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[180px] mt-[32px] font-[Roboto]">
          <div className=" font-medium text-[14px] text-gray300 leading-[22px]">
            <div>Type of Action</div>
            <div className=" border-b-[2px]  border-white200 my-2"></div>
            <div className=" text-gray100 font-normal text-[16px] leading-[24px]">
              Videos Played
            </div>
            <div className=" border-b-[2px]  border-white200 my-2"></div>
            <div className=" text-gray100 font-normal text-[16px] leading-[24px]">
              Finished Watches
            </div>
            <div className=" border-b-[2px]  border-white200 my-2"></div>
            <div className=" text-gray100 font-normal text-[16px] leading-[24px]">
              Comments Posted
            </div>
            <div className=" border-b-[2px]  border-white200 my-2"></div>
            <div className=" text-gray100 font-normal text-[16px] leading-[24px]">
              Likes Gained
            </div>
            <div className=" border-b-[2px]  border-white200 my-2"></div>
            <div className=" text-black opacity-85 font-bold text-[16px] leading-[24px]">
              Total
            </div>
          </div>
        </div>
        <div className=" w-[102px] ml-[40px] mt-[32px] font-[Roboto]">
          <div className="flex justify-center items-center">
            <div className=" mr-2  flex justify-end font-normal text-[14px] text-gray300">
              When
            </div>

            <div>
              <Icons.ChevronColor className="rotate-180 w-[9px] h-[6px]" />
              <Icons.ChevronUp className="mt-[5px] w-[9px] h-[6px] fill-gray200 max-sm:mb-0 rotate-180" />
            </div>
          </div>
          <div className=" border-b-[2px]  border-turquois100 my-2"></div>

          <div className=" text-black opacity-85 font-normal  text-[16px] leading-[24px]">
            16 mins
          </div>
          <div className=" border-b-[2px]  border-white200 my-2"></div>
          <div className=" text-black opacity-85 font-normal  text-[16px] leading-[24px]">
          2 hours
          </div>
          <div className=" border-b-[2px]  border-white200 my-2"></div>
          <div className=" text-black opacity-85 font-normal  text-[16px] leading-[24px]">
          1 day
          </div>
          <div className=" border-b-[2px]  border-white200 my-2"></div>
          <div className=" text-black opacity-85 font-normal  text-[16px] leading-[24px]">
          1 day
          </div>
          <div className=" border-b-[2px]  border-white200 my-2"></div>
          <div className=" text-black opacity-85 font-normal  text-[16px] leading-[24px]">
          2 day
          </div>
        </div>
      </div>
    </>
  );
};

<div className="  max-sm:ml-0  max-sm:px-[20px] max-sm:w-[370px] max-sm:my-[64px]">
  <div className="flex justify-between  font-medium text-[14px] text-gray300 leading-[22px]">
    <div className="flex"></div>
  </div>
  <div className="w-auto border-b-[2px] relative  border-white200 my-2">
    <div className=" w-[50px] absolute border-b-[1px] top-0 left-[247px] border-turquois100 max-sm:left-[196px]"></div>
  </div>
  <div className="flex justify-between text-gray100 font-normal text-[16px] leading-[24px]">
    <div className="w-[180px]">Videos Played</div>
    <div className="flex">
      <div className="w-[118px]  flex justify-end max-sm:w-[80px]">16 mins</div>
    </div>
  </div>
  <div className="w-auto border-b-[2px]  border-white200 my-2"></div>
  <div className="flex justify-between text-gray100 font-normal text-[16px] leading-[24px]">
    <div className="w-[180px]">Material Icons Set</div>
    <div className="flex">
      <div className="w-[118px] flex justify-end max-sm:w-[80px]">2 hours</div>
    </div>
  </div>
  <div className="w-auto border-b-[2px]  border-white200 my-2"></div>
  <div className="flex justify-between text-gray100 font-normal text-[16px] leading-[24px]">
    <div>Material Design System</div>
    <div className="flex">
      <div className="w-[118px] flex justify-end max-sm:w-[80px]">1 day</div>
    </div>
  </div>
  <div className="w-auto border-b-[2px]  border-white200 my-2"></div>
  <div className="flex justify-between text-gray100 font-normal text-[16px] leading-[24px]">
    <div>Material Desktop System</div>
    <div className="flex">
      <div className="w-[118px] flex justify-end max-sm:w-[80px]">1 day</div>
    </div>
  </div>
  <div className="w-auto border-b-[2px]  border-white200 my-2"></div>
  <div className="flex justify-between  text-gray100 font-normal text-[16px] leading-[24px]  ">
    <div>iOS toolkit for Figma</div>
    <div className="flex">
      <div className="w-[118px] flex justify-end max-sm:w-[80px]">2 days</div>
    </div>
  </div>
</div>;
