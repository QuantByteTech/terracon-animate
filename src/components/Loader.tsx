
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000); // Give a moment for the exit animation
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    }),
  };

  const company = "TERRACON";

  return (
    <AnimatePresence>
      {!isComplete ? (
        <motion.div
          className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.6, 0.01, -0.05, 0.95],
            },
          }}
        >
          <div className="mb-16 relative">
            <div className="flex space-x-2 overflow-hidden">
              {company.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-5xl md:text-7xl font-display font-bold text-terracon-800"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-1 bg-terracon-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
          
          <motion.div 
            className="flex gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              className="w-4 h-4 rounded-full bg-terracon-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, repeatDelay: 0.2 }}
            />
            <motion.div 
              className="w-4 h-4 rounded-full bg-terracon-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.2, repeatDelay: 0.2 }}
            />
            <motion.div 
              className="w-4 h-4 rounded-full bg-terracon-700"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.4, repeatDelay: 0.2 }}
            />
          </motion.div>
          
          <motion.p 
            className="text-sm text-terracon-600 mt-8 tracking-wider font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Building quality since 2003
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Loader;
