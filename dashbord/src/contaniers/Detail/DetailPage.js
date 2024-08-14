import React from 'react'
import { SideBar } from './views/SideBar'
import { MainSide } from './views/MainSide'

export const DetailPage = () => {
  return (
    <div className=' max-w-[1440px] w-full m-auto my-[90px] flex'>
        <SideBar/>
        <MainSide/>
    </div>
  )
}
