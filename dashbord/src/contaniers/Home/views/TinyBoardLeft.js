import Icons from '@/Icons'
import React from 'react'

export const TinyBoardLeft = () => {
  return (
    <div className='w-[416px] ml-[176px] mt-[32px] font-[Roboto]'>
        <div className='flex justify-between font-medium text-[14px] text-gray300 leading-[22px]'>
        <div >Last Purchased</div>
        <div className='flex'>
            <div className='flex items-center'> 
          
            <div className='w-[118px] mr-2  flex justify-end'>When</div>
                
            <div>
          <Icons.ChevronUp className="mb-[5px]" />
          <Icons.ChevronColor />
        </div>
            </div>
            
            <div className='w-[118px]  text-turquois100 flex  justify-end'>Earned</div>

        </div>
        </div>
        <div className='w-auto border-b-[2px] relative  border-white200 my-2'>
        <div className=' w-[50px] absolute border-b-[1px] top-0 left-[225px] border-turquois100'></div>

        </div>
        <div className='flex justify-between text-gray100 font-normal text-[16px] leading-[24px]'>
        <div >Mockups for Figma</div>
        <div className='flex'>
            <div className='w-[118px] flex justify-end'>10</div>
            <div className='w-[118px] flex justify-end'>10</div>


        </div>
        </div>
        <div className='w-auto border-b-[2px]  border-white200 my-2'></div>
        <div className='flex justify-between text-gray100 font-normal text-[16px] leading-[24px]'>
        <div >Material Icons Set</div>
        <div className='flex'>
            <div className='w-[118px] flex justify-end'>1 000</div>
            <div className='w-[118px] flex justify-end'>1 000</div>


        </div>
        </div>
        <div className='w-auto border-b-[2px]  border-white200 my-2'></div>
        <div className='flex justify-between text-gray100 font-normal text-[16px] leading-[24px]'>
        <div >Material Design System</div>
        <div className='flex'>
            <div className='w-[118px] flex justify-end'>100</div>
            <div className='w-[118px] flex justify-end'>100</div>


        </div>
        </div>
        <div className='w-auto border-b-[2px]  border-white200 my-2'></div>
        <div className='flex justify-between text-gray100 font-normal text-[16px] leading-[24px]'>
        <div >Material Desktop System</div>
        <div className='flex'>
            <div className='w-[118px] flex justify-end'>1 000</div>
            <div className='w-[118px] flex justify-end'>10 000</div>


        </div>
        </div>
        <div className='w-auto border-b-[2px]  border-white200 my-2'></div>
        <div className='flex justify-between text-black opacity-85 font-bold text-[16px] leading-6  '>
        <div className=' '  >iOS toolkit for Figma</div>
        <div className='flex'>
            <div className='w-[118px] flex justify-end'>2 100</div>
            <div className='w-[118px] flex justify-end'>12 210</div>


        </div>
        </div>



       
    </div>
  )
}
