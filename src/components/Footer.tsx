
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-terracon-800 text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div 
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <Link to="/" className="font-display text-2xl font-bold text-white mb-6 block">
              TERRACON
            </Link>
            <p className="text-terracon-300 mb-6 max-w-md">
              TERRACON BUILDERS INDUSTRIES is a premier construction company with over 20 years of experience, dedicated to building innovative homes and infrastructure that reflect personalities and lifestyles.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-terracon-700 flex items-center justify-center text-white hover:bg-white hover:text-terracon-800 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>FB</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-terracon-700 flex items-center justify-center text-white hover:bg-white hover:text-terracon-800 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>IG</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-terracon-700 flex items-center justify-center text-white hover:bg-white hover:text-terracon-800 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>LI</span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            custom={1}
          >
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-terracon-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2 text-xs">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            custom={2}
          >
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-terracon-400">📍</span>
                <span className="text-terracon-300">Dungun, Terengganu, Malaysia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-terracon-400">📞</span>
                <span className="text-terracon-300">+60 1X-XXX XXXX</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-terracon-400">✉️</span>
                <span className="text-terracon-300">info@terraconbuilders.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-terracon-400">⏰</span>
                <span className="text-terracon-300">Monday - Friday: 9AM - 5PM</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-terracon-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-terracon-400 text-sm">
            © {currentYear} TERRACON BUILDERS INDUSTRIES. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-terracon-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-terracon-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-terracon-700/20 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute -top-32 -right-32 w-96 h-96 bg-terracon-700/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </footer>
  );
};

export default Footer;
