
"use client"
import Icons from '@/Icons'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

export const Top = () => {

  const [isMenuOpen,setisMenuOpen]=useState(false)
  const menuRef =useRef(null)



  return (
    <div className='h-[64px] mt-[10px] py-[12px] flex items-center justify-between'>
  <div className={`${isMenuOpen ? "fixed" : "hidden"} top-0 left-0 w-full h-full bg-black opacity-50 z-40`}></div>

       <div ref={menuRef} className={`  fixed top-0 left-0 w-[320px] h-full  bg-white100 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        
 `}>

<div className='w-[300px] mt-[41px] px-[27px] font-Quicksand'>
    <Image src="/Images/Logo.png" alt='logo' width={200} height={40}/>
    <button className='flex items-center ml-[15px] py-[8px] px-[24px] rounded-[99px] mt-[10px] shadow-custom'>
        <span className='bg-blue100 w-[16px] font-Quicksand  h-[16px] mr-[8px] text-white rounded-full flex items-center justify-center'>+</span>
        <span className='font-Quicksand font-medium text-[16px] leading-7 text-blue100'>Create new</span>
        </button>
      
        <div className=' flex flex-col  font-normal text-[28px] my-[40px] leading-6 '>
          <div className='flex items-center justify-between mt-[28px]'>
          <div className='text-black opacity-85'>Analyze</div>
          <Icons.ChevronUp className="rotate-90 fill-black"/>
          </div>
          <div className='flex items-center justify-between mt-[28px]'>
          <div className=' text-gray100'>My campaigns</div>
          <Icons.ChevronUp className="rotate-90 fill-black"/>
          </div>
           <div className='flex items-center justify-between mt-[28px]'>
          <div className='  text-gray100'>Configure</div>

          <Icons.ChevronUp className="rotate-90 fill-black"/>
          </div> 
          <div className='flex items-center justify-between mt-[28px]'>
          <div className='  text-gray100'>Research</div>


          <Icons.ChevronUp className="rotate-90 fill-black"/>
          </div>
          
          <div className='flex items-center justify-between mt-[28px]'>
          <div className='  text-gray100'>Customize</div>

          <Icons.ChevronUp className="rotate-90 fill-black"/>
          </div>
          <div className='flex items-center justify-between mt-[28px]'>
          <div className='   text-gray100'>Inspect</div>


          <Icons.ChevronUp className="rotate-90 fill-black"/>
          </div>
           

        </div>
        <div className='mt-[90px] mb-[8px]'>
            <div className='flex items-center '>
            <Icons.Navigation/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[12px] leading-8 text-black opacity-85'>Metrics</div>

            </div>
            </div>
          
        </div>
        <div className=' mb-[8px]'>
            <div className='flex items-center '>
            <Icons.Result/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[12px] leading-8 text-black opacity-85'>Results</div>

            </div>
            </div>
          
        </div>
        <div className=' mb-[8px]'>
            <div className='flex items-center '>
            <Icons.Chart_bar/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[12px] leading-8 text-black opacity-85'>Google Analytics</div>

            </div>
            </div>
          
        </div>
        <div className=' mb-[8px]'>
            <div className='flex items-center '>
            <Icons.Report/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[12px] leading-8 text-black opacity-85'>Reports</div>

            </div>
            </div>
          
        </div>
        <div className=' mb-[8px]'>
            <div className='flex items-center '>
            <Icons.Wrench/>
            <div className='ml-[12px]'>
            <div className='font-medium text-[12px] leading-8 text-black opacity-85'>More Tools</div>

            </div>
            </div>
          
        </div>
        <div>
            <div className='flex  justify-between w-full mt-[55px] items-end'>
            <Icons.Replay/>
            <Icons.Setting/>
            <Icons.Inform/>
            <Icons.Outline/>

            <div className=' flex items-end '>
            <button className=' font-medium rounded-[4px] text-[10px] leading-4  px-[7px] py-[5px] bg-gradient-button text-gray100'>status</button>
            <button className=' font-medium rounded-[4px] text-[10px] leading-4  px-[7px] py-[5px] bg-white100 text-gray100'>privacy</button>
            <button className=' font-medium rounded-[4px] text-[10px] leading-4  px-[7px] py-[5px] bg-white100 text-gray100'>terms</button>

        </div>

            </div>
           
        </div>
       
       
    </div>

</div>
      <div className='max-sm:flex max-sm:w-full max-sm:justify-between max-sm:px-[20px]' >
        <div className='flex items-center'>
            <div className='relative mr-[10px]'>
            <Image src="/Images/Logo BG.png" width={40} height={40} alt="logo"  className='w-[50px] h-[50px] '/>
            <Image src="/Images/Letter.png" width={40} height={40} alt="logo" className='w-[60px] absolute  top-2 h-[60px]'/>

            </div>
<Image src="/Images/Name.png" width={152} height={40} alt="logo" className='w-[152px] '/>
        </div>
    
      <button onClick={()=>setisMenuOpen(!isMenuOpen)} className='sm:hidden'>
        <Icons.Menu className="h-[32px] w-[32px] mb-[15px]"/>
      </button>
      

      </div>
     
       

        <div className='flex items-center max-sm:hidden'>
        <div className='flex w-[72px] h-[40px] border px-[4px] rounded-lg border-white200 items-center justify-between'>
            <Icons.Grid/>
            <div className='font-medium font-Quicksand text-[20px] leading-7 text-gray100'>13</div>
        </div>
        <div className=' flex items-center px-[16px] py-[8px]'>
        <Icons.Chevron/>
        <div className='text-gray200 font-normal text-[16px] leading-6'>My workspace</div>
        </div>
        <div className=' flex items-center '>
        <Icons.Chevron className="fill-gray300"/>
        <div className=' text-gray300 font-normal text-[16px] leading-6'>Drafts</div>
        </div>
        <div className='  flex items-center px-[23px]'>
        <Icons.Chevron className="fill-black opacity-85"/>
        <div className=' text-black font-normal text-[16px] opacity-85 leading-6'>Analytika_dashboard_kit</div>
        </div>
        
        </div>
        <div className='flex max-lg:hidden'>
        <button className='flex items-center bg-white100 rounded-[4px] py-[4px] px-[14px] '>
            <div className='text-gray100 text-[16px] leading-8 mr-[10px]'>Help</div>
            <div className='w-[20px] h-[20px] text-white rounded-full flex items-center justify-center bg-gray200'>?</div>
        </button>
        <button className='font-medium text-[14px] leading-4 py-[6px] px-[13px]  shadow-custom  mx-[16px] rounded-[4px] text-blue100'>
        UPGRADE
        </button>
        <Image src="/Images/FernandoPidrilio.png" alt='profile' width={40} height={40} className='h-[40px]'/>
        </div>
       

       

    </div>
  )
}
