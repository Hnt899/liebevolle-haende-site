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
    'nav.what': 'Что вы получите',
    'nav.packages': 'Пакеты',
    'nav.scope': 'Состав работ',
    'nav.timeline': 'Этапы',
    'nav.contacts': 'Контакты',
    'btn.request': 'Получить смету и договор',
    'btn.call': 'Созвон 15 минут',
    
    // Hero
    'hero.title': 'Разработка MVP мобильного приложения',
    'hero.subtitle': 'Соберём рабочую версию продукта под iOS и Android с логикой баллов, групп, QR и безопасным хранением данных. Подготовим к публикации в App Store и Google Play.',
    'hero.badge': 'MVP за 10–14 недель · 1.6–2.6 млн ₽',
    'hero.cta1': 'Получить смету и договор',
    'hero.cta2': 'Созвон 15 минут',
    
    // What You Get / Benefits
    'why.title': 'Что вы получите',
    'why.desc': 'Production-ready решение с полным исходным кодом и инструкциями',
    'why1.title': 'iOS + Android приложение',
    'why1.desc': 'Production-ready мобильное приложение для обеих платформ с нативной производительностью и оптимизацией под каждую ОС.',
    'why2.title': 'Backend + БД + шифрование',
    'why2.desc': 'Надёжный backend с базой данных и шифрованием данных для безопасного хранения информации пользователей.',
    'why3.title': 'Полный исходный код',
    'why3.desc': 'Весь исходный код проекта с подробными инструкциями по развёртыванию и дальнейшей разработке.',
    'why4.title': 'Аналитика событий',
    'why4.desc': 'Интеграция аналитики ключевых событий для отслеживания поведения пользователей и оптимизации продукта.',
    'why5.title': 'Публикация в сторах',
    'why5.desc': 'Поддержка публикации в App Store и Google Play, включая подготовку материалов и прохождение модерации.',
    'why6.title': 'Техническая поддержка',
    'why6.desc': 'Консультации и помощь в настройке, развёртывании и дальнейшем развитии продукта после сдачи проекта.',
    
    // Scope of Work / What's Included
    'how.title': 'Состав работ',
    'how.subtitle': 'Детальная структура разработки MVP',
    'step1.title': 'Мобильная часть (iOS / Android)',
    'step1.desc': 'Разработка нативных приложений для iOS и Android с единой бизнес-логикой, адаптивным UI/UX и оптимизацией производительности.',
    'step2.title': 'Логика баллов и правил',
    'step2.desc': 'Реализация системы начисления и списания баллов, правил групповых взаимодействий и механизмов QR-кодов для идентификации и взаимодействия.',
    'step3.title': 'Backend и безопасность',
    'step3.desc': 'Разработка серверной части с базой данных, API для мобильных приложений, шифрование данных и обеспечение безопасности хранения информации.',
    'step4.title': 'Публикация и запуск',
    'step4.desc': 'Подготовка к публикации в App Store и Google Play, включая создание материалов для стора, прохождение модерации и запуск приложения.',
    
    // Pricing / Packages
    'pricing.title': 'Пакеты реализации',
    'pricing.subtitle': 'Выберите оптимальный вариант для вашего проекта',
    'packageA.title': 'Пакет A — MVP без карты / Bluetooth',
    'packageA.recommended': 'Рекомендуемый',
    'packageA.time': '10–14 недель',
    'packageA.price': '650 000 ₽',
    'packageA.desc': 'Базовый MVP с полным функционалом баллов, групп и QR без интеграции с картами и Bluetooth.',
    'packageA.includes': 'В пакет входит:',
    'packageA.item1': 'iOS и Android приложения (нативная разработка)',
    'packageA.item2': 'Backend API с базой данных и шифрованием',
    'packageA.item3': 'Система баллов: начисление, списание, история',
    'packageA.item4': 'Группы пользователей и управление участниками',
    'packageA.item5': 'QR-коды: генерация, сканирование, валидация',
    'packageA.item6': 'Авторизация и профили пользователей',
    'packageA.item7': 'Админ-панель для управления контентом',
    'packageA.item8': 'Аналитика ключевых событий',
    'packageA.item9': 'Подготовка к публикации в App Store и Google Play',
    'packageA.item10': 'Полный исходный код и документация',
    'packageB.title': 'Пакет B — MVP + карта / Bluetooth',
    'packageB.time': '14–20 недель',
    'packageB.price': '850 000 ₽',
    'packageB.desc': 'Расширенный MVP с поддержкой карт и Bluetooth. Повышенная сложность и ограничения iOS.',
    'packageB.includes': 'В пакет входит:',
    'packageB.item1': 'Всё из Пакета A',
    'packageB.item2': 'Интеграция с физическими картами (NFC)',
    'packageB.item3': 'Bluetooth Low Energy (BLE) для связи устройств',
    'packageB.item4': 'Синхронизация данных между картой и приложением',
    'packageB.item5': 'Офлайн-режим с последующей синхронизацией',
    'packageB.item6': 'Расширенная безопасность для работы с картами',
    'packageB.item7': 'Дополнительное тестирование на разных устройствах',
    'packageB.item8': 'Оптимизация под ограничения iOS для Bluetooth',
    'pricing.note': 'Финальная стоимость фиксируется после короткого созвона.',
    
    // Timeline / Development Stages
    'estimate.title': 'Этапы работ',
    'estimate.subtitle': 'Структурированный процесс разработки MVP',
    'stage1.title': 'Аналитика и фиксация MVP',
    'stage1.time': '1–2 недели',
    'stage1.desc': 'Анализ требований, фиксация функционала MVP, создание технического задания и согласование архитектуры решения.',
    'stage2.title': 'UX/UI (Figma)',
    'stage2.time': '2–3 недели',
    'stage2.desc': 'Проектирование пользовательского опыта, создание дизайн-системы и макетов всех экранов приложения в Figma.',
    'stage3.title': 'Backend + БД',
    'stage3.time': '3–5 недель',
    'stage3.desc': 'Разработка серверной части, проектирование и создание базы данных, настройка API и обеспечение безопасности.',
    'stage4.title': 'iOS / Android',
    'stage4.time': '5–8 недель',
    'stage4.desc': 'Разработка нативных мобильных приложений для обеих платформ с интеграцией backend и реализацией бизнес-логики.',
    'stage5.title': 'Тестирование и публикация',
    'stage5.time': '1–2 недели',
    'stage5.desc': 'Комплексное тестирование, исправление ошибок, подготовка к публикации и запуск в App Store и Google Play.',
    
    // What's Not Included
    'notincluded.title': 'Что не входит',
    'notincluded.desc': 'Эти функции планируются для версии 2.0 и не включены в стоимость MVP',
    'notincluded.item1.title': 'Bluetooth и карта (v2)',
    'notincluded.item1.desc': 'Интеграция с физическими картами через NFC и Bluetooth Low Energy не входит в базовый MVP. Это расширенная функциональность, которая требует дополнительной разработки и тестирования на разных устройствах.',
    'notincluded.item2.title': 'Сложные анимации',
    'notincluded.item2.desc': 'Сложные анимационные эффекты, кастомные переходы между экранами и интерактивные элементы не включены в MVP. Используются стандартные анимации платформы для обеспечения стабильности.',
    'notincluded.item3.title': 'Большой админ-кабинет',
    'notincluded.item3.desc': 'Расширенный админ-кабинет с детальной аналитикой, сложными отчётами и множеством настроек не входит в MVP. В базовой версии включена админ-панель для управления основным контентом.',
    'notincluded.item4.title': 'Юридические документы',
    'notincluded.item4.desc': 'Подготовка пользовательских соглашений, политики конфиденциальности и других юридических документов не входит в стоимость разработки. Рекомендуем обратиться к юристам для их подготовки.',
    
    // Budget & Timeline
    'budget.title': 'Сроки и бюджет',
    'budget.packageA': 'Пакет A: 10–14 недель · 1.6–2.6 млн ₽',
    'budget.packageB': 'Пакет B: 14–20 недель · 2.3–3.6 млн ₽',
    'budget.note': 'Финальная стоимость фиксируется после короткого созвона.',
    
    // Payment & Guarantee
    'payment.title': 'Оплата, гарантия, старт',
    'payment.structure': 'Оплата',
    'payment.structure.desc': 'Оплата производится поэтапно: 50% при подписании договора, 30% после утверждения дизайна и начала разработки, 20% после сдачи проекта. Все платежи фиксируются в договоре.',
    'payment.guarantee': 'Гарантия',
    'payment.guarantee.desc': 'Мы предоставляем гарантию 30 дней после сдачи проекта. В течение этого периода исправляем выявленные ошибки и баги бесплатно. Также оказываем консультационную поддержку по настройке и развёртыванию.',
    'payment.start': 'Для старта нужно',
    'payment.start.desc': 'Для начала работы необходимо предоставить: название продукта, выбранный пакет (A или B), тип авторизации пользователей, аккаунты разработчика Apple и Google для публикации в сторах. После этого мы подготовим договор и техническое задание.',
    
    // CTA
    'cta.title': 'Готовы стартовать?',
    'cta.subtitle': 'Отправим договор, план работ и финальную смету.',
    'cta.contract': 'Получить договор',
    'cta.call': 'Созвон 15 минут',
    'cta.telegram': 'Telegram',
    'cta.whatsapp': 'WhatsApp',
    'cta.email': 'E-mail',
    
    // Footer
    'footer.desc': 'Разработка MVP мобильных приложений для iOS и Android с полным циклом от проектирования до публикации в сторах.',
    'footer.copyright': '© 2024. Все права защищены.',
    'footer.legal': 'Юридические документы',
    
    // Details / Requisites
    'details.title': 'Реквизиты',
    'details.name': 'Название организации',
    'details.inn': 'ИНН',
    'details.address': 'Юридический адрес',
    'details.account': 'Расчётный счёт',
    'details.ogrn': 'ОГРН',
    'details.bank': 'Банк',
    'details.bik': 'БИК',
    'details.inn_bank': 'ИНН банка',
    'details.corr': 'Корреспондентский счёт',
    'details.bank_address': 'Адрес банка',
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
