'use client';

import Link from 'next/link';
import { Utensils, Phone, Mail, MapPin } from 'lucide-react';
import { MotionSection } from '@/components/ui/motion-section';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <MotionSection className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" rootMargin="0px 0px -80px 0px">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="w-6 h-6 text-[#E07B54]" />
              <span className="font-bold text-xl tracking-wide">aLMIGHTY BISTRO</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Island fusion cuisine crafted with passion. Experience the flavors of the Pacific with every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#E07B54]">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/menu" className="text-white/70 hover:text-white transition-colors text-sm relative after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-px after:bg-white after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 w-fit">Menu</Link>
              <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm relative after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-px after:bg-white after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 w-fit">About Us</Link>
              <Link href="/gallery" className="text-white/70 hover:text-white transition-colors text-sm relative after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-px after:bg-white after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 w-fit">Gallery</Link>
              <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm relative after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-px after:bg-white after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 w-fit">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#E07B54]">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:916-510-1204" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" />
                916-510-1204
              </a>
              <a href="mailto:eat@almightybistro.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                eat@almightybistro.com
              </a>
              <div className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>4355 Town Center Blvd #114<br />El Dorado Hills, CA</span>
              </div>
            </div>
          </div>
        </MotionSection>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} aLMIGHTY Bistro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
