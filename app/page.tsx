import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Clock, Leaf } from 'lucide-react';
import HomeClient from '@/components/home-client';
import { MotionSection, MotionItem } from '@/components/ui/motion-section';

const featuredDishes = [
  {
    name: 'The Cloud Poke',
    price: 28,
    description: 'Raw salmon & ahi tuna with house poke sauce, island fruit salsa, and more',
    image: '/images/CLOUD POKE.png',
  },
  {
    name: 'Coconut Prawns',
    price: 'Half dozen $19 | Full dozen $32',
    description: 'Butterflied and sauteed in tropical honey bbq, then tossed with crispy toasted coconut flake',
    image: '/images/coconut prawns.png',
  },
  {
    name: 'Brussel Sprouts',
    price: 15,
    description: 'Marinated and tossed in misoyaki aioli, sauteed, not deep fried, nori flake, almighty aioli',
    image: '/images/BRUSSEL SPROUTS.jpg',
  },
];

const features = [
  { icon: Leaf, title: 'Fresh Ingredients', description: 'Locally sourced, organic produce' },
  { icon: Star, title: 'Island Fusion', description: 'Hawaiian & Asian inspired flavors' },
  { icon: Clock, title: 'Happy Hour', description: 'Daily 2:30pm - 6pm specials' },
];

const galleryPreviewImages = [
  { src: '/images/258s.jpg', alt: 'Gallery dish' },
  { src: '/images/258s (1).jpg', alt: 'Gallery dish' },
  { src: '/images/258s (2).jpg', alt: 'Gallery dish' },
  { src: '/images/258s (3).jpg', alt: 'Gallery dish' },
  { src: '/images/258s (4).jpg', alt: 'Gallery dish' },
  { src: '/images/258s (5).jpg', alt: 'Gallery dish' },
  { src: '/images/258s (6).jpg', alt: 'Gallery dish' },
  { src: '/images/258s (7).jpg', alt: 'Gallery dish' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <HomeClient />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto">
          <MotionSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features?.map((feature, index) => {
              const IconComponent = feature?.icon;
              return (
                <MotionItem key={index} className="text-center p-6">
                  {IconComponent && <IconComponent className="w-12 h-12 text-[#E07B54] mx-auto mb-4" />}
                  <h3 className="font-semibold text-xl mb-2">{feature?.title ?? ''}</h3>
                  <p className="text-gray-600">{feature?.description ?? ''}</p>
                </MotionItem>
              );
            })}
          </MotionSection>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="relative section-padding section-bleed-cream">
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <MotionSection className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">Signature <span className="text-[#E07B54]">Dishes</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Crafted with passion, served with aloha. Our signature dishes bring the flavors of the Pacific to your table.</p>
          </MotionSection>
          <MotionSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes?.map((dish, index) => (
              <MotionItem key={index} className="menu-card group">
                <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={dish?.image ?? ''}
                    alt={dish?.name ?? 'Dish'}
                    fill
                    className="object-cover object-[center_70%] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{dish?.name ?? ''}</h3>
                  <span className="text-[#E07B54] font-bold">
                  {typeof dish?.price === 'number' ? `$${dish.price}` : (dish?.price ?? '')}
                </span>
                </div>
                <p className="text-gray-600 text-sm">{dish?.description ?? ''}</p>
              </MotionItem>
            ))}
          </MotionSection>
          <div className="text-center mt-10">
            <Link href="/menu" className="btn-primary inline-flex items-center gap-2">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="max-w-[1200px] mx-auto">
          <MotionSection className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-[#E07B54]">Gallery</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto">A visual feast of our culinary creations and tropical atmosphere.</p>
          </MotionSection>
          <MotionSection stagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreviewImages?.map((img, index) => (
              <MotionItem key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-800 group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" aria-hidden />
              </MotionItem>
            ))}
          </MotionSection>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-secondary inline-flex items-center gap-2">
              View All Photos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 section-bleed-dark" aria-hidden />
        <div className="absolute inset-0 section-bleed-tropical" aria-hidden />
        <MotionSection className="relative z-10 max-w-[1200px] mx-auto text-center text-white" as="div">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">Ready to Dine?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">Join us for an unforgettable island fusion experience. Order online for pickup or make a reservation for dine-in.</p>
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
    </>
  );
}
