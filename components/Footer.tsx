
import React from 'react';
import { Play, Twitter, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-1.5 rounded-lg">
                <Play className="text-white w-4 h-4 fill-current" />
              </div>
              <span className="text-xl font-display font-extrabold tracking-tight dark:text-white">VidFlux</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs mb-8 leading-relaxed">
              The all-in-one social video engine for modern creators, marketers, and digital agencies.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all border border-slate-100 dark:border-slate-800">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-8 dark:text-white">Product</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Video Downloader</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">AI Video Editor</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Caption Generator</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Chrome Extension</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-8 dark:text-white">Company</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-indigo-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-8 dark:text-white">Resources</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Media Kit</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 dark:text-slate-500">
          <p>© 2024 VidFlux SaaS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> 
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
