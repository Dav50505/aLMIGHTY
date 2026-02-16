import Image from 'next/image';
import { Leaf, Fish, Utensils, Clock, Salad, Beef } from 'lucide-react';
import PageHero from '@/components/page-hero';
import { MotionSection, MotionItem } from '@/components/ui/motion-section';

const menuSections = [
  {
    title: 'Signatures',
    icon: Utensils,
    items: [
      { name: 'THE CLOUD POKE', price: '28', description: 'Raw salmon & ahi tuna, house poke sauce, island fruit salsa, jalapeño, wakame, sunomono, avocado, mandarin, nori, sprouts, sticky sushi rice' },
      { name: 'POKE "NACHOS"', price: '24', description: 'Sticky rice, chopped ahi tuna, avocado cucumber, jalapeno, shaved cabbage, miso aioli, nikiri sauce, house sriracha, sesame, side of crispy tortilla chips for dipping' },
      { name: 'BRUSSEL SPROUTS', price: '15', description: 'Marinated and tossed in misoyaki aioli, sautéed (not deep fried), nori flake, aLMIGHTY aioli' },
      { name: 'COCONUT PRAWNS', price: 'half dozen 19 | full dozen 32', description: 'Butterflied and sautéed in tropical honey BBQ, tossed with crispy toasted coconut flakes, extra sauce for dipping' },
      { name: 'aLMIGHTY MADE SPAM', price: '18', description: 'Organic house-made spam, seared crispy and served warm, over sushi rice, brushed with nikiri sauce, nori flake, sesame' },
      { name: 'aLMIGHTY MAC SALAD', price: '8', description: 'Gluten free pasta, aLMIGHTY island aioli dressing' },
    ],
  },
  {
    title: 'House Salads',
    icon: Salad,
    note: 'Add extra protein: chicken +7 | prawns +9 | salmon pave +11',
    items: [
      { name: "CHEF'S ISLAND RANCH", price: '19', description: 'Pasture raised chicken teriyaki, prairie breeze, tamari, seven minute egg, sliced avocado, cherry tomato, onion, macadamia nuts & aLMIGHTY green goddess ranch' },
      { name: 'SUPERFOOD', price: '17', description: 'Spinach, avocado, roasted sweet potatoes, edamame, pickled ginger, blueberries, julienne apple, toasted almonds, shaved onion, sesame & lime vinaigrette' },
    ],
  },
  {
    title: 'aLMIGHTY Kona Melt',
    icon: Beef,
    items: [
      { name: 'aLMIGHTY KONA MELT', price: '21 (with mac salad)', description: 'On toasted gluten free focaccia from Richard Moore at Flourless Bakery, two ⅓ pound smashed patties, chipotle lime ranch, pickled red onion, ghost pepper cheese, sprouts, cucumber, bacon' },
    ],
  },
  {
    title: 'Olakino Plates & Bowls',
    icon: Fish,
    note: 'Served over steamed white rice | substitute coconut rice or quinoa +2, Add extra protein: chicken +7 | prawns +9 | salmon pave +11',
    items: [
      { name: "CHEF'S K-TOWN BIBIMBAP", price: '24', description: 'Kalbi beef asada, sunomono, house kimchi, seared mushrooms, sunny up fried egg (Extra beefy if you like — double protein +11)' },
      { name: 'HAWAIIAN BBQ', price: '24', description: 'Ono chicken & grilled prawns, roasted broccolini, pickled red onion, coconut flakes, cilantro lime dressing' },
      { name: 'THE LOCO MOCO', price: '22', description: 'Half pound beef patty & sunny up egg, wild mushroom & scallion gravy, toasted sesame seed' },
      { name: 'AVOCADO & PURPLE SWEET POTATO', price: '21', description: 'Grilled tofu & broccolini, roasted sweet potato & toasted almond, tahini & teriyaki dressing' },
      { name: 'PEANUT CURRY ROAST KABOCHA SQUASH', price: '21', description: 'Ube sweet potato, cauliflower, bell pepper, sautéed spinach, peanut & coconut curry lime sauce' },
      { name: 'MISO MAHI MAHI', price: '27', description: 'Sautéed bell pepper, onion, carrots, yuzu miso teriyaki (Sub seared salmon if you like)' },
      { name: 'MARINATED RAW TUNA', price: '27', description: 'Avocado, pickled cucumber, edamame, seaweed salad, toasted nori, sriracha and yuzu wasabi aioli' },
    ],
  },
  {
    title: 'aLMIGHTY "Shoreline Tacos"',
    icon: Leaf,
    note: 'Two tacos served on corn tortillas with a side of surf slaw, ask for a third if you like, Add a side of mac salad or sunomono +3',
    items: [
      { name: 'PURPLE SWEET POTATO', price: '13', description: 'Garlic spread, k town slaw, crispy confit mushrooms' },
      { name: 'HULI-HULI CHICKEN', price: '14', description: 'Melted cheese, island salsa, scallion, shaved cabbage, aLMIGHTY aioli' },
      { name: 'HOISIN GLAZED DUCK CONFIT', price: '19', description: 'Melted cheese, roasted red pepper, cilantro pickled red onion, chipotle crème fraîche' },
      { name: 'BRAISED & GLAZED PORK BELLY', price: '16', description: 'Sweet & spicy pork belly, tamari lime slaw, smoked chili crema, pickled onion, sliced avocado' },
      { name: 'MARINATED & CHOPPED K-TOWN KALBI BEEF', price: '17', description: 'Korean BBQ kalbi asada, k-town slaw, garlic miso, sesame seeds' },
      { name: 'BROILED MAHI MAHI', price: '18', description: 'Cast iron grilled mahi mahi, avocado, fresh slaw, mahi sauce' },
    ],
  },
  {
    title: 'Happy Hour',
    icon: Clock,
    note: 'Served 2:30pm till 6pm Monday–Friday',
    items: [
      { name: 'Yuzu gin margarita', price: '9', description: '' },
      { name: 'Hangar highball', price: '8', description: '' },
      { name: 'aLMIGHTY punch', price: '9', description: '' },
      { name: 'Happy hour wines', price: '9', description: 'prosecco | pinot noir | white blend' },
      { name: 'Happy hour huli huli tacos', price: '9', description: '' },
      { name: 'Cilantro lime bang bang prawns', price: '9', description: '' },
      { name: 'Chicken lettuce wraps', price: '9', description: '' },
      { name: 'Ohana chicken & rice', price: '9', description: '' },
      { name: 'Kalhua pork & rice', price: '9', description: '' },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/almighty.jpg"
            alt="aLMIGHTY Bistro atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <PageHero title="Our Menu" subtitle="Island fusion flavors crafted with love" />
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-[#FDF8F3]">
        <div className="max-w-[1200px] mx-auto">
          {menuSections?.map((section, sectionIndex) => {
            const IconComponent = section?.icon;
            return (
              <MotionSection key={sectionIndex} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  {IconComponent && <IconComponent className="w-8 h-8 text-[#E07B54]" />}
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold">{section?.title ?? ''}</h2>
                </div>
                {section?.note && (
                  <p className="text-[#2A9D8F] text-sm mb-6 italic">{section?.note}</p>
                )}
                <MotionSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section?.items?.map((item, itemIndex) => (
                    <MotionItem key={itemIndex} className="menu-card">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg text-[#1A1A1A]">{item?.name ?? ''}</h3>
                        <span className="text-[#E07B54] font-bold whitespace-nowrap ml-4">${item?.price ?? ''}</span>
                      </div>
                      {item?.description && (
                        <p className="text-gray-600 text-sm leading-relaxed">{item?.description}</p>
                      )}
                    </MotionItem>
                  )) ?? []}
                </MotionSection>
              </MotionSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding tropical-gradient">
        <MotionSection className="max-w-[1200px] mx-auto text-center text-white" as="div">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-white/90 mb-8">Skip the wait and order online for pickup!</p>
          <a
            href="https://order.toasttab.com/online/mom-and-pop-chicken-shop-el-dorado-hills-4355-town-center-blvd-114"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#E07B54] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all inline-block"
          >
            Order Online Now
          </a>
        </MotionSection>
      </section>
    </div>
  );
}
