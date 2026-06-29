import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with codes, upgrade priorities, Trello and Discord status, survival planning, guides, and source-backed Roblox sea survival help.`,
  valueProposition: `Track ${gameConfig.name} codes, compare safe survival priorities, and plan what to gather or upgrade before your next trip at sea.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-06-28",
  freshnessLabel: "codes, source status, and survival guides ready for verification",
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
  { label: "Code status", value: "Needs check", note: "Designed for frequent checks" },
  { label: "Core pages", value: "10", note: "Codes, tier list, Trello, tools, guides, wiki" },
  { label: "Source notes", value: "Clear", note: "Official, community, and needs-check labels" },
  { label: "Source model", value: "Clear", note: "Official and community links split" }
];

export const activeCodes: GameCode[] = [
  { code: "UPDATE", reward: `Possible ${gameConfig.currency.name} or boost reward. Check in game before claiming it active.`, status: "Needs check", addedDate: "Verify before launch" },
  { code: "RELEASE", reward: "Possible launch reward. Keep hidden from active copy until the redemption panel confirms it.", status: "Needs check", addedDate: "Verify before launch" },
  { code: "WELCOME", reward: "Possible new-player reward. Treat as unverified until tested.", status: "Needs check", addedDate: "Verify before launch" },
  { code: "THANKS", reward: "Possible community milestone reward. Needs a current source.", status: "Needs check", addedDate: "Verify before launch" }
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
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Use for supplies, crafting materials, tools, weapons, and reward tables."
  },
  {
    title: "Islands and systems",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Use for islands, sea routes, weather, hazards, quests, events, or mechanics."
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
    href: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? gameConfig.dataSources.trello : (gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? gameConfig.dataSources.discord : "/trello"),
    eyebrow: "Community",
    description: "Use this status route or verified creator links to separate official boards from community references."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Document which claims are official, community confirmed, or still uncertain."
  },
  {
    title: "Updates and event checks",
    href: "/updates",
    eyebrow: "Freshness",
    description: "Review update-sensitive claims before changing codes, guides, rankings, or wiki notes."
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
      a: "Use official Roblox descriptions, creator groups, Discord announcements, Trello boards, and trusted community trackers when available."
    },
    {
      q: "Why are some codes marked Needs check?",
      a: "Uncertain rewards stay clearly labeled so the page does not overstate verification."
    },
    {
      q: `How do I redeem ${gameConfig.name} codes?`,
      a: "Open the game, finish any tutorial gate, then check the menu, rewards, shop, or settings panel for a code box. The exact panel must be verified in game before launch."
    },
    {
      q: `What should I do with ${gameConfig.name} rewards?`,
      a: "Use survival rewards on supplies, early upgrades, and safer exploration first. Do not spend rare rewards on unverified priorities."
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
