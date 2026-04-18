import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/bg/saktrix_logo.png'
import { Link } from 'react-router-dom';


export  const SaktrixLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 2 }}
      className="cursor-pointer"
    >
      <Link to="/" className=' flex gap-1'>
        <img src={logo} alt="Logo" className="h-9" />
        <span className=" dark:text-white mt-1 font-bold text-2xl">Saktrix UI</span>
      </Link>
    </motion.div>
  );
};




































