import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaInstagram, FaXTwitter, FaGithub, FaYoutube, FaCodepen } from "react-icons/fa6";
import logo1 from '../assets/Images/logo1.png';
import saktrix2 from '../assets/Logo/saktrix2.png'

import { RiGlobalFill, RiHashtag, RiShieldCheckFill, RiTerminalBoxFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white px-6 py-24 neural-grid relative overflow-hidden flex flex-col gap-16">
      {/* Top Glow Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="hover:opacity-80 transition-opacity w-fit">
             <h2 className="text-2xl font-black tracking-tighter text-white">SAKTRIX<span className="text-cyan-500">UI</span></h2>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed font-medium">
            Architecting the future of human-AI interfaces. High-performance neural components for the 2026 intelligence era.
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-slate-950 bg-slate-900 flex items-center justify-center text-[10px] font-black text-cyan-400">
                        0{i}
                    </div>
                ))}
            </div>
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Active Nodes</span>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Ecosystem</h3>
          <ul className="flex flex-col gap-4">
            {['Components', 'Templates', 'Showcase', 'Neural Labs'].map(link => (
                <li key={link}>
                    <NavLink to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors font-medium">{link}</NavLink>
                </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Protocol</h3>
          <ul className="flex flex-col gap-4">
            {['About Hub', 'Services', 'Open Source', 'Contact'].map(link => (
                <li key={link}>
                    <NavLink to={`/${link.toLowerCase().split(' ')[0]}`} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors font-medium">{link}</NavLink>
                </li>
            ))}
          </ul>
        </div>

        {/* Status Hub Column */}
        <div className="glass-card p-6 rounded-3xl border-white/5 bg-white/5">
            <h3 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <RiTerminalBoxFill /> System Status
            </h3>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 uppercase font-black">Core Latency</span>
                    <span className="text-xs font-bold text-white">12ms</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 uppercase font-black">Neural Uptime</span>
                    <span className="text-xs font-bold text-white">99.98%</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-500 uppercase font-black">Sync Status</span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <RiShieldCheckFill /> Stable
                    </span>
                </div>
            </div>
        </div>
      </div>

      {/* Social & Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* Social Ports */}
        <div className="flex gap-2">
            {[
                { icon: FaInstagram, color: 'hover:text-pink-500' },
                { icon: FaXTwitter, color: 'hover:text-cyan-400' },
                { icon: FaGithub, color: 'hover:text-white' },
                { icon: FaCodepen, color: 'hover:text-yellow-400' }
            ].map((social, i) => (
                <a key={i} href="#" className={`h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-500 transition-all ${social.color} hover:border-white/20`}>
                    <social.icon size={18} />
                </a>
            ))}
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-6 text-[10px] font-black text-slate-700 uppercase tracking-widest">
            <span>&copy; {new Date().getFullYear()} Neural Protocol</span>
            <div className="h-4 w-[1px] bg-white/5" />
            <span className="text-slate-500 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <div className="h-4 w-[1px] bg-white/5" />
            <span className="text-slate-500 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>

        {/* Global Indicator */}
        <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            <RiGlobalFill className="text-cyan-500 animate-pulse" />
            Node: 0x77-Alpha
        </div>
      </div>
    </footer>
  );
};
