import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, FileText } from 'lucide-react';

const MobileActionBar = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-card border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-2 gap-3">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            asChild
          >
            <a href="tel:+79991234567">
              <Phone size={20} className="mr-2" />
              {t('contacts.call')}
            </a>
          </Button>
          <Button 
            className="btn-cta"
            asChild
          >
            <a href="#contacts">
              <FileText size={20} className="mr-2" />
              {t('btn.request')}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileActionBar;
