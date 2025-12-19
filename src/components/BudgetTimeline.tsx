import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, DollarSign } from 'lucide-react';

const BudgetTimeline = () => {
  const { t } = useLanguage();

  return (
    <section id="budget" className="section-padding bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-primary mb-4 text-3xl md:text-4xl font-bold">{t('budget.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-feature bg-white/90 backdrop-blur-sm text-center p-8">
            <div className="space-y-4">
              <Clock size={40} className="mx-auto text-primary" />
              <h3 className="text-2xl font-bold text-foreground">{t('budget.packageA')}</h3>
            </div>
          </div>
          
          <div className="card-feature bg-white/90 backdrop-blur-sm text-center p-8">
            <div className="space-y-4">
              <DollarSign size={40} className="mx-auto text-primary" />
              <h3 className="text-2xl font-bold text-foreground">{t('budget.packageB')}</h3>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            {t('budget.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BudgetTimeline;

