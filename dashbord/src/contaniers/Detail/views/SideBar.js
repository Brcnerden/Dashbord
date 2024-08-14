import Image from 'next/image'
import React from 'react'
import Icons from '@/Icons'


export const SideBar = () => {
  return (
    <div className='w-[260px] ml-[40px] mr-[80px]'>
        <Image src="/Images/Logo2.png" alt='logo' width={202} height={40} className='w-[202px] h-[70px]'/>
        <div className='flex items-center my-[40px]'>
        <Icons.LeftArrow/>
        <div className='font-normal text-[16px] font-[Roboto] mr-[8px] ml-[15px] text-gray300'>Back to previous</div>
        </div>
        <button className='flex items-center  py-[12px] px-[50px] rounded-[99px] shadow-custom'>
        <span className='bg-blue100 w-[16px] font-[Quicksand]  h-[16px] mr-[8px] text-white rounded-full flex items-center justify-center'>+</span>
        <span className='font-[Quicksand] font-medium text-[20px] leading-7 text-blue100'>Create new</span>
        </button>
        <div className='flex font-[Roboto] my-[40px]'>
        <button className='flex items-center bg-white100 rounded-[4px] py-[9px] px-[15px] '>
            <div className='text-gray100 mr-[10px]'>Help</div>
            <div className='w-[25px] h-[25px] text-white rounded-full flex items-center justify-center bg-gray200'>?</div>
        </button>
        <button className='font-medium text-[14px] leading-4 py-[9px] px-[15px]  shadow-custom  mx-[16px] rounded-[4px] text-blue100'>
        UPGRADE
        </button>
        </div>
        <div className='flex border-[1px] items-center w-[232px] justify-center py-[3px] rounded-[10px] border-gray200  '>
        <div className=' font-normal text-[14px] leading-[20px]  text-black opacity-85  '>
        Aug 21, 2016 · Sep 21 2016

        </div>
        <Icons.DropDown/>
        </div>
        <div className=' my-[40px] flex'>
            <button className='font-[Roboto] font-medium rounded-[4px] text-[10px] leading-4 mr-[20px] px-[24px] py-[9px] bg-gradient-button text-gray100'>status</button>
            <button className='font-[Roboto] font-medium rounded-[4px] text-[10px] leading-4 mr-[7px] px-[24px] py-[9px] bg-white100 text-gray100'>privacy</button>
        </div>
        <div className='flex items-center px-[12px] '>
            <Icons.Setting/>
            <div className='font-[Roboto] font-normal text-[14px] leading-[20px] text-black opacity-85'>Settings</div>
            </div>
            <div className='w-auto border-[1px] border-white300' ></div>
            <div className='flex items-center my-[40px] '>
            <Icons.Navigation/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px] leading-8 text-black opacity-85'>Metrics</div>

                <div className='font-[Roboto] text-gray100 text-[12px] font-normal left-4'>Track your apps across devices</div>
            </div>
            </div>
            <div className='flex items-center bg-blue200 px-[12px] py-[7px] '>
            <Icons.Report/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px] leading-8 text-black opacity-85'>Reports</div>

                <div className='font-[Roboto] text-gray100  text-[12px] font-normal left-4'>Get insights into the big data</div>
            </div>
            </div>
    </div>
  )
}
