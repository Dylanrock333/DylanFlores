import React from 'react';
import '../styles/components/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Your Name</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; 