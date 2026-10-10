import { useEffect, useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { BOOKING, BUSINESS } from '@/i18n/content';

const WIDGET_SCRIPT_URL = 'https://widget.simplybook.me/v2/widget/widget.js';

let widgetScriptPromise: Promise<void> | null = null;

function loadWidgetScript(): Promise<void> {
  if (window.SimplybookWidget) return Promise.resolve();

  if (!widgetScriptPromise) {
    widgetScriptPromise = new Promise<void>((resolve, reject) => {
      let script = document.querySelector<HTMLScriptElement>(
        `script[src="${WIDGET_SCRIPT_URL}"]`,
      );

      const onLoad = () => {
        if (window.SimplybookWidget) {
          resolve();
        } else {
          reject(new Error('SimplyBook.me widget script loaded without its constructor.'));
        }
      };
      const onError = () => reject(new Error('Failed to load the SimplyBook.me widget script.'));

      if (!script) {
        script = document.createElement('script');
        script.src = WIDGET_SCRIPT_URL;
        script.async = true;
        script.dataset.simplybookWidget = 'true';
      }

      script.addEventListener('load', onLoad, { once: true });
      script.addEventListener('error', onError, { once: true });
      if (!script.isConnected) document.head.appendChild(script);
    }).catch((error: unknown) => {
      widgetScriptPromise = null;
      throw error;
    });
  }

  return widgetScriptPromise;
}

export function BookingWidget() {
  const { lang } = useLang();
  const t = BOOKING[lang];
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const container = widgetContainerRef.current;

    loadWidgetScript()
      .then(() => {
        if (!isMounted || !container) return;

        const Widget = window.SimplybookWidget;
        if (!Widget) throw new Error('SimplyBook.me widget constructor is unavailable.');

        new Widget({
          widget_type: 'iframe',
          url: 'https://afytos.simplybook.me',
          theme: 'blur',
          theme_settings: {
            timeline_hide_unavailable: '1',
            hide_past_days: '1',
            timeline_show_end_time: '0',
            timeline_modern_display: 'as_slots',
            sb_base_color: '#2f3729',
            display_item_mode: 'list',
            body_bg_color: '#f6f6f8',
            dark_font_color: '#443936',
            light_font_color: '#ffffff',
            btn_color_1: '#2f3729',
            sb_company_label_color: '#896d65',
            hide_img_mode: '0',
            sb_busy: '#c7b3b3',
            sb_available: '#d1f0ff',
          },
          timeline: 'modern_week',
          datepicker: 'inline_datepicker',
          is_rtl: false,
          app_config: {
            clear_session: 0,
            allow_switch_to_ada: 0,
            predefined: [],
          },
          container_id: 'sbw_l3xk07',
        });
      })
      .catch((error: unknown) => {
        console.error('Unable to initialize the SimplyBook.me booking widget.', error);
        if (isMounted) setLoadError(true);
      });

    return () => {
      isMounted = false;
      container?.replaceChildren();
    };
  }, []);

  return (
    <section id="booking" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 sr-reveal">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-sage-500 mb-4">
            {t.label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-sage-900 leading-[1.15] tracking-tight mb-5 text-balance">
            {t.title}
          </h2>
          <p className="text-lg text-stone-500 leading-relaxed max-w-prose-narrow mx-auto text-pretty">
            {t.desc}
          </p>
        </div>

        <div className="booking-widget-frame sr-reveal">
          <div id="sbw_l3xk07" ref={widgetContainerRef} />
        </div>
        {loadError && (
          <p role="alert" className="mt-4 text-center text-sm text-stone-600">
            {t.loadError}{' '}
            <a
              href="https://afytos.simplybook.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sage-700 underline underline-offset-2 hover:text-sage-900"
            >
              {t.openBookingPage}
            </a>
          </p>
        )}

        <div className="mt-8 flex justify-center sr-reveal">
          <a
            href={BUSINESS.whatsappLinktn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1FB855] text-white text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {t.whatsappLabel}
            <span dir="ltr" className="opacity-80">— {BUSINESS.whatsapptn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
