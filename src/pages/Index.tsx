import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import CTABlock from '@/components/CTABlock';
import CompanyDetails from '@/components/CompanyDetails';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Pricing />
          <CTABlock />
          <CompanyDetails />
        </main>
        <Footer />
        <MobileActionBar />
      </div>
    </LanguageProvider>
  );
};

export default Index;
