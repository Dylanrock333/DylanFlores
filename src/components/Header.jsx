import React from 'react';
import '../styles/components/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Dylan Flores</h1>
        <p>Your local Tech Cowboy and Professional 'Hello World' developer</p>
      </div>
      <div className="header-contact">
        <a href="mailto:dylanf36200@gmail.com">dylanf36200@gmail.com</a>
      </div>
    </header>
  );
}

export default Header; 