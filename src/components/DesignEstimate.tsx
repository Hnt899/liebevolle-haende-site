import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Home, Package, Briefcase, FileCheck, BookOpen, Shield, Calculator, CheckCircle2 } from 'lucide-react';

const DesignEstimate = () => {
  const { t } = useLanguage();

  const estimateItems = [
    {
      icon: FileText,
      titleKey: 'estimate.base.title',
      descKey: 'estimate.base.desc',
      price: '55 000',
      items: [
        { key: 'estimate.base.item1', price: '40 000' },
        { key: 'estimate.base.item2', price: '15 000' },
      ],
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50/80 via-indigo-50/60 to-blue-50/80',
    },
    {
      icon: Home,
      titleKey: 'estimate.homepage.title',
      descKey: 'estimate.homepage.desc',
      price: '55 000',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50/80 via-pink-50/60 to-purple-50/80',
    },
    {
      icon: Package,
      titleKey: 'estimate.products.title',
      descKey: 'estimate.products.desc',
      price: '76 000',
      items: [
        { key: 'estimate.products.item1', price: '40 000' },
        { key: 'estimate.products.item2', price: '36 000' },
      ],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50/80 via-emerald-50/60 to-green-50/80',
    },
    {
      icon: Briefcase,
      titleKey: 'estimate.services.title',
      descKey: 'estimate.services.desc',
      price: '41 000',
      items: [
        { key: 'estimate.services.item1', price: '25 000' },
        { key: 'estimate.services.item2', price: '16 000' },
      ],
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50/80 via-amber-50/60 to-orange-50/80',
    },
    {
      icon: FileCheck,
      titleKey: 'estimate.separate.title',
      descKey: 'estimate.separate.desc',
      price: '56 000',
      gradient: 'from-cyan-500 to-teal-500',
      bgGradient: 'from-cyan-50/80 via-teal-50/60 to-cyan-50/80',
    },
    {
      icon: BookOpen,
      titleKey: 'estimate.content.title',
      descKey: 'estimate.content.desc',
      price: '64 000',
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-50/80 via-pink-50/60 to-rose-50/80',
    },
    {
      icon: Shield,
      titleKey: 'estimate.legal.title',
      descKey: 'estimate.legal.desc',
      price: '32 000',
      gradient: 'from-slate-500 to-gray-500',
      bgGradient: 'from-slate-50/80 via-gray-50/60 to-slate-50/80',
    },
    {
      icon: Calculator,
      titleKey: 'estimate.reserve.title',
      descKey: 'estimate.reserve.desc',
      price: '21 000',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-50/80 via-purple-50/60 to-violet-50/80',
    },
  ];

  const totalPrice = '400 000';

  return (
    <section id="design-estimate" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4 text-3xl md:text-4xl font-bold">{t('estimate.title')}</h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            {t('estimate.subtitle')}
          </p>
          
          {/* Total Price Card */}
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl shadow-xl p-8 border-2 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-white mb-1">{t('estimate.total.label')}</p>
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  {totalPrice} ₽
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estimate Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {estimateItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/50 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          {t(item.titleKey)}
                        </h3>
                        <p className="text-sm text-slate-900 leading-relaxed">
                          {t(item.descKey)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-2xl md:text-3xl font-bold text-slate-900">
                        {item.price} ₽
                      </p>
                    </div>
                  </div>

                  {/* Sub-items */}
                  {item.items && (
                    <div className="mt-4 pt-4 border-t border-slate-200/50 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <div key={subIndex} className="flex items-center justify-between text-sm">
                          <span className="text-slate-900 flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.gradient}`}></div>
                            {t(subItem.key)}
                          </span>
                          <span className="font-semibold text-slate-900">{subItem.price} ₽</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border-2 border-white/50 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('estimate.summary.title')}</h3>
              <p className="text-slate-900">{t('estimate.summary.desc')}</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-slate-900 mb-2">{t('estimate.summary.total')}</p>
              <p className="text-4xl md:text-5xl font-bold text-primary">
                {totalPrice} ₽
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignEstimate;

