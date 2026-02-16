'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-90">
            <Utensils className="w-6 h-6 text-[#E07B54]" />
            <span className="font-bold text-xl text-white tracking-wide">aLMIGHTY BISTRO</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href ?? '/'}
                className="relative text-white/80 hover:text-[#E07B54] transition-colors text-sm font-medium after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-px after:bg-[#E07B54] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 pb-0.5"
              >
                {link?.label}
              </Link>
            ))}
            <a
              href="https://www.yelp.com/biz/almighty-bistro-el-dorado-hills"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm py-2 px-4"
            >
              Reservations
            </a>
            <a
              href="https://order.toasttab.com/online/mom-and-pop-chicken-shop-el-dorado-hills-4355-town-center-blvd-114"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              Order Online
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A1A] border-t border-white/10"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href ?? '/'}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-[#E07B54] transition-colors py-2"
                >
                  {link?.label}
                </Link>
              ))}
              <a
                href="https://www.yelp.com/biz/almighty-bistro-el-dorado-hills"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Reservations
              </a>
              <a
                href="https://order.toasttab.com/online/mom-and-pop-chicken-shop-el-dorado-hills-4355-town-center-blvd-114"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Order Online
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
