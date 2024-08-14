import { Box } from '@/components/Box'
import Icons from '@/Icons'
import React from 'react'
import { TinyBoard } from './TinyBoard'

export const MainSide = () => {
  return (
    <div>
         <div className='flex items-center max-sm:hidden'>
        <div className='flex w-[72px] h-[40px] border-[1px] px-[4px] rounded-lg border-gray200 items-center justify-between'>
            <Icons.Grid/>
            <div className='font-normal font-[Quicksand] text-[20px] leading-7 text-gray100'>13</div>
        </div>
        <div className='font-[Roboto] flex items-center'>
        <Icons.Chevron/>
        <div className='text-gray200 font-normal text-[16px] leading-6'>My workspace</div>
        </div>
        <div className='font-[Roboto]  flex items-center'>
        <Icons.Chevron className="fill-gray300"/>
        <div className=' text-gray300 font-normal text-[16px] leading-6'>Drafts</div>
        </div>
        <div className='font-[Roboto]  flex items-center'>
        <Icons.Chevron className="fill-black opacity-85"/>
        <div className=' text-black font-normal text-[16px] opacity-85 leading-6'>Analytika_dashboard_kit</div>
        </div>
        
        </div>
        <div className='flex items-center my-[40px] max-sm:hidden '>
            <div className='font-normal text-[16px] leading-6 border-t-[1px] mr-[20px] p-[16px] border-l-[1px] border-r-[1px]  rounded-[4px] text-black opacity-85'>Analyze</div>
            <div className='font-normal text-[16px] leading-6 mr-[20px] text-gray100'>My campaigns</div>
            <div className='font-normal text-[16px] leading-6  mr-[20px] text-gray100'>Configure</div>
            <div className='font-normal text-[16px] leading-6  mr-[20px] text-gray100'>Customize</div>
            <div className='font-normal text-[16px] leading-6 mr-[20px] text-gray100'>Research</div>
            <div className='font-normal text-[16px] leading-6  mr-[20px] text-gray100'>Inspect</div>
        </div>
        <Box title="Played" color="red" count="1,254" />

        <div className="flex font-[Quicksand] font-medium text-[16px] mt-[40px] leading-6 text-gray300">
        <div>
          <Icons.ChevronUp className="mb-[9px] fill-gray200" />
          <Icons.ChevronColor />
        </div>
        <div className="flex ">
          <div className="ml-[8px] w-[320px] ">Campaigns</div>
          <div className="flex">
            <div className="w-[118px] flex justify-end">Efficiency</div>
          </div>
        </div>
      </div>
      <div className="w-auto border-b-[2px] mt-[12px] border-white200"></div>
      <div className="flex w-full justify-between">
        <div className="font-[Roboto] py-3 font-medium text-[20px] w-[330px] leading-7">
          Instagram stories marketing
          <div className="font-[Roboto] font-normal  text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-turquois100">Draft</span> · Customize · Edit ·
            Referrers
          </div>
        </div>

        <div className="flex font-[Roboto] w-[330px] mt-[12px] font-medium text-[20px] items-center leading-7 text-gray100">
          <div className="w-[118px] flex justify-end ">186</div>
        </div>
      </div>
      <div className="w-auto border-b-[2px] mt-[12px] border-white200"></div>
      <div className="flex w-full justify-between">
        <div className="font-[Roboto] py-3 font-medium text-[20px] w-[330px] leading-7">
          Social Networks traffic
          <div className="font-[Roboto] font-normal  text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-yellow100">Paused</span>· Customize · Settings
          </div>
        </div>

        <div className="flex w-[330px] font-[Roboto] mt-[12px] font-medium text-[20px] items-center leading-7 text-gray100">
          <div className="w-[118px] flex justify-end text-red100 ">95</div>
        </div>
      </div>
      <div className="w-auto border-b-[2px] mt-[12px] border-white200"></div>
     
      <div className="flex w-full justify-between">
        <div className="font-[Roboto] py-3 font-medium text-[20px] w-[330px] leading-7">
        Visitors from video sources
          
        <div className="font-[Roboto] font-normal  text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-blue100">Active</span>· Customize · Settings
          </div>
        </div>

        <div className="flex w-[330px] font-[Roboto] mt-[12px] font-medium text-[20px] items-center leading-7 text-gray100">
          <div className="w-[118px] flex justify-end">329</div>
        </div>
      </div>
      <div className="w-auto border-b-[2px] mt-[12px] border-white200"></div>

       
      <div className="flex w-full justify-between">
        <div className="font-[Roboto] py-3 font-medium text-[20px] w-[330px] leading-7">
        Other Referrers
        <div className="font-[Roboto] font-normal  text-[14px] leading-[20px] text-black opacity-85">
            <span className="text-blue100">Active</span>· Customize · Settings
          </div>
        </div>

        <div className="flex w-[330px] font-[Roboto] mt-[12px] font-medium text-[20px] items-center leading-7 text-gray100">
          <div className="w-[118px]  font-medium flex justify-end text-green100">804</div>
        </div>
      </div>
      <TinyBoard/>

    </div>
  )
}
