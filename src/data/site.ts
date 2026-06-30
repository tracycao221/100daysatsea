import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with codes, upgrade priorities, Trello and Discord status, survival planning, guides, and source-backed Roblox sea survival help.`,
  valueProposition: `Track ${gameConfig.name} codes, compare safe survival priorities, and plan what to gather or upgrade before your next trip at sea.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-06-30",
  freshnessLabel: "codes exact-name, expired-name, and source-status checks refreshed on June 30, 2026",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} calculator`,
    "Roblox codes",
    "Roblox tier list"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Active Codes", href: "/codes", description: "Latest known rewards and redemption steps." },
        { label: "Sources", href: "/sources", description: "Where code and update claims should be checked." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Upgrade Priority", href: "/tier-list", description: "Best current survival priorities and why they matter." },
        { label: "Survival Planner", href: "/calculator", description: "Decision helper for resources, upgrades, and risk." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Entity pages for resources, islands, tools, hazards, and upgrades." },
        { label: "Guides", href: "/guides", description: "Beginner, resource, boat upgrade, and survival paths." },
        { label: "Updates", href: "/updates", description: "Update and event checks before changing codes or guides." },
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and wiki status." }
      ]
    },
    {
      label: "About",
      href: "/disclosure",
      items: [
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and source boundaries." },
        { label: "Contact", href: "/contact", description: "Corrections and editorial contact path." },
        { label: "Privacy", href: "/privacy", description: "Privacy and ad disclosure." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Get codes" },
  { href: "/tier-list", label: "View tier list" },
  { href: "/trello", label: "Check sources" },
  { href: "/calculator", label: "Use calculator" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Code status", value: "1 official + 5 watch terms", note: "Official Roblox still surfaces CODE while current public code pages split on 20Pearls, 20PEARLS, and a tracker-only expired-name cluster on June 30" },
  { label: "Core pages", value: "12", note: "Codes, tier list, Trello, tools, guides, wiki, and new support pages" },
  { label: "Source notes", value: "Clear", note: "Verified, reported, disputed, and missing labels" },
  { label: "Source model", value: "Clear", note: "Official and community links split" }
];

export const activeCodes: GameCode[] = [
  {
    code: "CODE",
    reward: "The official Roblox event surface still points to [CODE], while the current public code packet disagrees on whether players should enter CODE, 20Pearls, or 20PEARLS for the same pearls reward.",
    status: "Verified",
    addedDate: "Checked June 30, 2026",
    sourceLabel: "Official Roblox event page plus Pro Game Guides, TechWiser, Pocket Tactics, Destructoid, and GameRant code coverage",
    note: "Keep CODE as the only active source-of-record input in the table. June 30 search results widened the public dispute around 20Pearls and 20PEARLS, but the official Roblox event page still anchors the page on CODE and still says the code expires with the next update."
  }
];

export const codeStatusTerms: GameCode[] = [
  {
    code: "20 Pearls",
    reward: "Guide pages and Reddit still use 20 Pearls as the reported reward wording tied to CODE, even though fresher code pages increasingly compress the same idea to 20Pearls or uppercase it to 20PEARLS.",
    status: "Reported",
    addedDate: "Observed June 30, 2026",
    sourceLabel: "Pro Game Guides, Pocket Tactics, GameRant, and Reddit coverage",
    note: "Keep this indexed as reward wording, not as a verified redeem string. The exact reward phrase is still public search demand, but the fresher exact-name code dispute has moved toward compressed or uppercase variants."
  },
  {
    code: "20Pearls",
    reward: "The official Roblox event surface uses 20Pearls next to CODE, and fresh June 30 code pages increasingly present 20Pearls as the code-box input instead of just the reward wording.",
    status: "Disputed",
    addedDate: "Observed June 30, 2026",
    sourceLabel: "Official Roblox event page plus TechWiser, Destructoid, Pocket Tactics, and YouTube exact-name coverage",
    note: "This term is verified on the official event surface but disputed as a redeem string. Keep it visible for exact-name search intent without promoting it into the active table until an official or in-game instruction shows 20Pearls in the code box."
  },
  {
    code: "20PEARLS",
    reward: "Fresh June 30 code pages also surface an uppercase 20PEARLS variant, which keeps the exact-name dispute hot even though the official Roblox event wording is mixed-case 20Pearls beside CODE.",
    status: "Disputed",
    addedDate: "Observed June 30, 2026",
    sourceLabel: "Player.One, TechWiser, Deltia's Gaming search surface, and YouTube exact-name coverage",
    note: "Treat this as a hot disputed exact-name term, not as a verified code. Public pages are expanding the same claim into uppercase formatting without a matching official Roblox instruction."
  },
  {
    code: "100DAYS",
    reward: "SuperCheats currently lists 100DAYS in its expired section, but today's collection did not find matching official Roblox, YouTube, Reddit, or multi-competitor support for this exact expired-name term.",
    status: "Expired",
    addedDate: "Observed June 30, 2026",
    sourceLabel: "SuperCheats expired-codes list",
    note: "Keep this visible only as a tracker-only expired-name report. Do not attach a reward claim or promote it into the active table without a broader public packet."
  },
  {
    code: "STRANDEDDEVS",
    reward: "SuperCheats currently lists STRANDEDDEVS in its expired section, but today's collection did not find matching official Roblox, YouTube, Reddit, or multi-competitor support for this exact expired-name term.",
    status: "Expired",
    addedDate: "Observed June 30, 2026",
    sourceLabel: "SuperCheats expired-codes list",
    note: "Treat this as tracker-only expired-name surface area. It satisfies expired exact-name intent without claiming the code or reward was officially confirmed."
  },
  {
    code: "SEAADVENTURE",
    reward: "SuperCheats currently lists SEAADVENTURE in its expired section, but today's collection did not find matching official Roblox, YouTube, Reddit, or multi-competitor support for this exact expired-name term.",
    status: "Expired",
    addedDate: "Observed June 30, 2026",
    sourceLabel: "SuperCheats expired-codes list",
    note: "Keep this in the watch layer for expired exact-name searches only. The site should not invent a reward or redemption history for it."
  }
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Safe starter gathering",
    tier: "S",
    role: "Beginner survival",
    reason: "Prioritize food, basic materials, and a safe route before chasing distant islands or risky fights.",
    confidence: "Needs check",
    bestFor: ["beginner", "low investment"],
    sourceNote: "Replace with checked Roblox, creator, wiki, video, or community evidence.",
    teamNote: "Works as a solo survival priority while exact early-game systems are being checked."
  },
  {
    name: "Boat and base upgrades",
    tier: "A",
    role: "Progression",
    reason: "Upgrade choices that keep the player alive at sea should outrank cosmetic or risky exploration goals.",
    confidence: "Needs check",
    bestFor: ["farming", "repeat runs"],
    sourceNote: "Replace with current creator videos, wiki notes, or verified community testing.",
    teamNote: "Pair resource planning with guide notes once upgrade costs are verified."
  },
  {
    name: "Risky island pushes",
    tier: "A",
    role: "Late game",
    reason: "Farther routes, enemies, and hazards may be valuable, but they need checked item names and risk notes.",
    confidence: "Needs check",
    bestFor: ["late game", "bossing"],
    sourceNote: "Replace with cross-checked late-game, update, or boss-clear evidence.",
    teamNote: "Rank as late-game only after source-backed route and hazard details exist."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Survival Planner`,
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "A practical decision helper for resource focus, upgrade priority, and safer exploration choices."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Ranks survival priorities with notes for beginners, farming, and late-game exploration."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks active codes, expired-code conflicts, and redemption instructions."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies official Trello, Discord, wiki, and Roblox source status for update-sensitive claims."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner guide",
    href: "/guides/beginner-guide",
    eyebrow: "Guide",
    description: "First-session path, mistakes to avoid, and what to unlock first."
  },
  {
    title: "How to play",
    href: "/guides/how-to-play",
    eyebrow: "Guide",
    description: "Learn the basic survival loop before chasing distant routes or risky rewards."
  },
  {
    title: "Survival strategy",
    href: "/guides/survival-strategy",
    eyebrow: "Guide",
    description: "Plan safer routes, upgrades, and resource decisions for longer runs."
  },
  {
    title: "Tips",
    href: "/guides/tips",
    eyebrow: "Guide",
    description: "Quick habits for safer gathering, update checks, and avoiding common mistakes."
  },
  {
    title: "Walkthrough",
    href: "/guides/walkthrough",
    eyebrow: "Guide",
    description: "A lightweight ordered route from first checks to stable survival."
  },
  {
    title: "Classes status",
    href: "/guides/classes",
    eyebrow: "Support page",
    description: "Track reported class names, update-linked class terms, and what still needs an official roster check."
  },
  {
    title: "Companions status",
    href: "/guides/companions",
    eyebrow: "Support page",
    description: "Track companion demand, reported names, and missing first-party roster details."
  },
  {
    title: "FAQ",
    href: "/guides/faq",
    eyebrow: "Guide",
    description: "Quick answers for codes, source status, updates, and beginner strategy."
  },
  {
    title: "Updates and events",
    href: "/updates",
    eyebrow: "Update watch",
    description: "Check what changed before trusting new codes, route advice, wiki entities, or upgrade priorities."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Resources and rewards",
    href: "/guides/companions",
    eyebrow: "Wiki",
    description: "Use the companion status page first when reward or helper-entity searches turn into named companion lookups."
  },
  {
    title: "Islands and systems",
    href: "/guides/classes",
    eyebrow: "Wiki",
    description: "Use the class status page for reported class names, update-linked class terms, and pending unlock details."
  },
  {
    title: "Upgrades and threats",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Use for boat/base upgrades, enemies, hazards, survival stats, or disputed discoveries."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Use this page as the source of record for game title, creator, and live Roblox availability."
  },
  {
    title: "Trello, Discord, and board status",
    href: "/trello",
    eyebrow: "Community",
    description: "Use this status route or verified creator links to separate official boards from reported or still-missing community references."
  },
  {
    title: "Stranded Devs Roblox group",
    href: gameConfig.dataSources.robloxGroup ?? "/trello",
    eyebrow: "Official",
    description: "Public Roblox group shell for the creator name that matches the live game identity and source-status checks."
  },
  {
    title: "Updates and event checks",
    href: "/updates",
    eyebrow: "Freshness",
    description: "Review update-sensitive claims before changing codes, guides, rankings, or wiki notes."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Document which claims are official, community confirmed, or still uncertain."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes, updates, and tier lists should show a visible checked date and avoid pretending unverified claims are final."
  },
  {
    title: "Entity coverage",
    body: "Split major game entities into wiki pages when search demand exists instead of burying everything on the homepage."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site clearly points players back to official Roblox and creator-owned support paths."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Gameplay overview",
    href: "#",
    eyebrow: "Video",
    description: "Use a current YouTube creator guide that explains gathering, building, sea travel, and survival pacing."
  },
  {
    title: "Beginner route",
    href: "#",
    eyebrow: "Video",
    description: "Use a recent YouTube walkthrough for the first days, early supplies, and safe upgrades."
  },
  {
    title: "Route or update showcase",
    href: "#",
    eyebrow: "Video",
    description: "Use a YouTube video that supports upgrade priorities, route choices, update context, or advanced survival strategy."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `What is ${gameConfig.name} Wiki?`,
      a: `${gameConfig.name} Wiki is a fan-made Roblox resource for codes, survival priorities, resource planning, guides, and source-backed progression help.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: `How often should ${gameConfig.name} codes be checked?`,
      a: "Codes should be checked whenever the game updates, reaches milestones, or community sources report new rewards. Keep the checked date visible."
    },
    {
      q: `What pages should be expanded first?`,
      a: "Start with codes, upgrade priorities, Trello/Discord status, survival planner, beginner guide, wiki hub, and sources. Add entity pages after research confirms real resources, islands, upgrades, enemies, and hazards."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes come from?`,
      a: "Use official Roblox pages, creator-owned announcements, and dated public code trackers. When sources disagree, keep the claim-state label visible instead of forcing one answer."
    },
    {
      q: "Why are some codes marked reported, disputed, or unverified?",
      a: "Those labels show that the term has public search demand but the reward, status, or exact redeem string still conflicts across sources or still lacks an official check."
    },
    {
      q: `How do I redeem ${gameConfig.name} codes?`,
      a: "The current official Roblox event copy says to join the lobby and press the green Submit button after finding the secret code. Keep the broader menu or settings fallback in mind until the live code panel is checked again in game."
    },
    {
      q: `What should I do with ${gameConfig.name} rewards?`,
      a: "Use survival rewards on supplies, early upgrades, and safer exploration first. Do not plan around tracker-only or disputed payouts until the exact code and reward are verified in the live build."
    }
  ],
  tierList: [
    {
      q: "How should the tier list be updated?",
      a: "Replace placeholder priorities with research-backed survival rankings, explain use cases, and split beginner, resource farming, upgrade, and late-game exploration recommendations when needed."
    },
    {
      q: "Why is this a priority list instead of final S-tier rankings?",
      a: "The exact entity list is still being checked, so the safe launch page ranks survival decisions instead of pretending unverified weapons, islands, or upgrades are final."
    },
    {
      q: "What sources matter most for rankings?",
      a: "Official Roblox details, creator-owned updates, current gameplay checks, and repeated community evidence matter more than one-off claims."
    },
    {
      q: "Should beginners copy late-game routes?",
      a: "No. Beginners should favor supplies, safe gathering, and core upgrades until hazards and route risks are verified."
    }
  ],
  calculator: [
    {
      q: "Is the calculator exact?",
      a: "The bootstrap calculator is a starter decision helper. Replace it with verified formulas, tables, and game-specific inputs as research improves."
    }
  ]
};
