import { motion } from 'framer-motion';
import { Coffee, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-coffee-800 pt-20 pb-8 relative">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-coffee-700 to-coffee-900 rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-caramel-400/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-caramel-400/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-cream-100 mb-4">
              Stay in the Loop
            </h3>
            <p className="text-cream-300 mb-8">
              Get exclusive offers, brewing tips, and first access to new roasts.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-coffee-900/50 border border-coffee-600 rounded-full text-cream-100 placeholder:text-coffee-500 focus:outline-none focus:border-caramel-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(91,181,166,0.4)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="w-8 h-8 text-caramel-400" />
              <span className="font-display text-xl font-bold text-cream-100">
                Velvet Bean
              </span>
            </div>
            <p className="text-cream-300 mb-6">
              Crafting exceptional coffee experiences since 2015. Every cup tells a story.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={Instagram} />
              <SocialLink icon={Twitter} />
              <SocialLink icon={Facebook} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-cream-100 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink label="Our Story" />
              <FooterLink label="Menu" />
              <FooterLink label="Locations" />
              <FooterLink label="Wholesale" />
              <FooterLink label="Careers" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-cream-100 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream-300">
                <MapPin className="w-5 h-5 text-caramel-400 flex-shrink-0 mt-0.5" />
                <span>123 Coffee Lane<br />Seattle, WA 98101</span>
              </li>
              <li className="flex items-center gap-3 text-cream-300">
                <Phone className="w-5 h-5 text-caramel-400 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-cream-300">
                <Mail className="w-5 h-5 text-caramel-400 flex-shrink-0" />
                <span>hello@velvetbean.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-cream-100 mb-6">Hours</h4>
            <ul className="space-y-2 text-cream-300">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-caramel-400">6am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="text-caramel-400">6am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-caramel-400">7am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-caramel-400">7am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-coffee-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-300 text-sm">
            © 2025 Velvet Bean Coffee Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-cream-300 hover:text-caramel-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-cream-300 hover:text-caramel-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon }: { icon: any }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-coffee-600 flex items-center justify-center text-cream-300 hover:bg-teal-500 hover:text-white transition-all duration-300"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <a href="#" className="text-cream-300 hover:text-caramel-400 transition-colors">
        {label}
      </a>
    </li>
  );
}
