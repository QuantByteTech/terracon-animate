
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  year: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  // Sample projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Residential Complex",
      category: "Residential",
      description: "A collection of 24 luxurious terrace houses featuring contemporary design and premium finishes.",
      image: "bg-terracon-300",
      location: "Kuala Terengganu",
      year: "2022"
    },
    {
      id: 2,
      title: "Commercial Plaza",
      category: "Commercial",
      description: "A two-story commercial plaza with 12 shop lots designed for retail and office spaces.",
      image: "bg-terracon-400",
      location: "Dungun",
      year: "2021"
    },
    {
      id: 3,
      title: "Luxury Villa Development",
      category: "Residential",
      description: "A collection of 8 exclusive bungalows overlooking the South China Sea.",
      image: "bg-terracon-500",
      location: "Kuantan",
      year: "2020"
    },
    {
      id: 4,
      title: "Mixed-Use Development",
      category: "Commercial",
      description: "An innovative project combining retail space with residential units.",
      image: "bg-terracon-600",
      location: "Kemaman",
      year: "2019"
    },
    {
      id: 5,
      title: "Community Center",
      category: "Infrastructure",
      description: "A public facility designed to serve as a gathering place for local community events.",
      image: "bg-terracon-700",
      location: "Dungun",
      year: "2018"
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen w-screen py-20 relative overflow-hidden"
    >
      <motion.div 
        className="container mx-auto px-6 relative"
        style={{ opacity, y }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span 
            className="text-sm uppercase tracking-widest text-terracon-600 font-medium block mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Portfolio
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-terracon-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-terracon-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Explore our diverse portfolio of completed construction projects that showcase our expertise and commitment to quality.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <motion.div 
                className={`h-80 rounded-xl overflow-hidden ${project.image} relative`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeProject === project.id ? 1 : 0, 
                    y: activeProject === project.id ? 0 : 20 
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-6 flex flex-col justify-end"
                >
                  <span className="text-white/80 text-sm font-medium mb-1">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex justify-between text-white/70 text-sm">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 left-4 right-4 h-8 bg-terracon-600 rounded-b-lg opacity-20 blur-lg"
                layoutId={`shadow-${project.id}`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-terracon-800 hover:bg-terracon-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
