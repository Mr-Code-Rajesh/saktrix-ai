import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { RiSparklingFill, RiSendPlane2Fill, RiRobot2Fill, RiUser3Fill } from 'react-icons/ri';

function AIComponentsWrapper ({htmlCode, reactCode, SectionShow, title, description}){
    const [view, setView] = useState("preview"); 
    const [copyStatus, setCopyStatus] = useState("Copy");

    const handleCopy = () => {
        const code = reactCode;
        navigator.clipboard.writeText(code);
        setCopyStatus("Copied!");
        setTimeout(() => setCopyStatus("Copy"), 2000);
    };

  return(
    <section className="min-h-min w-full my-12 bg-slate-900/50 rounded-3xl border border-white/5 overflow-hidden backdrop-blur-sm">
        <div className="p-8 border-b border-white/5 bg-white/5 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm max-w-xl">{description}</p>
            </div>
            <div className="flex bg-slate-950 p-1 rounded-xl border border-white/5">
                <button 
                  onClick={() => setView("preview")}
                  className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${view === "preview" ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                >
                    Preview
                </button>
                <button 
                  onClick={() => setView("code")}
                  className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${view === "code" ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                >
                    Code
                </button>
            </div>
        </div>

        <div className="relative">
            {view === "preview" ? (
                <div className="p-8 flex items-center justify-center min-h-[400px] bg-slate-950/20">
                    {SectionShow}
                </div>
            ) : (
                <div className="relative">
                    <button 
                        onClick={handleCopy}
                        className="absolute top-4 right-4 z-10 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] font-black text-white uppercase tracking-widest transition-all"
                    >
                        <FaCopy /> {copyStatus}
                    </button>
                    <pre className="p-8 text-sm text-cyan-400 bg-slate-950/50 overflow-auto max-h-[500px] scrollbar-hide">
                        <code>{reactCode}</code>
                    </pre>
                </div>
            )}
        </div>
    </section>
  )
}

export const PromptInputDemo = () => {
    const code = `import { RiSparklingFill, RiSendPlane2Fill } from 'react-icons/ri';
import { motion } from 'framer-motion';

export const PromptInput = () => {
  return (
    <div className="w-full max-w-2xl relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl opacity-20 group-focus-within:opacity-100 transition duration-500 blur" />
      
      <div className="relative flex items-center bg-slate-900 rounded-2xl border border-white/10 group-focus-within:border-cyan-500/50 transition-all overflow-hidden p-2">
        <div className="flex items-center justify-center w-12 h-12 text-cyan-500">
          <RiSparklingFill className="animate-pulse" />
        </div>
        
        <textarea
          rows="1"
          placeholder="Ask Saktrix AI about anything..."
          className="flex-1 bg-transparent px-4 py-3 text-white focus:outline-none placeholder:text-slate-600 resize-none max-h-40"
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
          }}
        />
        
        <button className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
          <RiSendPlane2Fill className="text-xl" />
        </button>
      </div>
      
      <div className="mt-3 flex gap-2 justify-center">
        {['Code Generation', 'Data Insight', 'UI Mockup'].map(chip => (
          <button key={chip} className="text-[10px] font-black text-slate-600 uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/5 rounded-full hover:border-cyan-500/30 hover:text-cyan-400 transition-colors">
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
};`;

    return (
        <AIComponentsWrapper 
            title="Neural Prompt Input"
            description="A futuristic multi-line input field with auto-expanding logic and light-tracking focus effects."
            reactCode={code}
            SectionShow={
                <div className="w-full max-w-2xl relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl opacity-20 group-focus-within:opacity-100 transition duration-500 blur" />
                    <div className="relative flex items-center bg-slate-900 rounded-2xl border border-white/10 group-focus-within:border-cyan-500/50 transition-all overflow-hidden p-2">
                        <div className="flex items-center justify-center w-12 h-12 text-cyan-500">
                            <RiSparklingFill className="animate-pulse" />
                        </div>
                        <textarea
                            rows="1"
                            placeholder="Ask Saktrix AI about anything..."
                            className="flex-1 bg-transparent px-4 py-3 text-white focus:outline-none placeholder:text-slate-600 resize-none"
                        />
                        <button className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-slate-400 hover:bg-cyan-500 hover:text-white transition-all">
                            <RiSendPlane2Fill className="text-xl" />
                        </button>
                    </div>
                    <div className="mt-4 flex gap-2 justify-center">
                        {['Code Generation', 'Data Insight', 'UI Mockup'].map(chip => (
                            <button key={chip} className="text-[10px] font-black text-slate-600 uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/5 rounded-full hover:border-cyan-500/30 hover:text-cyan-400 transition-colors">
                            {chip}
                            </button>
                        ))}
                    </div>
                </div>
            }
        />
    )
}

export const AIChatDemo = () => {
    const code = `import { motion } from 'framer-motion';
import { RiRobot2Fill, RiUser3Fill } from 'react-icons/ri';

export const AIChatBubble = ({ role, content }) => {
  const isAI = role === 'ai';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={\`flex items-start gap-3 \${!isAI ? 'flex-row-reverse' : ''}\`}
    >
      <div className={\`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 \${
        isAI ? 'bg-cyan-500/20 text-cyan-400' : 'bg-indigo-500/20 text-indigo-400'
      }\`}>
        {isAI ? <RiRobot2Fill size={20} /> : <RiUser3Fill size={20} />}
      </div>
      <div className={\`p-5 rounded-2xl text-sm leading-relaxed max-w-[80%] \${
        isAI 
          ? 'bg-white/5 border border-white/5 text-slate-200' 
          : 'bg-indigo-600 text-white shadow-xl'
      }\`}>
        {content}
      </div>
    </motion.div>
  );
};`;

    return (
        <AIComponentsWrapper 
            title="Neural Chat Bubbles"
            description="Modern chat bubbles with unique styling for AI and user roles, including backdrop blur for AI responses."
            reactCode={code}
            SectionShow={
                <div className="w-full max-w-lg space-y-6">
                    <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                            <RiRobot2Fill size={20} />
                        </div>
                        <div className="p-5 rounded-2xl text-sm leading-relaxed text-slate-200 bg-white/5 border border-white/5 max-w-[80%] backdrop-blur-md">
                            Analyzing the neural network architecture... Optimization parameters found! Would you like me to apply the Cyan-Indigo gradient shift?
                        </div>
                    </div>
                    <div className="flex items-start gap-3 flex-row-reverse">
                        <div className="h-10 w-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                            <RiUser3Fill size={20} />
                        </div>
                        <div className="p-5 rounded-2xl text-sm leading-relaxed text-white bg-indigo-600 max-w-[80%] shadow-xl">
                            Yes, proceed with the deployment. Also add some subtle aurora glows to the background.
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export const AI = () => {
    return (
        <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
            <div className="max-w-6xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                    <RiSparklingFill /> New Category
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                    Neural <span className="saktrix-aurora-text">Interfaces</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mb-12">
                    Futuristic UI components designed specifically for the AI era. 
                    Optimized for LLM interaction, real-time streaming, and predictive UX.
                </p>

                <div className="space-y-12">
                    <PromptInputDemo />
                    <AIChatDemo />
                </div>
            </div>
        </section>
    );
};
