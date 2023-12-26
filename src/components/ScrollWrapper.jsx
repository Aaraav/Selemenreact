import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, // Enable smooth scrolling
        // Add other Locomotive Scroll options as needed
      });

      // Update Locomotive Scroll on component unmount
      return () => {
        if (locomotiveScroll) {
          locomotiveScroll.destroy();
        }
      };
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollWrapper;

