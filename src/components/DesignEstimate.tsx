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
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-primary mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">{t('estimate.title')}</h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            {t('estimate.subtitle')}
          </p>
          
          {/* Total Price Card */}
          <div className="inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl md:rounded-2xl shadow-xl p-4 md:p-8 border-2 border-primary/20 mx-4 md:mx-0">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg flex-shrink-0">
                <CheckCircle2 size={24} className="md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm text-white mb-1">{t('estimate.total.label')}</p>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                  {totalPrice} ₽
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estimate Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {estimateItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 border border-white/50 h-full">
                  {/* Top section: Icon, Title, Price */}
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <Icon size={20} className="md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1 md:mb-0">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900">
                          {t(item.titleKey)}
                        </h3>
                        <p className="text-lg md:text-2xl lg:text-3xl font-bold text-slate-900 flex-shrink-0">
                          {item.price} ₽
                        </p>
                      </div>
                      {/* Description for items without sub-items - desktop: aligned with title */}
                      {!item.items && (
                        <p className="hidden md:block text-sm text-slate-900 leading-relaxed mt-2">
                          {t(item.descKey)}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description for items without sub-items - mobile only: starts under icon */}
                  {!item.items && (
                    <div className="pl-[5px] md:hidden">
                      <p className="text-xs text-slate-900 leading-relaxed">
                        {t(item.descKey)}
                      </p>
                    </div>
                  )}

                  {/* Description for items with sub-items - desktop: aligned with title */}
                  {item.items && (
                    <p className="hidden md:block text-sm text-slate-900 leading-relaxed mt-2">
                      {t(item.descKey)}
                    </p>
                  )}

                  {/* Sub-items */}
                  {item.items && (
                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-slate-200/50 space-y-3 md:space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <div key={subIndex} className="space-y-1 md:space-y-0 md:flex md:items-center md:justify-between md:gap-2">
                          <div className="flex items-start gap-2 text-xs md:text-sm flex-1">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.gradient} flex-shrink-0 mt-1.5 md:mt-0`}></div>
                            <span className="text-slate-900 break-words">{t(subItem.key)}</span>
                          </div>
                          <div className="pl-3.5 md:pl-0">
                            <span className="font-semibold text-slate-900 text-xs md:text-sm">{subItem.price} ₽</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignEstimate;

