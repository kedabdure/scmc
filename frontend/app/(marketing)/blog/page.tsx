import InnerMarketingPage from "@/components/landing/InnerMarketingPage";

export default function BlogPage() {
  return (
    <InnerMarketingPage
      eyebrow="Blog"
      title="Insights on AI-powered finance operations"
      description="Explore implementation guides, customer stories, and best practices for autonomous workflows."
      cards={[
        {
          title: "Implementation Playbooks",
          body: "How to launch and govern autonomous workflows in weeks, not quarters.",
        },
        {
          title: "Customer Impact Stories",
          body: "Real transformation outcomes from teams reducing cycle times and costs.",
        },
        {
          title: "Compliance & Control",
          body: "Practical guidance for secure, auditable AI operations in finance.",
        },
      ]}
    />
  );
}
