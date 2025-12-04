import { CalendlyWidget } from "@/components/common/CalendlyWidget";
import { ThankYouFooter } from "@/components/layout/ThankYouFooter";

type CalendlyPageProps = {
  title: string;
  description?: string;
  calendlyUrl: string;
  gtmId?: string;
};

export function CalendlyPage({
  title,
  description,
  calendlyUrl,
  gtmId,
}: CalendlyPageProps) {
  return (
    <>
      {gtmId && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}

      <section className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
            <CalendlyWidget url={calendlyUrl} />
          </div>
        </div>
      </section>

      <ThankYouFooter />
    </>
  );
}
