import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Droplets, Thermometer, Clock } from 'lucide-react';

type Category = 'all' | 'hot' | 'cold' | 'specialty';

const menuItems = [
  {
    id: 1,
    name: 'Classic Americano',
    description: 'Rich espresso with hot water, silky crema',
    price: 4.50,
    category: 'hot',
    prep: '180°F'
  },
  {
    id: 2,
    name: 'Velvet Latte',
    description: 'Espresso with steamed milk, light foam art',
    price: 5.50,
    category: 'hot',
    prep: '155°F'
  },
  {
    id: 3,
    name: 'Caramel Cloud',
    description: 'Vanilla latte with caramel drizzle, cloud foam',
    price: 6.00,
    category: 'specialty',
    prep: '155°F'
  },
  {
    id: 4,
    name: 'Cold Brew Tower',
    description: 'Steeped 24hrs, smooth, chocolate notes',
    price: 5.00,
    category: 'cold',
    prep: 'Cold'
  },
  {
    id: 5,
    name: 'Iced Golden Hour',
    description: 'Medium roast, honey, citrus over ice',
    price: 5.50,
    category: 'cold',
    prep: 'Cold'
  },
  {
    id: 6,
    name: 'Mocha Dream',
    description: 'Espresso, chocolate, whipped cream, cocoa',
    price: 6.50,
    category: 'specialty',
    prep: 'Mixed'
  },
  {
    id: 7,
    name: 'Espresso Shot',
    description: 'Double shot, bold, caramel finish',
    price: 3.50,
    category: 'hot',
    prep: '195°F'
  },
  {
    id: 8,
    name: 'Nitro Velvet',
    description: 'Nitrogen-infused cold brew, creamy head',
    price: 5.50,
    category: 'cold',
    prep: '38°F'
  },
];

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Drinks' },
  { id: 'hot', label: 'Hot' },
  { id: 'cold', label: 'Cold' },
  { id: 'specialty', label: 'Specialty' },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-coffee-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">
            Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream-100 mt-3">
            Our Offerings
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300
                ${activeCategory === cat.id 
                  ? 'bg-teal-500 text-white shadow-[0_0_20px_rgba(91,181,166,0.4)]' 
                  : 'bg-coffee-800 text-cream-300 hover:bg-coffee-700'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function MenuItem({ item }: { item: typeof menuItems[0] }) {
  const CategoryIcon = item.category === 'hot' ? Thermometer : 
                       item.category === 'cold' ? Droplets : Coffee;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group bg-coffee-800 rounded-xl p-5 hover:bg-coffee-700 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`
          w-10 h-10 rounded-full flex items-center justify-center
          ${item.category === 'hot' ? 'bg-orange-500/20 text-orange-400' : ''}
          ${item.category === 'cold' ? 'bg-blue-500/20 text-blue-400' : ''}
          ${item.category === 'specialty' ? 'bg-caramel-500/20 text-caramel-400' : ''}
        `}>
          <CategoryIcon className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-caramel-400">
          <Clock className="w-3 h-3" />
          <span className="text-xs">{item.prep}</span>
        </div>
      </div>

      <h3 className="font-display text-lg font-bold text-cream-100 mb-1 group-hover:text-caramel-400 transition-colors">
        {item.name}
      </h3>
      <p className="text-cream-300 text-sm mb-3 line-clamp-2">
        {item.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-cream-100 font-bold">
          ${item.price.toFixed(2)}
        </span>
        <button className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-teal-500 text-white text-sm rounded-full transition-all duration-300">
          Add
        </button>
      </div>
    </motion.div>
  );
}
