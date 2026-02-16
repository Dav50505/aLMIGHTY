import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import PageHero from '@/components/page-hero';
import { MotionSection, MotionItem } from '@/components/ui/motion-section';

export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/almighty.jpg"
            alt="aLMIGHTY Bistro welcoming atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <PageHero title="Contact Us" subtitle="We'd love to hear from you" />
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-[#FDF8F3]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <MotionSection>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6">Get in <span className="text-[#E07B54]">Touch</span></h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our menu, catering options, or want to provide feedback? We&apos;re here to help. Reach out to us through any of the channels below or fill out the contact form.
              </p>

              <MotionSection stagger className="space-y-6">
                <MotionItem className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E07B54]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#E07B54]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:916-510-1204" className="text-gray-600 hover:text-[#E07B54] transition-colors">916-510-1204</a>
                  </div>
                </MotionItem>

                <MotionItem className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E07B54]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#E07B54]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:eat@almightybistro.com" className="text-gray-600 hover:text-[#E07B54] transition-colors">eat@almightybistro.com</a>
                  </div>
                </MotionItem>

                <MotionItem className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E07B54]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#E07B54]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">4355 Town Center Blvd #114<br />El Dorado Hills, CA 95762</p>
                  </div>
                </MotionItem>

                <MotionItem className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E07B54]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#E07B54]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Happy Hour</h3>
                    <p className="text-gray-600">Monday - Friday<br />2:30pm - 6:00pm</p>
                  </div>
                </MotionItem>
              </MotionSection>

              {/* Quick Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://order.toasttab.com/online/mom-and-pop-chicken-shop-el-dorado-hills-4355-town-center-blvd-114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Order Online
                </a>
                <a
                  href="https://www.yelp.com/biz/almighty-bistro-el-dorado-hills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Make Reservation
                </a>
              </div>
            </MotionSection>

            {/* Contact Form */}
            <MotionSection className="menu-card">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </MotionSection>
          </div>
        </div>
      </section>
    </div>
  );
}
