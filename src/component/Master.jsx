import React from "react";
import FirstHeroSection from "./FirstHeroSection";
import SecondSnippetsSection from "./SecondSnippetsSection";
import ThirdFeaturesSection from "./ThirdFeaturesSection";
import FourthAccessAnywhereSection from "./FourthAccessAnywhereSection";
import FifthSuperChargeSection from "./FifthSuperChargeSection";
import SixthReferencesSection from "./SixthReferencesSection";
import SeventhFooterSection from "./SeventhFooterSection";

const Master = () => {
  
  const firstSectionInfo = {
    header: "A history of everything you copy",
    description: "Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.",
    imageUrl: "assets/images/logo.svg",
    imageUrlStyle: "mx-auto my-16",
  };

  const bottomSectionInfo = {
    header: "Clipboard for iOS and MacOS",
    description: "Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.",
    imageUrl: "",
    imageUrlStyle: "",
  };

  return (
    <>
      <section id="hero">
        <FirstHeroSection firstSectionInfo={firstSectionInfo} />
      </section>
      <section id="snippets">
        <SecondSnippetsSection />
      </section>
      <section id="features">
        <ThirdFeaturesSection />
      </section>
      <section id="access">
        <FourthAccessAnywhereSection />
      </section>
      <section id="supercharge">
        <FifthSuperChargeSection />
      </section>
      <section id="references">
        <SixthReferencesSection />
      </section>
      <section id="bottom">
        <FirstHeroSection firstSectionInfo={bottomSectionInfo} />
      </section>
      <section id="footer">
        <SeventhFooterSection/>
      </section>
    </>
  );
};

export default Master;
