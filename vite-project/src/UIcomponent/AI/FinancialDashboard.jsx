import React from "react";
import { motion } from "framer-motion";
import { RiMoneyDollarCircleFill, RiStockFill, RiWaterFlashFill, RiCopperCoinFill, RiBankCardFill, RiExchangeFundsFill } from "react-icons/ri";

const AssetCard = ({ label, value, change, isUp }) => (
  <div className="flex flex-col gap-1 p-4 rounded-2xl bg-white/5 border border-white/5">
    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className="text-xl font-bold text-white">{value}</span>
      <span className={`text-[10px] font-bold ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>{change}</span>
    </div>
  </div>
);

export const FinancialDashboard = () => {
    return (
        <div className="w-full bg-slate-950 p-6 md:p-12 neural-grid min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-cyan-400 mb-4 font-black text-[10px] uppercase tracking-[0.4em]">
                            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(6,182,212,1)]" />
                            Market Integrity: 99.98%
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                            Capital <span className="saktrix-aurora-text">Flow</span>
                        </h2>
                        <p className="text-slate-500 text-sm font-medium">Neural Asset Management & Liquidity Protocol</p>
                    </div>
                    <div className="flex gap-4">
                        <AssetCard label="ETH/USD" value="$2,492" change="+2.4%" isUp={true} />
                        <AssetCard label="SOL/USD" value="$114.2" change="-1.1%" isUp={false} />
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Hero Metric */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="md:col-span-8 glass-card p-10 rounded-[3rem] border-white/10 bg-gradient-to-br from-indigo-500/10 to-cyan-500/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <RiMoneyDollarCircleFill size={300} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-sm font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Total Liquidity Pool</h3>
                            <div className="flex items-baseline gap-4 mb-12">
                                <span className="text-6xl font-black text-white tracking-tight">$42,903,124<span className="text-slate-600">.82</span></span>
                                <div className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/20">+14.2% (24h)</div>
                            </div>

                            <div className="h-48 flex items-end gap-2 px-2">
                                {[30, 45, 35, 60, 55, 80, 75, 90, 85, 100, 95, 110].map((h, i) => (
                                    <div key={i} className="group/bar flex-1 relative">
                                        <motion.div 
                                            initial={{ height: 0 }}
                                            animate={{ height: `${(h/110)*100}%` }}
                                            transition={{ duration: 1.5, delay: i * 0.05 }}
                                            className="w-full bg-gradient-to-t from-cyan-500 to-indigo-500 rounded-t-lg opacity-40 group-hover/bar:opacity-100 transition-opacity cursor-pointer relative"
                                        >
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[10px] font-black opacity-0 group-hover/bar:opacity-100 transition-opacity">
                                                {h}M
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary Metrics */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        <div className="flex-1 glass-card p-8 rounded-[2.5rem] border-white/5 relative overflow-hidden flex flex-col justify-center">
                            <RiStockFill className="absolute top-4 right-4 text-white/5" size={80} />
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Risk Exposure</p>
                            <p className="text-4xl font-black text-white mb-2">Low</p>
                            <div className="w-full h-1 bg-white/5 rounded-full mt-4">
                                <div className="w-1/4 h-full bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                            </div>
                        </div>
                        <div className="flex-1 glass-card p-8 rounded-[2.5rem] border-white/5 relative overflow-hidden flex flex-col justify-center">
                            <RiWaterFlashFill className="absolute top-4 right-4 text-white/5" size={80} />
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Capital Velocity</p>
                            <p className="text-4xl font-black text-white mb-2">0.82x</p>
                            <p className="text-xs text-slate-500 font-bold">Stable Growth Model</p>
                        </div>
                    </div>

                    {/* Transaction Feed */}
                    <div className="md:col-span-12 glass-card p-10 rounded-[3rem] border-white/5">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-xl font-bold text-white tracking-tight">Recent Telemetry Events</h3>
                            <button className="text-xs font-black text-cyan-400 uppercase tracking-widest hover:text-cyan-300 transition-colors">View All Protocols</button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { icon: RiBankCardFill, type: 'Inflow', asset: 'USDT Sweep', amount: '+$42,000.00', status: 'Secured', time: '14:02:11' },
                                { icon: RiCopperCoinFill, type: 'Swap', asset: 'BTC -> ETH', amount: '2.4 ETH', status: 'Verifying', time: '13:58:02' },
                                { icon: RiExchangeFundsFill, type: 'Stake', asset: 'Solana Node', amount: '150 SOL', status: 'Active', time: '13:42:55' },
                            ].map((tx, i) => (
                                <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                                    <div className="flex items-center gap-6">
                                        <div className="h-12 w-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-colors">
                                            <tx.icon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">{tx.asset}</p>
                                            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">{tx.type} • {tx.time}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-black text-white mb-1">{tx.amount}</p>
                                        <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                                            tx.status === 'Secured' ? 'bg-emerald-500/10 text-emerald-400' : 
                                            tx.status === 'Verifying' ? 'bg-amber-500/10 text-amber-400' : 'bg-cyan-500/10 text-cyan-400'
                                        }`}>
                                            {tx.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
