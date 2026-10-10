import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { FAQ_ITEMS, FAQ_HEADING } from '@/i18n/content';

export function FAQ() {
  const { lang } = useLang();
  const h = FAQ_HEADING[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-clay-50">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="mb-12 sr-reveal">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-sage-500 mb-4">
            {h.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 tracking-tight text-balance">
            {h.title}
          </h2>
        </div>

        <div className="divide-y divide-stone-200/70 sr-reveal">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  id={`faq-question-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left rtl:text-right"
                >
                  <span className="font-semibold text-sage-900 text-base">{item.q[lang]}</span>
                  <span className="flex-shrink-0 text-sage-500">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`overflow-hidden transition-all duration-300 ease-smooth ${
                    isOpen ? 'max-h-40 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-stone-500 leading-relaxed text-pretty">{item.a[lang]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
