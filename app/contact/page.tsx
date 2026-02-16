import { Facebook, Instagram } from 'lucide-react';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-24 bg-[#15181c]">
      <section className="px-4 py-8 md:px-6 md:py-12 lg:py-16">
        <div className="mx-auto max-w-[1280px] rounded-sm border border-white/10 bg-[#1A1A1A] px-6 py-8 text-white shadow-[0_12px_50px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-14">
          <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <h1 className="font-[family-name:var(--font-playfair)] text-[3rem] leading-[0.95] tracking-tight text-white sm:text-[4rem] md:text-[4.75rem] lg:text-[5.5rem]">
                Contact Us
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                Please feel free to contact us and we will get back to you as soon as we can.
              </p>

              <div className="mt-12 max-w-[560px]">
                <ContactForm />
              </div>
            </div>

            <aside className="flex flex-col gap-10 pt-2">
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-[1.9rem] leading-tight text-white sm:text-[2.2rem] lg:text-[2.5rem]">
                  Reach us
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  We are available during operating hours and happy to help with orders, events, or general questions.
                </p>
              </div>

              <div className="space-y-7 text-white/90">
                <div className="space-y-2">
                  <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-white">Visit us</h3>
                  <p className="text-base leading-relaxed text-white/75">
                    4355 Town Center Blvd #114
                    <br />
                    El Dorado Hills, CA 95762
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-white">Talk to us</h3>
                  <p className="text-base leading-relaxed text-white/75">
                    <a href="tel:916-510-1204" className="transition-colors hover:text-[#E07B54]">
                      916-510-1204
                    </a>
                    <br />
                    <a href="mailto:eat@almightybistro.com" className="transition-colors hover:text-[#E07B54]">
                      eat@almightybistro.com
                    </a>
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-white">Operating Hours</h3>
                  <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                    Monday: 11 AM - 8 PM
                    <br />
                    Tuesday: 11 AM - 8:30 PM
                    <br />
                    Wednesday: 11 AM - 8:30 PM
                    <br />
                    Thursday: 11 AM - 8:30 PM
                    <br />
                    Friday: 11 AM - 10 PM
                    <br />
                    Saturday: 11 AM - 10 PM
                    <br />
                    Sunday: 11 AM - 8 PM
                  </p>
                  <p className="text-xs text-white/50">
                    Hours may differ on holidays (e.g. Washington&apos;s Birthday).
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 text-white/80">
                <a
                  href="https://www.instagram.com/almightyfoodco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 p-2 text-white/80 transition-colors hover:text-[#E07B54]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/AlmightyBistro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 p-2 text-white/80 transition-colors hover:text-[#E07B54]"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
