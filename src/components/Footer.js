import React from 'react';
import '../styles/Footer.css';
import github from '../github.png';
import twitter from '../twitter.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          {/* Add your social media icons here */}
          <a href="https://twitter.com/kinghanzala_" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter"/>
          </a>
          <a href="https://github.com/kinghanzala" target="_blank" rel="noreferrer">
          <img src={github} alt="github"/>
          </a>
          {/* You can add more social media icons as needed */}
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Airdrop Info. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
