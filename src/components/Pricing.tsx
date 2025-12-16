import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Clock, Search, Palette, Code, Zap, BarChart, BookOpen, Globe, Layers, CheckCircle } from 'lucide-react';

const Pricing = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: BarChart,
      titleKey: 'devstep1.title',
      descKey: 'devstep1.desc',
      details: ['devstep1.detail1', 'devstep1.detail2', 'devstep1.detail3'],
      number: '01',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50/80 via-indigo-50/60 to-blue-50/80',
    },
    {
      icon: Search,
      titleKey: 'devstep2.title',
      descKey: 'devstep2.desc',
      details: ['devstep2.detail1', 'devstep2.detail2', 'devstep2.detail3'],
      number: '02',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50/80 via-blue-50/60 to-cyan-50/80',
    },
    {
      icon: BookOpen,
      titleKey: 'devstep3.title',
      descKey: 'devstep3.desc',
      details: ['devstep3.detail1', 'devstep3.detail2', 'devstep3.detail3'],
      number: '03',
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-50/80 via-violet-50/60 to-purple-50/80',
    },
    {
      icon: Palette,
      titleKey: 'devstep4.title',
      descKey: 'devstep4.desc',
      details: ['devstep4.detail1', 'devstep4.detail2', 'devstep4.detail3'],
      number: '04',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50/80 via-rose-50/60 to-pink-50/80',
    },
    {
      icon: Layers,
      titleKey: 'devstep5.title',
      descKey: 'devstep5.desc',
      details: ['devstep5.detail1', 'devstep5.detail2', 'devstep5.detail3'],
      number: '05',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50/80 via-teal-50/60 to-green-50/80',
    },
    {
      icon: Code,
      titleKey: 'devstep6.title',
      descKey: 'devstep6.desc',
      details: ['devstep6.detail1', 'devstep6.detail2', 'devstep6.detail3'],
      number: '06',
      gradient: 'from-emerald-500 to-cyan-500',
      bgGradient: 'from-emerald-50/80 via-cyan-50/60 to-emerald-50/80',
    },
    {
      icon: Globe,
      titleKey: 'devstep7.title',
      descKey: 'devstep7.desc',
      details: ['devstep7.detail1', 'devstep7.detail2', 'devstep7.detail3'],
      number: '07',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50/80 via-amber-50/60 to-orange-50/80',
    },
    {
      icon: CheckCircle,
      titleKey: 'devstep8.title',
      descKey: 'devstep8.desc',
      details: ['devstep8.detail1', 'devstep8.detail2', 'devstep8.detail3'],
      number: '08',
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-50/80 via-pink-50/60 to-red-50/80',
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header with Price */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4 text-3xl md:text-4xl font-bold">{t('pricing.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>
          
          {/* Price and Time Card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl shadow-xl p-8 border-2 border-primary/20">
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground mb-2">Стоимость проекта</p>
              <p className="text-4xl md:text-5xl font-bold text-primary">
                {t('pricing.price')}
              </p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-border"></div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground mb-2">Срок разработки</p>
              <div className="flex items-center gap-3">
                <Clock size={24} className="text-primary" />
                <p className="text-3xl md:text-4xl font-bold text-slate-900">
                  {t('pricing.time')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`relative bg-gradient-to-br ${step.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-white/50 backdrop-blur-sm`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Icon and Number */}
                    <div className="flex-shrink-0 flex items-start gap-6">
                      <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon size={40} className="text-white" />
                        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center">
                          <span className="text-sm font-bold text-slate-900">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                          {t(step.titleKey)}
                        </h3>
                        <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                          {t(step.descKey)}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                        {step.details.map((detailKey, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                                <Check size={14} className="text-white" />
                              </div>
                            </div>
                            <span className="text-sm text-slate-700 leading-relaxed">
                              {t(detailKey)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
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

export default Pricing;
