import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { NAV, LANG_LABELS } from '@/i18n/content';

export function Header() {
  const { lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const nav = NAV[lang];
  const bookLabel = lang === 'en' ? 'Book' : 'احجز';

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-clay-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo — text only, elegant */}
          <button onClick={() => scrollTo('#hero')} className="flex items-baseline gap-2">
            <span className={`text-lg font-bold tracking-tight transition-colors ${scrolled ? 'text-sage-900' : 'text-sage-900'}`}>
              Afytos
            </span>
            <span className={`text-[11px] font-medium tracking-wide hidden sm:inline transition-colors ${scrolled ? 'text-sage-500' : 'text-sage-500'}`}>
              {lang === 'en' ? 'Nabeul' : 'نابل'}
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-sm font-medium text-stone-600 hover:text-sage-700 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right: lang + CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-sage-700 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{LANG_LABELS[lang === 'en' ? 'ar' : 'en'].short}</span>
            </button>

            <a
              href="#booking"
              className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-sage-800 hover:bg-sage-900 text-clay-50 text-sm font-semibold transition-colors"
            >
              {bookLabel}
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-1.5 text-stone-700"
              aria-label={lang === 'en' ? 'Menu' : 'القائمة'}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-clay-50 border-t border-stone-200/60">
          <nav className="px-5 py-4 space-y-1">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left rtl:text-right px-2 py-3 text-base font-medium text-stone-700 hover:text-sage-700 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="#booking"
              className="block w-full text-center mt-2 px-5 py-3 rounded-full bg-sage-800 text-clay-50 text-base font-semibold"
            >
              {bookLabel}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
