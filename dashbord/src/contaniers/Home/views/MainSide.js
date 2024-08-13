import { Box } from '@/components/Box'
import Icons from '@/Icons'
import React from 'react'
import { ChatBoard } from './ChatBoard'
import { TinyBoard, TinyBoardRight } from './TinyBoardRight'
import { TinyBoardLeft } from './TinyBoardLeft'

export const MainSide = () => {
  return (
    <div className='max-w-[1180px] w-full m-auto   mt-[40px]'>
        
        <div className='flex justify-between ml-[176px]'>
        <h1 className='font-[Quicksand] text-[34px] leading-[42px] text-black opacity-85'>Dashboard</h1>
        <div className='flex'>
        <div className='flex bg-white100 items-center rounded-[4px] h-[32px] px-[13px]'>
        <div className='font-[Roboto] font-medium mr-[12px] text-[14px] leading-[22px] text-gray100'>Past month</div>
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
        <div className=' ml-[176px] flex  mt-[24px]'>
            <Box title="Played" color="red" count="1,254" />
            <Box title="Finished" color="blue" count="809" />
            <Box title="Likes" color="green" count="114" />
            <Box title="Comments" color="yellow" count="27" />

        </div>
        <ChatBoard/>
        <div className='flex mt-[20px]'>
        <TinyBoardRight/>
        <TinyBoardLeft/>


        </div>
    </div>
  )
}
 