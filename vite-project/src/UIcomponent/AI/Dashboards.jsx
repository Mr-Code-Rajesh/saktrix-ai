import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { motion } from 'framer-motion';
import { RiDashboard3Fill, RiCloseFill } from 'react-icons/ri';
import { DataAnalystDashboard } from "./DataAnalystDashboard";
import { HRDashboard } from "./HRDashboard";
import { FinancialDashboard } from "./FinancialDashboard";
import { NeuralEngineDashboard } from "./NeuralEngineDashboard";

function DashboardWrapper ({ SectionShow, title, description }){
  return(
    <section className="min-h-min w-full my-12 bg-slate-900/50 rounded-[3rem] border border-white/5 overflow-hidden backdrop-blur-sm">
        <div className="p-10 border-b border-white/5 bg-white/5">
            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{title}</h3>
            <p className="text-slate-400 text-sm max-w-2xl">{description}</p>
        </div>
        <div className="bg-slate-950/20">
            {SectionShow}
        </div>
    </section>
  )
}

export const Dashboards = () => {
    return (
        <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
            <div className="max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black tracking-[0.3em] uppercase mb-6 text-indigo-400">
                    <RiDashboard3Fill /> Enterprise Systems
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                    Industry <span className="saktrix-aurora-text">Dashboards</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mb-16">
                    Professional, high-performance dashboard templates for different industry verticals. 
                    Built with the Neural OS aesthetic for data-heavy applications.
                </p>

                <div className="space-y-24">
                    <DashboardWrapper 
                        title="Data Analyst Suite"
                        description="Bento-style layout optimized for real-time telemetry, throughput monitoring, and performance overlay."
                        SectionShow={<DataAnalystDashboard />}
                    />
                    <DashboardWrapper 
                        title="HR Admin Protocol"
                        description="Talent acquisition funnel monitoring with employee wellness telemetry and retention metrics."
                        SectionShow={<HRDashboard />}
                    />
                    <DashboardWrapper 
                        title="Financial Flow"
                        description="Capital liquidity monitor with real-time asset telemetry and transaction protocol logging."
                        SectionShow={<FinancialDashboard />}
                    />
                    <DashboardWrapper 
                        title="Neural Engine Core"
                        description="System-wide engine monitoring with training cycle telemetry, core stability metrics, and architecture auto-tuning."
                        SectionShow={<NeuralEngineDashboard />}
                    />
                </div>
            </div>
        </section>
    );
};
