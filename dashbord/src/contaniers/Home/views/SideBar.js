import Icons from '@/Icons'
import React from 'react'

export const SideBar = () => {
  return (
    <div className='w-[260px] mt-[41px] px-[27px] font-[Quicksand] max-sm:hidden'>
        <button className='flex items-center ml-[15px] py-[12px] px-[30px] rounded-[99px] shadow-custom'>
        <span className='bg-blue100 w-[16px] font-[Quicksand]  h-[16px] mr-[8px] text-white rounded-full flex items-center justify-center'>+</span>
        <span className='font-[Quicksand] font-medium text-[20px] leading-7 text-blue100'>Create new</span>
        </button>
        <div className='mt-[31px] mb-[15px]'>
            <div className='flex items-center '>
            <Icons.Navigation/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px] leading-8 text-black opacity-85'>Metrics</div>

                <div className='font-[Roboto] text-gray100 text-[12px] font-normal left-4'>Track your apps across devices</div>
            </div>
            </div>
          
        </div>
        <div className=' mb-[15px]'>
            <div className='flex items-center '>
            <Icons.Result/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px] leading-8 text-black opacity-85'>Results</div>

                <div className='font-[Roboto] text-gray100 text-[12px] font-normal left-4'>View your results as Excel file</div>
            </div>
            </div>
          
        </div>
        <div className=' mb-[15px]'>
            <div className='flex items-center '>
            <Icons.Chart_bar/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px] leading-8 text-black opacity-85'>Google Analytics</div>

                <div className='font-[Roboto] text-gray100 text-[12px] font-normal left-4'>Track visits to your sites</div>
            </div>
            </div>
          
        </div>
        <div className=' mb-[15px]'>
            <div className='flex items-center '>
            <Icons.Report/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px] leading-8 text-black opacity-85'>Reports</div>

                <div className='font-[Roboto] text-gray100 text-[12px] font-normal left-4'>Get insights into the big data</div>
            </div>
            </div>
          
        </div>
        <div className=' mb-[15px]'>
            <div className='flex items-center '>
            <Icons.Wrench/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px] leading-8 text-black opacity-85'>More Tools</div>

                <div className='font-[Roboto] text-yellow100 text-[12px] font-normal left-4'>Upgrade your plan to PRO</div>
            </div>
            </div>
          
        </div>
        <div>
            <div className='flex items-center mt-[240px]'>
            <Icons.Setting/>
            <div className='font-[Roboto] font-normal text-[14px] leading-[20px] text-black opacity-85'>Settings</div>
            </div>
            <div className='w-auto border-[1px] border-white300' ></div>
            <div className='flex items-center mt-[5px]'>
            <Icons.Replay/>
            <div className='font-[Roboto] font-normal text-[14px] leading-[20px] text-black opacity-85'>Previous Version</div>
            </div>
            <div className='w-auto border-[1px] border-white300' ></div>
            <div className='flex items-center mt-[5px]'>
            <Icons.Inform/>
            <div className='font-[Roboto] font-normal text-[14px] leading-[20px] text-black opacity-85'>What’s new?</div>
            </div>
            <div className='w-auto border-[1px] border-white300' ></div>
            <div className='flex items-center mt-[5px]'>
            <Icons.Outline/>
            <div className='font-[Roboto] font-normal text-[14px] leading-[20px] text-black opacity-85'>Customers Support</div>
            </div>
            <div className='w-auto border-[1px] border-white300' ></div>
        </div>
        <div className='my-[16px] flex'>
            <button className='font-[Roboto] font-medium rounded-[4px] text-[10px] leading-4 mr-[7px] px-[7px] py-[5px] bg-gradient-button text-gray100'>status</button>
            <button className='font-[Roboto] font-medium rounded-[4px] text-[10px] leading-4 mr-[7px] px-[7px] py-[5px] bg-white100 text-gray100'>privacy</button>
            <button className='font-[Roboto] font-medium rounded-[4px] text-[10px] leading-4 mr-[7px] px-[7px] py-[5px] bg-white100 text-gray100'>terms</button>

        </div>
       
    </div>
  )
} 
