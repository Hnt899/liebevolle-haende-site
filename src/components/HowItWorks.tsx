import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone, Coins, Shield, Store } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Smartphone,
      titleKey: 'step1.title',
      descKey: 'step1.desc',
      number: '01',
    },
    {
      icon: Coins,
      titleKey: 'step2.title',
      descKey: 'step2.desc',
      number: '02',
    },
    {
      icon: Shield,
      titleKey: 'step3.title',
      descKey: 'step3.desc',
      number: '03',
    },
    {
      icon: Store,
      titleKey: 'step4.title',
      descKey: 'step4.desc',
      number: '04',
    },
  ];

  const iconGradients = [
    'from-blue-500 to-indigo-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-amber-500',
  ];

  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4 text-3xl md:text-4xl font-bold">{t('how.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('how.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${iconGradients[index]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={36} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                      <span className="hidden md:inline-block text-base font-bold text-white bg-gradient-to-br from-primary to-primary/80 px-4 py-1.5 rounded-full shadow-md">
                        {step.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 break-words">
                        {t(step.titleKey)}
                      </h3>
                    </div>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {t(step.descKey)}
                    </p>
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

export default HowItWorks;
