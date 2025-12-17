import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import DesignEstimate from '@/components/DesignEstimate';
import CTABlock from '@/components/CTABlock';
import Reviews from '@/components/Reviews';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <WhyUs />
          <HowItWorks />
          <Pricing />
          <DesignEstimate />
          <CTABlock />
          <Reviews />
          <Contacts />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
