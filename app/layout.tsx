import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
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
      <body className="min-h-screen bg-[#FDF8F3]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
