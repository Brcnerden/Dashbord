import { Box } from '@/components/Box'
import Icons from '@/Icons'
import React from 'react'
import { ChatBoard } from './ChatBoard'
import { TinyBoardRight } from './TinyBoardRight'
import { TinyBoardLeft } from './TinyBoardLeft'

export const MainSide = () => {
  return (
    <div className='max-w-[1180px] w-full m-auto  max-lg:m-[12px]  mt-[40px] max-sm:px-[20px] max-sm:mt-[16px]'>
        
        <div className='flex w-[920px] justify-between items-center ml-[148px] max-lg:ml-0'>
        <h1 className='font-Quicksand text-[34px] leading-[42px] text-black opacity-85 max-sm:text-[24px] max-sm:font-bold'>Dashboard</h1>
        <div className='flex max-lg:hidden'>
        <div className='flex bg-white100 items-center rounded-[4px] h-[32px] px-[19px]'>
        <div className=' font-medium mr-[12px] text-[14px] leading-[22px] text-gray100'>Past month</div>
        <Icons.ChevronDown/>

        </div> 
        <div className='bg-white100 flex items-center rounded-[4px] justify-center ml-[12px] w-[32px] h-[32px]'>
            <Icons.Printer/>
        </div>
        <div className='bg-white100 flex items-center rounded-[4px] justify-center ml-[12px] w-[32px] h-[32px]'>
            <Icons.Download/>
        </div>
        </div>
        

        </div>
        <div className=' ml-[148px] flex  mt-[24px] flex-wrap max-lg:ml-0 max-sm:justify-center max-sm:my-[32px]'>
            <Box title="Played" color="red" count="1,254" />
            <Box title="Finished" color="blue" count="809" />
            <Box title="Likes" color="green" count="114" />
            <Box title="Comments" color="yellow" count="27" />

        </div>
        <ChatBoard/>
        <div className='flex  max-sm:items-center  mb-[20px] max-sm:flex-col'>
        <TinyBoardRight/>
        <TinyBoardLeft/>


        </div>
    </div>
  )
}
 