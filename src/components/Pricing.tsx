import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      titleKey: 'plan1.title',
      descKey: 'plan1.desc',
      timeKey: 'plan1.time',
      features: ['plan1.feature1', 'plan1.feature2', 'plan1.feature3'],
      buttonColor: 'bg-slate-900 hover:bg-slate-800',
    },
    {
      titleKey: 'plan2.title',
      descKey: 'plan2.desc',
      timeKey: 'plan2.time',
      features: ['plan2.feature1', 'plan2.feature2', 'plan2.feature3'],
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      titleKey: 'plan3.title',
      descKey: 'plan3.desc',
      timeKey: 'plan3.time',
      features: ['plan3.feature1', 'plan3.feature2', 'plan3.feature3', 'plan3.feature4'],
      buttonColor: 'bg-slate-900 hover:bg-slate-800',
    },
  ];

  return (
    <section id="pricing" className="min-h-screen flex items-center bg-muted/30 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4 text-3xl md:text-4xl font-bold">{t('pricing.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-8 lg:p-10 animate-fade-in flex flex-col min-h-[600px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-1 space-y-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    {t(plan.titleKey)}
                  </h3>
                  <p className="text-base text-slate-700 mb-6">
                    {t(plan.descKey)}
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2.5 rounded-lg">
                    <Clock size={18} className="text-blue-700" />
                    <span className="text-sm font-medium text-blue-700">
                      {t(plan.timeKey)}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  {plan.features
                    .map((featureKey) => t(featureKey))
                    .filter((feature) => feature && feature.trim() !== '')
                    .map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                            <Check size={14} className="text-blue-700" />
                          </div>
                        </div>
                        <span className="text-base text-slate-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-8 pt-6">
                <Button 
                  className={`w-full ${plan.buttonColor} text-white font-semibold py-6 text-lg rounded-lg`}
                  asChild
                >
                  <a href="#cta">
                    {t('pricing.contact')}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            {t('pricing.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
