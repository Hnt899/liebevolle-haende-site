import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone, Server, Code, BarChart, Store, Headphones } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const WhyUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Smartphone,
      titleKey: 'why1.title',
      descKey: 'why1.desc',
    },
    {
      icon: Server,
      titleKey: 'why2.title',
      descKey: 'why2.desc',
    },
    {
      icon: Code,
      titleKey: 'why3.title',
      descKey: 'why3.desc',
    },
    {
      icon: BarChart,
      titleKey: 'why4.title',
      descKey: 'why4.desc',
    },
    {
      icon: Store,
      titleKey: 'why5.title',
      descKey: 'why5.desc',
    },
    {
      icon: Headphones,
      titleKey: 'why6.title',
      descKey: 'why6.desc',
    },
  ];

  const gradients = [
    'from-blue-500/10 to-indigo-500/10',
    'from-purple-500/10 to-pink-500/10',
    'from-green-500/10 to-emerald-500/10',
    'from-orange-500/10 to-amber-500/10',
    'from-cyan-500/10 to-teal-500/10',
    'from-rose-500/10 to-pink-500/10',
  ];

  const iconGradients = [
    'from-blue-500 to-indigo-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-amber-500',
    'from-cyan-500 to-teal-500',
    'from-rose-500 to-pink-500',
  ];

  return (
    <section id="why" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4 text-3xl md:text-4xl font-bold">{t('why.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('why.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="group animate-fade-in transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-full min-h-[320px] bg-gradient-to-br ${gradients[index]} rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm flex flex-col`}>
                  <div className="flex flex-col space-y-5 flex-1">
                    {/* Icon with gradient */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${iconGradients[index]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    
                    {/* Title and Badge */}
                    <div className="space-y-3 flex-shrink-0">
                      <h3 className="text-2xl font-bold text-foreground leading-tight">
                        {t(feature.titleKey)}
                      </h3>
                      {index === 0 && (
                        <Badge className="bg-accent/20 text-accent border-accent/50 text-xs font-semibold px-3 py-1">
                          production-ready
                        </Badge>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed flex-1">
                      {t(feature.descKey)}
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

export default WhyUs;

