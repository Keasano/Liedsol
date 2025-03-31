import { HeroSection, ProcessSection, FeaturesSection, FAQSection, PartnersSection } from '@/components/sections';
import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProcessSection />
      <FeaturesSection />
      <FAQSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
