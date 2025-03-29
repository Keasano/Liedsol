import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { FAQSection } from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <PartnersSection />
      <FAQSection />
    </Layout>
  );
}
