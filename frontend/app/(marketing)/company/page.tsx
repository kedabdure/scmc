import InnerMarketingPage from "@/components/landing/InnerMarketingPage";

export default function CompanyPage() {
  return (
    <InnerMarketingPage
      eyebrow="Company"
      title="Building the operating system for finance execution"
      description="NoorFlow brings together AI, controls, and financial expertise to modernize mission-critical workflows."
      cards={[
        {
          title: "Mission",
          body: "Free finance teams from repetitive work so they can focus on strategic decisions.",
        },
        {
          title: "Principles",
          body: "Accuracy, compliance, transparency, and human oversight are embedded by design.",
        },
        {
          title: "Team",
          body: "Built by operators, engineers, and finance leaders with real-world execution experience.",
        },
      ]}
    />
  );
}
