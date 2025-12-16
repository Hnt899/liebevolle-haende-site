import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, TrendingUp, Palette, Clock, CheckCircle } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const goals = [
    { icon: TrendingUp, label: t('hero.goal1'), value: 'Продукты' },
    { icon: Palette, label: t('hero.goal2'), value: 'Доверие' },
    { icon: Clock, label: t('hero.goal3'), value: 'Заявки' },
    { icon: CheckCircle, label: t('hero.goal4'), value: 'Рост' },
  ];

  return (
    <section id="hero" className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-white max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-white/90 max-w-5xl mx-auto leading-relaxed pt-4">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg" size="lg" asChild>
              <a href="#cta">
                {t('hero.cta1')}
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-2 border-white/50 hover:bg-white/10 text-white"
              asChild
            >
              <a href="#why">
                {t('hero.cta2')}
              </a>
            </Button>
          </div>

          {/* Goals Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-5xl mx-auto">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  <Icon className="mx-auto mb-3 text-accent" size={32} />
                  <div className="text-lg font-bold text-white mb-1">{goal.value}</div>
                  <div className="text-sm text-white/80">{goal.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
