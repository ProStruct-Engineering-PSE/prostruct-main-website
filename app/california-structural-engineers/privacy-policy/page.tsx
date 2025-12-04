import { Footer } from "@/components/layout/Footer";
import { HeaderWithStateCal } from "@/components/layout/HeaderWithStateCal";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { PrivacyPolicyPage } from "@/components/privacy/PrivacyPolicyPage";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <HeaderWithStateCal />
      <PrivacyPolicyPage />
      <Footer />
    </>
  );
}
