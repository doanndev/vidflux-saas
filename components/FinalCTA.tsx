
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-12 md:p-24 rounded-[3rem] shadow-2xl relative overflow-hidden text-center group">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 leading-tight">
              Start Creating Better <br /> Social Videos Today
            </h2>
            <p className="text-indigo-100 text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Join 50,000+ creators who are scaling their presence with our AI-powered engine.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-white text-indigo-700 hover:bg-slate-50 font-bold rounded-full text-lg shadow-xl hover:scale-105 transition-all active:scale-95">
                Get Started for Free
              </button>
              <button className="w-full sm:w-auto px-12 py-5 bg-white/10 text-white hover:bg-white/20 border border-white/20 font-bold rounded-full text-lg transition-all active:scale-95 backdrop-blur-sm">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
