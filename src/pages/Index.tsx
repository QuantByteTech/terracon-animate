
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HorizontalScroll from '@/components/HorizontalScroll';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showHorizontal, setShowHorizontal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Disable horizontal scrolling for mobile devices
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowHorizontal(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      <Loader onLoadingComplete={handleLoadingComplete} />
      
      {!isLoading && (
        <motion.div 
          className="page-transition animate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Navbar />
          
          {windowWidth >= 768 && showHorizontal ? (
            <HorizontalScroll>
              <Hero />
              <div className="w-screen h-screen flex-shrink-0">
                <About />
              </div>
              <div className="w-screen h-screen flex-shrink-0">
                <Services />
              </div>
              <div className="w-screen h-screen flex-shrink-0">
                <Projects />
              </div>
              <div className="w-screen h-screen flex-shrink-0">
                <Contact />
              </div>
              <div className="w-screen flex-shrink-0">
                <Footer />
              </div>
            </HorizontalScroll>
          ) : (
            <>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Contact />
              <Footer />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
