import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="section-padding bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-foreground max-w-4xl mx-auto">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button className="btn-cta text-lg" size="lg" asChild>
              <a href="#contacts">
                {t('btn.request')}
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-2 hover:bg-primary/10"
              asChild
            >
              <a href="#features">
                <Play className="mr-2" size={20} />
                {t('hero.demo')}
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            {t('hero.hosting')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
