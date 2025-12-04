import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { PrivacyPolicyPage } from "@/components/privacy/PrivacyPolicyPage";

export default function Page() {
  return (
    <>
      <StickyHeaderScript />
      <Header />
      <PrivacyPolicyPage />
      <Footer />
    </>
  );
}
