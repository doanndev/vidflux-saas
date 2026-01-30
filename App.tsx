
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import Features from './components/Features';
import Steps from './components/Steps';
import CreatorSection from './components/CreatorSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Platforms />
        <Features />
        <Steps />
        <CreatorSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
