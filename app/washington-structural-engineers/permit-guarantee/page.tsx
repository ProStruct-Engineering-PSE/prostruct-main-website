import { Footer } from "@/components/layout/Footer";
import { HeaderWithState } from "@/components/layout/HeaderWithState";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { PermitGuaranteePage } from "@/components/pages/PermitGuaranteePage";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <HeaderWithState />
      <PermitGuaranteePage />
      <Footer />
    </>
  );
}
