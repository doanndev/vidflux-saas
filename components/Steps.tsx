
import React from 'react';
import { Link2, Download, Scissors } from 'lucide-react';

const Steps: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-950" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 dark:text-white">Download in 3 Simple Steps</h2>
          <p className="text-slate-500 dark:text-slate-400">Our streamlined process gets you from URL to export in under 60 seconds.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-slate-100 dark:bg-slate-800 -z-10"></div>
          
          <div className="flex-1 text-center group">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center relative border border-slate-100 dark:border-slate-800 group-hover:border-indigo-500 transition-colors">
              <Link2 className="w-8 h-8 text-indigo-500" />
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">1</div>
            </div>
            <h4 className="text-xl font-bold mt-8 mb-4 dark:text-white">Paste Link</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-[240px] mx-auto">
              Simply copy the URL from any social platform and paste it here.
            </p>
          </div>

          <div className="flex-1 text-center group">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center relative border border-slate-100 dark:border-slate-800 group-hover:border-purple-500 transition-colors">
              <Download className="w-8 h-8 text-purple-500" />
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">2</div>
            </div>
            <h4 className="text-xl font-bold mt-8 mb-4 dark:text-white">Download</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-[240px] mx-auto">
              Select quality and format. Our high-speed servers do the rest.
            </p>
          </div>

          <div className="flex-1 text-center group">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center relative border border-slate-100 dark:border-slate-800 group-hover:border-indigo-500 transition-colors">
              <Scissors className="w-8 h-8 text-indigo-500" />
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">3</div>
            </div>
            <h4 className="text-xl font-bold mt-8 mb-4 dark:text-white">Edit & Export</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-[240px] mx-auto">
              Use our built-in editor to trim and prep your video for sharing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
