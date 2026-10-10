import { MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { FOOTER, BUSINESS, NAV, LANG_LABELS, type Lang } from '@/i18n/content';

export function Footer() {
  const { lang, setLang } = useLang();
  const t = FOOTER[lang];
  const bizName = lang === 'en' ? BUSINESS.nameEn : BUSINESS.nameAr;
  const nav = NAV[lang];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-sage-950 text-stone-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-clay-50 mb-3">Afytos</h3>
            <p className="text-sm leading-relaxed">{t.tagline}</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-500 mb-4">{t.navTitle}</h4>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm hover:text-clay-50 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-500 mb-4">{t.contactTitle}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={BUSINESS.whatsappLinktn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-clay-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>
                    <span dir="ltr" className="block">{BUSINESS.whatsapptn}</span>
                    <span className="block text-xs text-stone-500">{lang === 'en' ? 'Tunisia' : 'تونس'}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.whatsappLinkkw}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-clay-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>
                    <span dir="ltr" className="block">{BUSINESS.whatsappkw}</span>
                    <span className="block text-xs text-stone-500">{lang === 'en' ? 'Kuwait' : 'الكويت'}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.whatsappLinkqa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-clay-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>
                    <span dir="ltr" className="block">{BUSINESS.whatsappqa}</span>
                    <span className="block text-xs text-stone-500">{lang === 'en' ? 'Qatar' : 'قطر'}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{lang === 'en' ? BUSINESS.addressEn : BUSINESS.addressAr}</span>
              </li>
            </ul>
          </div>

          {/* Social + lang */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-500 mb-4">{t.followTitle}</h4>
            <div className="flex items-center gap-3 mb-6">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" aria-label={lang === 'en' ? 'Centre Afytos on Instagram' : 'مركز Afytos على إنستغرام'} className="w-8 h-8 rounded-full bg-stone-800 hover:bg-sage-700 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" aria-label={lang === 'en' ? 'Centre Afytos on Facebook' : 'مركز Afytos على فيسبوك'} className="w-8 h-8 rounded-full bg-stone-800 hover:bg-sage-700 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={BUSINESS.tiktok} target="_blank" rel="noopener noreferrer" aria-label={lang === 'en' ? 'Centre Afytos on TikTok' : 'مركز Afytos على تيك توك'} className="w-8 h-8 rounded-full bg-stone-800 hover:bg-sage-700 flex items-center justify-center transition-colors text-xs font-bold">
                TT
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              {(['en', 'ar'] as Lang[]).map((l, idx) => (
                <span key={l} className="flex items-center gap-2">
                  {idx > 0 && <span className="text-stone-700">/</span>}
                  <button
                    onClick={() => setLang(l)}
                    className={`transition-colors ${lang === l ? 'text-clay-50 font-medium' : 'hover:text-clay-50'}`}
                  >
                    {LANG_LABELS[l].native}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} {bizName}. {t.copyright}
          </p>
          <p className="text-xs text-stone-600">{lang === 'en' ? 'Nabeul, Tunisia' : 'نابل، تونس'}</p>
        </div>
      </div>
    </footer>
  );
}
