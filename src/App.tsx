import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-coffee-900">
      <Navbar />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <FeaturedProducts />
          <About />
          <MenuSection />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
