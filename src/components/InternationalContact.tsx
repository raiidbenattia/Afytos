import { MessageCircle, Phone } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { BUSINESS, INTERNATIONAL_CONTACT } from '@/i18n/content';

const CONTACTS = [
  {
    key: 'tunisia',
    number: BUSINESS.whatsapptn,
    whatsapp: BUSINESS.whatsappLinktn,
  },
  {
    key: 'qatar',
    number: BUSINESS.whatsappqa,
    whatsapp: BUSINESS.whatsappLinkqa,
  },
  {
    key: 'kuwait',
    number: BUSINESS.whatsappkw,
    whatsapp: BUSINESS.whatsappLinkkw,
  },
] as const;

export function InternationalContact() {
  const { lang } = useLang();
  const t = INTERNATIONAL_CONTACT[lang];

  return (
    <section id="visits" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 sr-reveal">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-sage-500">
              {t.label}
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-sage-900 text-balance sm:text-4xl">
              {t.title}
            </h2>
          </div>
          <div className="lg:col-span-8 sr-reveal">
            <p className="mb-8 max-w-prose-narrow text-lg leading-relaxed text-stone-500 text-pretty">
              {t.description}
            </p>
            <ul className="divide-y divide-stone-200 border-y border-stone-200">
              {CONTACTS.map((contact) => (
                <li
                  key={contact.key}
                  className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium text-sage-900">{t.countries[contact.key]}</span>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a
                      href={`tel:${contact.number.replace(/[^\d+]/g, '')}`}
                      dir="ltr"
                      className="text-sm text-stone-600 underline decoration-stone-300 underline-offset-4 hover:text-sage-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700"
                    >
                      {contact.number}
                    </a>
                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.whatsappLabel} ${t.countries[contact.key]} ${contact.number}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage-700 hover:text-sage-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      {t.whatsappLabel}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-center gap-2 text-sm text-stone-500">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {t.contactNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
