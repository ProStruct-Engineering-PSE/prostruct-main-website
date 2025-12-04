import { Footer } from "@/components/layout/Footer";
import { HeaderWithStateCal } from "@/components/layout/HeaderWithStateCal";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { PermitGuaranteePage } from "@/components/pages/PermitGuaranteePage";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <HeaderWithStateCal />
      <PermitGuaranteePage />
      <Footer />
    </>
  );
}
