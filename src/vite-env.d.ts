/// <reference types="vite/client" />

interface SimplybookWidgetConfig {
  widget_type: 'iframe';
  url: string;
  theme: 'blur';
  theme_settings: Record<string, string>;
  timeline: 'modern_week';
  datepicker: 'inline_datepicker';
  is_rtl: false;
  app_config: {
    clear_session: 0;
    allow_switch_to_ada: 0;
    predefined: never[];
  };
  container_id: 'sbw_l3xk07';
}

interface Window {
  SimplybookWidget?: new (config: SimplybookWidgetConfig) => unknown;
}
