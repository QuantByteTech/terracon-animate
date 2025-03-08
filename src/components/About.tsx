import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  // Content animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen w-screen flex items-center py-20 relative"
    >
      <motion.div 
        className="container mx-auto px-6"
        style={{ opacity, y }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 md:order-1"
          >
            <motion.span 
              variants={itemVariants}
              className="text-sm uppercase tracking-widest text-terracon-600 font-medium block mb-3"
            >
              About Terracon
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-display font-bold text-terracon-800 mb-6"
            >
              Over 20 Years of Construction Excellence
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-terracon-700 mb-6"
            >
              TERRACON BUILDERS INDUSTRIES is a premier building construction company based in Dungun, Terengganu, Malaysia. We specialize in constructing terrace houses, semi-detached houses, bungalows, shop lots and minor infrastructure projects.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-terracon-700 mb-6"
            >
              Our founders have over twenty years of experience in real estate property development and construction, building a reputation for delivering the highest quality work throughout our service areas.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-terracon-700 mb-8"
            >
              With our team of experts and professionals in engineering, construction, and architecture, we are prepared to create innovative homes and buildings that reflect personalities and lifestyles. Our design and build team listens carefully to client needs and expresses them through thoughtful design, providing complete flexibility.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-terracon-500 mb-2">20+</span>
                <span className="text-terracon-700">Years of Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-terracon-500 mb-2">100+</span>
                <span className="text-terracon-700">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-terracon-500 mb-2">50+</span>
                <span className="text-terracon-700">Expert Team Members</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-terracon-500 mb-2">95%</span>
                <span className="text-terracon-700">Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image grid with staggered animation */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden h-48 md:h-64"
              >
                <div className="w-full h-full bg-terracon-300 rounded-lg"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden h-64 md:h-80 -mt-8"
              >
                <div className="w-full h-full bg-terracon-400 rounded-lg"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden h-64 md:h-80 -mt-8"
              >
                <div className="w-full h-full bg-terracon-500 rounded-lg"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden h-48 md:h-64"
              >
                <div className="w-full h-full bg-terracon-600 rounded-lg"></div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-terracon-100 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            />
            
            <motion.div 
              className="absolute -top-6 -right-6 w-32 h-32 bg-terracon-50 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
