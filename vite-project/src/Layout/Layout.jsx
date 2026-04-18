import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Component/Footer'
import { BackToTop } from '../Component/Backtop'
import { ScrollProgress } from '../Component/Scrollbar'

export const Layout = () => {
  return (
    <div className=' bg-white dark:bg-black  flex flex-col min-h-screen font-roboto'>
      <Navbar/>
      <ScrollProgress/> 

      <div className=' flex-grow'>
        <Outlet/>
      </div>

      <Footer/>
      <BackToTop/>
    </div>
  )
}
