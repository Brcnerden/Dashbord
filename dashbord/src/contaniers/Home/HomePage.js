import { Header } from '@/components/Header/Header'
import React from 'react'
import { SideBar } from './views/SideBar'
import { MainSide } from './views/MainSide'

export const HomePage = () => {
  return (
    <div>
        <Header/>
        <div className='flex max-sm:flex-col max-w-[1440px] w-full m-auto max-lg:m-[12px]'>
        <SideBar/>
        <MainSide/>
        </div>
    </div>
  )
}
