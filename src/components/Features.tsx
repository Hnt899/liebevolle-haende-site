import { useLanguage } from '@/contexts/LanguageContext';
import { DollarSign, Gauge, FileCheck } from 'lucide-react';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: DollarSign,
      titleKey: 'target1.title',
      descKey: 'target1.desc',
    },
    {
      icon: Gauge,
      titleKey: 'target2.title',
      descKey: 'target2.desc',
    },
    {
      icon: FileCheck,
      titleKey: 'target3.title',
      descKey: 'target3.desc',
    },
  ];

  return (
    <section id="target" className="section-padding bg-background">
      <div className="container mx-auto max-w-12xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">{t('target.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('target.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
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
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
