
import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalWidth, setTotalWidth] = useState(0);
  
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"] 
  });

  // Make the scrolling feel smoother with a spring
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 50, 
    stiffness: 400 
  });
  
  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        // Get the total width of all sections inside the container
        const scrollWidth = containerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        
        // Set the total width (the distance we want to travel)
        setTotalWidth(scrollWidth - viewportWidth);
        
        // Set the container height to enable enough scrolling
        containerRef.current.style.height = `${scrollWidth}px`;
      }
    };
    
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    
    return () => {
      window.removeEventListener('resize', calculateWidth);
    };
  }, []);
  
  // Transform the horizontal position based on scroll progress
  const x = useTransform(smoothProgress, [0, 1], [0, -totalWidth]);
  
  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <motion.div
        style={{ x }}
        className="flex will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HorizontalScroll;
