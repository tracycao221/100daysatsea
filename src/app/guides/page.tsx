import type { Metadata } from "next";
import Link from "next/link";
import { guideClusters, siteConfig } from "@/data/site";
import { seoGuides } from "@/data/seo-guides";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides`,
  description: `Beginner, progression, and advanced strategy guides for ${siteConfig.gameName}.`,
  alternates: { canonical: `${siteConfig.domain}/guides` }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title={`${siteConfig.gameName} Guides`}
        description="Use this hub for beginner help, farming routes, boss prep, event notes, and advanced strategy."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="New guide pages"
          title="Start with pages that match real player questions"
          copy="These lightweight pages target guide, tips, beginner, strategy, walkthrough, FAQ, and how-to-play searches without changing the core tools or ad setup."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {seoGuides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="content-card">
              <span className="mini-label">{guide.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Core guide paths"
          title="Use the right hub for the next decision"
          copy="Each support page links back to the homepage, the guide hub, codes, updates, and related guide pages."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guideClusters.map((guide) => (
            <Link key={`${guide.href}-${guide.title}`} href={guide.href} className="content-card">
              <span className="mini-label">{guide.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <Link href="/updates" className="content-card block">
          <span className="mini-label">Update watch</span>
          <h2 className="mt-3 text-xl font-bold text-white">Check updates before following old routes</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Patch changes can affect codes, resources, hazards, and upgrade priorities. Use the update checklist before trusting older guide advice.
          </p>
        </Link>
      </section>

      <section className="mt-10">
        <Link href="/updates/ice-region" className="content-card block">
          <span className="mini-label">New support page</span>
          <h2 className="mt-3 text-xl font-bold text-white">Ice Region update watch</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Follow this route when video titles and search demand are moving faster than official patch notes. It keeps update phrases live without pretending every feature is verified.
          </p>
        </Link>
      </section>
    </main>
  );
}
