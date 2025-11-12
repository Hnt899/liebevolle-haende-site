import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'de' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.features': 'Возможности',
    'nav.how': 'Как это работает',
    'nav.pricing': 'Тарифы',
    'nav.contacts': 'Контакты',
    'nav.details': 'Реквизиты',
    'btn.request': 'Оставить заявку',
    
    // Hero
    'hero.title': 'Коммерческое предложение: ваш новый сайт по уходу за пожилыми',
    'hero.subtitle': 'Создадим современную, адаптивную и понятную платформу, которая поможет клиентам быстро связаться и оформить заявку на уход.',
    'hero.demo': 'Посмотреть демо',
    'hero.hosting': 'Хостинг — Telekom (оплачивается отдельно).',
    
    // Features
    'features.title': 'Какие возможности даст платформа',
    'feature1.title': 'Удобная запись по телефону и e-mail',
    'feature1.desc': 'Кнопка звонка, форма заявки и авто-письмо подтверждения.',
    'feature2.title': 'Современный адаптивный дизайн',
    'feature2.desc': 'Чёткая типографика, простая навигация, высокая читаемость.',
    'feature3.title': 'FAQ с популярными вопросами',
    'feature3.desc': 'Экономит время: быстрые ответы и форма для нового вопроса.',
    'feature4.title': 'Блок "Наша команда"',
    'feature4.desc': 'Фотографии и опыт специалистов — доверие с первого экрана.',
    'feature5.title': 'Хостинг на Telekom',
    'feature5.desc': 'Разворачиваем на Telekom. Стоимость хостинга — отдельно.',
    
    // How It Works
    'how.title': 'Принцип работы',
    'how.subtitle': 'Простой путь от заявки до выезда специалиста',
    'step1.title': 'Пользователь оформляет заявку на сайте',
    'step1.desc': 'Заполняет форму или звонит по кнопке "Позвонить сейчас".',
    'step2.title': 'Администратор получает заявку и связывается',
    'step2.desc': 'Подтверждает детали и согласует время.',
    'step3.title': 'Специалист видит запись и выезжает',
    'step3.desc': 'Удобный график и уведомления для команды.',
    
    // Pricing
    'pricing.title': 'Тарифы разработки',
    'pricing.note': 'Стоимость хостинга Telekom не входит в цену разработки.',
    'plan1.title': 'Базовый лендинг',
    'plan1.desc': 'Одностраничный сайт с формой заявки, контактами, FAQ и блоком команды. Адаптивность, базовая SEO-настройка.',
    'plan2.title': 'Многостраничный + новый логотип',
    'plan2.desc': 'Главная, Возможности, Как работает, Услуги, Команда, Контакты, Реквизиты. Новый логотип, адаптив под все устройства, плавные анимации, расширенная SEO.',
    'plan3.title': 'Многостраничный + админ-панель',
    'plan3.desc': 'Всё из тарифа 2 + админ-панель. Кастомная система подтверждения заявок администратором, экспорт заявок на почту.',
    
    // CTA
    'cta.title': 'Готовы обсудить проект?',
    'cta.subtitle': 'Оставьте заявку — проведём бесплатную консультацию, предложим архитектуру и сроки.',
    'cta.point1': 'Краткий созвон 15–20 минут',
    'cta.point2': 'Подбор технического стека',
    'cta.point3': 'План запуска пилота',
    'cta.telegram': 'Написать в Telegram',
    'cta.email': 'Отправить e-mail',
    
    // Contacts
    'contacts.title': 'Контакты',
    'contacts.phone': 'Телефон',
    'contacts.email': 'E-mail',
    'contacts.call': 'Позвонить сейчас',
    'contacts.write': 'Написать письмо',
    'form.name': 'Имя',
    'form.phone': 'Телефон',
    'form.email': 'E-mail',
    'form.comment': 'Комментарий',
    'form.consent': 'Я согласен на обработку персональных данных',
    'form.submit': 'Отправить заявку',
    
    // Company Details
    'details.title': 'Реквизиты',
    'details.name': 'Название организации',
    'details.inn': 'ИНН',
    'details.address': 'Юридический адрес',
    'details.account': 'Расчётный счёт',
    'details.ogrn': 'ОГРН/ОГРНИП',
    'details.bank': 'Банк',
    'details.bik': 'БИК банка',
    'details.inn_bank': 'ИНН банка',
    'details.corr': 'Корр. счёт',
    'details.bank_address': 'Юридический адрес банка',
    
    // Footer
    'footer.hosting': 'Хостинг: Telekom (оплачивается отдельно)',
    'footer.copyright': '© 2024 Betreuungsdienst Liebevolle Hände. Все права защищены.',
  },
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.features': 'Funktionen',
    'nav.how': 'Wie es funktioniert',
    'nav.pricing': 'Preise',
    'nav.contacts': 'Kontakte',
    'nav.details': 'Firmendaten',
    'btn.request': 'Anfrage senden',
    
    // Hero
    'hero.title': 'Geschäftsangebot: Ihre neue Website für Altenpflege',
    'hero.subtitle': 'Wir erstellen eine moderne, adaptive und verständliche Plattform, die Kunden hilft, schnell Kontakt aufzunehmen und eine Pflegeanfrage zu stellen.',
    'hero.demo': 'Demo ansehen',
    'hero.hosting': 'Hosting — Telekom (separat bezahlt).',
    
    // Features
    'features.title': 'Welche Möglichkeiten bietet die Plattform',
    'feature1.title': 'Bequeme Buchung per Telefon und E-Mail',
    'feature1.desc': 'Anruf-Button, Anfrageformular und automatische Bestätigungs-E-Mail.',
    'feature2.title': 'Modernes responsives Design',
    'feature2.desc': 'Klare Typografie, einfache Navigation, hohe Lesbarkeit.',
    'feature3.title': 'FAQ mit häufigen Fragen',
    'feature3.desc': 'Spart Zeit: schnelle Antworten und Formular für neue Fragen.',
    'feature4.title': 'Block "Unser Team"',
    'feature4.desc': 'Fotos und Erfahrung der Spezialisten — Vertrauen vom ersten Bildschirm.',
    'feature5.title': 'Hosting bei Telekom',
    'feature5.desc': 'Wir deployen auf Telekom. Hosting-Kosten separat.',
    
    // How It Works
    'how.title': 'Funktionsprinzip',
    'how.subtitle': 'Einfacher Weg von der Anfrage bis zum Spezialistenbesuch',
    'step1.title': 'Benutzer stellt Anfrage auf der Website',
    'step1.desc': 'Füllt Formular aus oder ruft über "Jetzt anrufen" Button an.',
    'step2.title': 'Administrator erhält Anfrage und kontaktiert',
    'step2.desc': 'Bestätigt Details und vereinbart Termin.',
    'step3.title': 'Spezialist sieht Termin und fährt hin',
    'step3.desc': 'Bequemer Zeitplan und Benachrichtigungen für das Team.',
    
    // Pricing
    'pricing.title': 'Entwicklungspreise',
    'pricing.note': 'Telekom-Hosting-Kosten nicht im Entwicklungspreis enthalten.',
    'plan1.title': 'Basis Landing Page',
    'plan1.desc': 'Einseitige Website mit Anfrageformular, Kontakten, FAQ und Team-Block. Responsive, grundlegende SEO-Einstellung.',
    'plan2.title': 'Mehrseitig + neues Logo',
    'plan2.desc': 'Home, Funktionen, Wie es funktioniert, Dienstleistungen, Team, Kontakte, Firmendaten. Neues Logo, responsive für alle Geräte, sanfte Animationen, erweiterte SEO.',
    'plan3.title': 'Mehrseitig + Admin-Panel',
    'plan3.desc': 'Alles aus Tarif 2 + Admin-Panel. Benutzerdefiniertes Anfragenbestätigungssystem durch Administrator, Export von Anfragen per E-Mail.',
    
    // CTA
    'cta.title': 'Bereit, das Projekt zu besprechen?',
    'cta.subtitle': 'Senden Sie eine Anfrage — wir führen eine kostenlose Beratung durch, schlagen Architektur und Fristen vor.',
    'cta.point1': 'Kurzes Gespräch 15–20 Minuten',
    'cta.point2': 'Auswahl des Tech-Stacks',
    'cta.point3': 'Plan für Pilot-Launch',
    'cta.telegram': 'Auf Telegram schreiben',
    'cta.email': 'E-Mail senden',
    
    // Contacts
    'contacts.title': 'Kontakte',
    'contacts.phone': 'Telefon',
    'contacts.email': 'E-Mail',
    'contacts.call': 'Jetzt anrufen',
    'contacts.write': 'Brief schreiben',
    'form.name': 'Name',
    'form.phone': 'Telefon',
    'form.email': 'E-Mail',
    'form.comment': 'Kommentar',
    'form.consent': 'Ich stimme der Verarbeitung personenbezogener Daten zu',
    'form.submit': 'Anfrage senden',
    
    // Company Details
    'details.title': 'Firmendaten',
    'details.name': 'Firmenname',
    'details.inn': 'Steuernummer',
    'details.address': 'Rechtsanschrift',
    'details.account': 'Bankkonto',
    'details.ogrn': 'Handelsregisternummer',
    'details.bank': 'Bank',
    'details.bik': 'BLZ',
    'details.inn_bank': 'Steuernummer der Bank',
    'details.corr': 'Korrespondenzkonto',
    'details.bank_address': 'Rechtsanschrift der Bank',
    
    // Footer
    'footer.hosting': 'Hosting: Telekom (separat bezahlt)',
    'footer.copyright': '© 2024 Betreuungsdienst Liebevolle Hände. Alle Rechte vorbehalten.',
  },
  tr: {
    // Header
    'nav.home': 'Ana Sayfa',
    'nav.features': 'Özellikler',
    'nav.how': 'Nasıl Çalışır',
    'nav.pricing': 'Fiyatlar',
    'nav.contacts': 'İletişim',
    'nav.details': 'Şirket Bilgileri',
    'btn.request': 'Talep Gönder',
    
    // Hero
    'hero.title': 'Ticari Teklif: Yaşlı Bakım için Yeni Web Siteniz',
    'hero.subtitle': 'Modern, uyarlanabilir ve anlaşılır bir platform oluşturacağız; müşterilerin hızlıca iletişime geçmesine ve bakım talebi oluşturmasına yardımcı olacak.',
    'hero.demo': 'Demoyu Görüntüle',
    'hero.hosting': 'Hosting — Telekom (ayrıca ödenir).',
    
    // Features
    'features.title': 'Platform Hangi Olanaklari Sunacak',
    'feature1.title': 'Telefon ve E-posta ile Rahat Kayıt',
    'feature1.desc': 'Arama butonu, talep formu ve otomatik onay e-postası.',
    'feature2.title': 'Modern Uyarlanabilir Tasarım',
    'feature2.desc': 'Net tipografi, basit navigasyon, yüksek okunabilirlik.',
    'feature3.title': 'Sık Sorulan Sorular ile SSS',
    'feature3.desc': 'Zaman tasarrufu: hızlı cevaplar ve yeni soru formu.',
    'feature4.title': '"Ekibimiz" Bloğu',
    'feature4.desc': 'Uzmanların fotoğrafları ve deneyimi — ilk ekrandan güven.',
    'feature5.title': 'Telekom Hosting',
    'feature5.desc': 'Telekom üzerinde deploy ediyoruz. Hosting maliyeti ayrı.',
    
    // How It Works
    'how.title': 'Çalışma Prensibi',
    'how.subtitle': 'Talepten uzman ziyaretine basit yol',
    'step1.title': 'Kullanıcı web sitesinde talep oluşturur',
    'step1.desc': 'Formu doldurur veya "Şimdi Ara" butonuna tıklar.',
    'step2.title': 'Yönetici talebi alır ve iletişime geçer',
    'step2.desc': 'Detayları onaylar ve zamanı planlar.',
    'step3.title': 'Uzman randevuyu görür ve ziyaret eder',
    'step3.desc': 'Ekip için rahat program ve bildirimler.',
    
    // Pricing
    'pricing.title': 'Geliştirme Fiyatları',
    'pricing.note': 'Telekom hosting maliyeti geliştirme fiyatına dahil değildir.',
    'plan1.title': 'Temel Açılış Sayfası',
    'plan1.desc': 'Talep formu, iletişim, SSS ve ekip bloğu ile tek sayfalı web sitesi. Uyarlanabilir, temel SEO kurulumu.',
    'plan2.title': 'Çok Sayfalı + Yeni Logo',
    'plan2.desc': 'Ana Sayfa, Özellikler, Nasıl Çalışır, Hizmetler, Ekip, İletişim, Şirket Bilgileri. Yeni logo, tüm cihazlar için uyarlanabilir, yumuşak animasyonlar, genişletilmiş SEO.',
    'plan3.title': 'Çok Sayfalı + Yönetici Paneli',
    'plan3.desc': 'Tarife 2\'deki her şey + Yönetici Paneli. Yönetici tarafından talep onay sistemi, e-posta ile talep dışa aktarma.',
    
    // CTA
    'cta.title': 'Projeyi Tartışmaya Hazır mısınız?',
    'cta.subtitle': 'Talep gönderin — ücretsiz danışmanlık yapacağız, mimari ve süreçler önereceğiz.',
    'cta.point1': 'Kısa görüşme 15–20 dakika',
    'cta.point2': 'Teknoloji yığını seçimi',
    'cta.point3': 'Pilot lansmanı planı',
    'cta.telegram': 'Telegram\'da Yaz',
    'cta.email': 'E-posta Gönder',
    
    // Contacts
    'contacts.title': 'İletişim',
    'contacts.phone': 'Telefon',
    'contacts.email': 'E-posta',
    'contacts.call': 'Şimdi Ara',
    'contacts.write': 'Mektup Yaz',
    'form.name': 'İsim',
    'form.phone': 'Telefon',
    'form.email': 'E-posta',
    'form.comment': 'Yorum',
    'form.consent': 'Kişisel verilerin işlenmesini kabul ediyorum',
    'form.submit': 'Talep Gönder',
    
    // Company Details
    'details.title': 'Şirket Bilgileri',
    'details.name': 'Şirket Adı',
    'details.inn': 'Vergi Numarası',
    'details.address': 'Yasal Adres',
    'details.account': 'Banka Hesabı',
    'details.ogrn': 'Ticaret Sicil Numarası',
    'details.bank': 'Banka',
    'details.bik': 'Banka Kodu',
    'details.inn_bank': 'Banka Vergi Numarası',
    'details.corr': 'Muhabir Hesap',
    'details.bank_address': 'Banka Yasal Adresi',
    
    // Footer
    'footer.hosting': 'Hosting: Telekom (ayrıca ödenir)',
    'footer.copyright': '© 2024 Betreuungsdienst Liebevolle Hände. Tüm hakları saklıdır.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
