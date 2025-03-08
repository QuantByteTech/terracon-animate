
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-8 border border-terracon-100 h-full flex flex-col"
    >
      <div className="mb-6 w-16 h-16 bg-terracon-50 rounded-full flex items-center justify-center text-terracon-600 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-terracon-800 mb-4">{title}</h3>
      <p className="text-terracon-600 flex-grow">{description}</p>
      <motion.div 
        className="mt-6 h-1 bg-terracon-100 rounded-full overflow-hidden"
        whileHover={{ scale: 1 }}
      >
        <motion.div 
          className="h-full bg-terracon-500"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  const services = [
    {
      title: "Residential Construction",
      description: "Building high-quality terrace houses, semi-detached houses, and bungalows with attention to detail and craftsmanship.",
      icon: "🏡"
    },
    {
      title: "Commercial Construction",
      description: "Developing shop lots and commercial spaces designed for functionality, visibility, and business growth.",
      icon: "🏢"
    },
    {
      title: "Infrastructure Projects",
      description: "Implementing minor infrastructure works that support communities and enhance urban environments.",
      icon: "🏗️"
    },
    {
      title: "Design & Build Services",
      description: "Creating custom design solutions that perfectly match your vision and lifestyle requirements.",
      icon: "✏️"
    },
    {
      title: "Renovation & Remodeling",
      description: "Transforming existing structures with expert renovations that add value and enhance functionality.",
      icon: "🔨"
    },
    {
      title: "Project Management",
      description: "Overseeing all aspects of construction with meticulous planning, coordination, and quality control.",
      icon: "📋"
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="min-h-screen w-screen py-20 bg-terracon-50 relative"
    >
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
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
            Our Expertise
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-terracon-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive Construction Services
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-terracon-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            We deliver a wide range of construction and design services tailored to meet your specific needs and vision.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
