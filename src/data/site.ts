import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with codes, upgrade priorities, Trello and Discord status, survival planning, guides, and source-backed Roblox sea survival help.`,
  valueProposition: `Track ${gameConfig.name} codes, compare safe survival priorities, and plan what to gather or upgrade before your next trip at sea.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-07-03",
  freshnessLabel: "Official CODE status, the new 20Pearls watch route, and July 3 ALIEN INVASION code-state checks refreshed on July 3, 2026",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} badges`,
    `${gameConfig.name} rival rigs`,
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
  { href: "/updates", label: "Check updates" },
  { href: "/wiki", label: "Open wiki" },
  { href: "/tier-list", label: "View tier list" },
  { href: "/trello", label: "Check sources" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Code status", value: "1 official + 1 watch route + 6 watch terms", note: "Official Roblox still keeps CODE live while showing 20Pearls wording, the site now gives 20Pearls its own status route, PCGamesN still preserves the expired angle, and older exact-name terms remain disputed" },
  { label: "Core pages", value: "16", note: "Codes, tier list, Trello, tools, guides, wiki, and long-tail support hubs" },
  { label: "Source notes", value: "Clear", note: "Verified, reported, disputed, and missing labels" },
  { label: "Source model", value: "Clear", note: "Official and community links split" }
];

export const activeCodes: GameCode[] = [
  {
    code: "CODE",
    reward: "The official Roblox game surface still points to CODE as the live anchor, even while the July 3 public packet keeps a broader 20Pearls or 20PEARLS tracker cluster in circulation around the same pearls reward and redemption intent.",
    status: "Verified",
    addedDate: "Checked July 3, 2026",
    sourceLabel: "Official Roblox game page plus Pro Game Guides, Beebom, GameRant, Destructoid, Sportskeeda, TechWiser, PCGamesN, AllThings.How, SuperCheats, and public search or video result coverage",
    note: "Keep CODE as the only active source-of-record input in the table. The July 3 packet still splits into two public clusters: official Roblox keeps CODE live, while a broader tracker-style cluster keeps 20Pearls or 20PEARLS in circulation without a matching first-party code-box instruction."
  }
];

export const codeStatusTerms: GameCode[] = [
  {
    code: "20 Pearls",
    reward: "The official game result wording still uses 20 Pearls style reward phrasing tied to CODE, even while other current guide pages compress the same idea to 20Pearls or uppercase it to 20PEARLS.",
    status: "Reported",
    addedDate: "Observed July 3, 2026",
    sourceLabel: "Official Roblox game result wording, GameRant, Beebom, and public guide-result coverage",
    note: "Keep this indexed as reward wording, not as a verified redeem string. The phrase still has public search demand, but it remains reward language rather than a first-party proof of the literal code-box input."
  },
  {
    code: "20Pearls",
    reward: "The official Roblox result surface still exposes 20Pearls next to the live game listing, and several current guide pages now push 20Pearls as the code-box input instead of only as reward wording.",
    status: "Disputed",
    addedDate: "Observed July 3, 2026",
    sourceLabel: "Official Roblox game result surface plus Pro Game Guides, Beebom, GameRant, Destructoid, Sportskeeda, TechWiser, AllThings.How, and SuperCheats coverage",
    note: "This term is visible on the official Roblox result surface but disputed as a redeem string. Keep it visible for exact-name search intent without promoting it into the active table while the official Roblox source-of-record answer still keeps CODE live."
  },
  {
    code: "20PEARLS",
    reward: "Current July 3 code pages still surface an uppercase 20PEARLS variant, which keeps the exact-name dispute hot even though the official Roblox wording is mixed-case 20Pearls beside CODE.",
    status: "Disputed",
    addedDate: "Observed July 3, 2026",
    sourceLabel: "Deltia's Gaming, result-surface exact-name coverage, and public video/search surfaces",
    note: "Treat this as a hot disputed exact-name term, not as a verified code. Public pages are still expanding the same claim into uppercase formatting without a matching official Roblox instruction."
  },
  {
    code: "no live codes",
    reward: "Some current code pages still say no live codes are available or that the first code expired shortly after launch, even while official Roblox and several other code publishers keep CODE or 20Pearls-style variants in circulation.",
    status: "Disputed",
    addedDate: "Observed July 3, 2026",
    sourceLabel: "PCGamesN and one current AllThings.How code-page result surface versus the official Roblox game page, Pro Game Guides, Beebom, GameRant, Destructoid, Sportskeeda, TechWiser, and SuperCheats",
    note: "Keep this phrase visible because it is still a real code-status search path on July 3, 2026. It should not override the official Roblox surface or the repeated CODE cluster, but it should stay labeled clearly as an active contradiction."
  },
  {
    code: "100DAYS",
    reward: "AllThings.How still lists 100DAYS as an active code on its broader overview, while SuperCheats still keeps the same name in its expired section and the official Roblox packet does not confirm it.",
    status: "Disputed",
    addedDate: "Observed July 3, 2026",
    sourceLabel: "AllThings.How codes guide plus SuperCheats codes page",
    note: "Keep this visible as an older exact-name dispute, not as a verified active code or a settled expired term. The July 2 public packet still leaves the conflict unresolved."
  },
  {
    code: "STRANDEDDEVS",
    reward: "AllThings.How still lists STRANDEDDEVS as an active code on its broader overview, while SuperCheats still keeps the same name in its expired section and no first-party source confirms it.",
    status: "Disputed",
    addedDate: "Observed July 3, 2026",
    sourceLabel: "AllThings.How codes guide plus SuperCheats codes page",
    note: "Treat this as an older exact-name dispute. It satisfies search intent without claiming the code is currently active or that the expired label is fully settled."
  },
  {
    code: "SEAADVENTURE",
    reward: "AllThings.How still lists SEAADVENTURE as an active code on its broader overview, while SuperCheats still keeps the same name in its expired section and the official Roblox packet does not confirm it.",
    status: "Disputed",
    addedDate: "Observed July 3, 2026",
    sourceLabel: "AllThings.How codes guide plus SuperCheats codes page",
    note: "Keep this in the watch layer for conflicting older exact-name searches only. The site should not invent a reward or redemption history for it."
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
    title: `${gameConfig.name} Updates`,
    href: "/updates",
    eyebrow: "Updates",
    description: "Keeps Ice Region, event, and code-window claims separated into verified, reported, expired, and missing-source states."
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
    title: "Locations hub",
    href: "/guides/locations",
    eyebrow: "Support hub",
    description: "Track Outpost, Oil Rig, Cargo Ship, Sea Merchant, Rival Rigs, and best-seeds route demand."
  },
  {
    title: "Rival Rigs status",
    href: "/guides/rival-rigs",
    eyebrow: "Support page",
    description: "Track the three-rig challenge with badge-backed demand and reported route details."
  },
  {
    title: "Badges status",
    href: "/guides/badges",
    eyebrow: "Support page",
    description: "Track badge demand, named achievements, and what still needs direct Roblox badge checks."
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
    title: "Locations and routes",
    href: "/guides/locations",
    eyebrow: "Wiki",
    description: "Use the location hub for Outpost, Oil Rig, Cargo Ship, Sea Merchant, Rival Rigs, and best-seeds route questions."
  },
  {
    title: "Rival Rigs route status",
    href: "/guides/rival-rigs",
    eyebrow: "Wiki",
    description: "Use the exact route page when players are searching for the three-rig challenge or the There can be only one badge wording."
  },
  {
    title: "Badges and achievements",
    href: "/guides/badges",
    eyebrow: "Wiki",
    description: "Use the badge page when players are searching for Out At Sea, Lone Survivor, Rescued!, Hooked, There can be only one, or achievement-style progress help."
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
    title: "Hub-first routing",
    body: "When several exact terms share one intent family, publish a useful hub with visible answer blocks before scattering thin pages."
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
      a: "Start with codes, upgrade priorities, Trello/Discord status, survival planner, beginner guide, the locations hub, wiki hub, and sources. Add entity pages after research confirms real resources, islands, upgrades, enemies, and hazards."
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
      a: "The current official Roblox copy still points players to the green Submit button after finding the secret code. Keep the broader menu or settings fallback in mind until the live code panel is checked again in game."
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
