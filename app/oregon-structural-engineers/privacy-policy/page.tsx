import { Footer } from "@/components/layout/Footer";
import { HeaderWithState } from "@/components/layout/HeaderWithState";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { PrivacyPolicyPage } from "@/components/privacy/PrivacyPolicyPage";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <HeaderWithState />
      <PrivacyPolicyPage />
      <Footer />
    </>
  );
}
