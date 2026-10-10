import specialistImage from '@/assets/images/565649738_122103237963067331_4650605682265517794_n.jpg';

export type Lang = 'en' | 'ar';

export const BUSINESS = {
  nameEn: 'Centre Afytos',
  nameAr: 'مركز Afytos للعناية الجسدية',
  specialistEn: 'Dr Chokri',
  specialistAr: 'د. شكري',
  whatsapptn: '+216 26 719 252',
  whatsappLinktn: 'https://wa.me/21626719252',
  whatsappkw: '+965 5090 1403',
  whatsappLinkkw: 'https://wa.me/96550901403',
  whatsappqa: '+974 5129 3951',
  whatsappLinkqa: 'https://wa.me/97451293951',
  locationEn: 'Nabeul, Tunisia',
  locationAr: 'نابل، تونس',
  addressEn: '2 Mars 1934, Nabeul',
  addressAr: '2 مارس 1934، نابل',
  facebook: 'https://www.facebook.com/centreafytos/',
  instagram: 'https://www.instagram.com/centre_afytos/',
  tiktok: 'https://www.tiktok.com/@centreafytos',
};

export const NAV = {
  en: [
    { label: 'Services', href: '#services' },
    { label: 'About Dr Chokri', href: '#practitioner' },
    { label: 'International contact', href: '#visits' },
    { label: 'Booking', href: '#booking' },
    { label: 'FAQ', href: '#faq' },
  ],
  ar: [
    { label: 'الخدمات', href: '#services' },
    { label: 'عن الدكتور شكري', href: '#practitioner' },
    { label: 'التواصل الدولي', href: '#visits' },
    { label: 'الحجز', href: '#booking' },
    { label: 'الأسئلة', href: '#faq' },
  ],
};

export const HERO = {
  en: {
    eyebrow: 'Nabeul, Tunisia',
    title: 'Care for your body, thoughtfully delivered.',
    desc: 'Chiropractic care, therapeutic massage and hijama with Dr Chokri, in a calm and professional setting.',
    cta: 'Book an Appointment',
    secondary: 'Explore services',
  },
  ar: {
    eyebrow: 'نابل، تونس',
    title: 'عناية بجسدك، بكل اهتمام.',
    desc: 'تقويم العمود الفقري والتدليك العلاجي والحجامة مع د. شكري، في بيئة هادئة ومهنية.',
    cta: 'احجز موعدك',
    secondary: 'اكتشف الخدمات',
  },
};

export const HERO_IMAGE = 'https://images.pexels.com/photos/6560308/pexels-photo-6560308.jpeg?auto=compress&cs=tinysrgb&w=1600';

export interface Service {
  id: string;
  image: string;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
}

export const SERVICES: Service[] = [
  {
    id: 'chiropractic',
    image: 'src/assets/images/Chiropractic.jpg',
    title: { en: 'Chiropractic care', ar: 'تقويم العمود الفقري' },
    desc: {
      en: 'A considered session focused on the areas of tension and movement you would like to discuss, with your needs and comfort guiding the approach.',
      ar: 'جلسة مدروسة تركز على مناطق التوتر والحركة التي ترغب في مناقشتها، مع مراعاة احتياجاتك وراحتك في اختيار أسلوب العناية.',
    },
  },
  {
    id: 'massage',
    image: 'src/assets/images/Therapeutic.jpg',
    title: { en: 'Therapeutic massage', ar: 'التدليك العلاجي' },
    desc: {
      en: 'A focused, hands-on massage. The areas of focus and pressure can be discussed around your preferences and comfort.',
      ar: 'جلسة تدليك يدوي مركّزة، ويمكن مناقشة المناطق التي تفضّل التركيز عليها ومستوى الضغط بما يناسب راحتك.',
    },
  },
  {
    id: 'hijama',
    image: 'src/assets/images/Hijama.jpg',
    title: { en: 'Hijama', ar: 'الحجامة' },
    desc: {
      en: 'A traditional cupping practice. Dr Chokri can explain the session and what to expect before you decide to book.',
      ar: 'ممارسة تقليدية باستخدام الحجامة. يمكن للدكتور شكري شرح الجلسة وما تتضمنه قبل اتخاذ قرار الحجز.',
    },
  },
];

export const SERVICES_HEADING = {
  en: { label: 'Services', title: 'Three practices, one standard of care.' },
  ar: { label: 'الخدمات', title: 'ثلاث ممارسات ومعيار واحد من العناية.' },
};

export const SPECIALIST = {
  en: {
    label: 'Meet the practitioner',
    title: 'Meet Dr Chokri',
    body: 'At Centre Afytos, Dr Chokri provides care through chiropractic care, therapeutic massage, and hijama. The centre brings these services together in one place, making it easier for visitors to discover the available treatments and arrange an appointment.',
    secondParagraph: 'Whether you are visiting the centre in Nabeul or enquiring about an international visit, contact the team for the latest information on services and availability.',
    button: 'Explore Our Services',
    imageAlt: 'Dr Chokri',
  },
  ar: {
    label: 'تعرّف على المختص',
    title: 'تعرّف على الدكتور شكري',
    body: 'يقدّم الدكتور شكري في مركز Afytos خدمات العناية بتقويم العمود الفقري، والتدليك العلاجي، والحجامة. ويجمع المركز هذه الخدمات في مكان واحد لتسهيل التعرّف عليها والتواصل من أجل حجز موعد.',
    secondParagraph: 'سواء كنتم ترغبون في زيارة المركز في نابل أو الاستفسار عن الزيارات الدولية، يمكنكم التواصل مع المركز لمعرفة الخدمات والمواعيد المتاحة.',
    button: 'اكتشف خدماتنا',
    imageAlt: 'الدكتور شكري',
  },
};

export const SPECIALIST_IMAGE = specialistImage;

export const PATIENT_STAT = {
  en: { number: '2,500+', label: 'Patients received treatment from us.' },
  ar: { number: '+2,500', label: ' مريض تعالج على أيدينا' },
};

export const INTERNATIONAL_CONTACT = {
  en: {
    label: 'International contact',
    title: 'Centre Afytos, Beyond Nabeul',
    description: 'For information about international visits and appointments, contact the centre directly. Visit schedules and availability may vary, so please confirm the latest details before making arrangements.',
    countries: {
      tunisia: 'Tunisia',
      qatar: 'Qatar',
      kuwait: 'Kuwait',
    },
    whatsappLabel: 'WhatsApp',
    contactNote: 'Contact numbers are for enquiries; they do not indicate permanent clinic locations.',
  },
  ar: {
    label: 'التواصل الدولي',
    title: 'مركز Afytos — من نابل إلى الخارج',
    description: 'للاستفسار عن الزيارات الدولية والمواعيد، يُرجى التواصل مباشرة مع المركز. قد تختلف مواعيد الزيارات وأوقات التوفّر، لذلك يُفضّل التأكّد من التفاصيل قبل التخطيط للزيارة.',
    countries: {
      tunisia: 'تونس',
      qatar: 'قطر',
      kuwait: 'الكويت',
    },
    whatsappLabel: 'واتساب',
    contactNote: 'الأرقام للاستفسار، ولا تعني وجود فروع دائمة في هذه البلدان.',
  },
};

export interface Testimonial {
  id: string;
  quote: { en: string; ar: string };
}

export const TESTIMONIALS: Testimonial[] = [];
export const TESTIMONIALS_HEADING = {
  en: {
    label: 'Patient experiences',
    title: 'Real Words. Real Experiences.',
    description: "Every patient's experience is personal. Explore genuine feedback shared by people who have visited Centre Afytos.",
  },
  ar: {
    label: 'تجارب المرضى',
    title: 'تجارب حقيقية، بكلمات أصحابها',
    description: 'تختلف تجربة كل مريض عن الآخر. يمكنكم الاطّلاع على آراء حقيقية شاركها أشخاص زاروا مركز Afytos.',
  },
};

export const BOOKING = {
  en: {
    label: 'Booking',
    title: 'Book an Appointment',
    desc: 'Choose a service and an available time using our online booking calendar.',
    whatsappLabel: 'Book via WhatsApp',
    loadError: 'The booking calendar could not be loaded.',
    openBookingPage: 'Open the booking page',
  },
  ar: {
    label: 'الحجز',
    title: 'احجز موعداً',
    desc: 'اختر الخدمة والموعد المتاح باستخدام تقويم الحجز عبر الإنترنت.',
    whatsappLabel: 'احجز عبر واتساب',
    loadError: 'تعذّر تحميل تقويم الحجز.',
    openBookingPage: 'افتح صفحة الحجز',
  },
};

export interface FaqItem {
  q: { en: string; ar: string };
  a: { en: string; ar: string };
}

export const FAQ_HEADING = {
  en: { label: 'FAQ', title: 'Before your visit.' },
  ar: { label: 'الأسئلة', title: 'قبل زيارتك.' },
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: { en: 'What services does Centre Afytos offer?', ar: 'ما هي الخدمات التي يقدمها مركز Afytos؟' },
    a: {
      en: 'The centre offers chiropractic care, therapeutic massage and hijama. Each session can be discussed with Dr Chokri before booking.',
      ar: 'يقدم المركز تقويم العمود الفقري والتدليك العلاجي والحجامة. يمكن مناقشة تفاصيل الجلسة مع الدكتور شكري قبل الحجز.',
    },
  },
  {
    q: { en: 'How do I book an appointment?', ar: 'كيف أحجز موعداً؟' },
    a: {
      en: 'Choose a service and an available time in the SimplyBook.me calendar, or contact Centre Afytos on WhatsApp.',
      ar: 'اختر الخدمة والموعد المتاح في تقويم SimplyBook.me، أو تواصل مع مركز Afytos عبر واتساب.',
    },
  },
  {
    q: { en: 'Where is the centre located?', ar: 'أين يقع المركز؟' },
    a: {
      en: 'Centre Afytos is at 2 Mars 1934, Nabeul, Tunisia.',
      ar: 'يقع مركز Afytos في 2 مارس 1934، نابل، تونس.',
    },
  },
  {
    q: { en: 'Do you offer visits abroad?', ar: 'هل تقدمون زيارات خارج تونس؟' },
    a: {
      en: 'Contact the centre using the listed international numbers to ask about visit plans. Timing and availability vary and should be confirmed directly.',
      ar: 'تواصلوا مع المركز عبر أرقام التواصل الدولي للاستفسار عن خطط الزيارة. تختلف المواعيد وأوقات التوفّر، ويُرجى تأكيدها مباشرة مع المركز.',
    },
  },
  {
    q: { en: 'What should I expect from a session?', ar: 'ماذا أتوقع خلال الجلسة؟' },
    a: {
      en: 'The service you choose is shown in the booking calendar. You can discuss your needs and comfort with Dr Chokri before the session.',
      ar: 'تظهر الخدمة التي تختارها في تقويم الحجز. يمكنك مناقشة احتياجاتك وراحتك مع الدكتور شكري قبل الجلسة.',
    },
  },
  {
    q: { en: 'How can I contact the centre?', ar: 'كيف أتواصل مع المركز؟' },
    a: {
      en: 'Message us on WhatsApp at +216 26 719 252, or visit our Facebook, Instagram and TikTok pages.',
      ar: 'راسلنا عبر واتساب على الرقم ‎+216 26 719 252، أو زر صفحاتنا على فيسبوك وإنستغرام وتيك توك.',
    },
  },
];

export const FOOTER = {
  en: {
    tagline: 'Chiropractic care, therapeutic massage and hijama in Nabeul.',
    navTitle: 'Explore',
    contactTitle: 'Contact',
    followTitle: 'Follow us',
    copyright: 'All rights reserved.',
  },
  ar: {
    tagline: 'تقويم العمود الفقري والتدليك العلاجي والحجامة في نابل.',
    navTitle: 'استكشف',
    contactTitle: 'تواصل',
    followTitle: 'تابعنا',
    copyright: 'جميع الحقوق محفوظة.',
  },
};

export const LANG_LABELS: Record<Lang, { native: string; short: string }> = {
  en: { native: 'English', short: 'EN' },
  ar: { native: 'العربية', short: 'ع' },
};
