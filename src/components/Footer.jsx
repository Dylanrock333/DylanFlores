import React from 'react';
import '../styles/components/Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} Dylan Flores. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 