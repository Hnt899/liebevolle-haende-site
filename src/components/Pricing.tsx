import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      titleKey: 'plan1.title',
      descKey: 'plan1.desc',
      popular: false,
    },
    {
      titleKey: 'plan2.title',
      descKey: 'plan2.desc',
      popular: true,
    },
    {
      titleKey: 'plan3.title',
      descKey: 'plan3.desc',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">{t('pricing.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative card-feature animate-fade-in ${
                plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                  Популярный
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t(plan.titleKey)}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t(plan.descKey)}
                  </p>
                </div>

                <div className="pt-4">
                  <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                    <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>Полная адаптивность</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground bg-muted/50 inline-block px-6 py-3 rounded-lg">
            {t('pricing.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
