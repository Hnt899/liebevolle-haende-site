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
    'nav.why': 'Возможности',
    'nav.catalog': 'Каталог',
    'nav.how': 'Как это работает',
    'nav.reviews': 'Отзывы',
    'nav.contacts': 'Контакты',
    'btn.request': 'Рассчитать авто',
    'btn.calculate': 'Рассчитать стоимость',
    
    // Hero
    'hero.title': 'Коммерческое предложение',
    'hero.subtitle': 'на разработку корпоративного сайта для экосистемы цифровых решений в сфере ЖКХ',
    'hero.direction': '',
    'hero.company': '',
    'hero.description': 'Корпоративный сайт для компании АРКУС — инструмент презентации продуктов и услуг, формирования доверия у управляющих компаний, ТСЖ и РСО, конвертации B2B-трафика в заявки и масштабирования бизнеса.',
    'hero.goal1': 'Презентация продуктов',
    'hero.goal2': 'Формирование доверия',
    'hero.goal3': 'Конвертация трафика',
    'hero.goal4': 'Масштабирование бизнеса',
    'hero.cta1': 'Обсудить проект',
    'hero.cta2': 'Посмотреть структуру',
    
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
    'why.title': 'Какие возможности даст сайт',
    'why.desc': 'Корпоративный сайт на современном технологическом стеке с фокусом на B2B-взаимодействие и конвертацию трафика',
    'why1.title': 'Профессиональный B2B-дизайн',
    'why1.desc': 'Визуальный стиль формирует образ надёжного IT-партнёра для управляющих компаний, ТСЖ и РСО. Профессиональная типографика и структурированная подача информации повышают доверие к компании и её продуктам.',
    'why2.title': 'Чёткая структура и навигация',
    'why2.desc': 'Логичная архитектура сайта помогает быстро понять сложные IT-продукты и сервисы. Прозрачная навигация ускоряет принятие решений руководителями и ЛПР, снижает время на изучение предложения.',
    'why3.title': 'Фокус на заявках и лидах',
    'why3.desc': 'Сайт работает как инструмент продаж, а не просто витрина. Стратегически размещённые формы обратной связи и точки контакта конвертируют посетителей в заявки. Каждое обращение фиксируется и обрабатывается.',
    'why4.title': 'Интеграции и аналитика',
    'why4.desc': 'Интеграция с CRM-системами для автоматизации работы с заявками, настройка форм обратной связи, подключение аналитических систем для контроля эффективности и оптимизации конверсии.',
    'why5.title': 'Адаптив и современный технологический стек',
    'why5.desc': 'Корректная работа на всех устройствах: десктоп, планшеты, мобильные. Современный стек технологий обеспечивает быструю загрузку, стабильную работу и готовность к дальнейшему развитию функционала.',
    'why6.title': 'SEO-основа и масштабирование',
    'why6.desc': 'Техническая SEO-оптимизация и правильная архитектура сайта создают фундамент для роста без необходимости переделки структуры. Сайт готов к масштабированию контента и функционала.',
    
    // How It Works
    'how.title': 'Как будет работать платформа',
    'how.subtitle': 'Простой путь взаимодействия с потенциальными клиентами',
    'step1.title': 'Посетитель изучает продукты и услуги',
    'step1.desc': 'Руководители и ЛПР управляющих компаний, ТСЖ и РСО изучают представленные на сайте IT-продукты и сервисы. Структурированная информация и понятная подача формируют доверие и интерес к предложению компании АРКУС.',
    'step2.title': 'Оставляет заявку или связывается напрямую',
    'step2.desc': 'Заинтересованный посетитель оставляет заявку через форму на сайте или связывается напрямую через указанные контакты. Все обращения автоматически фиксируются в системе и передаются для обработки.',
    'step3.title': 'Компания масштабирует поток лидов',
    'step3.desc': 'Сайт работает как постоянный канал входящих обращений. Интеграция с CRM позволяет эффективно обрабатывать заявки, а аналитика помогает оптимизировать конверсию и масштабировать поток потенциальных клиентов.',
    
    // Pricing / Development Steps
    'pricing.title': 'Шаги разработки',
    'pricing.subtitle': 'Профессиональный подход к созданию корпоративного сайта',
    'pricing.price': '850 000 ₽',
    'pricing.time': '3 месяца',
    'devstep1.title': 'Анализ конкурентов',
    'devstep1.desc': 'Проводим глубокий анализ конкурентной среды в сфере IT-решений для ЖКХ. Изучаем лучшие практики, успешные кейсы и эффективные подходы ведущих компаний. Выявляем сильные стороны конкурентов и берём самое лучшее для реализации в проекте компании АРКУС.',
    'devstep1.detail1': 'Исследование конкурентной среды и рынка',
    'devstep1.detail2': 'Анализ лучших практик и успешных кейсов',
    'devstep1.detail3': 'Выявление сильных сторон и применение лучших решений',
    'devstep2.title': 'Анализ и проектирование',
    'devstep2.desc': 'Проводим глубокий аудит бизнес-процессов компании АРКУС, анализируем целевую аудиторию (УК, ТСЖ, РСО) и её потребности. Создаём детальную информационную архитектуру сайта с учётом специфики B2B-взаимодействия в сфере ЖКХ. Проектируем пользовательские сценарии, которые учитывают особенности принятия решений руководителями и ЛПР.',
    'devstep2.detail1': 'Исследование целевой аудитории и её потребностей',
    'devstep2.detail2': 'Проектирование информационной архитектуры',
    'devstep2.detail3': 'Создание wireframes и пользовательских сценариев',
    'devstep3.title': 'Дизайн и визуальная концепция',
    'devstep3.desc': 'Разрабатываем профессиональный B2B-дизайн, который формирует образ надёжного IT-партнёра с первого взгляда. Создаём уникальный визуальный язык, отражающий экспертизу компании в сфере ЖКХ. Проектируем адаптивные интерфейсы для всех устройств с фокусом на удобство принятия решений ЛПР и максимальную конверсию.',
    'devstep3.detail1': 'Разработка визуальной концепции',
    'devstep3.detail2': 'Создание адаптивных макетов для всех устройств',
    'devstep3.detail3': 'Проектирование UI/UX с фокусом на конверсию',
    'devstep4.title': 'Стек технологий',
    'devstep4.desc': 'Определяем оптимальный технологический стек для реализации проекта с учётом требований производительности, масштабируемости и долгосрочной поддержки. Выбираем современные инструменты и фреймворки, которые обеспечат стабильную работу сайта и возможность дальнейшего развития функционала.',
    'devstep4.detail1': 'Выбор технологического стека (React/TypeScript)',
    'devstep4.detail2': 'Настройка инструментов разработки и сборки',
    'devstep4.detail3': 'Планирование архитектуры и структуры проекта',
    'devstep5.title': 'Разработка и интеграции',
    'devstep5.desc': 'Реализуем сайт на выбранном технологическом стеке с акцентом на производительность и масштабируемость. Интегрируем CRM-системы для автоматизации работы с заявками и лидами. Настраиваем аналитические инструменты для контроля эффективности, оптимизации конверсии и принятия data-driven решений.',
    'devstep5.detail1': 'Frontend-разработка на React/TypeScript',
    'devstep5.detail2': 'Интеграция с CRM и аналитическими системами',
    'devstep5.detail3': 'Настройка форм обратной связи и автоматизации',
    'devstep6.title': 'SEO и GEO оптимизация',
    'devstep6.desc': 'Проводим комплексную SEO-оптимизацию сайта для повышения видимости в поисковых системах. Настраиваем GEO-таргетинг для привлечения целевой аудитории из регионов присутствия компании АРКУС. Оптимизируем контент, мета-теги, структуру сайта и технические параметры для максимальной эффективности поискового продвижения.',
    'devstep6.detail1': 'SEO-оптимизация контента и структуры сайта',
    'devstep6.detail2': 'Настройка мета-тегов и технических параметров',
    'devstep6.detail3': 'GEO-таргетинг и региональная оптимизация',
    'devstep7.title': 'Тестирование и оптимизация',
    'devstep7.desc': 'Проводим комплексное тестирование функциональности, производительности и совместимости на всех устройствах и браузерах. Выполняем финальную оптимизацию технических параметров для максимальной эффективности. Подготавливаем к запуску, проводим обучение команды и обеспечиваем плавный переход к масштабированию.',
    'devstep7.detail1': 'Тестирование функциональности и производительности',
    'devstep7.detail2': 'Оптимизация скорости загрузки и работы сайта',
    'devstep7.detail3': 'Подготовка к запуску и обучение команды',
    'pricing.contact': 'Обсудить проект',
    
    // Design Estimate
    'estimate.title': 'Смета дизайна',
    'estimate.subtitle': 'Детальная разбивка стоимости UX/UI дизайна сайта в Figma',
    'estimate.total.label': 'Итоговый бюджет',
    'estimate.base.title': 'База',
    'estimate.base.desc': 'UI-kit, дизайн-система, Header и Footer',
    'estimate.base.item1': 'UI-kit/дизайн-система/UX правила (цвета, типографика, кнопки, формы, карточки, сетки, состояния, отступы)',
    'estimate.base.item2': 'Header + Footer (варианты, состояния, адаптив)',
    'estimate.homepage.title': 'Главная страница',
    'estimate.homepage.desc': '10+ секций (USP/предложение, "кому подходит", продукты, интеграции, поддержка, акции, FAQ, отзывы, форма, блог) + 6 адаптивов. 10+ секций (USP/предложение, "кому подходит", продукты, интеграции, поддержка, акции, FAQ, отзывы, форма, блог) + 6 адаптивов',
    'estimate.products.title': 'Продукты',
    'estimate.products.desc': '4 страницы продуктов',
    'estimate.products.item1': '1-я страница продукта (шаблон с различными элементами) + 6 адаптивов',
    'estimate.products.item2': '3 страницы продуктов по шаблону (адаптация контента/блоков)',
    'estimate.services.title': 'Услуги',
    'estimate.services.desc': '3 страницы услуг',
    'estimate.services.item1': '1-я страница услуги (шаблон с различными элементами) + 6 адаптивов',
    'estimate.services.item2': '2 страницы услуг по шаблону',
    'estimate.separate.title': 'Отдельные страницы',
    'estimate.separate.desc': 'Техподдержка, Тарифы, Партнёры, О компании (по 6 адаптивов каждая)',
    'estimate.content.title': 'Контентные разделы',
    'estimate.content.desc': 'Блог (листинг + рубрики/поиск/карточки), Шаблон статьи, Вакансии (листинг), Карточка вакансии (по 6 адаптивов)',
    'estimate.legal.title': 'Технические/Юридические',
    'estimate.legal.desc': 'Контакты (форма, реквизиты, карта/адреса, каналы связи), Юридические страницы (шаблон + контент: Политика конфиденциальности, GDPR, Cookies), 404 страница',
    'estimate.reserve.title': 'Резерв',
    'estimate.reserve.desc': 'На доработки/дополнительные уникальные блоки/согласования',
    'estimate.summary.title': 'Итоговая стоимость',
    'estimate.summary.desc': 'Стоимость фиксируется при неизменной структуре и ТЗ. Любые дополнения (новые уникальные страницы/блоки/адаптивы/варианты) оцениваются отдельно.',
    'estimate.summary.total': 'Итого',
    
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
    'cta.subtitle': 'Проведём бесплатную консультацию: обсудим задачи вашего бизнеса, архитектуру сайта и план запуска.',
    'cta.point1': 'Задачи бизнеса',
    'cta.point2': 'Архитектура сайта',
    'cta.point3': 'План запуска',
    'cta.telegram': 'Telegram',
    'cta.whatsapp': 'WhatsApp',
    'cta.email': 'E-mail',
    
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
    'footer.desc': 'АРКУС — разработчик программных продуктов и сервисов для управляющих компаний, ТСЖ, РСО и партнёров в сфере ЖКХ.',
    'footer.copyright': '© 2024 АРКУС. Все права защищены.',
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
