import InnerMarketingPage from "@/components/landing/InnerMarketingPage";

export default function ProductPage() {
  return (
    <InnerMarketingPage
      eyebrow="Product"
      title="Autonomous workflows for modern finance teams"
      description="From invoice-to-cash to close, NoorFlow coordinates finance operations with transparent AI execution."
      cards={[
        {
          title: "Workflow Agents",
          body: "Agents run multi-step finance processes while escalating exceptions to humans with context.",
        },
        {
          title: "Controls Layer",
          body: "Policy-aware approvals, role-based review, and end-to-end auditability on every action.",
        },
        {
          title: "System Integrations",
          body: "Connect ERP, banking rails, and internal tools without replacing your current stack.",
        },
      ]}
    />
  );
}
