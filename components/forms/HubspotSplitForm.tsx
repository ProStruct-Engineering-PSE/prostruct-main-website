"use client";

import { useEffect, useId, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
          onFormReady?: () => void;
          onFormSubmit?: () => void;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

type HubspotSplitFormProps = {
  portalId: string;
  formId: string;
  region?: string;
};

export function HubspotSplitForm({
  portalId,
  formId,
  region = "na1",
}: HubspotSplitFormProps) {
  const [scriptReady, setScriptReady] = useState(false);
  const [formMounted, setFormMounted] = useState(false);

  const uniqueId = useId().replace(/:/g, "-");
  const containerId = `hs-form-${uniqueId}`;
  const loaderId = `${containerId}-loader`;

  useEffect(() => {
    if (window.hbspt?.forms?.create) {
      setScriptReady(true);
    }
  }, []);

  useEffect(() => {
    if (!scriptReady || formMounted) return;

    const renderForm = () => {
      if (!window.hbspt?.forms?.create) return;

      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#${containerId}`,
        onFormReady: () => {
          const loader = document.getElementById(loaderId);
          if (loader) loader.style.display = "none";
        },
      });

      // Hide loader after 1s regardless (parity with WP behavior)
      setTimeout(() => {
        const loader = document.getElementById(loaderId);
        if (loader) loader.style.display = "none";
      }, 1000);

      setFormMounted(true);
    };

    if (window.hbspt) {
      renderForm();
    }
  }, [
    scriptReady,
    formMounted,
    containerId,
    loaderId,
    portalId,
    formId,
    region,
  ]);

  return (
    <>
      <Script
        src="https://js.hsforms.net/forms/v2.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      <div id={containerId}>
        <div id={loaderId} className="form-loader" />
      </div>
    </>
  );
}
