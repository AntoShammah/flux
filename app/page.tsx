import React from 'react';
import Link from 'next/link';
import { Sparkles, Activity, Terminal, ChevronRight } from 'lucide-react';

export default function FluxLauncher() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900 font-sans">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
      
      <header className="text-center mb-16 animate-in fade-in slide-in-from-top duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 rounded-full">
          <Sparkles className="w-3 h-3" /> The Pilot v1.0
        </div>
        <h1 className="text-7xl font-black tracking-tighter mb-4 bg-gradient-to-b from-slate-950 to-slate-600 bg-clip-text text-transparent">
          Flux
        </h1>
        <p className="text-slate-500 text-xl max-w-lg mx-auto leading-relaxed font-light">
          Liquifying API complexity. Talk to your data through natural conversation.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Style 1: The Modernist */}
        <div className="group relative border border-slate-200 p-8 rounded-3xl hover:border-blue-500 transition-all duration-500 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2">
          <div className="mb-6 bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Activity className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold mb-2">The Modernist</h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">Clean, card-based chat for streamlined daily interactions.</p>
          <button className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-4 transition-all uppercase tracking-widest">
            Enter Flow <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Style 2: The Analyst */}
        <div className="group relative border border-slate-200 p-8 rounded-3xl hover:border-emerald-500 transition-all duration-500 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2">
          <div className="mb-6 bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold mb-2">The Analyst</h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">Dual-pane power view for deep JSON exploration and chat.</p>
          <button className="flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:gap-4 transition-all uppercase tracking-widest">
            Enter Flow <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Style 3: The Specialist */}
        <Link href="/specialist" className="group relative border border-slate-200 p-8 rounded-3xl hover:border-slate-900 transition-all duration-500 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2
