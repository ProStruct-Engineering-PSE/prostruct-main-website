"use client";

import Script from "next/script";

type CalendlyWidgetProps = {
  url: string;
  height?: number;
};

export function CalendlyWidget({ url, height = 700 }: CalendlyWidgetProps) {
  return (
    <div>
      <div
        className="calendly-inline-widget w-100"
        data-url={url}
        style={{ minWidth: "320px", height }}
      />
      <Script
        id="calendly-inline-widget-script"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

