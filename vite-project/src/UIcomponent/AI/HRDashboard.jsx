import React from "react";
import { motion } from "framer-motion";
import { RiGroupFill, RiUserSearchFill, RiMentalHealthFill, RiHeartPulseFill, RiTimer2Fill, RiBriefcaseFill } from "react-icons/ri";

const StatCard = ({ title, value, subtext, icon: Icon, trend }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8 rounded-[2.5rem] border-white/5 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-6 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors">
        <Icon size={120} />
    </div>
    <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                <Icon size={24} />
            </div>
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{title}</span>
        </div>
        <p className="text-4xl font-black text-white mb-2">{value}</p>
        <div className="flex items-center gap-2">
            <span className={`text-xs font-bold ${trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{trend}</span>
            <span className="text-[10px] text-slate-600 font-medium uppercase tracking-widest">{subtext}</span>
        </div>
    </div>
  </motion.div>
);

export const HRDashboard = () => {
    return (
        <div className="w-full bg-slate-950 p-6 md:p-12 neural-grid min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <div className="inline-flex py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4">
                            Human Capital Optimization
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                            Talent <span className="saktrix-aurora-text">Pulse</span>
                        </h2>
                        <p className="text-slate-500 text-sm font-medium">Real-time organizational health monitoring system</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/5 backdrop-blur-md">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg">
                            <RiUserSearchFill />
                        </div>
                        <div className="pr-4">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Active Hunt</p>
                            <p className="text-sm font-bold text-white leading-none">Senior AI Architect</p>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <StatCard 
                        title="Headcount Protocol" 
                        value="1,284" 
                        subtext="Fully Synergized" 
                        icon={RiGroupFill} 
                        trend="+12" 
                    />
                    <StatCard 
                        title="Retention Factor" 
                        value="98.2%" 
                        subtext="Annual Stability" 
                        icon={RiHeartPulseFill} 
                        trend="+0.4%" 
                    />
                    <StatCard 
                        title="Time-to-Sync" 
                        value="14.5d" 
                        subtext="Average Onboarding" 
                        icon={RiTimer2Fill} 
                        trend="-2.1d" 
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Hiring Funnel */}
                    <div className="lg:col-span-3 glass-card p-10 rounded-[3rem] border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <RiBriefcaseFill size={200} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-10 tracking-tight">Aquisition Funnel Overlay</h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'Intelligence Sourcing', value: '4.2k', width: '100%', color: 'bg-indigo-500' },
                                    { label: 'Candidate Logic Test', value: '1.1k', width: '45%', color: 'bg-indigo-400' },
                                    { label: 'Neural Integration Call', value: '240', width: '25%', color: 'bg-indigo-300' },
                                    { label: 'Final Protocol Review', value: '42', width: '12%', color: 'bg-cyan-400' },
                                ].map((step, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
                                            <span>{step.label}</span>
                                            <span className="text-white">{step.value}</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: step.width }}
                                                transition={{ duration: 1.5, delay: i * 0.2 }}
                                                className={`h-full ${step.color} shadow-[0_0_15px_rgba(99,102,241,0.3)]`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Wellness Radar */}
                    <div className="lg:col-span-2 glass-card p-10 rounded-[3rem] border-white/5 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Wellness Telemetry</h3>
                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-10">Neural Stability: High</p>
                            
                            <div className="flex justify-center py-6">
                                <div className="relative h-48 w-48 flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full border-2 border-white/5" />
                                    <div className="absolute inset-4 rounded-full border-2 border-white/5" />
                                    <div className="absolute inset-8 rounded-full border-2 border-white/5" />
                                    <motion.div 
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="h-full w-full border-t-2 border-indigo-500 rounded-full opacity-40 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                                    />
                                    <div className="text-center">
                                        <RiMentalHealthFill size={32} className="text-indigo-400 mx-auto mb-2" />
                                        <p className="text-2xl font-black text-white">88%</p>
                                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Wellness Index</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/5 text-center">
                                <p className="text-lg font-bold text-white">4.8/5</p>
                                <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Satis Protocol</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 text-center">
                                <p className="text-lg font-bold text-white">2%</p>
                                <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Burnout Drift</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
