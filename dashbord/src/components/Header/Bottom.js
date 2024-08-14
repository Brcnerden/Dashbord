import Icons from '@/Icons'
import React from 'react'

export const Bottom = () => {
  return (
    <>
    <div className='flex items-center py-[18px]  font-[Roboto] max-sm:h-0  justify-between h-[56px] max-sm:px-[20px]'>
        <div className='flex items-center  max-sm:px-[20px]'>
        <Icons.LeftArrow/>
        <div className='font-normal text-[16px] font-[Roboto] mr-[8px] ml-[15px] text-gray300'>Back to previous</div>
        </div>
        <div className='flex items-center max-sm:hidden '>
            <div className='font-normal text-[16px] leading-6 border-t-[1px] mr-[20px] p-[16px] border-l-[1px] border-r-[1px]  rounded-[4px] text-black opacity-85'>Analyze</div>
            <div className='font-normal text-[16px] leading-6 mr-[20px] text-gray100'>My campaigns</div>
            <div className='font-normal text-[16px] leading-6  mr-[20px] text-gray100'>Configure</div>
            <div className='font-normal text-[16px] leading-6  mr-[20px] text-gray100'>Customize</div>
            <div className='font-normal text-[16px] leading-6 mr-[20px] text-gray100'>Research</div>
            <div className='font-normal text-[16px] leading-6  mr-[20px] text-gray100'>Inspect</div>

        </div>
        <div className='flex border-[1px] items-center px-[12px] justify-center py-[3px] rounded-[10px] border-gray200 max-sm:hidden '>
        <div className=' font-normal text-[14px] leading-[20px]  text-black opacity-85 max-sm:hidden '>
        Aug 21, 2016 · Sep 21 2016

        </div>
        <Icons.DropDown/>
        </div>
       
   

    </div>
    <div className='w-auto border-b-[1px] max-sm:hidden'></div>
    </>
  )
}
