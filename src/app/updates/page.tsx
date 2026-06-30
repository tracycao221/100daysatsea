import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Updates`,
  description: `Update and event status for ${siteConfig.gameName}, including what needs official confirmation before guides and rankings change.`,
  alternates: { canonical: `${siteConfig.domain}/updates` },
  openGraph: {
    title: `${siteConfig.gameName} Updates`,
    description: `Update and event status for ${siteConfig.gameName}, including what needs official confirmation before guides and rankings change.`,
    url: `${siteConfig.domain}/updates`,
    images: ["/updates/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Updates`,
    description: `Update and event status for ${siteConfig.gameName}, including what needs official confirmation before guides and rankings change.`,
    images: ["/updates/opengraph-image"]
  }
};

const updateChecks = [
  {
    title: "Official Roblox page",
    status: "Primary check",
    body: "Use the Roblox game page first for title, creator, availability, and public description changes."
  },
  {
    title: "Codes and rewards",
    status: "Needs same-day check",
    body: "New updates often add or remove codes. Keep code claims separate until the reward and redemption panel are verified."
  },
  {
    title: "Resources and routes",
    status: "Needs gameplay evidence",
    body: "Only update wiki entities, route advice, or upgrade priorities after resource, island, enemy, or hazard names are confirmed."
  }
];

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />
      <PageIntro
        eyebrow="Update watch"
        title={`${siteConfig.gameName} Updates`}
        description="Track what changed, what still needs proof, and which pages should be refreshed after a new game update or event."
      />

      <p className="mt-4 text-sm font-semibold text-white/60">
        Last checked: June 30, 2026. Current status: the official Roblox game surface is still signaling an Ice Region update, class and companion support-page demand remains public, and no creator-owned patch-note board surfaced in this pass.
      </p>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Launch baseline"
          title="What to check after each update"
          copy="Use this page as the update checklist before changing codes, guide advice, wiki entities, or upgrade priorities."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {updateChecks.map((item) => (
            <article key={item.title} className="content-card">
              <span className="mini-label">{item.status}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <Link href="/updates/ice-region" className="content-card block">
          <span className="mini-label">Fresh topic</span>
          <h2 className="mt-3 text-xl font-bold text-white">Ice Region update status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Official Roblox naming and fresh video coverage are already clustering around an Ice Region update. Use the dedicated page for verified, reported, missing, and pending labels.
          </p>
        </Link>
      </section>

      <section className="mt-10 flex flex-wrap gap-3">
        <Link href="/codes" className="button-secondary">Check codes</Link>
        <Link href="/tier-list" className="button-secondary">Review priorities</Link>
        <Link href="/guides/classes" className="button-secondary">Class status</Link>
        <Link href="/wiki" className="button-secondary">Update wiki</Link>
        <Link href="/sources" className="button-secondary">Review sources</Link>
      </section>
    </main>
  );
}
