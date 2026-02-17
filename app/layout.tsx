import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const dynamic = 'force-dynamic';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'aLMIGHTY Bistro | Island Fusion Cuisine',
  description: 'Experience the finest island fusion cuisine at aLMIGHTY Bistro. Fresh poke, tropical flavors, and innovative dishes crafted with passion.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'aLMIGHTY Bistro | Island Fusion Cuisine',
    description: 'Experience the finest island fusion cuisine at aLMIGHTY Bistro.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className="min-h-screen relative">
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
          <Image
            src="/images/almighty.jpg"
            alt="aLMIGHTY Bistro interior"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-[#FDF8F3]/50" />
        </div>
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
