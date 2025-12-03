import { Footer } from "@/components/layout/Footer";
import { HeaderWithState } from "@/components/layout/HeaderWithState";
import { HeaderWithStateCal } from "@/components/layout/HeaderWithStateCal";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { StateLandingPage } from "@/components/state/StateLandingPage";
import {
  stateLandingContent,
  StateSlug,
} from "@/components/state/stateLandingData";

type HeaderVariant = "standard" | "california";

export function createStatePage(
  slug: StateSlug,
  headerVariant: HeaderVariant = "standard"
) {
  const HeaderComponent =
    headerVariant === "california" ? HeaderWithStateCal : HeaderWithState;

  const content = stateLandingContent[slug];

  return function StatePage() {
    return (
      <>
        <StickyHeaderScript />
        <HeaderComponent />
        <StateLandingPage content={content} />
        <Footer />
      </>
    );
  };
}
