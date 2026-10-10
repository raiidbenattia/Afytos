import { Facebook, Instagram, ExternalLink } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import {
  COMMUNITY,
  COMMUNITY_STORIES,
  SOCIAL_PLATFORMS,
  type CommunityStory,
} from '@/i18n/content';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.6 6.2a5.4 5.4 0 0 1-3.4-4.7V1h-4.1v14.5a2.5 2.5 0 1 1-2.5-2.5c.4 0 .8.1 1.1.2V9a7 7 0 1 0 5.5 6.8V8.4a9.5 9.5 0 0 0 5.5 1.8V6.1c-.7 0-1.4 0-2.1.1Z" />
    </svg>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  if (platform === 'tiktok') return <TikTokIcon className="h-5 w-5" />;
  if (platform === 'instagram') return <Instagram className="h-5 w-5" aria-hidden="true" />;
  return <Facebook className="h-5 w-5" aria-hidden="true" />;
}

function StoryCard({ story }: { story: CommunityStory }) {
  const { lang } = useLang();

  return (
    <article className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_12px_36px_rgba(47,55,41,0.06)]">
      {story.media.type === 'image' ? (
        <img
          src={story.media.src}
          alt={story.media.alt[lang]}
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
        />
      ) : (
        <video
          src={story.media.src}
          poster={story.media.poster}
          className="aspect-[4/5] w-full object-cover"
          controls
          playsInline
          preload="none"
          aria-label={story.caption?.[lang] ?? story.name?.[lang] ?? COMMUNITY[lang].storiesTitle}
        />
      )}
      {(story.name || story.caption || story.postUrl) && (
        <div className="space-y-2 p-4">
          {story.name && <h4 className="font-semibold text-sage-900">{story.name[lang]}</h4>}
          {story.caption && <p className="text-sm leading-relaxed text-stone-500">{story.caption[lang]}</p>}
          {story.postUrl && (
            <a
              href={story.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-sage-700 transition-colors hover:text-sage-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700"
            >
              {COMMUNITY[lang].storyLink}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export function Community() {
  const { lang } = useLang();
  const t = COMMUNITY[lang];

  return (
    <section id="community" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="sr-reveal">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-sage-500">
            {t.label}
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-sage-900 text-balance sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-500 text-pretty">
            {t.description}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOCIAL_PLATFORMS.map((platform) => (
            <li key={platform.id}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.follow} ${platform.name}${platform.followers ? `, ${platform.followers} ${t.followers}` : ''}`}
                className="group flex h-full min-h-48 flex-col justify-between rounded-2xl border border-stone-200/80 bg-clay-50/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-clay-300 hover:bg-white hover:shadow-[0_18px_40px_rgba(47,55,41,0.09)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-700 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-sage-900 text-clay-50">
                    <SocialIcon platform={platform.id} />
                  </span>
                  <ExternalLink className="h-4 w-4 text-stone-400 transition-colors group-hover:text-sage-700" aria-hidden="true" />
                </div>
                <div className="mt-7">
                  <h3 className="text-lg font-semibold text-sage-900">{platform.name}</h3>
                  {platform.followers && (
                    <p className="mt-1 text-2xl font-bold tracking-tight text-sage-800" dir="ltr">
                      {platform.followers}
                      <span className="ms-2 text-xs font-medium tracking-normal text-stone-500">
                        {t.followers}
                      </span>
                    </p>
                  )}
                  <p className="mt-4 text-sm font-semibold text-sage-700">
                    {platform.id === 'facebook' ? t.visit : t.follow} {platform.name}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-stone-200 pt-10 sm:mt-20 sm:pt-12">
          <div className="mb-7 flex items-end justify-between gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-sage-900 sm:text-3xl">
              {t.storiesTitle}
            </h3>
          </div>
          {COMMUNITY_STORIES.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {COMMUNITY_STORIES.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-stone-300 bg-clay-50/60 px-5 py-8 text-sm leading-relaxed text-stone-500">
              {t.storiesEmpty}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
