
import React from 'react';
import { CloudDownload, Zap, Monitor, TrendingUp } from 'lucide-react';

const featureList = [
  {
    icon: <CloudDownload />,
    title: "Multi-Platform Downloader",
    description: "Download 4K videos from 20+ social platforms without watermarks in seconds.",
    color: "indigo"
  },
  {
    icon: <Zap />,
    title: "Instant AI Editor",
    description: "Trim, crop, and add subtitles automatically using our cloud-based AI engine.",
    color: "purple"
  },
  {
    icon: <Monitor />,
    title: "High Fidelity Output",
    description: "Export in any format up to 4K 60FPS. We preserve original quality every time.",
    color: "indigo"
  },
  {
    icon: <TrendingUp />,
    title: "Trend Insights",
    description: "Discover what's viral on different platforms to stay ahead of the curve.",
    color: "purple"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 dark:text-white">Powerful Toolkit for Creators</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need to handle social media content like a pro, all within a single integrated workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((item, i) => (
            <div 
              key={i} 
              className="group p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color === 'indigo' ? 'bg-indigo-500/10 text-indigo-500' : 'bg-purple-500/10 text-purple-500'} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7' })}
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
