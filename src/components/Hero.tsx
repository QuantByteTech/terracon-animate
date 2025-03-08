
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  return (
    <section id="home" ref={targetRef} className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-terracon-50 to-terracon-100 z-0"
        style={{ scale }}
      />
      
      {/* Animated background grid */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px] z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      />
      
      {/* Hero content */}
      <motion.div 
        className="container mx-auto px-6 z-20 relative"
        style={{ opacity, y }}
      >
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div 
            className="overflow-hidden mb-3"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.span className="text-sm font-medium uppercase tracking-widest text-terracon-600 block">
              Excellence in Construction
            </motion.span>
          </motion.div>
          
          <div className="overflow-hidden relative">
            <motion.h1 
              className="text-5xl md:text-7xl font-display font-bold text-terracon-800 mb-6"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: "easeOut"
              }}
            >
              Building Dreams <br className="md:hidden" />
              <span className="text-terracon-500">Crafting Futures</span>
            </motion.h1>
          </div>
          
          <motion.p 
            className="text-lg md:text-xl text-terracon-700 max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            TERRACON BUILDERS INDUSTRIES transforms visions into reality with expert construction and innovative design services across Malaysia.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-terracon-800 hover:bg-terracon-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
              href="#contact"
            >
              Contact Us
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border border-terracon-800 text-terracon-800 hover:bg-terracon-50 px-8 py-3 rounded-md font-medium transition-colors duration-300"
              href="#about"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-terracon-500 rounded-full flex justify-center"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 1.5 
          }}
        >
          <motion.div 
            className="w-1 h-3 bg-terracon-500 rounded-full mt-2"
            animate={{ 
              y: [0, 8, 0], 
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5 
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
