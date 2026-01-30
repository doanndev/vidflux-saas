
import React from 'react';

const platforms = [
  { name: 'TikTok', icon: 'https://cdn.simpleicons.org/tiktok/888888/ffffff' },
  { name: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/888888/ffffff' },
  { name: 'YouTube', icon: 'https://cdn.simpleicons.org/youtube/888888/ffffff' },
  { name: 'X', icon: 'https://cdn.simpleicons.org/x/888888/ffffff' },
  { name: 'Facebook', icon: 'https://cdn.simpleicons.org/facebook/888888/ffffff' }
];

const Platforms: React.FC = () => {
  return (
    <section className="py-16 border-y border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-12">Supported Platforms</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {platforms.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2 group cursor-pointer">
              <img src={p.icon} alt={p.name} className="h-8 md:h-10 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold text-slate-400 group-hover:text-indigo-500 uppercase tracking-widest">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
