import Icons from '@/Icons'
import React from 'react'

export const SideBar = () => {
  return (
    <div className='w-[260px] mt-[41px] ml-[27px] font-Quicksand max-lg:hidden'>
        <button className='flex items-center ml-[15px] py-[14px] px-[43px] rounded-[99px] shadow-custom'>
        <span className='bg-blue100 w-[16px] font-Quicksand  h-[16px] mr-[8px] text-white rounded-full flex items-center justify-center'>+</span>
        <span className='font-Quicksand font-medium text-[20px] leading-7 text-blue100'>Create new</span>
        </button>
        <div className='mt-[31px] mb-[15px]'>
            <div className='flex items-center pl-[12px] '>
            <Icons.Navigation className="w-[28px] h-[28px]"/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px] font-Quicksand leading-8 text-black '>Metrics</div>

                <div className=' text-gray100 text-[12px] font-normal left-4'>Track your apps across devices</div>
            </div>
            </div>
           
        </div>
        <div className=' mb-[15px]'>
            <div className='flex items-center pl-[12px]  '>
            <Icons.Result className="w-[28px] h-[28px]"/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px] leading-8 font-Quicksand text-black '>Results</div>

                <div className=' text-gray100 text-[12px] font-normal left-4'>View your results as Excel file</div>
            </div>
            </div>
          
        </div>
        <div className=' mb-[15px]'>
            <div className='flex items-center pl-[12px] '>
            <Icons.Chart_bar className="w-[28px] h-[28px]"/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px] font-Quicksand leading-8 text-black '>Google Analytics</div>

                <div className=' text-gray100 text-[12px] font-normal left-4'>Track visits to your sites</div>
            </div>
            </div>
          
        </div>
        <div className=' mb-[15px] w-[260px] bg-blue200 rounded-[10px] pl-[12px] py-[6px]'>
            <div className='flex items-center  '>
            <Icons.Report className="w-[28px] h-[28px]"/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px]  font-Quicksand leading-8 text-black '>Reports</div>

                <div className=' text-gray100 text-[12px] font-normal left-4'>Get insights into the big data</div>
            </div>
            </div>
          
        </div>
        <div className=' mb-[15px]'>
            <div className='flex items-center pl-[12px]'>
            <Icons.Wrench className="w-[28px] h-[28px]"/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[16px] font-Quicksand leading-8 text-black '>More Tools</div>

                <div className=' text-yellow100 text-[12px] font-normal left-4'>Upgrade your plan to PRO</div>
            </div>
            </div>
          
        </div>
        <div className='pl-[12px] w-full'>
            <div className='flex items-center mt-[225px] py-[6px]  '>
            <Icons.Setting className="w-[28px] h-[28px]"/>
            <div className='font-normal text-[14px] leading-[20px] ml-[12px] text-black '>Settings</div>
            </div>
            <div className='w-auto border-[1px] border-white300' ></div>
            <div className='flex items-center mt-[5px] py-[6px] '>
            <Icons.Replay className="w-[28px] h-[28px]"/>
            <div className=' font-normal text-[14px] leading-[20px] ml-[12px] text-black '>Previous Version</div>
            </div>
            <div className='w-auto border-[1px] border-white300' ></div>
            <div className='flex items-center py-[6px]  mt-[5px]'>
            <Icons.Inform className="w-[28px] h-[28px]"/>
            <div className='font-normal text-[14px] leading-[20px] ml-[12px] text-black'>What’s new?</div>
            </div>
            <div className='w-auto border-[1px] border-white300' ></div>
            <div className='flex items-center py-[6px]  mt-[5px]'>
            <Icons.Outline className="w-[28px] h-[28px]"/>
            <div className='font-normal text-[14px] leading-[20px] ml-[12px] text-black '>Customers Support</div>
            </div>
            <div className='w-auto border-[1px] border-white300' ></div>
        </div>
        <div className='my-[16px] flex'>
            <button className=' font-medium rounded-[4px] text-[10px] leading-4 mr-[7px] px-[22px] py-[4px] bg-gradient-button text-gray100'>STATUS</button>
            <button className=' font-medium rounded-[4px] text-[10px] leading-4 mr-[7px] px-[25px] py-[4px] bg-white100 text-gray100'>PRIVACY</button>
            <button className=' font-medium rounded-[4px] text-[10px] leading-4 mr-[7px] px-[22px] py-[4px] bg-white100 text-gray100'>TERMS</button>

        </div>
       
    </div>
  )
} 
