import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Car, ArrowRight } from 'lucide-react';

const Catalog = () => {
  const { t } = useLanguage();

  const models = [
    {
      name: t('catalog.model1'),
      price: t('catalog.model1.price'),
      benefit: t('catalog.model1.benefit'),
    },
    {
      name: t('catalog.model2'),
      price: t('catalog.model2.price'),
      benefit: t('catalog.model2.benefit'),
    },
    {
      name: t('catalog.model3'),
      price: t('catalog.model3.price'),
      benefit: t('catalog.model3.benefit'),
    },
    {
      name: t('catalog.model4'),
      price: t('catalog.model4.price'),
      benefit: t('catalog.model4.benefit'),
    },
  ];

  return (
    <section id="catalog" className="section-padding bg-background">
      <div className="container mx-auto max-w-12xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">{t('catalog.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('catalog.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="card-feature group animate-fade-in hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col space-y-4">
                <div className="p-4 rounded-lg bg-primary/10 text-primary mb-4">
                  <Car size={40} />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {model.name}
                </h3>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">
                    {model.price}
                  </p>
                  <p className="text-sm text-accent font-semibold">
                    {model.benefit}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-4 w-full"
                  asChild
                >
                  <a href="#contacts">
                    {t('btn.calculate')}
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-cta" size="lg" asChild>
            <a href="#contacts">
              {t('catalog.more')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;

