import { useLanguage } from '@/contexts/LanguageContext';
import { Palette, Layout, TrendingUp, Zap, Smartphone, Search } from 'lucide-react';

const WhyUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Palette,
      titleKey: 'why1.title',
      descKey: 'why1.desc',
    },
    {
      icon: Layout,
      titleKey: 'why2.title',
      descKey: 'why2.desc',
    },
    {
      icon: TrendingUp,
      titleKey: 'why3.title',
      descKey: 'why3.desc',
    },
    {
      icon: Zap,
      titleKey: 'why4.title',
      descKey: 'why4.desc',
    },
    {
      icon: Smartphone,
      titleKey: 'why5.title',
      descKey: 'why5.desc',
    },
    {
      icon: Search,
      titleKey: 'why6.title',
      descKey: 'why6.desc',
    },
  ];

  return (
    <section id="why" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-12xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">{t('why.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('why.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-feature group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-start space-y-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {t(feature.titleKey)}
                  </h3>
                  <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    {t(feature.descKey).split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className={idx === 0 ? 'font-medium text-foreground' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

