import { Header } from '@/components/Header/Header'
import React from 'react'
import { SideBar } from './views/SideBar'
import { MainSide } from './views/MainSide'

export const HomePage = () => {
  return (
    <div>
        <Header/>
        <div className='flex'>
        <SideBar/>
        <MainSide/>


        </div>
    </div>
  )
}
