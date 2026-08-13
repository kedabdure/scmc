import CtaSection from "./CtaSection";
import InnerPageGrid from "./InnerPageGrid";
import InnerPageHero from "./InnerPageHero";
import SiteFooter from "./SiteFooter";

type InnerMarketingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: Array<{ title: string; body: string }>;
};

export default function InnerMarketingPage({
  eyebrow,
  title,
  description,
  cards,
}: InnerMarketingPageProps) {
  return (
    <div className="min-h-screen bg-[#09090b]">
      <InnerPageHero eyebrow={eyebrow} title={title} description={description} />
      <InnerPageGrid items={cards} />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
