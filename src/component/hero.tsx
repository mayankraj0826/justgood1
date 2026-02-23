import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900 via-coffee-800 to-coffee-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-coffee-700/40 via-transparent to-transparent" />
        
        {/* Animated coffee beans */}
        <BeanDecoration />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-caramel-500/10 border border-caramel-500/30 rounded-full text-caramel-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Premium Single Origin
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream-100 mb-6 leading-tight"
        >
          Crafted for
          <span className="block text-caramel-400">the Bold</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cream-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience the art of exceptional coffee. Hand-roasted in small batches, 
          each cup tells a story of passion, precision, and perfection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,181,166,0.4)]">
            Explore Menu
          </button>
          <button className="px-8 py-4 border border-caramel-500/50 text-caramel-400 hover:bg-caramel-500/10 font-semibold rounded-full transition-all duration-300">
            Our Story
          </button>
        </motion.div>

        {/* Coffee cup visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="w-64 h-64 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-caramel-400/30 to-teal-500/20 rounded-full blur-3xl" />
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-b from-coffee-600 to-coffee-800 border-4 border-caramel-500/30 shadow-2xl">
                <div className="absolute inset-2 rounded-full bg-coffee-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-caramel-400/20 to-transparent" />
                  {/* Foam */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-cream-200/80 rounded-full blur-sm" />
                  <div className="absolute top-6 left-8 w-8 h-6 bg-cream-200/60 rounded-full blur-sm" />
                  <div className="absolute top-5 right-10 w-6 h-5 bg-cream-200/60 rounded-full blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-caramel-500/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function BeanDecoration() {
  const beans = [
    { x: '10%', y: '20%', size: 12, delay: 0 },
    { x: '85%', y: '15%', size: 10, delay: 0.2 },
    { x: '75%', y: '70%', size: 14, delay: 0.4 },
    { x: '20%', y: '75%', size: 11, delay: 0.6 },
    { x: '60%', y: '30%', size: 9, delay: 0.8 },
    { x: '40%', y: '60%', size: 13, delay: 1 },
  ];

  return (
    <>
      {beans.map((bean, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{ left: bean.x, top: bean.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1], 
            scale: 1,
            y: [0, -20, 0]
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay: bean.delay },
            scale: { duration: 0.5, delay: bean.delay },
            y: { duration: 4, repeat: Infinity, delay: bean.delay }
          }}
        >
          <div 
            className="bg-coffee-500 rounded-full"
            style={{ width: bean.size, height: bean.size * 1.5 }}
          >
            <div className="w-full h-1/2 border-b border-coffee-700/50" />
          </div>
        </motion.div>
      ))}
    </>
  );
}
