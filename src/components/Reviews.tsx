import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: t('review1.name'),
      text: t('review1.text'),
    },
    {
      name: t('review2.name'),
      text: t('review2.text'),
    },
    {
      name: t('review3.name'),
      text: t('review3.text'),
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-12xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-primary mb-4">{t('reviews.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('reviews.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card-feature animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="text-primary/30 mb-2" size={32} />
                <p className="text-base text-foreground leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">
                    {review.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

