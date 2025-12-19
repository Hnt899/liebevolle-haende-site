import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import NotIncluded from '@/components/NotIncluded';
import DesignEstimate from '@/components/DesignEstimate';
import PaymentInfo from '@/components/PaymentInfo';
import CTABlock from '@/components/CTABlock';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <WhyUs />
          <Pricing />
          <NotIncluded />
          <HowItWorks />
          <DesignEstimate />
          <PaymentInfo />
          <CTABlock />
          <Contacts />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
