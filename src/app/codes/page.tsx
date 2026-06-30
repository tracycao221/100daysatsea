import type { Metadata } from "next";
import Link from "next/link";
import { activeCodes, codeStatusTerms, faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { CopyButton } from "@/components/ui/CopyButton";

function getCurrentMonthYear() {
  return "June 2026";
}

const codes = activeCodes;
const trackedTerms = codeStatusTerms;

function buildFaqSchema() {
  return faqs.codes;
}

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes (${getCurrentMonthYear()})`,
  description: `Active ${siteConfig.gameName} codes, claim-state labels, redemption steps, and source notes for reported or disputed terms.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes (${getCurrentMonthYear()})`,
    description: `Active ${siteConfig.gameName} codes, claim-state labels, redemption steps, and source notes for reported or disputed terms.`,
    url: `${siteConfig.domain}/codes`,
    images: ["/codes/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes (${getCurrentMonthYear()})`,
    description: `Active ${siteConfig.gameName} codes, claim-state labels, redemption steps, and source notes for reported or disputed terms.`,
    images: ["/codes/opengraph-image"]
  }
};

export default function CodesPage() {
  const faqItems = buildFaqSchema();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={faqItems} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Freshness-sensitive"
        title={`${siteConfig.gameName} Codes (${getCurrentMonthYear()})`}
        description="Use this page for verified codes, reported tracker terms, disputed reward strings, and safe redemption steps. Hot code intent belongs here even when part of the answer is that the public sources still conflict."
      />

      <p className="mt-4 text-sm font-semibold text-white/60">Last checked: June 30, 2026. Current status: the official Roblox event surface still points to CODE, while the current public code packet splits the same pearls claim across 20Pearls, 20PEARLS, and 20 Pearls. A tracker-only expired-name cluster also reappeared for 100DAYS, STRANDEDDEVS, and SEAADVENTURE, but this pass did not find broader public confirmation for those names.</p>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active list"
          title="Active Codes"
          copy="This table only keeps codes whose redeem string the current source packet can state clearly. Public demand is handled with claim-state labels, not by padding the active list or pretending reward wording is the same thing as the code field."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {codes.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/70">{code.reward}</p>
              <p className="mt-2 text-sm text-white/45">Added or checked: {code.addedDate}</p>
              {code.sourceLabel ? <p className="mt-2 text-sm text-white/55">Source: {code.sourceLabel}</p> : null}
              {code.note ? <p className="mt-2 text-sm text-white/60">{code.note}</p> : null}
              <div className="mt-4">
                <CopyButton value={code.code} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Exact-name watch"
            title="Reported, disputed, and tracker-only expired exact-name terms"
            copy="These terms have public search surface area, official wording overlap, or current tracker-only expired coverage, but the site should label exactly what is known before moving any of them into the active table."
          />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {trackedTerms.map((code) => (
            <article key={code.code} className="content-card opacity-80">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-xl font-bold text-white/75">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-sm text-white/60">{code.reward}</p>
              {code.sourceLabel ? <p className="mt-2 text-sm text-white/45">Source: {code.sourceLabel}</p> : null}
              {code.note ? <p className="mt-2 text-sm text-white/55">{code.note}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <article className="content-card">
          <SectionHeader
            eyebrow="Conflict cleanup"
            title="CODE versus 20 Pearls versus 20Pearls versus 20PEARLS"
            copy="The official Roblox event surface still puts CODE and 20Pearls together, while fresher public code pages now spread the same claim across 20Pearls, 20PEARLS, and the spaced 20 Pearls reward wording. Keep all three exact-name variants indexable here, but do not promote any of them into the active code table without a direct in-game or official instruction that shows the code-box input."
          />
        </article>
      </section>

      <section className="mt-10">
        <article className="content-card">
          <SectionHeader
            eyebrow="Expired terms"
            title="Tracker-only expired names are back in the source packet"
            copy="SuperCheats currently lists 100DAYS, STRANDEDDEVS, and SEAADVENTURE as expired names, so expired exact-name intent belongs on this page again. Keep those terms clearly labeled as tracker-only expired reports until a wider public packet or direct first-party proof appears."
          />
        </article>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Why these codes matter"
            title="Use your rewards well"
            copy="For a survival game, even small rewards matter most when they help with supplies, early tools, boat or base upgrades, and safer routes. Do not spend limited rewards on an unverified priority."
          />
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Current checks"
            title="What still needs proof"
            copy="The June 30 collection still needs a live in-game re-check for whether the code box wants CODE, 20Pearls, or 20PEARLS, whether Pocket Tactics is right that no codes are live yet, and whether any source beyond SuperCheats repeats 100DAYS, STRANDEDDEVS, or SEAADVENTURE as expired names."
          />
        </article>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to redeem codes"
            copy="Use the official event instructions first, then fall back to the broader UI search if the code box moves in a later build."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open the game from the official Roblox page.</li>
            <li>2. Join the lobby and look for the green Submit button mentioned on the Roblox event page.</li>
            <li>3. If that button is gone, finish any tutorial gate and then check the Codes, Rewards, Shop, or Settings panel.</li>
            <li>4. Paste the code exactly, then claim the reward.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Verification"
            title="Code freshness policy"
            copy="Every code term here should show a checked date, source role, and contradiction note when trackers disagree. Never hide uncertainty."
          />
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Sources used"
            title="June 30 source packet"
            copy="Official Roblox [CODE] event coverage, Pro Game Guides, TechWiser, Destructoid, Pocket Tactics, GameRant, Player.One, SuperCheats, Reddit, and YouTube exact-name results that repeat or reformat the same code terms."
          />
        </article>
      </section>

      <section className="mt-10">
        <Link href="/updates/ice-region" className="content-card block">
          <span className="mini-label">Update overlap</span>
          <h2 className="mt-3 text-xl font-bold text-white">Ice Region update status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            The current official event copy says the live code expires with the next update. Check the Ice Region status page before assuming the same reward or redemption flow survives the next build.
          </p>
        </Link>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Related pages"
          title="Plan before spending rewards"
          copy="Check upgrade priorities, survival guides, source status, and wiki notes before using limited items."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/tier-list" className="button-secondary">Upgrade priority</Link>
          <Link href="/guides" className="button-secondary">Beginner guide</Link>
          <Link href="/wiki" className="button-secondary">Wiki hub</Link>
          <Link href="/updates/ice-region" className="button-secondary">Ice Region watch</Link>
          <Link href="/trello" className="button-secondary">Source status</Link>
          <Link href="/sources" className="button-secondary">Sources</Link>
        </div>
      </section>
    </main>
  );
}
