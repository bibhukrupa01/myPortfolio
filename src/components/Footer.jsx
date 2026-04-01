import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

function Footer({ isGSAPLoaded }) {
  const scrollToTop = () => {
    if (isGSAPLoaded) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: 0 },
        ease: "power3.inOut"
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p>&copy; {new Date().getFullYear()} Bibhu Krupa Pradhan. All rights reserved.</p>
          <div className="footer__social">
            <a href="https://github.com/bibhukrupa01" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/bibhukrupa01" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com/bibhukrupa5" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
        <button className="back-to-top" id="backToTop" onClick={scrollToTop}>↑</button>
      </div>
    </footer>
  );
}

export default Footer;
