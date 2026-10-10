import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import {
  INTERNATIONAL_VISITS,
  INTERNATIONAL_VISIT_SECTION,
  type InternationalVisit,
} from '@/i18n/content';
import { CountryFlag } from '@/components/CountryFlag';

function VisitRow({
  visit,
  previousLabel,
  upcomingLabel,
  dateFallback,
}: {
  visit: InternationalVisit;
  previousLabel: string;
  upcomingLabel: string;
  dateFallback: string;
}) {
  const { lang } = useLang();
  const upcoming = visit.status === 'upcoming';

  return (
    <li className="flex items-center gap-4 border-t border-stone-200/80 py-4 first:border-t-0 sm:py-5">
      <CountryFlag
        country={visit.flag}
        label={lang === 'ar' ? `علم ${visit.name[lang]}` : `${visit.name[lang]} flag`}
        className="w-10 shrink-0 rounded-sm"
      />
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-sage-900">{visit.name[lang]}</p>
        <p className="mt-1 text-sm text-stone-500" dir="auto">
          {visit.date?.[lang] ?? (upcoming ? dateFallback : '')}
        </p>
      </div>
      <span
        className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-semibold ${
          upcoming ? 'bg-clay-200/70 text-clay-900' : 'bg-sage-100 text-sage-800'
        }`}
      >
        {upcoming ? upcomingLabel : previousLabel}
      </span>
    </li>
  );
}

function VisitGroup({
  title,
  visits,
  emptyMessage,
  previousLabel,
  upcomingLabel,
  dateFallback,
}: {
  title: string;
  visits: InternationalVisit[];
  emptyMessage: string;
  previousLabel: string;
  upcomingLabel: string;
  dateFallback: string;
}) {
  return (
    <div className="rounded-2xl border border-stone-200/80 bg-white/65 px-5 py-5 sm:px-7 sm:py-6">
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-sage-900 sm:text-lg">{title}</h3>
        <ArrowUpRight className="h-4 w-4 text-sage-500" aria-hidden="true" />
      </div>
      {visits.length ? (
        <ul>
          {visits.map((visit) => (
            <VisitRow
              key={visit.id}
              visit={visit}
              previousLabel={previousLabel}
              upcomingLabel={upcomingLabel}
              dateFallback={dateFallback}
            />
          ))}
        </ul>
      ) : (
        <p className="border-t border-stone-200/80 py-5 text-sm leading-relaxed text-stone-500">
          {emptyMessage}
        </p>
      )}
    </div>
  );
}

export function InternationalVisits() {
  const { lang } = useLang();
  const t = INTERNATIONAL_VISIT_SECTION[lang];
  const previousVisits = INTERNATIONAL_VISITS.filter((visit) => visit.status === 'previous');
  const upcomingVisits = INTERNATIONAL_VISITS.filter((visit) => visit.status === 'upcoming');
  const joinNames = (names: string[]) => {
    if (names.length < 2) return names[0] ?? '';
    return lang === 'ar'
      ? `${names.slice(0, -1).join('، ')} و${names[names.length - 1]}`
      : `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
  };
  const previousDescription = previousVisits.length
    ? `${t.previousIntro} ${joinNames(previousVisits.map((visit) => visit.name[lang]))}.`
    : '';
  const nextVisit = upcomingVisits[0];
  const upcomingDescription = nextVisit
    ? `${t.upcomingIntro} ${nextVisit.name[lang]}${nextVisit.date ? ` ${t.dateIntro} ${nextVisit.date[lang]}` : ''}.`
    : '';
  const description = [previousDescription, upcomingDescription, t.updatesNote]
    .filter(Boolean)
    .join(' ');

  return (
    <section id="international-visits" className="border-y border-stone-200/70 bg-clay-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="sr-reveal lg:col-span-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-sage-500">
              {t.label}
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-sage-900 text-balance sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-5 max-w-prose-narrow text-base leading-relaxed text-stone-600 text-pretty sm:text-lg">
              {description || t.emptyDescription}
            </p>
          </div>
          <div className="grid gap-4 sr-reveal lg:col-span-7">
            <VisitGroup
              title={t.previousTitle}
              visits={previousVisits}
              emptyMessage={t.emptyPrevious}
              previousLabel={t.previousStatus}
              upcomingLabel={t.upcomingStatus}
              dateFallback={t.dateToBeAnnounced}
            />
            <VisitGroup
              title={t.upcomingTitle}
              visits={upcomingVisits}
              emptyMessage={t.emptyUpcoming}
              previousLabel={t.previousStatus}
              upcomingLabel={t.upcomingStatus}
              dateFallback={t.dateToBeAnnounced}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
