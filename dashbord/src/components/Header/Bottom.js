import Icons from '@/Icons'
import React from 'react'

export const Bottom = () => {
  return (
    <>
    <div className='flex items-center py-[18px] font-[Roboto]  justify-between h-[56px]'>
        <div className='flex items-center'>
        <Icons.LeftArrow/>
        <div className='font-normal text-[16px] mr-[8px] text-gray300'>Back to previous</div>
        </div>
        <div className='flex items-center'>
            <div className='font-normal text-[16px] leading-6 border-t-[1px] mr-[20px] p-[16px] border-l-[1px] border-r-[1px]  rounded-[4px] text-black opacity-85'>Analyze</div>
            <div className='font-normal text-[16px] leading-6 mr-[20px] text-gray100'>My campaigns</div>
            <div className='font-normal text-[16px] leading-6  mr-[20px] text-gray100'>Configure</div>
            <div className='font-normal text-[16px] leading-6  mr-[20px] text-gray100'>Customize</div>
            <div className='font-normal text-[16px] leading-6 mr-[20px] text-gray100'>Research</div>
            <div className='font-normal text-[16px] leading-6  mr-[20px] text-gray100'>Inspect</div>

        </div>
        <div className='flex border-[1px] items-center px-[12px] justify-center py-[3px] rounded-[10px] border-gray200'>
        <div className=' font-normal text-[14px] leading-[20px]  text-black opacity-85'>
        Aug 21, 2016 · Sep 21 2016

        </div>
        <Icons.DropDown/>
        </div>
       
   

    </div>
    <div className='w-auto border-b-[1px]'></div>
    </>
  )
}
