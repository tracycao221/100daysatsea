import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, wikiCards } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki`,
  description: `${siteConfig.gameName} wiki hub for items, maps, systems, builds, rewards, and Roblox game entities.`,
  alternates: { canonical: `${siteConfig.domain}/wiki` }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Wiki hub"
        title={`${siteConfig.gameName} Wiki`}
        description="Use this hub for game systems, items, maps, rewards, builds, and other details that help players decide what to do next."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Game topics"
          title="Choose the wiki topic you need"
          copy="Start with the topics that affect your next upgrade, route decision, reward check, update interpretation, or source-status question."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {wikiCards.map((card) => (
            <Link key={card.title} href={card.href} className="content-card">
              <span className="mini-label">{card.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Related hubs"
          title="Connect wiki topics back to current checks"
          copy="Use these pages together before treating a reward, update phrase, location name, or route claim as settled."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="button-secondary">Home hub</Link>
          <Link href="/codes" className="button-primary">Codes status</Link>
          <Link href="/guides" className="button-secondary">Guides hub</Link>
          <Link href="/updates" className="button-secondary">Update watch</Link>
          <Link href="/sources" className="button-secondary">Source checklist</Link>
        </div>
      </section>
    </main>
  );
}
