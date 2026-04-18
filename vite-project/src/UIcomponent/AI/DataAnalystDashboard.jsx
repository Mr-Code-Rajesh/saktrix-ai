import React from "react";
import { motion } from "framer-motion";
import { RiBarChartBoxFill, RiDatabase2Fill, RiFlashlightFill, RiGlobalFill, RiMapPinRangeFill, RiLineChartFill } from "react-icons/ri";

const BentoCard = ({ title, value, change, icon: Icon, color, children, className }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass-card p-6 rounded-3xl border-white/5 relative overflow-hidden group ${className}`}
  >
    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity ${color}`}>
        <Icon size={80} />
    </div>
    <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
            <div className={`p-2 rounded-xl bg-white/5 ${color}`}>
                <Icon size={20} />
            </div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{title}</span>
        </div>
        {value && (
            <div className="mt-auto">
                <p className="text-3xl font-black text-white mb-1">{value}</p>
                <p className={`text-xs font-bold ${change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {change} <span className="text-slate-500 ml-1 font-medium italic">vs baseline</span>
                </p>
            </div>
        )}
        {children}
    </div>
  </motion.div>
);

export const DataAnalystDashboard = () => {
    return (
        <div className="w-full bg-slate-950 p-6 md:p-12 neural-grid min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                            Neural <span className="saktrix-aurora-text">Telemetry</span>
                        </h2>
                        <p className="text-slate-500 text-sm font-medium">Session ID: 0xFF-77291B | Status: <span className="text-cyan-400">Live Optimization</span></p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-colors"> Export Protocol </button>
                        <button className="px-6 py-2 bg-cyan-600 rounded-xl text-[10px] font-black text-white uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-500 transition-colors"> Sync Network </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {/* Main Growth Metric */}
                    <BentoCard 
                        title="Neural Throughput" 
                        value="1,492.3 TB" 
                        change="+14.2%" 
                        icon={RiDatabase2Fill} 
                        color="text-cyan-400" 
                        className="md:col-span-2 lg:col-span-2 min-h-[220px]"
                    />

                    {/* Latency Map Placeholder */}
                    <BentoCard 
                        title="Global Distribution" 
                        icon={RiGlobalFill} 
                        color="text-indigo-400" 
                        className="md:col-span-2 lg:col-span-2 min-h-[220px]"
                    >
                        <div className="mt-auto flex gap-1 items-end h-20">
                            {[40, 70, 45, 90, 65, 80, 55, 30].map((h, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    className="flex-1 bg-gradient-to-t from-indigo-500/20 to-indigo-500 rounded-t-sm"
                                />
                            ))}
                        </div>
                    </BentoCard>

                    {/* Active Nodes */}
                    <BentoCard 
                        title="Active Nodes" 
                        value="8.4k" 
                        change="+2.1%" 
                        icon={RiMapPinRangeFill} 
                        color="text-violet-400" 
                        className="lg:col-span-2 min-h-[220px]"
                    />

                    {/* Large Chart Area */}
                    <div className="md:col-span-4 lg:col-span-4 glass-card p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <RiBarChartBoxFill size={200} />
                        </div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-xl font-bold text-white tracking-tight">Performance Vector Overlay</h3>
                                <div className="flex gap-2">
                                    <div className="h-2 w-8 rounded-full bg-cyan-500/50" />
                                    <div className="h-2 w-8 rounded-full bg-indigo-500/20" />
                                </div>
                            </div>
                            
                            <div className="h-64 flex items-end gap-3 relative">
                                {/* Simulated Chart Line */}
                                <svg className="absolute inset-x-0 bottom-0 overflow-visible" height="100%" width="100%">
                                    <motion.path
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                        d="M0 150 Q 150 50 300 120 T 600 20 T 900 80"
                                        fill="none"
                                        stroke="url(#gradient)"
                                        strokeWidth="4"
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#06b6d4" />
                                            <stop offset="100%" stopColor="#6366f1" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                
                                {/* Labels */}
                                <div className="absolute bottom-0 left-0 w-full flex justify-between text-[8px] font-black text-slate-700 uppercase tracking-widest pt-4 translate-y-full">
                                    <span>Sync_Alpha</span>
                                    <span>Sync_Beta</span>
                                    <span>Sync_Gamma</span>
                                    <span>Sync_Delta</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Latency Info */}
                    <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-6">
                        <div className="flex-1 glass-card p-8 rounded-[2rem] border-white/5 bg-cyan-500/5">
                            <div className="flex items-center gap-2 mb-4">
                                <RiFlashlightFill className="text-cyan-400" />
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Latency Protocol</span>
                            </div>
                            <p className="text-3xl font-black text-white">4ms <span className="text-xs font-medium text-slate-600">avg</span></p>
                        </div>
                        <div className="flex-1 glass-card p-8 rounded-[2rem] border-white/5 bg-indigo-500/5">
                            <div className="flex items-center gap-2 mb-4">
                                <RiLineChartFill className="text-indigo-400" />
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Error Drift</span>
                            </div>
                            <p className="text-3xl font-black text-white">0.02% <span className="text-xs font-medium text-slate-600">drift</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
