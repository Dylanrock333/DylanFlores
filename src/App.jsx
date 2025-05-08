import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pitch from './components/Pitch';
import Services from './components/Services';
import Process from './components/Process';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Pitch />
        <About />
        <Services />
        <Process />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 