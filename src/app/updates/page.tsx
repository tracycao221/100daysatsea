import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Updates`,
  description: `Update and event status for ${siteConfig.gameName}, including what needs official confirmation before guides and rankings change.`,
  alternates: { canonical: `${siteConfig.domain}/updates` }
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

      <section className="mt-10 flex flex-wrap gap-3">
        <Link href="/codes" className="button-secondary">Check codes</Link>
        <Link href="/tier-list" className="button-secondary">Review priorities</Link>
        <Link href="/wiki" className="button-secondary">Update wiki</Link>
        <Link href="/sources" className="button-secondary">Review sources</Link>
      </section>
    </main>
  );
}
