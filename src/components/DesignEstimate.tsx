import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Palette, Server, Smartphone, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const DesignEstimate = () => {
  const { t } = useLanguage();

  const stages = [
    {
      icon: Search,
      titleKey: 'stage1.title',
      timeKey: 'stage1.time',
      descKey: 'stage1.desc',
      number: '01',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Palette,
      titleKey: 'stage2.title',
      timeKey: 'stage2.time',
      descKey: 'stage2.desc',
      number: '02',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Server,
      titleKey: 'stage3.title',
      timeKey: 'stage3.time',
      descKey: 'stage3.desc',
      number: '03',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Smartphone,
      titleKey: 'stage4.title',
      timeKey: 'stage4.time',
      descKey: 'stage4.desc',
      number: '04',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: CheckCircle,
      titleKey: 'stage5.title',
      timeKey: 'stage5.time',
      descKey: 'stage5.desc',
      number: '05',
      gradient: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="timeline" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4 text-3xl md:text-4xl font-bold">{t('estimate.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('estimate.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/50" />
          
          <div className="space-y-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white text-xl font-bold shadow-lg relative z-10">
                      {stage.number}
                    </div>
                    
                    {/* Content card */}
                    <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stage.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Icon size={32} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4 flex-wrap">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                              {t(stage.titleKey)}
                            </h3>
                            <Badge className="bg-primary/10 text-primary border-primary/20 text-sm font-semibold px-3 py-1">
                              {t(stage.timeKey)}
                            </Badge>
                          </div>
                          <p className="text-base text-slate-700 leading-relaxed">
                            {t(stage.descKey)}
                          </p>
                        </div>
                      </div>
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

export default DesignEstimate;

