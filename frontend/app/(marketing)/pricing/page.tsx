import InnerMarketingPage from "@/components/landing/InnerMarketingPage";

export default function PricingPage() {
  return (
    <InnerMarketingPage
      eyebrow="Pricing"
      title="Flexible plans built for growth"
      description="Start with one workflow and scale with usage, controls, and enterprise-grade governance."
      cards={[
        {
          title: "Starter",
          body: "For lean teams automating one critical workflow with standard integrations.",
        },
        {
          title: "Growth",
          body: "Adds advanced controls, multi-workflow automation, and richer operational analytics.",
        },
        {
          title: "Enterprise",
          body: "Custom governance, dedicated support, and architecture for complex org structures.",
        },
      ]}
    />
  );
}
