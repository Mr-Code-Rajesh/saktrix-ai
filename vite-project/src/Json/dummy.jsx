import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {useLocation } from 'react-router-dom';



export const Contact = () => {
  const location = useLocation();

  return (
    <>
     <div className='relative' >
       {location.pathname === '/contact' && (
        <h1 className='text-xl mb-4'>Welcome to the Contact Page!</h1>
       )}
     </div>
    </>
    
  )
}