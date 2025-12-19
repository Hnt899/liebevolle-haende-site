import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, Mail, MessageCircle, FileText, Clock } from 'lucide-react';
import { toast } from 'sonner';

const CTABlock = () => {
  const { t } = useLanguage();

  const email = 'arturfurt9@gmail.com';

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      toast.success('Почта скопирована');
    } catch (err) {
      toast.error('Не удалось скопировать почту');
    }
  };

  return (
    <section id="cta" className="section-padding gradient-bg">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8 text-white animate-fade-in">
          <h2 className="text-white text-3xl md:text-4xl font-bold">{t('cta.title')}</h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
              asChild
            >
              <a href="https://t.me/CDI_Agency" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2" size={20} />
                {t('cta.contract')}
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white px-8 py-6 text-lg backdrop-blur-sm"
              asChild
            >
              <a href="https://t.me/CDI_Agency" target="_blank" rel="noopener noreferrer">
                <Clock className="mr-2" size={20} />
                {t('cta.call')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
