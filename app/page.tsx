import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";
import { HomeBodyClass } from "@/components/layout/HomeBodyClass";
import { Banner } from "@/components/homepage/Banner";
import { TagLine } from "@/components/homepage/TagLine";
import { WhyChooseUs } from "@/components/homepage/WhyChooseUs";
import { AboutSection } from "@/components/homepage/AboutSection";
import { ProjectTypes } from "@/components/homepage/ProjectTypes";
import { HowItWorks } from "@/components/homepage/HowItWorks";

export default function HomePage() {
  return (
    <>
      <HomeBodyClass />
      <StickyHeaderScript />
      <Header />
      <Banner />
      <TagLine />
      <WhyChooseUs />
      <AboutSection />
      <ProjectTypes />
      <HowItWorks />

      {/* Footer Parallax Image */}
      <section
        className="c_paralax_img"
        style={{
          backgroundImage: "url(/images/Footer.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "300px",
        }}
      />

      <Footer />
    </>
  );
}
