import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-gray-50">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;