import { useLanguage } from '@/contexts/LanguageContext';
import { CreditCard, Shield, Rocket } from 'lucide-react';

const PaymentInfo = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: CreditCard,
      titleKey: 'payment.structure',
      descKey: 'payment.structure.desc',
    },
    {
      icon: Shield,
      titleKey: 'payment.guarantee',
      descKey: 'payment.guarantee.desc',
    },
    {
      icon: Rocket,
      titleKey: 'payment.start',
      descKey: 'payment.start.desc',
    },
  ];

  const iconGradients = [
    'from-blue-500 to-indigo-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-amber-500',
  ];

  return (
    <section id="payment" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4 text-3xl md:text-4xl font-bold">{t('payment.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6 text-center">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${iconGradients[index]} flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed text-left">
                    {t(item.descKey)}
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

export default PaymentInfo;

