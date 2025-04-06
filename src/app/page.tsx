import { HeroSection, ProcessSection, FeaturesSection, FAQSection, PartnersSection } from '@/components/sections';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProcessSection />
      <FeaturesSection />
      <FAQSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
