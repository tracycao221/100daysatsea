import type { Metadata } from "next";
import Link from "next/link";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { CopyButton } from "@/components/ui/CopyButton";

function getCurrentMonthYear() {
  return "June 2026";
}

const codes = activeCodes;
const expiredCodes = [
  { code: "SEA100", reward: "Reported by trackers, not verified on this site", status: "Unverified" },
  { code: "SURVIVE", reward: "Reported by trackers, not verified on this site", status: "Unverified" }
];

function buildFaqSchema() {
  return faqs.codes;
}

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes (${getCurrentMonthYear()})`,
  description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes (${getCurrentMonthYear()})`,
    description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
    url: `${siteConfig.domain}/codes`,
    images: ["/codes/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes (${getCurrentMonthYear()})`,
    description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
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
        description="Use this page for current code checks, disputed rewards, and safe redemption steps. No code here should be treated as active until it is checked against the live game or a current trusted source."
      />

      <p className="mt-4 text-sm font-semibold text-white/60">Last verified: 2026-06-28. Current status: code panel and rewards still need a live in-game check.</p>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active list"
          title="Active Codes"
          copy="Starter code entries stay marked Needs check until a current source or live test confirms the reward."
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
              <div className="mt-4">
                <CopyButton value={code.code} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Expired and disputed"
          title="Expired Codes"
          copy="These entries are kept separate from the active list because they are unverified, disputed, or likely expired."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {expiredCodes.map((code) => (
            <article key={code.code} className="content-card opacity-80">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-xl font-bold text-white/55 line-through">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-sm text-white/60">{code.reward}</p>
            </article>
          ))}
        </div>
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
            eyebrow="Next checks"
            title="What still needs proof"
            copy="The launch pass still needs the exact code panel location, current active code list, rewards, and whether any code requires group membership or tutorial completion."
          />
        </article>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to redeem codes"
            copy="Update these steps after checking the live in-game UI. Roblox code flows often move between shop, settings, menu, and event panels."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open the game from the official Roblox page.</li>
            <li>2. Finish any tutorial gate that hides menus.</li>
            <li>3. Find the Codes, Rewards, Shop, or Settings panel.</li>
            <li>4. Paste the code exactly, then claim the reward.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Verification"
            title="Code freshness policy"
            copy="Codes should show the date checked, source type, and conflict notes when trackers disagree. Never hide uncertainty."
          />
        </article>
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
          <Link href="/trello" className="button-secondary">Source status</Link>
          <Link href="/sources" className="button-secondary">Sources</Link>
        </div>
      </section>
    </main>
  );
}
