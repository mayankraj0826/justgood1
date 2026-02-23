import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Midnight Velvet',
    description: 'Dark chocolate, toasted almond, molasses',
    price: 24.99,
    image: 'dark-roast',
    rating: 4.9,
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Golden Hour',
    description: 'Caramel, honey, citrus zest, smooth finish',
    price: 22.99,
    image: 'medium-roast',
    rating: 4.8,
    tag: 'New'
  },
  {
    id: 3,
    name: 'Ethiopian Sunrise',
    description: 'Blueberry, jasmine, bright and floral',
    price: 28.99,
    image: 'light-roast',
    rating: 4.9,
    tag: 'Premium'
  },
  {
    id: 4,
    name: 'Velvet Espresso',
    description: 'Bold, rich, with hints of dark cocoa',
    price: 19.99,
    image: 'espresso',
    rating: 4.7,
    tag: null
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-coffee-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">
            Our Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream-100 mt-3">
            Featured Roasts
          </h2>
          <p className="text-cream-300 mt-4 max-w-xl mx-auto">
            Discover our master-roasted selections, each crafted to highlight 
            the unique character of premium beans.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-coffee-800 rounded-2xl p-6 transition-all duration-300 hover:bg-coffee-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30">
        {/* Tag */}
        {product.tag && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-semibold rounded-full">
            {product.tag}
          </span>
        )}

        {/* Product Image Placeholder */}
        <div className="relative h-40 mb-4 flex items-center justify-center">
          <div className={`
            w-28 h-28 rounded-full transition-all duration-300 group-hover:scale-110
            ${product.image === 'dark-roast' ? 'bg-gradient-to-b from-coffee-700 to-coffee-900' : ''}
            ${product.image === 'medium-roast' ? 'bg-gradient-to-b from-caramel-600 to-coffee-600' : ''}
            ${product.image === 'light-roast' ? 'bg-gradient-to-b from-caramel-400 to-caramel-600' : ''}
            ${product.image === 'espresso' ? 'bg-gradient-to-b from-coffee-800 to-black' : ''}
          `}>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-cream-200/60 rounded-full blur-sm" />
          </div>
          <div className="absolute inset-0 bg-caramel-400/5 rounded-full blur-xl" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 text-caramel-400 fill-caramel-400" />
          <span className="text-cream-200 text-sm font-medium">{product.rating}</span>
        </div>

        {/* Info */}
        <h3 className="font-display text-xl font-bold text-cream-100 mb-1">
          {product.name}
        </h3>
        <p className="text-cream-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price & Add */}
        <div className="flex items-center justify-between">
          <span className="text-caramel-400 font-bold text-lg">
            ${product.price}
          </span>
          <button className="p-2 bg-teal-500 hover:bg-teal-400 text-white rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(91,181,166,0.4)]">
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
