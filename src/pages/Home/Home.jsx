
import Hero from "./sections/Hero";
import TrustSection from "./sections/TrustSection";
import BentoFeatures from "./sections/BentoFeatures";
import HowItWorks from "./sections/HowItWorks";
import ATSComparison from "./sections/ATSComparison";
import TemplateGallery from "./sections/TemplateGallery";
import Testimonials from "./sections/Testimonials";
import PricingPreview from "./sections/PricingPreview";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import CustomizationShowcase from "./sections/CustomizationShowcase";
import SmartFeaturesGrid from "./sections/SmartFeaturesGrid";
import RearrangeSectionsShowcase from "./sections/RearrangeSectionsShowcase";
import ATSCheckerShowcase from "./sections/ATSCheckerShowcase";
import LayoutCustomization from "./sections/layoutCustomization";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <BentoFeatures />
      {/* <TemplateGallery /> */}
      
      <ATSCheckerShowcase />
      <RearrangeSectionsShowcase />
      <LayoutCustomization />

      {/* <SmartFeaturesGrid /> */}
      {/* <CustomizationShowcase /> */}

      
      <Testimonials />
      <HowItWorks />
      {/* <ATSComparison /> */}
      {/* <PricingPreview /> */}
      <FAQ />
      <FinalCTA />


    </>
  );
};

export default Home;
