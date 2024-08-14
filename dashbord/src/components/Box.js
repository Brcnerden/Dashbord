import React from 'react'

export const Box = ({title,count,color}) => {
    const textColorClass = {
        red: 'text-red100',
        blue: 'text-blue100',
        yellow: 'text-yellow100',
        green:"text-green100"
      }[color];


  return (
    <div className='w-[212px] h-[136px] mr-[24px] p-[16px] bg-white100 rounded-[16px] max-sm:w-[80px] max-sm:h-[72px]  max-sm:mr-[4px] max-sm:mt-2 max-sm:p-[8px] '>
        <div className='font-[Quicksand] font-medium text-[20px] leading-7 text-black opacity-85 max-sm:text-[16px] '>{title}</div>
        <div className={`font-[Roboto] font-medium text-[48px]  mt-[16px] max-sm:text-[16px] max-sm:mt-[4px]  ${textColorClass}`}>{count}</div>

    </div>
  )
}
