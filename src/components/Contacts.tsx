import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Contacts = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error('Необходимо согласие на обработку данных');
      return;
    }
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', comment: '', consent: false });
  };

  return (
    <section id="contacts" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">{t('contacts.title')}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="card-feature space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('contacts.phone')}</h3>
                  <p className="text-muted-foreground mb-3">+49 123 456 7890</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+491234567890">{t('contacts.call')}</a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4 border-t border-border">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('contacts.email')}</h3>
                  <p className="text-muted-foreground mb-3">info@liebevollehande.de</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:info@liebevollehande.de">{t('contacts.write')}</a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4 border-t border-border">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    Musterstraße 123<br />
                    12345 Berlin, Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-feature animate-fade-in" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t('form.name')}</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t('form.phone')}</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t('form.email')}</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t('form.comment')}</label>
                <Textarea
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  rows={4}
                  className="text-base resize-none"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  {t('form.consent')}
                </label>
              </div>

              <Button type="submit" className="btn-cta w-full text-lg">
                {t('form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
