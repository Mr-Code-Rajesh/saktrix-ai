import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiSparklingFill, RiSendPlane2Fill, RiRobot2Fill, RiUser3Fill } from 'react-icons/ri';

const INITIAL_MESSAGES = [
  { id: 1, role: 'ai', content: "Hello! I am Saktrix AI. How can I help you build your next neural interface today?" }
];

export const LiveAIDemo = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [streamedText, setStreamedText] = useState('');

  const simulateAIResponse = async (userText) => {
    setIsTyping(true);
    setStreamedText('');
    
    // AI Thinking...
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsTyping(false);
    const fullResponse = `Based on your request "${userText}", I recommend using a Bento Grid layout combined with our new Aurora Glow effects. It provides a high-density, futuristic information display suitable for 2026 AI requirements.`;
    
    let currentText = '';
    for (let i = 0; i < fullResponse.length; i++) {
      currentText += fullResponse[i];
      setStreamedText(currentText);
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    
    setMessages(prev => [...prev, { id: Date.now(), role: 'ai', content: fullResponse }]);
    setStreamedText('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = { id: Date.now(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const userText = input;
    setInput('');
    simulateAIResponse(userText);
  };

  return (
    <section className="py-24 px-6 bg-slate-950/50 neural-grid relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
            <RiSparklingFill />
            Interactive Demo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Build for the <br />
            <span className="saktrix-aurora-text">AI Generation</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Experience the fluidity of next-generation AI interfaces. Our components are pre-baked with 
            streaming support, thinking states, and neural animations out of the box.
          </p>
          
          <ul className="space-y-4">
            {[
              "Real-time text streaming support",
              "Advanced thinking & loading states",
              "Neural-responsive animations",
              "Glassmorphic design language"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <div className="h-5 w-5 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* AI Interface Mockup */}
        <div className="flex-1 w-full max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl overflow-hidden border-white/5 shadow-2xl relative"
          >
            {/* Window Header */}
            <div className="h-12 border-b border-white/5 bg-white/5 flex items-center justify-between px-6">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                Saktrix Neural Engine v2.0
              </div>
            </div>

            {/* Chat Area */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-6 flex flex-col scrollbar-hide">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                      msg.role === 'ai' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-indigo-500/20 text-indigo-400'
                    }`}>
                      {msg.role === 'ai' ? <RiRobot2Fill /> : <RiUser3Fill />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm max-w-[80%] ${
                      msg.role === 'ai' 
                        ? 'bg-white/5 border border-white/5 text-slate-200' 
                        : 'bg-indigo-500 text-white rounded-tr-none'
                    }`}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Streaming Content */}
              {streamedText && (
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <RiRobot2Fill />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-slate-200 text-sm max-w-[80%]">
                    {streamedText}
                    <span className="inline-block w-1.5 h-4 bg-cyan-500 ml-1 animate-pulse" />
                  </div>
                </div>
              )}

              {/* Thinking State */}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <RiRobot2Fill />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-1.5 h-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 animate-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 animate-bounce delay-150" />
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 animate-bounce delay-300" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-6 pt-0">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl opacity-20 group-focus-within:opacity-100 transition duration-500 blur" />
                <div className="relative flex items-center bg-slate-900 rounded-xl border border-white/10 group-focus-within:border-cyan-500/50 transition-colors overflow-hidden">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Saktrix AI about components..."
                    className="flex-1 bg-transparent px-6 py-4 text-sm text-white focus:outline-none placeholder:text-slate-600"
                  />
                  <button 
                    type="submit"
                    className="p-4 text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    <RiSendPlane2Fill className="text-xl" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest justify-center">
                <span>Model: Neural-V2</span>
                <div className="w-1 h-1 rounded-full bg-slate-700" />
                <span>Tokens: 124/8k</span>
                <div className="w-1 h-1 rounded-full bg-slate-700" />
                <span>Latency: 42ms</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
