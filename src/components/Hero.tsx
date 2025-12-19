import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            {/* Badge */}
            <div className="flex justify-center">
              <Badge className="bg-accent/20 text-accent border-accent/50 px-6 py-2 text-base font-semibold">
                {t('hero.badge')}
              </Badge>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-xl hover:shadow-2xl" size="lg" asChild>
              <a href="#cta">
                {t('hero.cta1')}
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-2 border-white/50 hover:bg-white/10 text-white px-8 py-6"
              asChild
            >
              <a href="#cta">
                <Clock className="mr-2" size={20} />
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
