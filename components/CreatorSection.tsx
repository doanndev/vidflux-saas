
import React from 'react';
import { Check } from 'lucide-react';

const cases = [
  {
    title: "Content Creators",
    desc: "Repurpose your long-form content into viral shorts. Grab clips from your streams instantly.",
    features: ["No Watermark Downloads", "Easy AI Subtitles"],
    img: "https://picsum.photos/seed/creator1/800/600"
  },
  {
    title: "Digital Marketers",
    desc: "Competitor research made easy. Download ad inspirations and create benchmark reels in minutes.",
    features: ["Batch Download Ads", "Engagement Analysis"],
    img: "https://picsum.photos/seed/marketer/800/600"
  },
  {
    title: "E-commerce Sellers",
    desc: "Curate UGC content for your store. Download customer reviews and TikToks for social proof.",
    features: ["Video Editing Tools", "Format Conversion"],
    img: "https://picsum.photos/seed/seller/800/600"
  }
];

const CreatorSection: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900/30" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 dark:text-white">Built for Every Creator</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Discover how VidFlux fits into your unique workflow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <div key={i} className="overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl group hover:shadow-2xl transition-all">
              <div className="h-56 overflow-hidden relative">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-bold mb-4 dark:text-white">{c.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-sm">
                  {c.desc}
                </p>
                <ul className="space-y-4">
                  {c.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm font-semibold dark:text-slate-200">
                      <div className="p-1 rounded-full bg-indigo-500/10 text-indigo-500">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
