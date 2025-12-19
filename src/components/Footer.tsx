import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.what', href: '#why' },
    { key: 'nav.packages', href: '#pricing' },
    { key: 'nav.scope', href: '#how-it-works' },
    { key: 'nav.timeline', href: '#timeline' },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">
              MVP App
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Навигация</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{t('footer.legal')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Официальный договор<br />
              Полное юридическое сопровождение
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
