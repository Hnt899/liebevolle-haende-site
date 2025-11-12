import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, Mail, CheckCircle2 } from 'lucide-react';

const CTABlock = () => {
  const { t } = useLanguage();

  const points = [
    t('cta.point1'),
    t('cta.point2'),
    t('cta.point3'),
  ];

  return (
    <section id="cta" className="section-padding gradient-bg">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8 text-white animate-fade-in">
          <h2 className="text-white">{t('cta.title')}</h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col items-start gap-3 max-w-2xl mx-auto py-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-left">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              asChild
            >
              <a href="https://t.me/CDI_Agency" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2" size={20} />
                {t('cta.telegram')}
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white px-8 py-6 text-lg backdrop-blur-sm"
              asChild
            >
              <a href="mailto:arturfurt9@gmail.com">
                <Mail className="mr-2" size={20} />
                {t('cta.email')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
