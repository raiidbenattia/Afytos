import { useLang } from '@/i18n/LanguageContext';
import { SERVICES, SERVICES_HEADING } from '@/i18n/content';

export function Services() {
  const { lang } = useLang();
  const h = SERVICES_HEADING[lang];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading — editorial, no card */}
        <div className="mb-16 sr-reveal">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-sage-500 mb-4">
            {h.label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-sage-900 leading-[1.15] tracking-tight max-w-2xl text-balance">
            {h.title}
          </h2>
        </div>

        {/* Services — alternating image/text rows, not a grid of cards */}
        <div className="space-y-20 lg:space-y-28">
          {SERVICES.map((service, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Image */}
                <div className={`sr-reveal ${reverse ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title[lang]}
                    className="w-full aspect-[3/2] object-cover rounded-sm"
                    loading="lazy"
                  />
                </div>

                {/* Text */}
                <div className={`sr-reveal ${reverse ? 'lg:order-1' : ''}`}>
                  <span className="text-sm font-medium text-clay-500 mb-3 inline-block">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-sage-900 tracking-tight mb-4">
                    {service.title[lang]}
                  </h3>
                  <p className="text-lg text-stone-500 leading-relaxed max-w-prose-narrow text-pretty">
                    {service.desc[lang]}
                  </p>
                  <a
                    href="#booking"
                    className="mt-6 text-sm font-semibold text-sage-700 hover:text-sage-900 transition-colors inline-flex items-center gap-1"
                  >
                    {lang === 'en' ? 'Explore booking times' : 'استعرض المواعيد المتاحة'}
                    <span aria-hidden="true" className="rtl:rotate-180">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
