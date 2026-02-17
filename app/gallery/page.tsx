'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageHero from '@/components/page-hero';
import { MotionSection, MotionItem } from '@/components/ui/motion-section';

const galleryImages = [
  { src: '/images/almighty.jpg', alt: 'aLMIGHTY Bistro interior with tropical plants and bar', category: 'Interior' },
  { src: '/images/CLOUD POKE.png', alt: 'The Cloud Poke', category: 'Signatures' },
  { src: '/images/coconut prawns.png', alt: 'Coconut prawns', category: 'Signatures' },
  { src: '/images/BRUSSEL SPROUTS.jpg', alt: 'Brussel sprouts', category: 'Signatures' },
  { src: '/images/258s.jpg', alt: 'Island fusion dish', category: 'Mains' },
  { src: '/images/258s (1).jpg', alt: 'Fresh prepared dish', category: 'Signatures' },
  { src: '/images/258s (2).jpg', alt: 'Plated entree', category: 'Mains' },
  { src: '/images/258s (3).jpg', alt: 'Chef special', category: 'Signatures' },
  { src: '/images/258s (4).jpg', alt: 'Tropical flavors', category: 'Signatures' },
  { src: '/images/258s (5).jpg', alt: 'Island fusion creation', category: 'Signatures' },
  { src: '/images/258s (6).jpg', alt: 'House specialty', category: 'Mains' },
  { src: '/images/258s (7).jpg', alt: 'Colorful presentation', category: 'Signatures' },
  { src: '/images/258s (8).jpg', alt: 'Artisan plating', category: 'Mains' },
  { src: '/images/258s (9).jpg', alt: 'Fresh seasonal dish', category: 'Signatures' },
  { src: '/images/258s (10).jpg', alt: 'Gallery dish', category: 'Mains' },
  { src: '/images/258s (11).jpg', alt: 'Gallery dish', category: 'Signatures' },
  { src: '/images/258s (12).jpg', alt: 'Gallery dish', category: 'Mains' },
  { src: '/images/o.jpg', alt: 'Gallery dish', category: 'Mains' },
  { src: '/images/o (1).jpg', alt: 'Gallery dish', category: 'Signatures' },
  { src: '/images/o (2).jpg', alt: 'Gallery dish', category: 'Mains' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <PageHero title="Gallery" subtitle="A visual journey through our culinary creations" />
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-[#FDF8F3]">
        <div className="max-w-[1200px] mx-auto">
          <MotionSection stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages?.map((image, index) => (
              <MotionItem
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer group bg-gray-200"
              >
                <button
                  type="button"
                  className="absolute inset-0 w-full h-full border-0 p-0 bg-transparent cursor-pointer text-left"
                  onClick={() => setSelectedImage(image?.src ?? null)}
                  aria-label={`View ${image?.alt ?? 'image'}`}
                >
                  <Image
                    src={image?.src ?? ''}
                    alt={image?.alt ?? 'Gallery image'}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-white text-sm font-medium">{image?.category ?? ''}</span>
                  </div>
                </button>
              </MotionItem>
            ))}
          </MotionSection>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery image enlarged"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding tropical-gradient">
        <MotionSection className="max-w-[1200px] mx-auto text-center text-white" as="div">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-4">Taste the Experience</h2>
          <p className="text-white/90 mb-8">Ready to try these dishes for yourself?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://order.toasttab.com/online/mom-and-pop-chicken-shop-el-dorado-hills-4355-town-center-blvd-114"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#E07B54] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all"
            >
              Order Online
            </a>
            <a
              href="https://www.yelp.com/biz/almighty-bistro-el-dorado-hills"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-all"
            >
              Make Reservation
            </a>
          </div>
        </MotionSection>
      </section>
    </div>
  );
}
