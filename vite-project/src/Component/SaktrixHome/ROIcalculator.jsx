import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function ROICalculator ()
{
  const [ designerDays, setDesignerDays ] = useState( 10 );
  const [ developerDays, setDeveloperDays ] = useState( 10 );
  const [ designerRate, setDesignerRate ] = useState( 100 );
  const [ developerRate, setDeveloperRate ] = useState( 150 );

  const totalCost =
    designerDays * designerRate + developerDays * developerRate;
  const savings = 20000 - totalCost;
  const launchSooner = ( designerDays + developerDays ) * 0.875;

  <div className="py-24 px-6 bg-slate-950 neural-grid">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Neural <span className="saktrix-aurora-text">ROI Optimizer</span>
      </h2>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16">
        Quantify the efficiency of the Saktrix ecosystem. Speed up your deployment protocol and reduce operational overhead.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Input Control Console */}
      <div className="glass-card p-10 rounded-3xl border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent" />
        <h3 className="font-bold text-xl text-white mb-8 flex items-center gap-2">
          <div className="h-5 w-5 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px]">IN</div>
          Logic Parameters
        </h3>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Designer Resources</label>
              <span className="text-cyan-400 font-black">{designerDays} Days</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={designerDays}
              onChange={( e ) => setDesignerDays( Number( e.target.value ) )}
              className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Developer Resources</label>
              <span className="text-indigo-400 font-black">{developerDays} Days</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={developerDays}
              onChange={( e ) => setDeveloperDays( Number( e.target.value ) )}
              className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Designer Rate ($/h)</label>
              <input
                type="number"
                value={designerRate}
                onChange={( e ) => setDesignerRate( Number( e.target.value ) )}
                className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Developer Rate ($/h)</label>
              <input
                type="number"
                value={developerRate}
                onChange={( e ) => setDeveloperRate( Number( e.target.value ) )}
                className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Output Intelligence */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
        <div className="relative h-full glass-card p-10 rounded-3xl border-white/10 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl text-white mb-2 tracking-tight">Efficiency Yield</h3>
            <p className="text-[10px] font-black text-cyan-400 mb-8 uppercase tracking-[0.3em]">Protocol Optimization: Active</p>

            <div className="space-y-6">
              <div>
                <p className="text-slate-400 text-sm mb-1">Financial Saving</p>
                <p className="text-4xl font-black text-white">${savings.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Time Velocity</p>
                <p className="text-4xl font-black text-indigo-400">{launchSooner.toFixed( 1 )} <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Business Days</span></p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/5">
            <p className="text-xs text-slate-400 leading-relaxed italic">
              "By leveraging the Saktrix ecosystem, you are operating at <span className="text-cyan-400 font-bold">99.8%</span> efficiency relative to baseline custom development."
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Comparison Grid */}
    <div className="mt-16 grid md:grid-cols-2 gap-8">
      <div className="glass-card p-10 rounded-3xl border-emerald-500/10 bg-emerald-500/5 overflow-hidden relative">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
        <h4 className="font-bold text-xl mb-8 text-emerald-400 flex items-center gap-3">
          <FaCheckCircle /> Saktrix Deployment
        </h4>
        <div className="space-y-4">
          {[
            "💲 Cost: Static Model ($49)",
            "⚡ Velocity: Near-Instant Integration",
            "🧠 Logic: Architect-Verified Structures",
            "✅ Control: Zero-Bug Component Registry",
            "📱 Interface: Full-Device Compatibility"
          ].map( ( item, i ) => (
            <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
              <div className="h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
              {item}
            </div>
          ) )}
        </div>
      </div>

      <div className="glass-card p-10 rounded-3xl border-rose-500/10 bg-rose-500/5 overflow-hidden relative">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl" />
        <h4 className="font-bold text-xl mb-8 text-rose-400 flex items-center gap-3">
          <FaTimesCircle /> Custom Baseline
        </h4>
        <div className="space-y-4">
          {[
            "❌ Budget: Variable Overhead (~$20k)",
            "⏱️ Latency: 4-6 Weeks Processing",
            "👷 Maintenance: High Technical Debt",
            "🔧 Risk: Regression Vulnerabilities",
            "📉 Optimization: Manual SEO Protocols"
          ].map( ( item, i ) => (
            <div key={i} className="flex items-center gap-3 text-sm text-slate-400 line-through decoration-rose-500/30">
              <div className="h-1 w-1 rounded-full bg-rose-500" />
              {item}
            </div>
          ) )}
        </div>
      </div>
    </div>
  </div>

}
