import React from 'react'
import { About } from '../Pages/About'
import { Outlet } from 'react-router-dom'

export const AboutLayout = () => {
  return (
    <div>
        <About/>
        <Outlet/>
    </div>
  )
}
