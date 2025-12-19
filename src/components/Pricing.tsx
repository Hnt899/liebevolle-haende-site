import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, Check } from 'lucide-react';

const Pricing = () => {
  const { t } = useLanguage();

  const packages = [
    {
      titleKey: 'packageA.title',
      timeKey: 'packageA.time',
      priceKey: 'packageA.price',
      descKey: 'packageA.desc',
      includesKey: 'packageA.includes',
      items: ['packageA.item1', 'packageA.item2', 'packageA.item3', 'packageA.item4', 'packageA.item5', 'packageA.item6', 'packageA.item7', 'packageA.item8', 'packageA.item9', 'packageA.item10'],
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50/80 via-indigo-50/60 to-blue-50/80',
    },
    {
      titleKey: 'packageB.title',
      timeKey: 'packageB.time',
      priceKey: 'packageB.price',
      descKey: 'packageB.desc',
      includesKey: 'packageB.includes',
      items: ['packageB.item1', 'packageB.item2', 'packageB.item3', 'packageB.item4', 'packageB.item5', 'packageB.item6', 'packageB.item7', 'packageB.item8'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50/80 via-pink-50/60 to-purple-50/80',
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4 text-3xl md:text-4xl font-bold">{t('pricing.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`relative bg-gradient-to-br ${pkg.bgGradient} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-2 border-white/50 backdrop-blur-sm h-full flex flex-col`}>
                <div className="space-y-6 flex-1">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {t(pkg.titleKey)}
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed mb-6">
                      {t(pkg.descKey)}
                    </p>
                  </div>

                  {/* What's included */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-slate-900">
                      {t(pkg.includesKey)}
                    </h4>
                    <ul className="space-y-2">
                      {pkg.items.map((itemKey, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mt-0.5`}>
                            <Check size={14} className="text-white" />
                          </div>
                          <span className="text-sm text-slate-700 leading-relaxed">
                            {t(itemKey)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-200 mt-auto">
                    <div className="flex items-center gap-3">
                      <Clock size={24} className="text-slate-700" />
                      <span className="text-lg font-semibold text-slate-900">
                        {t(pkg.timeKey)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${pkg.gradient} flex items-center justify-center`}>
                        <span className="text-white font-bold text-sm">₽</span>
                      </div>
                      <span className="text-2xl md:text-3xl font-bold text-slate-900">
                        {t(pkg.priceKey)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            {t('pricing.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
