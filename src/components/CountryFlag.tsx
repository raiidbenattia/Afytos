import type { InternationalVisit } from '@/i18n/content';

export function CountryFlag({
  country,
  label,
  className,
}: {
  country: InternationalVisit['flag'];
  label: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 36"
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
    >
      {country === 'qa' && (
        <>
          <path d="M0 0h21l-3 2 3 2-3 2 3 2-3 2 3 2-3 2 3 2-3 2 3 2-3 2 3 2-3 2 3 2-3 2 3 2-3 2 3 2H0z" fill="#fff" />
          <path d="M21 0h39v36H21l-3-2 3-2-3-2 3-2-3-2 3-2-3-2 3-2-3-2 3-2-3-2 3-2-3-2 3-2-3-2 3-2-3-2 3-2-3-2z" fill="#8a1538" />
        </>
      )}
      {country === 'kw' && (
        <>
          <path d="M0 0h60v12H0z" fill="#007a3d" />
          <path d="M0 12h60v12H0z" fill="#fff" />
          <path d="M0 24h60v12H0z" fill="#ce1126" />
          <path d="M0 0h15l-7.5 18L15 36H0z" fill="#000" />
        </>
      )}
      {country === 'ly' && (
        <>
          <path d="M0 0h60v9H0z" fill="#e70013" />
          <path d="M0 9h60v18H0z" fill="#000" />
          <path d="M0 27h60v9H0z" fill="#239e46" />
          <circle cx="29" cy="18" r="6.2" fill="#fff" />
          <circle cx="32" cy="16.3" r="5.2" fill="#000" />
          <path d="m37.5 13.5 1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4z" fill="#fff" />
        </>
      )}
      <rect x=".5" y=".5" width="59" height="35" rx="2" fill="none" stroke="rgba(47,55,41,.16)" />
    </svg>
  );
}
