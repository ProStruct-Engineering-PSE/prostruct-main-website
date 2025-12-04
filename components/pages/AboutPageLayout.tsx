import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeaderWithState } from "@/components/layout/HeaderWithState";
import { HeaderWithStateCal } from "@/components/layout/HeaderWithStateCal";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { AboutPageContent } from "@/components/pages/AboutPageContent";

type AboutVariant = "global" | "state" | "california";

export function AboutPageLayout({ variant }: { variant: AboutVariant }) {
  const HeaderComponent =
    variant === "california"
      ? HeaderWithStateCal
      : variant === "state"
      ? HeaderWithState
      : Header;

  return (
    <>
      <StickyHeaderScript />
      <HeaderComponent />
      <AboutPageContent />
      <Footer />
    </>
  );
}

