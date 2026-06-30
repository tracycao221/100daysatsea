import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

const faqItems = [
  {
    q: "Is the 100 Days at Sea Ice Region update official?",
    a: "The official Roblox game surface currently uses an ice-themed title marker, which verifies active update intent. Specific Ice Region features still need claim-state labels unless an official source spells them out."
  },
  {
    q: "What Ice Region details are still reported instead of verified?",
    a: "Public video and guide coverage currently repeats terms such as Ice Region, save penguins, secret Yeti boss, and Ice Mage class. Those terms are useful search demand signals, but they should stay reported until an official or direct gameplay source confirms the exact feature wording."
  },
  {
    q: "Why publish an Ice Region page before full patch notes exist?",
    a: "Players are already searching for the update. A status page can answer what is verified, what is only reported, and what pages might change next without inventing patch notes, rewards, or mechanics."
  }
];

const verifiedSignals = [
  {
    label: "Verified",
    title: "Official Roblox update intent is live",
    body: "The official Roblox game surface currently shows an ice-themed title marker, which confirms that an Ice Region or ice update angle is active enough to drive search intent on June 29, 2026."
  },
  {
    label: "Verified",
    title: "Codes may shift with the next update",
    body: "The official Roblox event page for the current code search cluster says the code expires with the next update, so code and update intent now overlap instead of living on separate islands."
  }
];

const reportedSignals = [
  {
    label: "Reported",
    title: "Ice Region is a repeated video phrase",
    body: "Fresh YouTube search results repeat Ice Region as the update name, which is enough to support a dedicated status route even before official patch notes are public."
  },
  {
    label: "Reported",
    title: "Save penguins and secret Yeti boss are hot terms",
    body: "Recent video titles surface save penguins and secret Yeti boss as player-facing update phrases. Keep them labeled reported until a direct in-game or official source confirms the exact wording."
  },
  {
    label: "Reported",
    title: "Ice Mage class is part of the same update cluster",
    body: "Recent public videos and guide coverage connect Ice Mage class interest to the Ice Region update wave, but the exact unlock method still needs a direct source check."
  }
];

const missingSignals = [
  {
    label: "Missing",
    title: "No public official patch notes page surfaced in this pass",
    body: "This run did not find a creator-owned patch note page, Trello card set, Discord announcement link, or public changelog URL that listed the full update details."
  },
  {
    label: "Pending",
    title: "Entity names and exact mechanics still need gameplay proof",
    body: "Do not publish drop rates, stats, class values, enemy numbers, or route formulas until a direct source or checked gameplay pass confirms them."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Ice Region Update (June 2026)`,
  description: `Track the ${siteConfig.gameName} Ice Region update with verified Roblox signals, reported YouTube terms, and clear claim-state labels.`,
  alternates: { canonical: `${siteConfig.domain}/updates/ice-region` },
  openGraph: {
    title: `${siteConfig.gameName} Ice Region Update (June 2026)`,
    description: `Track the ${siteConfig.gameName} Ice Region update with verified Roblox signals, reported YouTube terms, and clear claim-state labels.`,
    url: `${siteConfig.domain}/updates/ice-region`,
    images: ["/updates/ice-region/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Ice Region Update (June 2026)`,
    description: `Track the ${siteConfig.gameName} Ice Region update with verified Roblox signals, reported YouTube terms, and clear claim-state labels.`,
    images: ["/updates/ice-region/opengraph-image"]
  }
};

export default function IceRegionUpdatePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Updates", href: "/updates" },
          { name: "Ice Region Update", href: "/updates/ice-region" }
        ]}
      />
      <FaqJsonLd items={faqItems} />
      <Breadcrumbs
        items={[
          { label: "Updates", href: "/updates" },
          { label: "Ice Region", href: "/updates/ice-region" }
        ]}
      />

      <PageIntro
        eyebrow="Update status"
        title={`${siteConfig.gameName} Ice Region Update`}
        description="This page exists because public search, video, and competitor surfaces are already clustering around an Ice Region update. It separates what the official Roblox surface verifies from what videos and guide coverage only report."
      />

      <p className="mt-4 text-sm font-semibold text-white/60">
        Last checked: June 30, 2026. Current status: official Roblox naming still confirms active ice-update intent, while Ice Region feature details remain a mix of reported and missing-source claims.
      </p>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Verified now"
          title="What this run can state clearly"
          copy="These points come from direct official or already-published site sources and can be stated without guessing at patch notes."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {verifiedSignals.map((item) => (
            <article key={item.title} className="content-card">
              <span className="status-pill">{item.label}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Reported cluster"
          title="What public coverage keeps repeating"
          copy="These phrases are strong enough to shape the route and internal links, but not strong enough to be rewritten as official mechanics."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reportedSignals.map((item) => (
            <article key={item.title} className="content-card">
              <span className="status-pill">{item.label}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Still missing"
          title="What should stay out of final guide copy"
          copy="First-mover coverage is useful only when it is explicit about what still lacks a direct source."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {missingSignals.map((item) => (
            <article key={item.title} className="content-card">
              <span className="status-pill">{item.label}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Source packet</span>
          <h2 className="mt-3 text-xl font-bold text-white">June 29 collection</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Official Roblox game title surface, official Roblox event page, fresh YouTube update titles, Sportskeeda class coverage, and the current competitor route family were reviewed before the route decision.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Route decision</span>
          <h2 className="mt-3 text-xl font-bold text-white">Why this is a page, not a hold</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Demand is public and cross-platform, the route fits the existing update hub, and the page can answer the query honestly without inventing codes, stats, or patch-note lines.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Next updates</span>
          <h2 className="mt-3 text-xl font-bold text-white">What should change next</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Move exact feature names into guide or wiki pages only after a direct gameplay check, creator-owned board, or official post confirms them.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Related pages"
          title="Check the pages this update can change"
          copy="Update-sensitive intent should flow back into codes, guides, wiki coverage, and source status instead of living as a dead-end route."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/codes" className="button-secondary">Codes update watch</Link>
          <Link href="/guides/classes" className="button-secondary">Class status</Link>
          <Link href="/guides" className="button-secondary">Guides hub</Link>
          <Link href="/wiki" className="button-secondary">Wiki hub</Link>
          <Link href="/trello" className="button-secondary">Source status</Link>
          <Link href="/updates" className="button-secondary">All updates</Link>
        </div>
      </section>
    </main>
  );
}
