import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';

const NotIncluded = () => {
  const { t } = useLanguage();

  const items = [
    {
      titleKey: 'notincluded.item1.title',
      descKey: 'notincluded.item1.desc',
    },
    {
      titleKey: 'notincluded.item2.title',
      descKey: 'notincluded.item2.desc',
    },
    {
      titleKey: 'notincluded.item3.title',
      descKey: 'notincluded.item3.desc',
    },
    {
      titleKey: 'notincluded.item4.title',
      descKey: 'notincluded.item4.desc',
    },
  ];

  return (
    <section id="not-included" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-primary mb-4 text-3xl md:text-4xl font-bold">{t('notincluded.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('notincluded.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group animate-fade-in bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center border-2 border-red-200">
                  <X size={20} className="text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotIncluded;

