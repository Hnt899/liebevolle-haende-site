import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.features', href: '#features' },
    { key: 'nav.how', href: '#how-it-works' },
    { key: 'nav.pricing', href: '#pricing' },
    { key: 'nav.contacts', href: '#contacts' },
    { key: 'nav.details', href: '#details' },
  ];

  const languages: Array<{ code: 'ru' | 'de' | 'tr'; label: string }> = [
    { code: 'ru', label: 'RU' },
    { code: 'de', label: 'DE' },
    { code: 'tr', label: 'TR' },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">
              Liebevolle Hände
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Профессиональный уход за пожилыми людьми с заботой и вниманием.
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

          {/* Language Switcher */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Язык</h3>
            <div className="flex items-center space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            {t('footer.hosting')}
          </p>
          <p className="text-sm text-muted-foreground text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
