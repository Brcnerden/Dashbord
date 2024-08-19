import Icons from '@/Icons'
import React from 'react'

export const TinyBoardLeft = () => {
  return (
    <div className='w-[448px] ml-[56px] mt-[32px]  max-sm:ml-0  max-sm:px-[20px] max-sm:w-[370px] max-sm:my-[64px]'>
        <div className='flex justify-between font-medium text-[14px] text-gray300 leading-[22px]'>
        <div className='w-[236px]' >Last Purchased</div>
        <div className='flex'>
            <div className='flex w-[108px] justify-between items-center'> 
          
            <div className=' mr-2  flex  max-sm:w-[80px]'>When</div>
                
            <div className='mr-[12px]'>
          <Icons.ChevronColor  className="rotate-180 mb-[5px]"/>

          <Icons.ChevronUp className=" fill-gray200  max-sm:mb-0 rotate-180" />
        </div>
            </div>
            
            <div className='w-[118px] max-sm:w-[80px] text-turquois100 flex  justify-end'>Earned</div>

        </div>
        </div>
        <div className='w-auto border-b-[2px] relative  border-white200 my-2'>
        <div className=' w-[102px] absolute border-b-[2px] top-0 left-[223px] border-turquois100 max-sm:left-[196px]'></div>

        </div>
        <div className='flex justify-between text-gray100 font-normal text-[16px] leading-[24px]'>
        <div className='w-[236px]' >Mockups for Figma</div>
        <div className='flex'>
            <div className='w-[108px]   max-sm:w-[80px]'>16 mins</div>
            <div className='w-[118px] text-gray300 flex justify-end max-sm:w-[80px]'>$ 0</div>


        </div>
        </div>
        <div className='w-auto border-b-[2px]  border-white200 my-2'></div>
        <div className='flex justify-between text-gray100 font-normal text-[16px] leading-[24px]'>
        <div className='w-[236px]' >Material Icons Set</div>
        <div className='flex'>
            <div className='w-[108px]  max-sm:w-[80px]'>2 hours</div>
            <div className='w-[118px] font-bold  flex justify-end max-sm:w-[80px]'>$ 14.40</div>


        </div>
        </div>
        <div className='w-auto border-b-[2px]  border-white200 my-2'></div>
        <div className='flex justify-between text-gray100 font-normal text-[16px] leading-[24px]'>
        <div >Material Design System</div>
        <div className='flex'>
            <div className='w-[108px]  max-sm:w-[80px]'>1 day</div>
            <div className='w-[118px] font-bold flex justify-end max-sm:w-[80px]'>$ 68.00</div>


        </div>
        </div>
        <div className='w-auto border-b-[2px]  border-white200 my-2'></div>
        <div className='flex justify-between text-gray100 font-normal text-[16px] leading-[24px]'>
        <div >Material Desktop System</div>
        <div className='flex'>
            <div className='w-[108px]  max-sm:w-[80px]'>1 day</div>
            <div className='w-[118px] font-bold flex justify-end max-sm:w-[80px]'>$ 128.50</div>


        </div>
        </div>
        <div className='w-auto border-b-[2px]  border-white200 my-2'></div>
        <div className='flex justify-between  text-gray100 font-normal text-[16px] leading-[24px]  '>
        <div  >iOS toolkit for Figma</div>
        <div className='flex'>
            <div className='w-[108px]  max-sm:w-[80px]'>2 days</div>
            <div className='w-[118px] font-bold flex justify-end max-sm:w-[80px]'>12 210</div>


        </div>
        </div>



       
    </div>
  )
}
