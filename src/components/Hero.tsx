import { ArrowDown } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { HERO, HERO_IMAGE } from '@/i18n/content';

export function Hero() {
  const { lang } = useLang();
  const t = HERO[lang];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Centre Afytos wellness centre"
          className="w-full h-full object-cover"
          loading="eager"
          ref={(image) => {
            if (image) image.fetchPriority = 'high';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-900/25 to-stone-900/10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full pb-16 sm:pb-24 pt-32">
        <div className="max-w-2xl">
          <p className="text-clay-100 text-sm font-medium tracking-wide mb-5 opacity-90">
            {t.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight text-balance mb-5">
            {t.title}
          </h1>
          <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-xl text-pretty">
            {t.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-clay-50 hover:bg-white text-sage-900 text-base font-semibold transition-all"
            >
              {t.cta}
            </a>
            <button
              onClick={() => scrollTo('#services')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/30 hover:bg-white/10 text-white text-base font-medium transition-all"
            >
              {t.secondary}
              <ArrowDown className="w-4 h-4 rtl:rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
