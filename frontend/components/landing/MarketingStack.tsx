import CtaSection from "./CtaSection";
import FaqSection from "./FaqSection";
import FeatureCards from "./FeatureCards";
import IndustrySection from "./IndustrySection";
import MetricsBar from "./MetricsBar";
import SiteFooter from "./SiteFooter";
import TestimonialsSection from "./TestimonialsSection";
import WorkflowSection from "./WorkflowSection";

export default function MarketingStack() {
  return (
    <>
      <MetricsBar />
      <WorkflowSection />
      <FeatureCards />
      <IndustrySection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </>
  );
}
