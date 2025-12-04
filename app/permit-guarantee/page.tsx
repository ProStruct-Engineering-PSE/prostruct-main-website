import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { PermitGuaranteePage } from "@/components/pages/PermitGuaranteePage";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <Header />
      <PermitGuaranteePage />
      <Footer />
    </>
  );
}
