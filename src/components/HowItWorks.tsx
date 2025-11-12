import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, UserCheck, Briefcase } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: FileText,
      titleKey: 'step1.title',
      descKey: 'step1.desc',
      number: '01',
    },
    {
      icon: UserCheck,
      titleKey: 'step2.title',
      descKey: 'step2.desc',
      number: '02',
    },
    {
      icon: Briefcase,
      titleKey: 'step3.title',
      descKey: 'step3.desc',
      number: '03',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-[1600px] px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">{t('how.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-6xl mx-auto">
            {t('how.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Continuous connecting line - Desktop Only */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-secondary z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-24 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-fade-in z-10"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative z-10 text-center">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6 shadow-lg relative z-20">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card shadow-lg mb-6 relative z-20">
                      <Icon size={40} className="text-secondary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {t(step.titleKey)}
                    </h3>
                    <div className="text-base text-muted-foreground leading-relaxed space-y-2">
                      {t(step.descKey).split('\n\n').map((paragraph, idx) => (
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
      </div>
    </section>
  );
};

export default HowItWorks;
