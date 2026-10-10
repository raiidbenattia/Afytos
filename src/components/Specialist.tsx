import { useLang } from '@/i18n/LanguageContext';
import { SPECIALIST, SPECIALIST_IMAGE } from '@/i18n/content';

export function Specialist() {
  const { lang } = useLang();
  const t = SPECIALIST[lang];

  return (
    <section id="practitioner" className="py-24 lg:py-32 bg-sage-900">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          <div className="lg:col-span-5 sr-reveal">
            <img
              src={SPECIALIST_IMAGE}
              alt={t.imageAlt}
              className="w-full aspect-[4/5] object-cover object-top rounded-sm"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-7 sr-reveal">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-clay-300 mb-5">
              {t.label}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-clay-50 tracking-tight mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-clay-100/80 leading-relaxed mb-5 max-w-prose-narrow text-pretty">
              {t.body}
            </p>
            <p className="text-lg text-clay-100/70 leading-relaxed max-w-prose-narrow text-pretty">
              {t.secondParagraph}
            </p>
            <a
              href="#services"
              className="mt-7 inline-flex items-center justify-center rounded-full border border-clay-200/60 px-6 py-3 text-sm font-semibold text-clay-50 hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay-100"
            >
              {t.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
