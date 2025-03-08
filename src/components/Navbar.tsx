
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  const menuVariants = {
    closed: {
      scale: 0,
      opacity: 0,
      transition: {
        delay: 0.15,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle anchor links for single page version
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="visible"
        animate={isScrolled ? "hidden" : "visible"}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            className="z-50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="font-display text-2xl font-bold text-terracon-800">
              TERRACON
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <a 
                  href={`#${link.name.toLowerCase()}`}
                  onClick={(e) => handleSectionClick(e, link.name.toLowerCase())}
                  className="text-terracon-700 hover:text-terracon-500 transition-colors duration-300 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracon-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="z-50 block md:hidden relative w-10 h-10"
            onClick={toggleMenu}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block h-0.5 w-6 bg-terracon-800 transform transition duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-terracon-800 transition duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-terracon-800 transform transition duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center space-y-8"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <a
                    href={`#${link.name.toLowerCase()}`}
                    onClick={(e) => handleSectionClick(e, link.name.toLowerCase())}
                    className="text-2xl font-display text-terracon-800 hover:text-terracon-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
