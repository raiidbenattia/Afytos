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

        <div className="sr-reveal mx-auto w-full max-w-[540px] lg:me-0">
          <div className="relative aspect-[0.98] overflow-hidden rounded-[2rem] border border-clay-200/80 bg-gradient-to-br from-[#efe2d2] via-[#e8d5bf] to-[#d7c2a9] p-5 shadow-[0_28px_80px_rgba(91,60,46,0.12)] sm:rounded-[2.5rem] sm:p-8">
            <div className="absolute inset-0 opacity-45" aria-hidden="true">
              <div className="absolute -end-20 -top-20 h-[78%] w-[78%] rounded-full border border-white/60" />
              <div className="absolute -end-8 -top-8 h-[62%] w-[62%] rounded-full border border-white/60" />
              <div className="absolute -bottom-28 -start-24 h-[68%] w-[68%] rounded-full border border-clay-500/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_47%,rgba(255,255,255,0.36),transparent_56%)]" />
            </div>

            <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-white/55 bg-white/15 p-5 backdrop-blur-[1px] sm:rounded-[2rem] sm:p-8">
              <div className="flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-sage-800/80 sm:text-xs">
                <span>{t.destinationLabel}</span>
                <span className="h-px flex-1 bg-sage-800/20" aria-hidden="true" />
                <span>Afytos / 01</span>
              </div>

              {destination ? (
                <div className="relative py-5 text-center">
                  <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-44 w-44 -translate-y-1/2 rounded-full border border-white/35 sm:h-60 sm:w-60" />
                  <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-56 w-56 -translate-y-1/2 rounded-full border border-white/25 sm:h-72 sm:w-72" />
                  <CountryFlag
                    country={destination.flag}
                    label={lang === 'ar' ? `علم ${destination.name[lang]}` : `${destination.name[lang]} flag`}
                    className="mx-auto w-40 drop-shadow-[0_12px_18px_rgba(91,60,46,0.12)] sm:w-52"
                  />
                  <p className="mt-5 font-serif text-[clamp(2.5rem,7vw,5rem)] font-medium leading-none tracking-[-0.04em] text-sage-950">
                    {destination.name[lang]}
                  </p>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-sage-800/70 sm:text-xs">
                    {t.dateLabel}
                  </p>
                  {destination.date && (
                    <p className="mt-2 text-sm font-semibold text-sage-900 sm:text-base" dir="auto">
                      {destination.date[lang]}
                    </p>
                  )}
                </div>
              ) : (
                <div className="py-14 text-center sm:py-20">
                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-white/45 bg-white/15 text-sage-800/70 sm:h-32 sm:w-32">
                    <span className="font-serif text-5xl sm:text-6xl" aria-hidden="true">A</span>
                  </div>
                  <p className="mt-6 font-serif text-3xl text-sage-950 sm:text-5xl">
                    {t.fallbackTitle}
                  </p>
                </div>
              )}

              <div className="flex items-end justify-between gap-4 border-t border-sage-900/15 pt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-sage-800/75 sm:pt-5 sm:text-xs">
                <span>Centre Afytos</span>
                <span className="text-end">International<br className="sm:hidden" /> edition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
