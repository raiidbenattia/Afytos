import { useLang } from '@/i18n/LanguageContext';
import { PATIENT_STAT } from '@/i18n/content';

export function PatientStat() {
  const { lang } = useLang();
  const t = PATIENT_STAT[lang];

  return (
    <section
      aria-label={`${t.number} ${t.label}`}
      className="border-y border-stone-200/80 bg-clay-50 py-8 sm:py-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-5 text-center sm:flex-row sm:gap-5 sm:px-8">
        <p className="text-4xl sm:text-5xl font-semibold tracking-tight text-sage-900" dir="ltr">
          {t.number}
        </p>
        <span aria-hidden="true" className="hidden h-9 border-s border-stone-300 sm:block" />
        <p className="text-sm sm:text-base font-medium text-stone-500">{t.label}</p>
      </div>
    </section>
  );
}
