import { Footer } from "@/components/layout/Footer";
import { HeaderWithStateCal } from "@/components/layout/HeaderWithStateCal";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { ServiceAduPage } from "@/components/pages/ServiceAduPage";
import { aduPageContent } from "@/data/pages/services/aduPageContent";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <HeaderWithStateCal />
      <ServiceAduPage data={aduPageContent.california} />
      <Footer />
    </>
  );
}
