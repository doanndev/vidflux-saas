
import React from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4">
      <div className="hero-glow" />
      
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          New: AI Video Editor Integrated
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tight mb-8 leading-[1.05] text-slate-900 dark:text-white">
          Download & Edit <br />
          <span className="gradient-text">Social Videos</span> in One Place
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
          The ultimate companion for creators. Rip high-quality content from any platform, 
          edit instantly, and re-share with your unique touch.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <button className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full text-lg shadow-2xl shadow-indigo-600/30 hover:scale-105 transition-transform">
            Get Started Free
          </button>
          <button className="w-full sm:w-auto px-10 py-5 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 font-bold rounded-full text-lg transition-all flex items-center justify-center gap-2 dark:text-white">
            View Features <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
            <div className="absolute top-4 right-4 z-20">
               <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-bounce">
                  <div className="bg-green-500/20 p-2 rounded-lg text-green-500">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Status</p>
                    <p className="font-bold text-sm dark:text-white">Video Processed</p>
                  </div>
                </div>
            </div>
            
            <img 
              src="https://picsum.photos/seed/dashboard/1600/900" 
              alt="VidFlux Dashboard Mockup" 
              className="rounded-xl w-full aspect-video object-cover opacity-90 dark:opacity-100 grayscale-[0.5] dark:grayscale-0"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-60 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
