import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

const faqItems = [
  {
    q: "Is 20Pearls the active 100 Days at Sea code?",
    a: "20Pearls is a hot exact-name query, but this run still treats it as disputed. The official Roblox event result pairs CODE with 20Pearls wording, while public guide pages, Reddit comments, and expired-angle pages still disagree on whether 20Pearls is the literal redeem string."
  },
  {
    q: "Why does this page exist if the answer is still disputed?",
    a: "Players are searching for the exact term 20Pearls across search, YouTube, and Reddit. A dedicated status page can satisfy that intent with claim-state labels instead of forcing the term to stay buried inside a broader codes summary."
  },
  {
    q: "What would move 20Pearls into the active table?",
    a: "A direct in-game capture, creator-owned instruction, or another first-party source that clearly shows 20Pearls as the literal code-box input would move it from disputed to verified."
  }
];

const stateCards = [
  {
    label: "Verified",
    title: "Official Roblox surfaces pair CODE with 20Pearls wording",
    body: "The official Roblox event and game result surfaces keep CODE live while also exposing 20Pearls wording around the same pearls reward cluster. That verifies the overlap, not the exact input field."
  },
  {
    label: "Reported",
    title: "Guide pages now push 20Pearls as the exact-name query",
    body: "Current Pro Game Guides, Beebom, GameRant, Destructoid, Sportskeeda, and TechWiser result surfaces keep 20Pearls live enough to make it its own search intent instead of only a reward note."
  },
  {
    label: "Reported",
    title: "YouTube and Reddit keep the term moving",
    body: "Current YouTube result surfaces still package 20Pearls inside codes updates, while Reddit result surfaces repeat CODE as the answer and keep the disagreement visible for players checking both channels."
  },
  {
    label: "Disputed",
    title: "The exact redeem string is still unresolved",
    body: "The current packet still splits between CODE, 20Pearls, and 20PEARLS style claims. No first-party in-game capture in this pass settles which exact text belongs in the code box."
  },
  {
    label: "Expired",
    title: "PCGamesN preserves the expired-shortly-after angle",
    body: "PCGamesN still frames the cluster around a code that expired shortly after launch, which keeps the expired interpretation part of the active public packet."
  },
  {
    label: "Missing",
    title: "No creator-owned patch note or code-box screenshot surfaced",
    body: "This run did not find a public creator-owned board, Discord announcement image, or in-game capture that shows the literal code-box input for the current pearls reward claim."
  }
];

export const metadata: Metadata = {
  title: `20Pearls Code Status (${siteConfig.gameName})`,
  description: `Track whether 20Pearls is a live ${siteConfig.gameName} code, reward phrase, or disputed exact-name query with verified, reported, expired, and missing-source labels.`,
  alternates: { canonical: `${siteConfig.domain}/codes/20pearls` },
  openGraph: {
    title: `20Pearls Code Status (${siteConfig.gameName})`,
    description: `Track whether 20Pearls is a live ${siteConfig.gameName} code, reward phrase, or disputed exact-name query.`,
    url: `${siteConfig.domain}/codes/20pearls`,
    type: "article",
    images: [{ url: "/codes/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `20Pearls Code Status (${siteConfig.gameName})`,
    description: `Track whether 20Pearls is a live ${siteConfig.gameName} code, reward phrase, or disputed exact-name query.`,
    images: ["/codes/opengraph-image"]
  }
};

export default function TwentyPearlsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Codes", href: "/codes" },
          { name: "20Pearls", href: "/codes/20pearls" }
        ]}
      />
      <FaqJsonLd items={faqItems} />
      <Breadcrumbs
        items={[
          { label: "Codes", href: "/codes" },
          { label: "20Pearls", href: "/codes/20pearls" }
        ]}
      />

      <PageIntro
        eyebrow="Exact-name watch"
        title={`20Pearls Code Status for ${siteConfig.gameName}`}
        description="This page exists because 20Pearls now has enough public search, video, guide, and community surface area to deserve its own status route. It separates reward wording from redeem-string claims and keeps the contradiction visible."
      />

      <p className="mt-4 text-sm font-semibold text-white/60">
        Last checked: July 3, 2026. Current status: official Roblox still pairs CODE with 20Pearls wording, current guide pages keep 20Pearls live as an exact-name query, Reddit still repeats CODE, and PCGamesN still preserves the expired-shortly-after interpretation.
      </p>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Claim states"
          title="What the current public packet can and cannot say"
          copy="This page uses claim-state labels instead of forcing 20Pearls into a yes-or-no answer that the sources still do not support cleanly."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {stateCards.map((item) => (
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
          <span className="mini-label">Known now</span>
          <h2 className="mt-3 text-xl font-bold text-white">Why 20Pearls is indexable</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            The exact term now repeats across official Roblox result wording, major guide-site result surfaces, current YouTube coverage, and Reddit discussion, so the site can answer the query better than a scattered SERP.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Still disputed</span>
          <h2 className="mt-3 text-xl font-bold text-white">What the page will not invent</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            This route does not invent a reward total, expiry date, or exact redemption UI. It only states that 20Pearls belongs to the current code-status conflict and explains why.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Source packet</span>
          <h2 className="mt-3 text-xl font-bold text-white">July 3 collection</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Official Roblox event and game results, Pro Game Guides, Beebom, GameRant, Destructoid, Sportskeeda, TechWiser, PCGamesN, current YouTube result surfaces, and current Reddit result surfaces were checked before this route was published.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Next checks"
          title="What would change this page next"
          copy="The next meaningful update is not another generic code roundup. It is a direct source that settles the literal input field or makes the exact-name term fully expired."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="content-card">
            <span className="mini-label">Promote to verified</span>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Promote 20Pearls into the active table only after a creator-owned or in-game source clearly shows 20Pearls as the code-box input.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Move to expired</span>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Move 20Pearls to expired only after the public packet stops splitting and a first-party or broad multi-source shift settles the term on the expired side.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Related pages"
          title="Use the parent hub and adjacent update pages"
          copy="This route should send players back into the main codes, update, and source-status paths instead of trapping the exact-name query on a dead-end page."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/codes" className="button-primary">Main codes page</Link>
          <Link href="/updates/ice-region" className="button-secondary">Ice Region update watch</Link>
          <Link href="/trello" className="button-secondary">Trello and Discord status</Link>
          <Link href="/sources" className="button-secondary">Source checklist</Link>
        </div>
      </section>
    </main>
  );
}
