import InnerMarketingPage from "@/components/landing/InnerMarketingPage";

export default function CustomersPage() {
  return (
    <InnerMarketingPage
      eyebrow="Customers"
      title="Trusted by teams from high-growth startups to enterprise finance"
      description="NoorFlow supports finance leaders who need speed, precision, and compliance at scale."
      cards={[
        {
          title: "Professional Services",
          body: "Automate client billing and expense allocations while improving margin visibility.",
        },
        {
          title: "Financial Institutions",
          body: "Accelerate reconciliations and approvals across complex operational structures.",
        },
        {
          title: "Portfolio Operators",
          body: "Deploy standards across multiple entities while keeping local workflows flexible.",
        },
      ]}
    />
  );
}
