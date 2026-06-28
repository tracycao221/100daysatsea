import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Survival Planner`,
  description: `Use the ${siteConfig.gameName} survival planner to plan resources, safe upgrades, route risk, and progression decisions.`,
  alternates: { canonical: `${siteConfig.domain}/calculator` },
  openGraph: {
    title: `${siteConfig.gameName} Survival Planner`,
    description: `Use the ${siteConfig.gameName} survival planner to plan resources, safe upgrades, route risk, and progression decisions.`,
    url: `${siteConfig.domain}/calculator`,
    images: ["/calculator/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Survival Planner`,
    description: `Use the ${siteConfig.gameName} survival planner to plan resources, safe upgrades, route risk, and progression decisions.`,
    images: ["/calculator/opengraph-image"]
  }
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Calculator", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Primary tool"
        title={`${siteConfig.gameName} Survival Planner`}
        description="Use this starter planner for resource focus, safer upgrades, route risk, and next-step choices. Replace the heuristic with verified formulas once research confirms costs and mechanics."
      />
      <section className="mt-10">
        <CalculatorTool />
      </section>
    </main>
  );
}
