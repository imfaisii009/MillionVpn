import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Comparison from '@/components/sections/Comparison';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Download from '@/components/sections/Download';

// ISR: Revalidate every hour
export const revalidate = 3600;

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Comparison />
      <Pricing />
      <Testimonials />
      <Download />
      <FAQ />
      <Footer />
    </main>
  );
}
