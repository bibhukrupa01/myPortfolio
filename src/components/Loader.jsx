import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

function Loader({ onComplete, isGSAPLoaded }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isGSAPLoaded) {
      gsap.to('.loader__spinner', {
        rotation: 360,
        duration: 1,
        ease: 'none',
        repeat: -1
      });

      // Hide after a brief delay
      setTimeout(() => {
        gsap.to('#loader', {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }
        });
      }, 2000);
    } else {
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 2000);
    }
  }, [isGSAPLoaded, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="loader" id="loader">
      <div className="loader__spinner"></div>
      <p className="loader__text">Almost Ready...</p>
    </div>
  );
}

export default Loader;
