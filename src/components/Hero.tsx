import heroImage from '@/assets/images/hero-international.jpg';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { HERO, INTERNATIONAL_VISITS } from '@/i18n/content';
import { CountryFlag } from '@/components/CountryFlag';

export function Hero() {
  const { lang } = useLang();
  const t = HERO[lang];
  const destination = INTERNATIONAL_VISITS.find((visit) => visit.status === 'upcoming');

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[min(900px,100svh)] items-center overflow-hidden bg-clay-50 pt-[88px] sm:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-y-0 end-0 -z-10 hidden w-[48%] bg-gradient-to-bl from-clay-100/80 via-clay-50/60 to-transparent lg:block"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute start-0 top-24 -z-10 h-64 w-64 rounded-full bg-clay-100/60 blur-3xl sm:h-96 sm:w-96" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-16">
        <div className="sr-reveal">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.19em] text-sage-600 sm:text-xs">
            <span className="h-px w-8 bg-clay-500" aria-hidden="true" />
            {t.eyebrow}
          </p>
          {destination ? (
            <h1 className="max-w-3xl text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-[1.03] tracking-[-0.055em] text-sage-950 text-balance">
              <span className="block">{t.titlePrefix}</span>
              <span className="mt-2 block font-serif font-normal italic tracking-[-0.04em] text-clay-700">
                {destination.name[lang]}
                <span className="text-sage-900">.</span>
              </span>
            </h1>
          ) : (
            <h1 className="max-w-3xl text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-[1.03] tracking-[-0.055em] text-sage-950 text-balance">
              {t.fallbackTitle}
            </h1>
          )}
          <p className="mt-7 max-w-xl text-base leading-relaxed text-stone-600 text-pretty sm:mt-8 sm:text-lg">
            {destination ? t.desc : t.fallbackDesc}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <a
              href="#international-visits"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-sage-900 px-6 py-3 text-sm font-semibold text-clay-50 shadow-[0_10px_24px_rgba(47,55,41,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-sage-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sage-700"
            >
              {t.cta}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#community"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-300/90 px-6 py-3 text-sm font-semibold text-sage-900 transition-colors hover:border-sage-700 hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sage-700"
            >
              {t.secondary}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="sr-reveal mx-auto w-full max-w-[600px] lg:me-0">
          <div className="overflow-hidden rounded-[1.5rem] border border-clay-200/80 bg-clay-100 shadow-[0_28px_80px_rgba(91,60,46,0.14)] sm:rounded-[2rem]">
            <img
              src={heroImage}
              alt={
                lang === 'ar'
                  ? 'الدكتور شكري يقدّم جلسة عناية لمراجع في مركز Afytos'
                  : 'Dr Chokri providing hands-on care to a visitor at Centre Afytos'
              }
              className="aspect-[1.55] w-full object-cover object-[62%_center] sm:aspect-[1.7] lg:aspect-[1.42]"
              loading="eager"
              decoding="async"
              ref={(image) => {
                if (image) image.fetchPriority = 'high';
              }}
            />
          </div>
          <p className="mt-3 text-end text-[10px] font-medium uppercase tracking-[0.15em] text-stone-500 sm:mt-4">
            Centre Afytos <span className="px-1.5 text-clay-500">·</span>{' '}
            {lang === 'ar' ? 'عناية واهتمام' : 'Care, with presence'}
          </p>
        </div>
      </div>
    </section>
  );
}
