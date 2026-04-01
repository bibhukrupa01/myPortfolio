import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

function Loader({ onComplete, isGSAPLoaded }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isGSAPLoaded) {
      gsap.to('.loader__spinner', {
        rotation: 360,
        duration: 0.8,
        ease: 'none',
        repeat: -1
      });

      setTimeout(() => {
        gsap.to('#loader', {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }
        });
      }, 1500);
    } else {
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 1500);
    }
  }, [isGSAPLoaded, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="loader" id="loader">
      <div className="loader__spinner"></div>
      <p className="loader__text">Loading...</p>
    </div>
  );
}

export default Loader;
