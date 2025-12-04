import { Footer } from "@/components/layout/Footer";
import { HeaderWithState } from "@/components/layout/HeaderWithState";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { ServiceAduPage } from "@/components/pages/ServiceAduPage";
import { aduPageContent } from "@/data/pages/services/aduPageContent";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <HeaderWithState />
      <ServiceAduPage data={aduPageContent.georgia} />
      <Footer />
    </>
  );
}
