import React from "react";
import { motion } from "framer-motion";
import { RiCpuFill, RiRadarFill, RiHistoryFill, RiSettings5Fill, RiDatabaseFill, RiSearchEyeFill } from "react-icons/ri";

const ProgressCircle = ({ value, label, color }) => (
  <div className="flex flex-col items-center gap-4">
    <div className="relative h-32 w-32 flex items-center justify-center">
      <svg className="h-full w-full -rotate-90">
        <circle cx="64" cy="64" r="60" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/5" />
        <motion.circle 
          cx="64" cy="64" r="60" fill="none" stroke="currentColor" strokeWidth="8" 
          strokeDasharray="377"
          initial={{ strokeDashoffset: 377 }}
          animate={{ strokeDashoffset: 377 - (377 * value) / 100 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className={color}
        />
      </svg>
      <span className="absolute text-2xl font-black text-white">{value}%</span>
    </div>
    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
  </div>
);

export const NeuralEngineDashboard = () => {
    return (
        <div className="w-full bg-slate-950 p-6 md:p-12 neural-grid min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="flex items-center gap-6">
                        <div className="h-16 w-16 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                            <RiCpuFill size={32} />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">Neural <span className="saktrix-aurora-text">Engine</span></h2>
                            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">v4.2.0 Core Cluster | <span className="text-cyan-400">Stable</span></p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-2 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-md">
                        <div className="px-6 py-2 text-center border-r border-white/5">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Total Weights</p>
                            <p className="text-lg font-bold text-white">175B</p>
                        </div>
                        <div className="px-6 py-2 text-center">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Training Cycle</p>
                            <p className="text-lg font-bold text-white">#882</p>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-3 glass-card p-10 rounded-[3rem] border-white/5 flex flex-wrap justify-around items-center">
                        <ProgressCircle value={94} label="Core Stability" color="text-cyan-500" />
                        <ProgressCircle value={82} label="Logic Sync" color="text-indigo-500" />
                        <ProgressCircle value={99} label="Neural Fidelity" color="text-violet-500" />
                    </div>
                    <div className="glass-card p-10 rounded-[3rem] border-white/5 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <RiRadarFill size={24} className="text-cyan-400" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Telemetry</span>
                        </div>
                        <div className="mt-8">
                            <p className="text-4xl font-black text-white mb-2">12ms</p>
                            <p className="text-xs text-slate-400 font-medium">Inference Latency</p>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full mt-6 overflow-hidden">
                            <motion.div 
                                animate={{ x: ['100%', '-100%'] }} 
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(6,182,212,1)]" 
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 glass-card p-10 rounded-[3rem] border-white/5">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-xl font-bold text-white tracking-tight">Training Logs</h3>
                            <RiHistoryFill className="text-slate-600" />
                        </div>
                        <div className="space-y-6">
                            {[
                                { msg: 'Optimizer state persistent', time: '14:22:11', icon: RiSettings5Fill },
                                { msg: 'Dataset shard #04 synced', time: '14:18:42', icon: RiDatabaseFill },
                                { msg: 'Gradient descent complete', time: '14:15:02', icon: RiSearchEyeFill },
                            ].map((log, i) => (
                                <div key={i} className="flex items-center justify-between text-sm py-4 border-b border-white/5 last:border-0">
                                    <div className="flex items-center gap-4">
                                        <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500">
                                            <log.icon size={16} />
                                        </div>
                                        <span className="text-slate-300 font-medium">{log.msg}</span>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{log.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="glass-card p-10 rounded-[3rem] border-white/10 bg-gradient-to-br from-indigo-500/10 to-transparent relative overflow-hidden group hover:border-cyan-500/30 transition-all">
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Neural Architecture</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">System-wide auto-tuning is <span className="text-cyan-400 font-black">Active</span>. The core is currently optimizing for low-latency inference.</p>
                            </div>
                            <button className="w-full py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                Re-Index Core
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
