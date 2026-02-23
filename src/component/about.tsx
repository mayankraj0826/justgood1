import { motion } from 'framer-motion';
import { Award, Leaf, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-coffee-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c9a66b 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream-100 mt-3 mb-6">
              Coffee, Elevated to
              <span className="text-caramel-400"> Art Form</span>
            </h2>
            <p className="text-cream-300 text-lg leading-relaxed mb-8">
              At Velvet Bean, we believe exceptional coffee starts with exceptional beans. 
              We source directly from sustainable farms, roast in small batches, and craft 
              every cup with the precision of a master artist.
            </p>
            <p className="text-cream-300 leading-relaxed mb-8">
              Our journey began in a small garage with a single roaster and a big dream. 
              Today, we continue that spirit of obsession with every bean we roast.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <StatItem icon={Award} value="15+" label="Awards Won" />
              <StatItem icon={Leaf} value="100%" label="Sustainable" />
              <StatItem icon={Heart} value="50K+" label="Happy Customers" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-caramel-400/20 to-teal-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-coffee-900 rounded-2xl border-2 border-caramel-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-caramel-500 to-coffee-600 flex items-center justify-center">
                      <span className="font-display text-4xl">☕</span>
                    </div>
                    <p className="text-cream-200 font-medium">Est. 2015</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-coffee-700 rounded-2xl p-4 shadow-xl"
            >
              <p className="text-cream-100 font-bold text-lg">Fresh Roasted</p>
              <p className="text-caramel-400 text-sm">Daily in small batches</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-teal-500/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-teal-400" />
      </div>
      <p className="text-cream-100 font-bold text-2xl">{value}</p>
      <p className="text-cream-300 text-sm">{label}</p>
    </div>
  );
}
