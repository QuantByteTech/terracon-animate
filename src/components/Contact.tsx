
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      // Reset submission state after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  // Animations
  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" },
    blur: { scale: 1, boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }
  };
  
  const contactInfo = [
    {
      icon: "📍",
      title: "Office Location",
      details: "Dungun, Terengganu, Malaysia"
    },
    {
      icon: "📞",
      title: "Phone Number",
      details: "+60 1X-XXX XXXX"
    },
    {
      icon: "✉️",
      title: "Email Address",
      details: "info@terraconbuilders.com"
    },
    {
      icon: "⏰",
      title: "Working Hours",
      details: "Monday - Friday: 9AM - 5PM"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="min-h-screen w-screen py-20 bg-terracon-50 relative"
    >
      <motion.div 
        className="container mx-auto px-6"
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
            Get In Touch
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-terracon-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-terracon-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Have a project in mind or questions about our services? We'd love to hear from you. Reach out to us today.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div 
            className="md:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-bold text-terracon-800 mb-6">Contact Information</h3>
            
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h4 className="text-terracon-800 font-medium">{item.title}</h4>
                  <p className="text-terracon-600">{item.details}</p>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-terracon-800 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-terracon-200 flex items-center justify-center text-terracon-700 hover:bg-terracon-700 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>FB</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-terracon-200 flex items-center justify-center text-terracon-700 hover:bg-terracon-700 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>IG</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-terracon-200 flex items-center justify-center text-terracon-700 hover:bg-terracon-700 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>LI</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-7 bg-white p-8 rounded-xl shadow-lg border border-terracon-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-bold text-terracon-800 mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                className="bg-green-50 text-green-700 p-6 rounded-lg border border-green-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="font-bold mb-2">Thank you for your message!</h4>
                <p>We've received your inquiry and will get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-terracon-700 block">Your Name</label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-terracon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracon-500 transition-all duration-300"
                      variants={inputVariants}
                      initial="blur"
                      whileFocus="focus"
                      animate="blur"
                    />
                  </motion.div>
                  
                  <motion.div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-terracon-700 block">Email Address</label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-terracon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracon-500 transition-all duration-300"
                      variants={inputVariants}
                      initial="blur"
                      whileFocus="focus"
                      animate="blur"
                    />
                  </motion.div>
                </div>
                
                <motion.div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-terracon-700 block">Phone Number</label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-terracon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracon-500 transition-all duration-300"
                    variants={inputVariants}
                    initial="blur"
                    whileFocus="focus"
                    animate="blur"
                  />
                </motion.div>
                
                <motion.div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-terracon-700 block">Your Message</label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-terracon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracon-500 transition-all duration-300"
                    variants={inputVariants}
                    initial="blur"
                    whileFocus="focus"
                    animate="blur"
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="bg-terracon-800 hover:bg-terracon-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 w-full md:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <motion.div 
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      />
                      <span className="ml-2">Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
