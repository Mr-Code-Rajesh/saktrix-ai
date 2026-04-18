import React from 'react'
import { Contact } from '../Pages/Contact'
import { Outlet } from 'react-router-dom'

export const ContactLayout = () => {
  return (
    <>
     <div>
        <Contact/>
        <Outlet/>
     </div>
    </>
    
  )
}
