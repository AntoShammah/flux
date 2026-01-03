"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Terminal, ChevronLeft, Zap, ShieldCheck } from 'lucide-react';

export default function SpecialistTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { role: 'system', text: 'FLUX ENGINE v1.0.0 - CORE_LOADED' },
    { role: 'ai', text: 'Specialist environment active. Protocol: Natural Language to API.' },
    { role: 'ai', text: 'How can I assist your workflow today?' }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newHistory = [...history, { role: 'user', text: input }];
    setHistory(newHistory);
    setInput('');

    // Simulate Flux Engine Processing
    setTimeout(() => {
      setHistory(prev => [...prev, { 
        role: 'ai', 
        text: `Analyzing "${input}"... Action mapped to GET /api/v1/resources. Execution pending.` 
      }]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-emerald-500 font-mono p-4 flex flex-col selection:bg-emerald-500/30">
      {/* Terminal Header */}
      <header className="flex justify-between items-center border-b border-emerald-900/30 pb-4 mb-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-emerald-900 hover:text-emerald-500 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span className="text-xs font-black tracking-tighter uppercase">Flux // Specialist_Mode</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-emerald-900">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> Encrypted</span>
          <span className="flex items-center gap-1 text-emerald-600"><Zap className="w-3 h-3 text-yellow-500"/> System Live</span>
        </div>
      </header>

      {/* Terminal Output */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-2 mb-6 scrollbar-hide">
        {history.map((msg, i) => (
          <div key={i} className="flex gap-3 animate-in fade-in slide-in-from-left duration-300">
            <span className={`shrink-0 ${msg.role === 'ai' ? 'text-blue-500' : msg.role === 'system' ? 'text-yellow-600' : 'text-emerald-800'}`}>
              {msg.role === 'ai' ? '❖' : msg.role === 'system' ? '::' : '>'}
            </span>
            <p className={`leading-relaxed ${msg.role === 'system' ? 'italic opacity-70' : ''}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      {/* Terminal Input Area */}
      <div className="border-t border-emerald-900/30 pt-6 relative">
        <form onSubmit={handleCommand} className="flex items-center gap-3 bg-emerald-950/20 p-4 rounded-lg border border-emerald-900/20 focus-within:border-emerald-500/50 transition-all">
          <span className="text-emerald-500 animate-pulse">$</span>
          <input 
            className="bg-transparent border-none outline-none w-full text-emerald-400 placeholder:text-emerald-900"
            placeholder="Awaiting command..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </form>
        
        {/* THE SIGNATURE */}
        <div className="mt-8 flex justify-center">
          <p className="text-[10px] text-emerald-900 font-medium uppercase tracking-[0.4em]">
            crafted with ♡모 by <span className="text-emerald-700 font-black italic">Anto Shammah</span>
          </p>
        </div>
      </div>
    </div>
  );
}
