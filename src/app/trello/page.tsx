import type { Metadata } from "next";
import Link from "next/link";
import { gameConfig } from "@/data/game.config";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
  description: `Official-link status for ${siteConfig.gameName} Trello, Discord, wiki, Roblox updates, codes, and community sources.`,
  alternates: { canonical: `${siteConfig.domain}/trello` },
  openGraph: {
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
    description: `Official-link status for ${siteConfig.gameName} Trello, Discord, wiki, Roblox updates, codes, and community sources.`,
    url: `${siteConfig.domain}/trello`,
    images: ["/trello/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
    description: `Official-link status for ${siteConfig.gameName} Trello, Discord, wiki, Roblox updates, codes, and community sources.`,
    images: ["/trello/opengraph-image"]
  }
};

const statusRows = [
  {
    label: "Official Roblox page",
    href: gameConfig.dataSources.officialGameUrl,
    status: "Verified",
    note: "Use this for the game title, creator, Roblox availability, and any public update or event text."
  },
  {
    label: "Discord",
    href: gameConfig.dataSources.discord ?? "#",
    status: gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? "Verified" : "Reported",
    note: "Support-link articles and search results keep surfacing Discord intent, often pointing players back to the game's Roblox Links or Social section. This run still did not verify a direct public invite URL."
  },
  {
    label: "Roblox group",
    href: gameConfig.dataSources.robloxGroup ?? "#",
    status: gameConfig.dataSources.robloxGroup && gameConfig.dataSources.robloxGroup !== "#" ? "Verified" : "Reported",
    note: "The public Stranded Devs Roblox group URL surfaced directly on Roblox and still matches the creator identity tied to the live game shell."
  },
  {
    label: "Trello",
    href: gameConfig.dataSources.trello ?? "#",
    status: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? "Verified" : "Missing",
    note: "Trello intent is hot enough to keep this route live, but no official public board was surfaced by the June 29, 2026 multi-platform collection pass."
  },
  {
    label: "Wiki",
    href: "/wiki",
    status: "Fan hub",
    note: "Use this site wiki hub for source-backed entities, mechanics, rewards, and guide links. No separate official wiki URL was verified in the same pass."
  }
];

export default function TrelloStatusPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Trello, Discord & Wiki", href: "/trello" }]} />
      <Breadcrumbs items={[{ label: "Trello, Discord & Wiki", href: "/trello" }]} />
      <PageIntro
        eyebrow="Community status"
        title={`${siteConfig.gameName} Trello, Discord & Wiki Status`}
        description={`Use this page to check which ${siteConfig.gameName} community sources are verified, which are still missing, and where players should confirm codes, updates, and tier-list changes.`}
      />

      <p className="mt-4 text-sm font-semibold text-white/60">Last checked: June 30, 2026. Current status: the official Roblox page and the public Stranded Devs Roblox group are verified, Discord intent is still publicly reported, and no direct public Discord invite, official Trello board, or separate official wiki link surfaced in the latest collection pass.</p>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Official links"
          title="Source status"
          copy="This route exists because players keep searching for Trello, Discord, and wiki terms even before official boards appear. Missing is a real status, not a page failure."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {statusRows.map((item) => {
            const isInternal = item.href.startsWith("/");
            const hasLink = item.href !== "#";
            const content = (
              <>
                <span className="mini-label">{item.status}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.note}</p>
              </>
            );

            if (!hasLink) {
              return (
                <article key={item.label} className="content-card">
                  {content}
                </article>
              );
            }

            return isInternal ? (
              <Link key={item.label} href={item.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Collection</span>
          <h2 className="mt-3 text-xl font-bold text-white">What was searched</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Official Roblox game and group shells, Google result titles for Trello and Discord queries, Rolimon&apos;s group context, public community references, and existing guide-site status pages.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Claim-state rule</span>
          <h2 className="mt-3 text-xl font-bold text-white">How this page talks</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Verified means the source URL is public and checked. Reported means the path is repeatedly surfaced in public search or guide coverage but the direct creator-owned destination still needs confirmation. Missing means the search intent exists but no official link surfaced.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Next action</span>
          <h2 className="mt-3 text-xl font-bold text-white">Where to check next</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the Roblox page first, then the codes page for live reward claims and the updates page for anything that could have changed after the next build.</p>
        </article>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Freshness</span>
          <h2 className="mt-3 text-xl font-bold text-white">Codes verification</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Check active and expired rewards against official update surfaces before publishing code claims.</p>
        </Link>
        <Link href="/tier-list" className="content-card">
          <span className="mini-label">Meta</span>
          <h2 className="mt-3 text-xl font-bold text-white">Tier-list sources</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use Discord, YouTube, update notes, and wiki data as signals, then label ranking confidence clearly.</p>
        </Link>
        <Link href="/sources" className="content-card">
          <span className="mini-label">Editorial</span>
          <h2 className="mt-3 text-xl font-bold text-white">Source checklist</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Keep official, community, video, Reddit, and guide-site evidence separated so updates stay auditable.</p>
        </Link>
        <Link href="/updates/ice-region" className="content-card">
          <span className="mini-label">Update watch</span>
          <h2 className="mt-3 text-xl font-bold text-white">Ice Region status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the active update watch page when source-status questions overlap with the current Ice Region and code-expiry wave.</p>
        </Link>
      </section>
    </main>
  );
}
