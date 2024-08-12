import Icons from '@/Icons'
import Image from 'next/image'
import React from 'react'

export const Top = () => {
  return (
    <div className='h-[64px] mt-[10px] flex items-center justify-between'>
       
        <Image src="/Images/Logo.png" width={152} height={40} alt="logo"/>
        <div className='flex items-center'>
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
        <div className='flex'>
        <button className='flex items-center bg-white100 rounded-[4px] py-[9px] px-[8px] '>
            <div className='text-gray100 mr-[10px]'>Help</div>
            <div className='w-[25px] h-[25px] text-white rounded-full flex items-center justify-center bg-gray200'>?</div>
        </button>
        <button className='font-medium text-[14px] leading-4 py-[9px] px-[8px]  shadow-custom  mx-[16px] rounded-[4px] text-blue100'>
        UPGRADE
        </button>
        <Image src="/Images/FernandoPidrilio.png" alt='profile' width={40} height={40} className='h-[40px]'/>
        </div>
       

       

    </div>
  )
}
