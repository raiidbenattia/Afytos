import { useLang } from '@/i18n/LanguageContext';
import { TESTIMONIALS, TESTIMONIALS_HEADING } from '@/i18n/content';

export function Testimonials() {
  const { lang } = useLang();
  const t = TESTIMONIALS_HEADING[lang];

  if (TESTIMONIALS.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="mb-10 sr-reveal">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-sage-500 mb-4">
            {t.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-500 text-pretty">
            {t.description}
          </p>
        </div>

        <div className="space-y-8">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote key={testimonial.id} className="border-y border-stone-200 py-8">
              <p className="text-xl text-sage-900 leading-relaxed text-pretty">
                “{testimonial.quote[lang]}”
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
