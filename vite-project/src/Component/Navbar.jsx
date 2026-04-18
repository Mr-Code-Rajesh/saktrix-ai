import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { PiCommand } from 'react-icons/pi';
import { BsFillSearchHeartFill } from "react-icons/bs";
import { SaktrixLogo } from '../Component/Logo'


export const Navbar = () =>
{
  const [ darkMode, setDarkMode ] = useState( () => localStorage.getItem( 'theme' ) === 'dark' );

  const toggleDarkMode = () =>
  {
    setDarkMode( !darkMode );
    const html = document.documentElement;
    if ( !darkMode )
    {
      html.classList.add( 'dark' );
      localStorage.setItem( 'theme', 'dark' );
    } else
    {
      html.classList.remove( 'dark' );
      localStorage.setItem( 'theme', 'light' );
    }
  };

  useEffect( () =>
  {
    const html = document.documentElement;
    darkMode ? html.classList.add( 'dark' ) : html.classList.remove( 'dark' );
  }, [ darkMode ] );


  return (
    <header className="w-full fixed top-0 z-[100] border-b border-white/5 backdrop-blur-xl bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative gap-8">
        {/* Top Glow Bar */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        {/* Left: Logo and Version */}
        <div className="flex items-center gap-4 shrink-0">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <SaktrixLogo />
          </Link>
          <div className="hidden lg:flex items-center px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[8px] font-black text-slate-500 uppercase tracking-widest">
            v3.2.0-Alpha
          </div>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden xl:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
          <NavLink
            to="components"
            className={( { isActive } ) => `transition-colors hover:text-cyan-400 ${ isActive ? 'text-cyan-400' : 'text-slate-400' }`}
          >
            Components
          </NavLink>
          <NavLink
            to="templates"
            className={( { isActive } ) => `flex items-center gap-2 transition-colors hover:text-cyan-400 ${ isActive ? 'text-cyan-400' : 'text-slate-400' }`}
          >
            Templates
            <span className="bg-cyan-500 text-white text-[8px] px-1.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]">New</span>
          </NavLink>
          <NavLink
            to="showcase"
            className={( { isActive } ) => `transition-colors hover:text-cyan-400 ${ isActive ? 'text-cyan-400' : 'text-slate-400' }`}
          >
            Showcase
          </NavLink>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 flex-1 justify-end">

          {/* Search Bar - Command Palette Style */}
          <div className="hidden md:flex flex-1 max-w-md relative group">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative flex items-center w-full px-4 py-2 bg-slate-900 border border-white/5 group-focus-within:border-cyan-500/50 rounded-xl transition-all">
              <BsFillSearchHeartFill className="text-slate-500 group-focus-within:text-cyan-400" />
              <input
                type="text"
                placeholder="Neural search protocol..."
                className="bg-transparent border-none outline-none w-full px-3 text-xs text-white placeholder:text-slate-600"
              />
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/5 text-[8px] font-black text-slate-500">
                <PiCommand /> K
              </div>
            </div>
          </div>

          {/* Social & Theme */}
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block text-slate-400 hover:text-cyan-400 transition-colors"><FaDiscord size={18} /></a>
            <a href="#" className="hidden sm:block text-slate-400 hover:text-cyan-400 transition-colors"><FaGithub size={18} /></a>

            <div className="h-6 w-[1px] bg-white/5 mx-2 hidden sm:block" />

            <button
              onClick={toggleDarkMode}
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-slate-400"
            >
              {darkMode ? <BsMoon size={18} /> : <BsSun size={18} className="text-yellow-500" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
