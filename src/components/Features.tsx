import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Layout, HelpCircle, Users, Server } from 'lucide-react';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Phone,
      titleKey: 'feature1.title',
      descKey: 'feature1.desc',
    },
    {
      icon: Layout,
      titleKey: 'feature2.title',
      descKey: 'feature2.desc',
    },
    {
      icon: HelpCircle,
      titleKey: 'feature3.title',
      descKey: 'feature3.desc',
    },
    {
      icon: Users,
      titleKey: 'feature4.title',
      descKey: 'feature4.desc',
    },
    {
      icon: Server,
      titleKey: 'feature5.title',
      descKey: 'feature5.desc',
    },
  ];

  return (
    <section id="features" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">{t('features.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
