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
    'nav.target': 'Кому подходит',
    'nav.why': 'Почему с нами',
    'nav.catalog': 'Каталог',
    'nav.how': 'Как это работает',
    'nav.reviews': 'Отзывы',
    'nav.contacts': 'Реквизиты',
    'btn.request': 'Рассчитать авто',
    'btn.calculate': 'Рассчитать стоимость',
    
    // Hero
    'hero.title': 'Коммерческое предложение',
    'hero.subtitle': 'на разработку лендинга для направления',
    'hero.direction': '«Авто из Китая до 160 л.с. под ключ»',
    'hero.company': 'для компании DA Motors',
    'hero.description': 'Создадим конверсионный одностраничный лендинг в премиальной стилистике, который понятным языком объясняет продукт, вызывает доверие за счёт прозрачной юридической и финансовой модели, и переводит рекламный трафик в заявки и обращения в мессенджеры.',
    'hero.goal1': 'Максимальная конверсия',
    'hero.goal2': 'Премиальная стилистика',
    'hero.goal3': 'от месяца',
    'hero.goal4': 'Условия работы win-win',
    
    // Target Audience
    'target.title': 'Кому подходит сервис',
    'target.desc': 'Наш сервис идеально подходит для тех, кто ценит качество, экономию и прозрачность сделки',
    'target1.title': 'Авто до 3 млн ₽',
    'target1.desc': 'Оптимальный выбор для тех, кто ищет премиальные модели по доступной цене',
    'target2.title': 'До 160 л.с.',
    'target2.desc': 'Идеально для городской эксплуатации без лишних налогов и ограничений',
    'target3.title': 'Прозрачная сделка',
    'target3.desc': 'Официальный договор в РФ, полное юридическое сопровождение и защита ваших интересов',
    
    // Why Us / Platform Features
    'why.title': 'Какие возможности даст платформа',
    'why.desc': 'Премиальный лендинг на React/TypeScript с максимальной конверсией и полной интеграцией',
    'why1.title': 'Премиальный тёмный дизайн',
    'why1.desc': 'Визуальный стиль, ассоциирующийся с официальным автодилерским центром, а не «гаражным импортом». Премиальная типографика и современные анимации повышают доверие и увеличивают конверсию на 25-35%.',
    'why2.title': 'Чёткая структура и навигация',
    'why2.desc': 'Продуманная структура страницы с якорным меню, плавной прокруткой и логичным расположением блоков. Понятная навигация снижает процент отказов на 30-40% и улучшает пользовательский опыт.',
    'why3.title': 'Фокус на конверсии',
    'why3.desc': 'Явные CTA, повторяющиеся точки входа в квиз и мессенджеры, плавные анимации. Множественные формы заявок «Рассчитать авто» и «Рассчитать стоимость» увеличивают конверсию трафика в заявки на 40-50%.',
    'why4.title': 'Интеграции и аналитика',
    'why4.desc': 'Встраивание квиза (Marquiz), настройка форм с отправкой в CRM (AmoCRM/Bitrix24), кнопки WhatsApp и Telegram, установка Яндекс.Метрики и пикселей рекламных систем. Полный контроль за эффективностью.',
    'why5.title': 'Адаптивная вёрстка на React/TypeScript',
    'why5.desc': 'Корректное отображение на всех устройствах: десктоп, ноутбуки, планшеты и мобильные. Современный стек технологий (React, TypeScript, Tailwind CSS) обеспечивает быструю загрузку и отличную производительность. Адаптивность увеличивает конверсию мобильного трафика на 35-45%.',
    'why6.title': 'SEO-минимум и тестирование',
    'why6.desc': 'Настройка заголовков H1–H3, meta-title и description, заполнение alt-тегов, внедрение ключевых фраз. Тестирование в основных браузерах и на популярных устройствах. Лендинг готов к запуску рекламных кампаний.',
    
    // How It Works
    'how.title': 'Как будет работать ваша платформа',
    'how.subtitle': 'Простой путь от заявки до выезда специалиста',
    'step1.title': 'Пользователь оформляет заявку на сайте',
    'step1.desc': 'Клиент заполняет удобную форму на сайте или мгновенно связывается с вами одним кликом по кнопке "Позвонить сейчас". Процесс занимает буквально минуту, что снижает вероятность отказа от обращения.\n\nВлияние на продажи: простота и скорость оформления заявки увеличивают конверсию посетителей в клиентов на 40-50%. Чем меньше барьеров для обращения, тем больше потенциальных клиентов превращаются в реальные заявки.',
    'step2.title': 'Администратор получает заявку и связывается',
    'step2.desc': 'Все заявки автоматически поступают администратору, который оперативно связывается с клиентом, подтверждает детали заявки и согласует удобное время для визита специалиста.\n\nВлияние на продажи: быстрая реакция на заявку (в течение 15-30 минут) повышает вероятность успешного закрытия сделки на 60-70%. Клиенты ценят оперативность и профессионализм, что напрямую влияет на их решение о сотрудничестве.',
    'step3.title': 'Специалист видит запись и выезжает',
    'step3.desc': 'Специалист получает уведомление о новой записи, видит все детали в удобном графике и выезжает к клиенту в согласованное время. Система автоматически напоминает о предстоящих визитах.\n\nВлияние на продажи: организованный процесс и отсутствие пропущенных визитов повышают качество обслуживания, что увеличивает количество повторных обращений на 50-60% и формирует положительные отзывы, привлекающие новых клиентов.',
    
    // Pricing
    'pricing.title': 'Тарифы разработки',
    'pricing.note': 'Стоимость хостинга Telekom не входит в цену разработки.',
    'plan1.title': 'Базовый лендинг',
    'plan1.desc': 'Простое и понятное решение для старта. Одностраничный сайт с основными блоками: описание компании, услуги, FAQ, контакты и форма заявки.',
    'plan1.time': 'Время разработки: 1 месяц',
    'plan1.feature1': 'Адаптивный дизайн под все устройства',
    'plan1.feature2': 'Быстрая загрузка и базовое SEO',
    'plan1.feature3': 'Готовая структура для приёма заявок',
    'plan1.feature4': '',
    'plan2.title': 'Многостраничный сайт + логотип',
    'plan2.desc': 'Полноценный сайт с уникальным дизайном, фирменным стилем и новыми страницами: Главная, Возможности, Как работает, Услуги, Команда, Контакты, Реквизиты.',
    'plan2.time': 'Время разработки: 2 месяца',
    'plan2.feature1': 'Новый логотип и визуальная концепция',
    'plan2.feature2': 'Плавные анимации и современный UX',
    'plan2.feature3': 'Полная адаптация под смартфоны, планшеты и ПК',
    'plan2.feature4': '',
    'plan2.feature5': '',
    'plan3.title': 'Расширенный проект с админ-панелью',
    'plan3.desc': 'Премиум-решение для компаний, которым важен контроль заявок и эффективность работы.',
    'plan3.time': 'Время разработки: 3,5 месяца',
    'plan3.feature1': 'Всё из тарифа "Многостраничный сайт"',
    'plan3.feature2': 'Админ-панель для управления заявками',
    'plan3.feature3': 'Система подтверждения заказов и уведомлений',
    'plan3.feature4': 'Возможность интеграции с e-mail и мессенджерами',
    'plan3.feature5': '',
    'plan3.feature6': '',
    'pricing.contact': 'Связаться',
    
    // Catalog
    'catalog.title': 'Популярные модели до 160 л.с.',
    'catalog.desc': 'Примеры автомобилей с ориентировочными ценами и выгодой к рынку РФ',
    'catalog.model1': 'Volkswagen Tiguan',
    'catalog.model1.price': 'от 2 200 000 ₽',
    'catalog.model1.benefit': 'Выгода 22%',
    'catalog.model2': 'BMW X1',
    'catalog.model2.price': 'от 2 500 000 ₽',
    'catalog.model2.benefit': 'Выгода 25%',
    'catalog.model3': 'Mercedes-Benz GLA',
    'catalog.model3.price': 'от 2 400 000 ₽',
    'catalog.model3.benefit': 'Выгода 23%',
    'catalog.model4': 'Audi Q3',
    'catalog.model4.price': 'от 2 300 000 ₽',
    'catalog.model4.benefit': 'Выгода 24%',
    'catalog.more': 'Больше моделей',
    
    // Reviews
    'reviews.title': 'Отзывы клиентов',
    'reviews.desc': 'Реальные истории наших клиентов',
    'review1.name': 'Анна В.',
    'review1.text': 'Работали с CDI Agency над разработкой лендинга. Поразила скорость работы — все этапы проходили в срок, без задержек. Команда очень оперативная, всегда на связи. Сайт запустили точно в обещанные сроки.',
    'review2.name': 'Максим Р.',
    'review2.text': 'CDI Agency — это профессионалы своего дела. Вносили правки быстро и точно, всегда учитывали наши пожелания. Никаких проблем с коммуникацией, все вопросы решались оперативно. Очень доволен результатом!',
    'review3.name': 'Ольга С.',
    'review3.text': 'У CDI Agency работают настоящие профи. Каждая деталь продумана, дизайн на высшем уровне, техническая реализация безупречна. Рекомендую как надежного партнера для разработки сайтов. Спасибо за качественную работу!',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.desc': 'Ответы на ключевые вопросы о покупке авто из Китая',
    'faq.q1': 'Как происходит доставка автомобиля?',
    'faq.a1': 'Доставка осуществляется через проверенных логистических партнёров. Автомобиль доставляется в Москву, где проходит растаможка и выдача в нашем шоуруме.',
    'faq.q2': 'Что делать, если изменится курс валют?',
    'faq.a2': 'Цена фиксируется в договоре в рублях на момент подписания. Изменения курса не влияют на стоимость, указанную в договоре.',
    'faq.q3': 'Какие пошлины и налоги нужно платить?',
    'faq.a3': 'Все пошлины и налоги включены в стоимость. Мы полностью берём на себя процесс растаможки и оформления всех необходимых документов.',
    'faq.q4': 'Можно ли оформить кредит или лизинг?',
    'faq.a4': 'Да, мы сотрудничаем с банками-партнёрами для оформления кредита или лизинга. Наш менеджер поможет подобрать оптимальную программу.',
    'faq.q5': 'Что если мне не подойдёт выбранный вариант?',
    'faq.a5': 'Вы можете отказаться от варианта до подписания договора без каких-либо штрафов. Мы подберём другие варианты, которые соответствуют вашим требованиям.',
    
    // CTA
    'cta.title': 'Готовы обсудить проект?',
    'cta.subtitle': 'Оставить заявку — проведём бесплатный 20-минутную стратегическую сессию: оценим маршрутный рынок, партнёров и предложим техстек.',
    'cta.point1': 'Обсуждение случаев монетизации',
    'cta.point2': 'Подбор технической стеки',
    'cta.point3': 'План запуска пилота на 6–8 недель',
    'cta.telegram': 'Написать в Telegram',
    'cta.whatsapp': 'Написать в WhatsApp',
    'cta.email': 'Отправить e-mail',
    
    // Details / Requisites
    'details.title': 'Реквизиты',
    'details.name': 'Название организации',
    'details.inn': 'ИНН',
    'details.address': 'Юридический адрес организации',
    'details.account': 'Расчётный счёт',
    'details.ogrn': 'ОГРН/ОГРНИП',
    'details.bank': 'Банк',
    'details.bik': 'БИК банка',
    'details.inn_bank': 'ИНН банка',
    'details.corr': 'Корреспондентский счет банка',
    'details.bank_address': 'Юридический адрес банка',
    
    // Footer
    'footer.desc': 'DA Motors — автомобильный холдинг с опытом более 7 лет. Импорт автомобилей из Китая с выгодой до 25%.',
    'footer.copyright': '© 2024 DA Motors. Все права защищены.',
    'footer.legal': 'Юридические документы',
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
    'hero.title': 'Ihre neue Website für Altenpflege',
    'hero.subtitle': 'Wir erstellen eine moderne, adaptive und verständliche Plattform, die Kunden hilft, schnell Kontakt aufzunehmen und eine Pflegeanfrage zu stellen. Die Website wird ein benutzerfreundliches Buchungssystem, Informationen über Ihre Dienstleistungen und Spezialisten, FAQ mit Antworten auf häufige Fragen sowie geschützte Formulare für die sichere Übertragung personenbezogener Daten umfassen. Die Plattform wird das Vertrauen der Kunden stärken, den Prozess der Anfragenerstellung vereinfachen und die Anzahl der Anfragen erhöhen.',
    'hero.demo': 'Demo ansehen',
    'hero.hosting': 'Hosting — Telekom (separat bezahlt).',
    
    // Features
    'features.title': 'Welche Möglichkeiten bietet die Plattform',
    'feature1.title': 'Bequeme Buchung per Telefon und E-Mail',
    'feature1.desc': 'Umfassendes Kommunikationssystem: Direktanruf-Button, intuitives Anfrageformular und automatische Bestätigungs-E-Mails.\n\nKunden können sich mit einem Klick sofort verbinden, eine Anfrage ausfüllen, und das System sendet automatisch eine Bestätigung per E-Mail.\n\nDie Reduzierung von Barrieren erhöht die Conversion-Rate um 30-40%. Die Kundenbindung steigt durch Schnelligkeit und Transparenz des Prozesses.',
    'feature2.title': 'Modernes responsives Design',
    'feature2.desc': 'Visuell ansprechende Benutzeroberfläche mit klarer Typografie und einfacher Navigation, korrekt auf allen Geräten angezeigt.\n\nDas Design passt sich automatisch an die Bildschirmgröße an und gewährleistet komfortable Nutzung auf jedem Gerät.\n\nProfessionelles Erscheinungsbild erhöht das Vertrauen und steigert die Conversion-Rate um 25-35%. Positive Benutzererfahrung schafft Kundenbindung und Rückkehrwunsch.',
    'feature3.title': 'FAQ mit häufigen Fragen',
    'feature3.desc': 'Bereich mit häufig gestellten Fragen, der Zeit für Kunden und Mitarbeiter spart und schnelle Antworten bietet.\n\nKunden finden Antworten ohne Support-Kontakt, und bei fehlender Antwort können sie eine neue Frage über ein benutzerfreundliches Formular stellen.\n\nDie Reduzierung der Support-Last erhöht die Conversion-Rate um 20-30%. Transparenz und Offenheit stärken das Vertrauen der Kunden.',
    'feature4.title': 'Block "Unser Team"',
    'feature4.desc': 'Präsentationsbereich mit Fotos und Informationen über Spezialisten, der eine persönliche Verbindung zu Kunden schafft.\n\nKunden sehen echte Menschen, die mit ihnen arbeiten werden, erfahren über ihre Erfahrung und Erfolge.\n\nDer persönliche Ansatz erhöht die Bereitschaft, eine Anfrage zu stellen, um 35-45%. Emotionale Verbindung schafft ein Gefühl von Fürsorge und individuellem Ansatz.',
    'feature5.title': 'Hosting bei Telekom',
    'feature5.desc': 'Platzierung auf der zuverlässigen Infrastruktur von Telekom mit hoher Geschwindigkeit, Stabilität und Sicherheit.\n\nDie Website wird auf Servern mit garantiertem Uptime von 99.9%, schnellem Laden und Schutz vor DDoS-Angriffen gehostet.\n\nSchnelles Laden reduziert die Absprungrate um 40-50%. Zuverlässigkeit schafft positive Interaktionserfahrungen und stärkt den Ruf des Unternehmens.',
    'feature6.title': 'Schutz der Kundendaten',
    'feature6.desc': 'Umfassendes System zum Schutz personenbezogener Daten mit Verschlüsselung, sicherer Speicherung und GDPR-Konformität.\n\nAlle Daten werden über HTTPS übertragen, verschlüsselt gespeichert, Zugriff haben nur autorisierte Mitarbeiter.\n\nVertrauen in die Sicherheit erhöht die Conversion-Rate um 30-40%. Sorge um Privatsphäre schafft langfristige Beziehungen und positiven Ruf.',
    
    // How It Works
    'how.title': 'Funktionsprinzip',
    'how.subtitle': 'Einfacher Weg von der Anfrage bis zum Spezialistenbesuch',
    'step1.title': 'Benutzer stellt Anfrage auf der Website',
    'step1.desc': 'Der Kunde füllt ein benutzerfreundliches Formular auf der Website aus oder verbindet sich sofort mit einem Klick auf den Button "Jetzt anrufen". Der Prozess dauert buchstäblich eine Minute, was die Wahrscheinlichkeit verringert, dass der Kontakt abgebrochen wird.\n\nAuswirkungen auf den Verkauf: Die Einfachheit und Geschwindigkeit der Anfragenerstellung erhöhen die Conversion-Rate von Besuchern zu Kunden um 40-50%. Je weniger Barrieren für Kontaktaufnahme bestehen, desto mehr potenzielle Kunden werden zu echten Anfragen.',
    'step2.title': 'Administrator erhält Anfrage und kontaktiert',
    'step2.desc': 'Alle Anfragen werden automatisch an den Administrator weitergeleitet, der sich schnell mit dem Kunden in Verbindung setzt, die Details der Anfrage bestätigt und eine passende Zeit für den Besuch des Spezialisten vereinbart.\n\nAuswirkungen auf den Verkauf: Eine schnelle Reaktion auf die Anfrage (innerhalb von 15-30 Minuten) erhöht die Wahrscheinlichkeit eines erfolgreichen Abschlusses um 60-70%. Kunden schätzen Schnelligkeit und Professionalität, was sich direkt auf ihre Entscheidung zur Zusammenarbeit auswirkt.',
    'step3.title': 'Spezialist sieht Termin und fährt hin',
    'step3.desc': 'Der Spezialist erhält eine Benachrichtigung über den neuen Termin, sieht alle Details in einem übersichtlichen Zeitplan und fährt zum Kunden zur vereinbarten Zeit. Das System erinnert automatisch an bevorstehende Besuche.\n\nAuswirkungen auf den Verkauf: Ein organisierter Prozess und keine verpassten Besuche verbessern die Servicequalität, was die Anzahl der Wiederholungsanfragen um 50-60% erhöht und positive Bewertungen schafft, die neue Kunden anziehen.',
    
    // Pricing
    'pricing.title': 'Entwicklungspreise',
    'pricing.note': 'Telekom-Hosting-Kosten nicht im Entwicklungspreis enthalten.',
    'plan1.title': 'Basis Landing Page',
    'plan1.desc': 'Einfache und verständliche Lösung für den Start. Einseitige Website mit Hauptblöcken: Unternehmensbeschreibung, Dienstleistungen, FAQ, Kontakte und Anfrageformular.',
    'plan1.time': 'Entwicklungszeit: 1 Monat',
    'plan1.feature1': 'Responsives Design für alle Geräte',
    'plan1.feature2': 'Schnelles Laden und grundlegendes SEO',
    'plan1.feature3': 'Fertige Struktur für Anfrageannahme',
    'plan1.feature4': '',
    'plan2.title': 'Mehrseitige Website + Logo',
    'plan2.desc': 'Vollständige Website mit einzigartigem Design, Corporate Identity und neuen Seiten: Home, Funktionen, Wie es funktioniert, Dienstleistungen, Team, Kontakte, Firmendaten.',
    'plan2.time': 'Entwicklungszeit: 2 Monate',
    'plan2.feature1': 'Neues Logo und visuelles Konzept',
    'plan2.feature2': 'Sanfte Animationen und modernes UX',
    'plan2.feature3': 'Vollständige Anpassung für Smartphones, Tablets und PCs',
    'plan2.feature4': '',
    'plan2.feature5': '',
    'plan3.title': 'Erweitertes Projekt mit Admin-Panel',
    'plan3.desc': 'Premium-Lösung für Unternehmen, denen die Kontrolle über Anfragen und Effizienz wichtig sind.',
    'plan3.time': 'Entwicklungszeit: 3,5 Monate',
    'plan3.feature1': 'Alles aus dem Tarif "Mehrseitige Website"',
    'plan3.feature2': 'Admin-Panel zur Verwaltung von Anfragen',
    'plan3.feature3': 'System zur Bestätigung von Bestellungen und Benachrichtigungen',
    'plan3.feature4': 'Möglichkeit der Integration mit E-Mail und Messengern',
    'plan3.feature5': '',
    'plan3.feature6': '',
    'pricing.contact': 'Kontaktieren',
    
    // CTA
    'cta.title': 'Bereit, das Projekt zu besprechen?',
    'cta.subtitle': 'Anfrage senden — wir führen eine kostenlose 20-minütige strategische Sitzung durch: Wir bewerten den Routenmarkt, Partner und schlagen einen Tech-Stack vor.',
    'cta.point1': 'Diskussion von Monetarisierungsfällen',
    'cta.point2': 'Auswahl des Tech-Stacks',
    'cta.point3': 'Plan für Pilot-Launch in 6–8 Wochen',
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
    'hero.title': 'Yaşlı Bakım için Yeni Web Siteniz',
    'hero.subtitle': 'Modern, uyarlanabilir ve anlaşılır bir platform oluşturacağız; müşterilerin hızlıca iletişime geçmesine ve bakım talebi oluşturmasına yardımcı olacak. Site, kullanıcı dostu bir rezervasyon sistemi, hizmetleriniz ve uzmanlarınız hakkında bilgiler, sık sorulan sorulara cevaplar içeren SSS bölümü ve kişisel verilerin güvenli aktarımı için korumalı formlar içerecek. Platform, müşteri güvenini artıracak, talep oluşturma sürecini basitleştirecek ve başvuru sayısını artıracak.',
    'hero.demo': 'Demoyu Görüntüle',
    'hero.hosting': 'Hosting — Telekom (ayrıca ödenir).',
    
    // Features
    'features.title': 'Platform Hangi Olanaklari Sunacak',
    'feature1.title': 'Telefon ve E-posta ile Rahat Kayıt',
    'feature1.desc': 'Kapsamlı iletişim sistemi: doğrudan arama butonu, sezgisel talep formu ve otomatik onay e-postaları.\n\nMüşteriler tek tıkla anında iletişime geçebilir, talep doldurabilir ve sistem otomatik olarak e-posta ile onay gönderir.\n\nİletişim engellerinin azaltılması dönüşüm oranını %30-40 artırır. Müşteri sadakati sürecin hızı ve şeffaflığı sayesinde artar.',
    'feature2.title': 'Modern Uyarlanabilir Tasarım',
    'feature2.desc': 'Net tipografi ve basit navigasyon ile tüm cihazlarda doğru görüntülenen görsel olarak çekici arayüz.\n\nTasarım otomatik olarak ekran boyutuna uyum sağlar, her cihazda rahat kullanım sağlar.\n\nProfesyonel görünüm güveni artırır ve dönüşüm oranını %25-35 artırır. Olumlu kullanıcı deneyimi sadakat ve geri dönme arzusu yaratır.',
    'feature3.title': 'Sık Sorulan Sorular ile SSS',
    'feature3.desc': 'Müşterilerin ve çalışanların zamanını tasarruf eden, hızlı cevaplar sağlayan sık sorulan sorular bölümü.\n\nMüşteriler destek ekibine başvurmadan cevapları bulur, yeni sorular için kullanıcı dostu form kullanabilir.\n\nDestek yükünün azaltılması dönüşüm oranını %20-30 artırır. Şeffaflık ve açıklık müşteri güvenini güçlendirir.',
    'feature4.title': '"Ekibimiz" Bloğu',
    'feature4.desc': 'Uzmanların fotoğrafları ve bilgileri ile müşterilerle kişisel bağlantı oluşturan sunum bölümü.\n\nMüşteriler onlarla çalışacak gerçek insanları görür, deneyimleri ve başarıları hakkında bilgi edinir.\n\nKişisel yaklaşım talep oluşturma istekliliğini %35-45 artırır. Duygusal bağlantı bakım ve bireysel yaklaşım hissi yaratır.',
    'feature5.title': 'Telekom Hosting',
    'feature5.desc': 'Yüksek hız, kararlılık ve güvenlik sağlayan Telekom\'un güvenilir altyapısına platform yerleştirme.\n\nSite %99.9 garanti edilmiş çalışma süresi, hızlı yükleme ve DDoS koruması ile barındırılır.\n\nHızlı yükleme çıkış oranını %40-50 azaltır. Güvenilirlik olumlu etkileşim deneyimleri yaratır ve şirket itibarını güçlendirir.',
    'feature6.title': 'Müşteri verilerinin korunması',
    'feature6.desc': 'Veri şifreleme, güvenli depolama ve GDPR uyumluluğu ile kapsamlı kişisel veri koruma sistemi.\n\nTüm veriler HTTPS üzerinden iletilir, şifrelenmiş saklanır, yalnızca yetkili çalışanlar erişebilir.\n\nGüvenlik güveni dönüşüm oranını %30-40 artırır. Gizlilik özeni uzun vadeli ilişkiler ve olumlu itibar yaratır.',
    
    // How It Works
    'how.title': 'Çalışma Prensibi',
    'how.subtitle': 'Talepten uzman ziyaretine basit yol',
    'step1.title': 'Kullanıcı web sitesinde talep oluşturur',
    'step1.desc': 'Müşteri web sitesindeki kullanıcı dostu formu doldurur veya "Şimdi Ara" butonuna tek tıklamayla anında sizinle iletişime geçer. Süreç tam anlamıyla bir dakika sürer, bu da başvurudan vazgeçme olasılığını azaltır.\n\nSatışlara etkisi: Talep oluşturmanın basitliği ve hızı, ziyaretçilerin müşterilere dönüşüm oranını %40-50 artırır. İletişim engelleri ne kadar az olursa, potansiyel müşteriler o kadar fazla gerçek talebe dönüşür.',
    'step2.title': 'Yönetici talebi alır ve iletişime geçer',
    'step2.desc': 'Tüm talepler otomatik olarak yöneticiye ulaşır, yönetici hızlıca müşteriyle iletişime geçer, talep detaylarını onaylar ve uzman ziyareti için uygun bir zaman planlar.\n\nSatışlara etkisi: Talebe hızlı tepki (15-30 dakika içinde) başarılı iş kapanışı olasılığını %60-70 artırır. Müşteriler hızı ve profesyonelliği takdir eder, bu da işbirliği kararlarını doğrudan etkiler.',
    'step3.title': 'Uzman randevuyu görür ve ziyaret eder',
    'step3.desc': 'Uzman yeni randevu hakkında bildirim alır, tüm detayları rahat bir programda görür ve planlanan zamanda müşteriye gider. Sistem yaklaşan ziyaretler hakkında otomatik olarak hatırlatır.\n\nSatışlara etkisi: Organize edilmiş süreç ve kaçırılan ziyaretlerin olmaması hizmet kalitesini artırır, bu da tekrarlayan başvuruların sayısını %50-60 artırır ve yeni müşterileri çeken olumlu yorumlar oluşturur.',
    
    // Pricing
    'pricing.title': 'Geliştirme Fiyatları',
    'pricing.note': 'Telekom hosting maliyeti geliştirme fiyatına dahil değildir.',
    'plan1.title': 'Temel Açılış Sayfası',
    'plan1.desc': 'Başlangıç için basit ve anlaşılır çözüm. Ana bloklarla tek sayfalı web sitesi: şirket açıklaması, hizmetler, SSS, iletişim ve talep formu.',
    'plan1.time': 'Geliştirme süresi: 1 ay',
    'plan1.feature1': 'Tüm cihazlar için uyarlanabilir tasarım',
    'plan1.feature2': 'Hızlı yükleme ve temel SEO',
    'plan1.feature3': 'Talep kabulü için hazır yapı',
    'plan1.feature4': '',
    'plan2.title': 'Çok Sayfalı Site + Logo',
    'plan2.desc': 'Benzersiz tasarım, kurumsal kimlik ve yeni sayfalarla tam kapsamlı web sitesi: Ana Sayfa, Özellikler, Nasıl Çalışır, Hizmetler, Ekip, İletişim, Şirket Bilgileri.',
    'plan2.time': 'Geliştirme süresi: 2 ay',
    'plan2.feature1': 'Yeni logo ve görsel konsept',
    'plan2.feature2': 'Yumuşak animasyonlar ve modern UX',
    'plan2.feature3': 'Akıllı telefonlar, tabletler ve PC\'ler için tam uyarlama',
    'plan2.feature4': '',
    'plan2.feature5': '',
    'plan3.title': 'Yönetici Paneli ile Genişletilmiş Proje',
    'plan3.desc': 'Talep kontrolü ve verimliliğin önemli olduğu şirketler için premium çözüm.',
    'plan3.time': 'Geliştirme süresi: 3,5 ay',
    'plan3.feature1': '"Çok Sayfalı Site" tarifesindeki her şey',
    'plan3.feature2': 'Talep yönetimi için yönetici paneli',
    'plan3.feature3': 'Sipariş onayı ve bildirim sistemi',
    'plan3.feature4': 'E-posta ve mesajlaşma uygulamaları ile entegrasyon imkanı',
    'plan3.feature5': '',
    'plan3.feature6': '',
    'pricing.contact': 'İletişime Geç',
    
    // CTA
    'cta.title': 'Projeyi Tartışmaya Hazır mısınız?',
    'cta.subtitle': 'Talep gönderin — ücretsiz 20 dakikalık stratejik oturum yapacağız: rota pazarını, ortakları değerlendireceğiz ve bir teknoloji yığını önereceğiz.',
    'cta.point1': 'Monetizasyon durumlarının tartışılması',
    'cta.point2': 'Teknoloji yığını seçimi',
    'cta.point3': '6–8 haftalık pilot lansman planı',
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
