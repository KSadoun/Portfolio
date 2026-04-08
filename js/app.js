/**
 * Portfolio: theme, i18n, RTL, scroll reveal
 */
(function () {
  'use strict';

  const STORAGE_THEME = 'portfolio-theme';
  const STORAGE_LANG = 'portfolio-lang';

  const translations = {
    en: {
      navBrand: 'Portfolio',
      navHome: 'Home',
      navEducation: 'Education',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navCerts: 'Certifications',
      navConnect: 'Connect',
      themeLight: 'Light mode',
      themeDark: 'Dark mode',
      langEnglish: 'English',
      langArabic: 'العربية',
      langSwitch: 'العربية',
      ariaLangSwitch: 'Switch to Arabic',
      heroGreeting: "Hi, I'm",
      heroName: '[Your Name Here]',
      heroTitle: 'Full Stack Web Developer, Laravel Specialist',
      heroTagline: 'I craft reliable APIs and polished, accessible interfaces.',
      heroBio:
        'From database design to deployable frontends, I focus on Laravel backends, expressive UIs, and data layers that stay maintainable as products grow.',
      heroBadge1: 'Laravel',
      heroBadge2: 'REST APIs',
      heroBadge3: 'MySQL · MongoDB',
      heroScroll: 'Scroll to explore',
      eduTitle: 'Education',
      eduEyebrow: 'Background',
      eduSubtitle: 'Academic foundation and intensive professional training.',
      edu1Heading: "Bachelor's — Mechatronics Engineering",
      edu1Meta: '2020 – 2025 · CGPA 3.9 / 4.0 · Top of class',
      edu1Detail:
        'Systems-focused training across mechanics, electronics, and software with strong analytical foundations for full-stack engineering.',
      edu2Heading: 'ITI — 9 Month Professional Program',
      edu2Meta: 'Open Source Track · 2025 – 2026',
      edu2Detail:
        'Intensive open-source track focused on practical web engineering, collaboration, and production-oriented delivery.',
      skillsTitle: 'Skills',
      skillsEyebrow: 'Expertise',
      skillsSubtitle: 'Technologies I use to design, build, and ship production-ready experiences.',
      skillsFrontend: 'Frontend',
      skillsBackend: 'Backend',
      projectsTitle: 'Latest Projects',
      projectsEyebrow: 'Selected work',
      projectsSubtitle: 'A snapshot of recent builds—architecture, stack, and impact.',
      proj1Title: 'E-Commerce Platform',
      proj1Stack: 'Laravel · Blade · MySQL · Tailwind CSS',
      proj1Desc:
        'End-to-end e-commerce with catalog search, cart, checkout, and an admin dashboard for inventory and orders. Emphasis on validation, payments, and a responsive storefront that stays fast under load.',
      proj2Title: 'REST Task API',
      proj2Stack: 'Node.js · Express · MongoDB · JWT',
      proj2Desc:
        'Modular REST API with authentication, refresh tokens, and role-based access. Includes rate limiting hooks, structured errors, and OpenAPI-style docs so clients can integrate quickly.',
      proj3Title: 'Developer Portfolio',
      proj3Stack: 'HTML · Tailwind CSS · Vanilla JavaScript',
      proj3Desc:
        'Single-page portfolio with theme toggle, bilingual copy, RTL layout, scroll reveals, and zero framework overhead—optimized for clarity and performance.',
      certsTitle: 'Certifications',
      certsEyebrow: 'Credentials',
      certsSubtitle: 'Credentials that back foundational computer science and cloud literacy.',
      cert1: 'CS50',
      cert1Meta: 'Harvard University · edX',
      cert1Detail: 'Introduction to Computer Science — algorithms, memory, and web.',
      cert2: 'ITI 9 Months',
      cert2Meta: 'Information Technology Institute',
      cert2Detail: 'Open-source application development & engineering practices.',
      cert3: 'AWS Cloud Practitioner',
      cert3Meta: 'Amazon Web Services',
      cert3Detail: 'Core cloud concepts, security, billing, and AWS service families.',
      connectTitle: 'Connect With Me',
      connectEyebrow: 'Contact',
      connectSubtitle: 'Prefer a quick message? Pick a channel—I typically reply within a day.',
      connectWhatsapp: 'WhatsApp',
      connectLinkedin: 'LinkedIn',
      connectGithub: 'GitHub',
      footer: '© 2026 Khalid Sadoun. All rights reserved.',
      tooltipHtml: 'HTML',
      tooltipCss: 'CSS',
      tooltipTailwind: 'Tailwind CSS',
      tooltipTs: 'TypeScript',
      tooltipAngular: 'Angular',
      tooltipLaravel: 'Laravel',
      tooltipNode: 'Node.js',
      tooltipMysql: 'MySQL',
      tooltipMongo: 'MongoDB',
    },
    ar: {
      navBrand: 'المعرض',
      navHome: 'الرئيسية',
      navEducation: 'التعليم',
      navSkills: 'المهارات',
      navProjects: 'المشاريع',
      navCerts: 'الشهادات',
      navConnect: 'تواصل',
      themeLight: 'الوضع الفاتح',
      themeDark: 'الوضع الداكن',
      langEnglish: 'English',
      langArabic: 'العربية',
      langSwitch: 'English',
      ariaLangSwitch: 'التبديل إلى الإنجليزية',
      heroGreeting: 'مرحباً، أنا',
      heroName: '[Your Name Here]',
      heroTitle: 'مطوّر ويب متكامل، متخصص في Laravel',
      heroTagline: 'أبني واجهات أنيقة وواجهات برمجية يمكن الاعتماد عليها.',
      heroBio:
        'من تصميم قواعد البيانات إلى الواجهات الجاهزة للنشر، أركز على Laravel وواجهات واضحة وطبقات بيانات تبقى قابلة للصيانة مع نمو المنتج.',
      heroBadge1: 'Laravel',
      heroBadge2: 'واجهات REST',
      heroBadge3: 'MySQL · MongoDB',
      heroScroll: 'مرّر للاستكشاف',
      eduTitle: 'التعليم',
      eduEyebrow: 'المسار',
      eduSubtitle: 'خلفية أكاديمية وتدريب مهني مكثّف.',
      edu1Heading: 'بكالوريوس — هندسة الميكاترونكس',
      edu1Meta: '2020 – 2025 · معدل تراكمي 3.9 / 4.0 · الأول على الدفعة',
      edu1Detail:
        'تكوين قوي في الميكانيكا والإلكترونيات والبرمجيات مع أساس تحليلي يخدم تطوير التطبيقات المتكاملة.',
      edu2Heading: 'ITI — برنامج مهني 9 أشهر',
      edu2Meta: 'مسار المصادر المفتوحة · 2025 – 2026',
      edu2Detail:
        'تدريب مكثف على تطوير الويب العملي، العمل الجماعي، وتسليم مشاريع جاهزة للإنتاج.',
      skillsTitle: 'المهارات',
      skillsEyebrow: 'الخبرة',
      skillsSubtitle: 'تقنيات أستخدمها لتصميم وبناء وإطلاق تجارب جاهزة للإنتاج.',
      skillsFrontend: 'الواجهات',
      skillsBackend: 'الخادم',
      projectsTitle: 'أحدث المشاريع',
      projectsEyebrow: 'أعمال مختارة',
      projectsSubtitle: 'لمحة عن مشاريع حديثة — البنية، التقنيات، والأثر.',
      proj1Title: 'منصة تجارة إلكترونية',
      proj1Stack: 'Laravel · Blade · MySQL · Tailwind CSS',
      proj1Desc:
        'تجارة إلكترونية كاملة مع بحث في الكتالوج، سلة، دفع، ولوحة تحكم للمخزون والطلبات. تركيز على التحقق، المدفوعات، وواجهة متجاوبة سريعة حتى مع الضغط.',
      proj2Title: 'واجهة مهام REST',
      proj2Stack: 'Node.js · Express · MongoDB · JWT',
      proj2Desc:
        'واجهة REST معيارية مع مصادقة، رموز تجديد، وصلاحيات. يتضمن حدود معدل، أخطاء منظمة، وتوثيقاً يشبه OpenAPI لتسهيل التكامل.',
      proj3Title: 'معرض أعمال المطوّر',
      proj3Stack: 'HTML · Tailwind CSS · Vanilla JavaScript',
      proj3Desc:
        'معرض صفحة واحدة مع تبديل السمة، نص ثنائي اللغة، اتجاه RTL، وكشف عند التمرير—بدون إطار عمل، محسّن للوضوح والأداء.',
      certsTitle: 'الشهادات',
      certsEyebrow: 'الاعتمادات',
      certsSubtitle: 'شهادات تدعم أساس علوم الحوسبة والمعرفة السحابية.',
      cert1: 'CS50',
      cert1Meta: 'جامعة هارفارد · edX',
      cert1Detail: 'مقدمة في علوم الحاسوب — خوارزميات، ذاكرة، وويب.',
      cert2: 'ITI 9 أشهر',
      cert2Meta: 'معهد تكنولوجيا المعلومات',
      cert2Detail: 'تطوير تطبيقات مفتوحة المصدر وممارسات هندسية.',
      cert3: 'AWS Cloud Practitioner',
      cert3Meta: 'Amazon Web Services',
      cert3Detail: 'مفاهيم سحابية أساسية، أمن، فوترة، وعائلات خدمات AWS.',
      connectTitle: 'تواصل معي',
      connectEyebrow: 'تواصل',
      connectSubtitle: 'تفضّل رسالة سريعة؟ اختر قناة—عادة ما أرد خلال يوم.',
      connectWhatsapp: 'واتساب',
      connectLinkedin: 'لينكد إن',
      connectGithub: 'جيت هاب',
      footer: '© 2026 Khalid Sadoun. جميع الحقوق محفوظة.',
      tooltipHtml: 'HTML',
      tooltipCss: 'CSS',
      tooltipTailwind: 'Tailwind CSS',
      tooltipTs: 'TypeScript',
      tooltipAngular: 'Angular',
      tooltipLaravel: 'Laravel',
      tooltipNode: 'Node.js',
      tooltipMysql: 'MySQL',
      tooltipMongo: 'MongoDB',
    },
  };

  function detectLang() {
    const stored = localStorage.getItem(STORAGE_LANG);
    if (stored === 'en' || stored === 'ar') return stored;
    const nav = navigator.language || navigator.userLanguage || 'en';
    return nav.toLowerCase().startsWith('ar') ? 'ar' : 'en';
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (key && t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && t[key] !== undefined) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria');
      if (key && t[key] !== undefined) {
        el.setAttribute('aria-label', t[key]);
      }
    });

    document.querySelectorAll('[data-tooltip-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-tooltip-i18n');
      if (key && t[key] !== undefined) {
        el.setAttribute('title', t[key]);
      }
    });

    localStorage.setItem(STORAGE_LANG, lang);
    updateThemeToggleUI(document.documentElement.classList.contains('dark'));
    window.dispatchEvent(new CustomEvent('portfolio:lang', { detail: { lang } }));
  }

  function initTheme() {
    const stored = localStorage.getItem(STORAGE_THEME);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = stored === 'dark' || (stored !== 'light' && prefersDark);
    document.documentElement.classList.toggle('dark', dark);
    updateThemeToggleUI(dark);
  }

  function setTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem(STORAGE_THEME, dark ? 'dark' : 'light');
    updateThemeToggleUI(dark);
  }

  function updateThemeToggleUI(dark) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const lang = document.documentElement.lang || 'en';
    const t = translations[lang] || translations.en;
    btn.setAttribute('aria-label', dark ? t.themeLight : t.themeDark);
    const sun = btn.querySelector('.icon-sun');
    const moon = btn.querySelector('.icon-moon');
    if (sun) sun.classList.toggle('hidden', dark);
    if (moon) moon.classList.toggle('hidden', !dark);
  }

  function initScrollReveal() {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach(function (el) {
      observer.observe(el);
    });
  }

  function bindEvents() {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem(STORAGE_THEME, isDark ? 'dark' : 'light');
        updateThemeToggleUI(isDark);
      });
    }

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        const current = document.documentElement.lang === 'ar' ? 'ar' : 'en';
        const next = current === 'ar' ? 'en' : 'ar';
        applyLanguage(next);
        updateThemeToggleUI(document.documentElement.classList.contains('dark'));
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const id = anchor.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function init() {
    initTheme();
    applyLanguage(detectLang());
    initScrollReveal();
    bindEvents();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(STORAGE_THEME)) {
        document.documentElement.classList.toggle('dark', e.matches);
        updateThemeToggleUI(e.matches);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
