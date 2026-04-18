import React from 'react'
import { Link } from 'react-router-dom'

export const Notfoundpage = () => {
  return (
    <div className='p-10'>
        <h2 className=' p-2 text-2xl'>404 Error Page not founded</h2>
        <Link to='/'> Go to Home page</Link>
    </div>
  )
}
