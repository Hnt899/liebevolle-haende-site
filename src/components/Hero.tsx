import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Clock } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 py-24 md:py-32 relative z-10">
        <div className="text-center space-y-12">
          <div className="space-y-8 max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed max-w-4xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-10 py-7 shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 font-semibold" 
              size="lg" 
              asChild
            >
              <a href="#cta">
                {t('hero.cta1')}
                <ArrowRight className="ml-3" size={24} />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl border-2 border-white/50 hover:bg-white/10 text-white px-10 py-7 backdrop-blur-sm hover:scale-105 transition-all duration-300 font-semibold"
              asChild
            >
              <a href="#cta">
                <Clock className="mr-3" size={24} />
                {t('hero.cta2')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
