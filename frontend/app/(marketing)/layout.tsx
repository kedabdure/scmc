import Footer from "@/components/landing/Footer";
import NavigationHeader from "@/components/landing/NavigationHeader";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationHeader />
      {children}
      <Footer />
    </>
  );
}
