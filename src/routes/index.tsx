import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { DifferentialsSection } from "@/components/differentials-section";
import { BenefitsSection } from "@/components/benefits-section";
import { TargetAudienceSection } from "@/components/target-audience-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "MUSA SELECT ACADEMY | Aprenda a Vender Pela Internet" },
      {
        name: "description",
        content:
          "Treinamento completo de marketing digital para iniciantes. Aprenda a vender produtos online com anúncios no Facebook e Instagram. Método passo a passo com baixo investimento.",
      },
      {
        name: "keywords",
        content:
          "marketing digital, ganhar dinheiro online, curso de tráfego pago, Facebook Ads, Instagram Ads, trabalhar pela internet, renda extra online, afiliados",
      },
      { property: "og:title", content: "MUSA SELECT ACADEMY | Aprenda a Vender Pela Internet" },
      {
        property: "og:description",
        content:
          "Treinamento completo de marketing digital para iniciantes. Aprenda a vender produtos online com anúncios no Facebook e Instagram.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/icon.svg" },
      { rel: "apple-touch-icon", href: "/apple-icon.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
});

function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <DifferentialsSection />
      <BenefitsSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
