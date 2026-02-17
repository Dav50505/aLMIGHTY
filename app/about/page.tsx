import Image from 'next/image';
import { Heart, Leaf, Users, Award } from 'lucide-react';
import PageHero from '@/components/page-hero';
import { MotionSection, MotionItem } from '@/components/ui/motion-section';

const values = [
  { icon: Heart, title: 'Made with Love', description: 'Every dish is crafted with passion and care, bringing the spirit of aloha to your table.' },
  { icon: Leaf, title: 'Fresh & Local', description: 'We source the freshest ingredients from local farms and sustainable suppliers.' },
  { icon: Users, title: 'Community First', description: 'More than a restaurant, we\'re a gathering place for friends and family.' },
  { icon: Award, title: 'Quality Matters', description: 'From house-made spam to fresh poke, quality is never compromised.' },
];

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <PageHero title="Our Story" subtitle="Where island flavors meet California freshness" />
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionSection>
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-6">Welcome to <span className="text-[#E07B54]">aLMIGHTY Bistro</span></h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nestled in the heart of El Dorado Hills, aLMIGHTY Bistro brings the vibrant flavors of island fusion cuisine to California. Our journey began with a simple passion: to create dishes that celebrate the rich culinary traditions of Hawaii and Asia while embracing local, sustainable ingredients.
                </p>
                <p>
                  Every plate tells a story – from our signature Cloud Poke featuring pristine raw salmon and ahi tuna, to our house-made spam that has become a local legend. We believe in cooking with soul, using traditional techniques while adding our own creative twist.
                </p>
                <p>
                  Our space is designed to transport you to a tropical paradise. Surrounded by lush plants and warm, inviting decor, dining at aLMIGHTY Bistro is more than a meal – it\'s an experience that nourishes both body and spirit.
                </p>
              </div>
            </div>
            </MotionSection>
            <MotionSection className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl bg-gray-200">
              <Image
                src="/images/258s.jpg"
                alt="Signature dish at aLMIGHTY Bistro"
                fill
                className="object-cover"
              />
            </MotionSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#FDF8F3]">
        <div className="max-w-[1200px] mx-auto">
          <MotionSection className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-4">What We <span className="text-[#E07B54]">Stand For</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our values guide everything we do, from sourcing ingredients to serving our guests.</p>
          </MotionSection>
          <MotionSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values?.map((value, index) => {
              const IconComponent = value?.icon;
              return (
                <MotionItem key={index} className="menu-card text-center">
                  {IconComponent && <IconComponent className="w-12 h-12 text-[#2A9D8F] mx-auto mb-4" />}
                  <h3 className="font-semibold text-lg mb-2">{value?.title ?? ''}</h3>
                  <p className="text-gray-600 text-sm">{value?.description ?? ''}</p>
                </MotionItem>
              );
            })}
          </MotionSection>
        </div>
      </section>

      {/* Chef's Philosophy */}
      <section className="section-padding bg-[#1A1A1A] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionSection className="relative aspect-square rounded-lg overflow-hidden bg-gray-800">
              <Image
                src="/images/258s (6).jpg"
                alt="Chef crafted dish"
                fill
                className="object-cover"
              />
            </MotionSection>
            <MotionSection>
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-6">The <span className="text-[#E07B54]">aLMIGHTY</span> Philosophy</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  At aLMIGHTY Bistro, we believe that food has the power to bring people together and create lasting memories. Our kitchen is a place where creativity meets tradition, where bold flavors are balanced with respect for each ingredient.
                </p>
                <p>
                  We take pride in making as much as possible in-house – from our famous house-made spam to our signature poke sauces. This commitment to craft ensures that every bite delivers the authentic, complex flavors our guests have come to love.
                </p>
                <p>
                  Whether you\'re joining us for a quick lunch, a leisurely dinner, or our popular happy hour, we promise an experience that feeds your soul and leaves you craving more.
                </p>
              </div>
            </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding tropical-gradient">
        <MotionSection className="max-w-[1200px] mx-auto text-center text-white" as="div">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-4">Come Experience aLMIGHTY</h2>
          <p className="text-white/90 mb-8">We can\'t wait to share our flavors with you.</p>
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
