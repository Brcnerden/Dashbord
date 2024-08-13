import React from 'react'

export const Box = ({title,count,color}) => {
    const textColorClass = {
        red: 'text-red100',
        blue: 'text-blue100',
        yellow: 'text-yellow100',
        green:"text-green100"
      }[color];


  return (
    <div className='w-[212px] h-[136px] mr-[24px] p-[16px] bg-white100 rounded-[16px]'>
        <div className='font-[Quicksand] font-medium text-[20px] leading-7 text-black opacity-85'>{title}</div>
        <div className={`font-[Roboto] font-medium text-[48px] leading-[56px] mt-[16px] ${textColorClass}`}>{count}</div>

    </div>
  )
}
