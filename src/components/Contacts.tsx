import { useLanguage } from '@/contexts/LanguageContext';

const Contacts = () => {
  const { t } = useLanguage();

  const details = [
    { labelKey: 'details.name', value: 'ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ДЕМЬЯНОВА ЕЛЕНА НИКОЛАЕВНА' },
    { labelKey: 'details.inn', value: '310263445438' },
    { labelKey: 'details.address', value: '308598, РОССИЯ, БЕЛГОРОДСКАЯ ОБЛ, БЕЛГОРОДСКИЙ Р-Н, С ЧЕРЕМОШНОЕ, УЛ НАГОРНАЯ, Д 55' },
    { labelKey: 'details.ogrn', value: '325310000001892' },
    { labelKey: 'details.account', value: '40802810800007744407' },
    { labelKey: 'details.bank', value: 'АО «ТБанк»' },
    { labelKey: 'details.bik', value: '044525974' },
    { labelKey: 'details.inn_bank', value: '7710140679' },
    { labelKey: 'details.corr', value: '30101810145250000974' },
    { labelKey: 'details.bank_address', value: '127287, г. Москва, ул. Хуторская 2-я, д. 38А, стр. 26' },
  ];

  return (
    <section id="contacts" className="section-padding bg-background">
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

export default Contacts;
