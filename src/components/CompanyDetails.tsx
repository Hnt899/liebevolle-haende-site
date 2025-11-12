import { useLanguage } from '@/contexts/LanguageContext';

const CompanyDetails = () => {
  const { t } = useLanguage();

  const details = [
    { labelKey: 'details.name', value: 'Betreuungsdienst Liebevolle Hände GmbH' },
    { labelKey: 'details.inn', value: '1234567890' },
    { labelKey: 'details.address', value: 'Musterstraße 123, 12345 Berlin, Deutschland' },
    { labelKey: 'details.account', value: 'DE89 3704 0044 0532 0130 00' },
    { labelKey: 'details.ogrn', value: '1234567890123' },
    { labelKey: 'details.bank', value: 'Deutsche Bank AG' },
    { labelKey: 'details.bik', value: 'DEUTDEFF' },
    { labelKey: 'details.inn_bank', value: '9876543210' },
    { labelKey: 'details.corr', value: 'DE89 3704 0044 0000 0000 00' },
    { labelKey: 'details.bank_address', value: 'Bankstraße 1, 10115 Berlin, Deutschland' },
  ];

  return (
    <section id="details" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">{t('details.title')}</h2>
        </div>

        <div className="card-feature animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.map((detail, index) => (
              <div
                key={index}
                className="pb-4 border-b border-border last:border-b-0"
              >
                <dt className="text-sm font-semibold text-muted-foreground mb-2">
                  {t(detail.labelKey)}
                </dt>
                <dd className="text-base text-foreground font-medium">
                  {detail.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;
