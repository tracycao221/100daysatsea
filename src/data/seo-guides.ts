import { siteConfig } from "@/data/site";

export type SeoGuide = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
    bullets: string[];
  }>;
  faq: Array<{
    q: string;
    a: string;
  }>;
  related: Array<{
    href: string;
    label: string;
    description: string;
  }>;
};

const sharedRelated = [
  {
    href: "/",
    label: "100 Days at Sea Wiki",
    description: "Return to the main hub for codes, tools, source notes, and the newest guide links."
  },
  {
    href: "/codes",
    label: "100 Days at Sea codes",
    description: "Check current code status before planning a new run or spending rewards."
  },
  {
    href: "/updates",
    label: "Update watch",
    description: "Review update-sensitive notes before trusting old route advice."
  }
];

export const seoGuides: SeoGuide[] = [
  {
    slug: "how-to-play",
    eyebrow: "How to play",
    title: "How to Play 100 Days at Sea",
    description:
      "Learn how to play 100 Days at Sea on Roblox with a simple first-run loop for gathering, upgrading, and surviving longer at sea.",
    intro:
      "Use this page when you need the basic loop: gather safe supplies, improve your survival setup, avoid risky pushes too early, and check source-backed updates before changing your plan.",
    sections: [
      {
        title: "Start with a safe loop",
        body: "A strong first session is less about rushing every island and more about staying alive long enough to learn what each action costs.",
        bullets: [
          "Spend the opening minutes on visible supplies and low-risk objectives.",
          "Avoid long sea pushes until you know how quickly your run drains resources.",
          "Use short return trips to learn which upgrades actually help survival."
        ]
      },
      {
        title: "Read every reward claim carefully",
        body: "Codes, rewards, and update notes move quickly. Treat public tracker claims as leads until the live game or an official source confirms the exact wording.",
        bullets: [
          "Check the codes page before assuming a reward is active.",
          "Use the updates page when a guide mentions a new island, region, or feature.",
          "Keep old video advice in context because Roblox experiences can change quickly."
        ]
      },
      {
        title: "Use the hub when you get stuck",
        body: "The best next page depends on the problem: codes for rewards, guides for survival pathing, tier list for priorities, and wiki for source-backed terms.",
        bullets: [
          "If you keep failing early, read the beginner guide.",
          "If you survive but stall, use the survival strategy page.",
          "If a term is unclear, check the wiki and source status pages."
        ]
      }
    ],
    faq: [
      {
        q: "What is the goal in 100 Days at Sea?",
        a: "The practical goal is to survive longer by collecting supplies, improving your setup, and making safer route decisions before taking bigger risks."
      },
      {
        q: "Should new players rush far islands?",
        a: "No. New players should first learn the safe resource loop, then push farther only when supplies and upgrades make the risk manageable."
      }
    ],
    related: [
      ...sharedRelated,
      {
        href: "/guides/beginner-guide",
        label: "Beginner guide",
        description: "Use the beginner path for first-session priorities and mistakes to avoid."
      }
    ]
  },
  {
    slug: "beginner-guide",
    eyebrow: "Beginner guide",
    title: "100 Days at Sea Beginner Guide",
    description:
      "A beginner-friendly 100 Days at Sea guide for first-session priorities, safer gathering, early upgrades, and common mistakes.",
    intro:
      "This beginner guide focuses on repeatable decisions that are useful even while exact item names and update details are still being verified.",
    sections: [
      {
        title: "First-session priorities",
        body: "Your first objective is to understand the cost of staying alive. Do not treat every shiny objective as equal.",
        bullets: [
          "Collect basic supplies before chasing distant goals.",
          "Choose upgrades that reduce early failure, not just upgrades that sound rare.",
          "Watch how quickly each trip consumes resources and adjust the next route."
        ]
      },
      {
        title: "Beginner mistakes to avoid",
        body: "Most early losses come from overextending. If your run is still unstable, shorten the route and build consistency.",
        bullets: [
          "Do not spend all rewards before checking whether an upgrade helps survival.",
          "Do not follow late-game advice before your early loop is stable.",
          "Do not assume every code tracker reward is active until it is checked."
        ]
      },
      {
        title: "When to move beyond beginner routes",
        body: "Move forward when the basic loop feels predictable. That means you know what to gather, when to return, and which risks are worth taking.",
        bullets: [
          "Use survival strategy once you can repeat safe runs.",
          "Use walkthrough notes when you want a day-by-day route.",
          "Use update pages before following new region or event advice."
        ]
      }
    ],
    faq: [
      {
        q: "What should beginners do first in 100 Days at Sea?",
        a: "Beginners should gather safe supplies, learn the resource drain, and choose upgrades that make repeat runs more stable."
      },
      {
        q: "Is the beginner guide different from the walkthrough?",
        a: "Yes. The beginner guide explains priorities, while the walkthrough gives a more ordered route for what to check next."
      }
    ],
    related: [
      ...sharedRelated,
      {
        href: "/guides/tips",
        label: "Tips",
        description: "Quick habits that make new runs safer."
      }
    ]
  },
  {
    slug: "tips",
    eyebrow: "Tips",
    title: "100 Days at Sea Tips",
    description:
      "Practical 100 Days at Sea tips for safer runs, resource planning, update checks, and avoiding common Roblox survival mistakes.",
    intro:
      "Use these tips as a quick checklist before a run. They are intentionally conservative so they stay useful even when updates change details.",
    sections: [
      {
        title: "Run tips",
        body: "A better run usually starts before the risky part. Plan what you need, what you can skip, and when you should return.",
        bullets: [
          "Enter a run with one clear goal instead of trying every objective.",
          "Keep enough supplies for the return path, not just the outward route.",
          "Treat unfamiliar hazards as scouting information before committing resources."
        ]
      },
      {
        title: "Upgrade tips",
        body: "Upgrades are strongest when they solve the failure that actually ended your last run.",
        bullets: [
          "If you run out of supplies, prioritize stability before speed.",
          "If routes take too long, improve the setup that helps repeat travel.",
          "If you die to hazards, delay risky areas until you have better information."
        ]
      },
      {
        title: "Source tips",
        body: "Search results move fast for Roblox games. Good players separate useful leads from confirmed facts.",
        bullets: [
          "Use dated pages and visible source labels.",
          "Compare code claims against the codes page.",
          "Check update notes before copying old video routes."
        ]
      }
    ],
    faq: [
      {
        q: "What is the best 100 Days at Sea tip for new players?",
        a: "Do not overextend. Build a repeatable safe route before chasing distant islands, rare rewards, or update rumors."
      },
      {
        q: "Should tips change after updates?",
        a: "Yes. Update-sensitive advice should be checked whenever a patch, event, or new region changes the risk and reward balance."
      }
    ],
    related: [
      ...sharedRelated,
      {
        href: "/guides/survival-strategy",
        label: "Survival strategy",
        description: "Turn quick tips into a more complete survival plan."
      }
    ]
  },
  {
    slug: "survival-strategy",
    eyebrow: "Strategy",
    title: "100 Days at Sea Survival Strategy",
    description:
      "A survival strategy guide for 100 Days at Sea covering safe routes, upgrades, resource control, and when to take bigger risks.",
    intro:
      "This strategy page is for players who understand the basics and want a safer decision model for longer runs.",
    sections: [
      {
        title: "Control risk first",
        body: "Longer survival comes from reducing surprise. Before each route, decide what can go wrong and what you will do if supplies run low.",
        bullets: [
          "Prefer repeatable routes until a new area is scouted.",
          "Keep a fallback plan for low supplies or unexpected hazards.",
          "Use the calculator when you need a quick risk-level check."
        ]
      },
      {
        title: "Upgrade around your failure point",
        body: "The best upgrade is not always the rarest. It is the one that fixes why your run ended.",
        bullets: [
          "Choose safety if early runs fail before reaching your target.",
          "Choose route efficiency when you can survive but progress slowly.",
          "Delay luxury choices until your survival loop is stable."
        ]
      },
      {
        title: "Use updates as strategy checkpoints",
        body: "When an update changes regions, rewards, or code demand, old strategy can become stale.",
        bullets: [
          "Check the update hub before following old routes.",
          "Treat new named regions as scouting content until details are verified.",
          "Refresh internal links from the guide hub after major changes."
        ]
      }
    ],
    faq: [
      {
        q: "What is the safest strategy in 100 Days at Sea?",
        a: "The safest strategy is to stabilize supplies, choose upgrades that prevent repeat failures, and only push farther after scouting the risk."
      },
      {
        q: "When should I use the survival planner?",
        a: "Use the survival planner when you need a quick decision between resource focus, upgrade focus, or exploration risk."
      }
    ],
    related: [
      ...sharedRelated,
      {
        href: "/calculator",
        label: "Survival planner",
        description: "Use the calculator to compare run risk and upgrade focus."
      }
    ]
  },
  {
    slug: "walkthrough",
    eyebrow: "Walkthrough",
    title: "100 Days at Sea Walkthrough",
    description:
      "A lightweight 100 Days at Sea walkthrough for starting a run, building a safe loop, checking updates, and choosing the next page to use.",
    intro:
      "This walkthrough gives an ordered path for players who want a simple route through the site and the game without pretending every update detail is final.",
    sections: [
      {
        title: "Step 1: Check rewards and source status",
        body: "Before starting, check whether any current code or update note changes the run.",
        bullets: [
          "Open the codes page and read the claim-state labels.",
          "Check updates if a new region or event is being discussed.",
          "Use Trello and source status pages for official-link questions."
        ]
      },
      {
        title: "Step 2: Build the first safe route",
        body: "Start with a short, repeatable route. Learn what supplies matter and when you should return.",
        bullets: [
          "Gather basic resources first.",
          "Avoid making the first route your longest route.",
          "Spend early upgrades on stability when possible."
        ]
      },
      {
        title: "Step 3: Expand only when stable",
        body: "Once the safe route works, use strategy and tier-list pages to decide which risks are worth trying next.",
        bullets: [
          "Use tips to avoid simple mistakes.",
          "Use survival strategy for longer routes.",
          "Use wiki and update pages when names or features are unclear."
        ]
      }
    ],
    faq: [
      {
        q: "Is this a full 100 Days at Sea walkthrough?",
        a: "It is a lightweight walkthrough for early and mid-run decisions. Exact item and update details should be expanded only when source evidence is verified."
      },
      {
        q: "Where should I go after this walkthrough?",
        a: "Use the beginner guide if you are new, survival strategy if your runs are stable, and updates if a new feature changed the game."
      }
    ],
    related: [
      ...sharedRelated,
      {
        href: "/guides/how-to-play",
        label: "How to play",
        description: "Review the basic loop before following the ordered walkthrough."
      }
    ]
  },
  {
    slug: "classes",
    eyebrow: "Class status",
    title: "100 Days at Sea Classes",
    description:
      "Track 100 Days at Sea classes with verified demand signals, reported class names, and clear notes on what still lacks an official roster source.",
    intro:
      "This page exists because classes are now a public search cluster across guide sites, YouTube, and the Ice Region update wave. It keeps the query covered without pretending the full class roster or every passive bonus is officially documented.",
    sections: [
      {
        title: "What is verified right now",
        body: "The official Roblox game surface confirms live update and code intent, while public class guides and videos confirm that class lookup is an active player need.",
        bullets: [
          "The Roblox game page still shows an active [ICE UPDATE!] [CODES] title marker.",
          "Classes now have repeated public coverage across Sportskeeda, Deltia's Gaming, and YouTube search results.",
          "That demand is enough to support a class-status page even before an official roster page appears."
        ]
      },
      {
        title: "What public sources keep repeating",
        body: "Current guide and search-result surfaces repeatedly mention a starter class set, while update-era exact-name searches also add newer class terms to the same cluster.",
        bullets: [
          "Sportskeeda search coverage repeats Sailor, Survivor, Medic, Crewmate, Camper, Adventurer, Olympian, and Battle Buku as reported class names.",
          "Fresh YouTube class results also keep Harpooner in circulation as a best-class or unlock-target term.",
          "The Ice Region update cluster adds Ice Mage as another reported class phrase that still needs direct roster confirmation."
        ]
      },
      {
        title: "What should stay labeled reported or pending",
        body: "A class page is useful only if it separates public demand from missing official documentation.",
        bullets: [
          "Do not publish a final full class roster until the game or a creator-owned source lists it directly.",
          "Do not publish passive percentages, unlock costs, or ranking claims as final without a same-build check.",
          "Treat best-class advice as reported meta chatter until gameplay or creator-backed evidence confirms it."
        ]
      }
    ],
    faq: [
      {
        q: "Does 100 Days at Sea have an official class list?",
        a: "This July 1, 2026 pass still did not surface a creator-owned public class roster page. Class demand is public, but the full list still needs direct official or checked in-game confirmation."
      },
      {
        q: "Which classes are players searching for most?",
        a: "The broadest public class cluster currently repeats Sailor, Survivor, Medic, Crewmate, Camper, Adventurer, Olympian, and Battle Buku, while Harpooner and Ice Mage remain hot exact-name terms in newer search and video coverage."
      },
      {
        q: "What is the best class in 100 Days at Sea?",
        a: "Public videos are already chasing best-class intent, but this site should keep that topic reported or pending until a safer same-build class comparison exists."
      }
    ],
    related: [
      ...sharedRelated,
      {
        href: "/updates/ice-region",
        label: "Ice Region update",
        description: "See why Ice Mage and other update-era class terms entered the current demand cluster."
      },
      {
        href: "/guides/companions",
        label: "Companions status",
        description: "Check the adjacent support system that is surfacing in the same guide wave."
      }
    ]
  },
  {
    slug: "companions",
    eyebrow: "Companion status",
    title: "100 Days at Sea Companions",
    description:
      "Track 100 Days at Sea companions with public guide demand, reported companion names, and claim-state notes for missing official details.",
    intro:
      "Companions are now a distinct long-tail query family. This page covers what public sources repeat, what still needs direct proof, and which companion claims are too specific to publish as final.",
    sections: [
      {
        title: "Why this route exists",
        body: "Companion intent is no longer hidden inside generic beginner guides. Search results now show dedicated companion pages and recent YouTube videos about unlocking or equipping them.",
        bullets: [
          "Sportskeeda published a same-day all-companions style guide on July 1, 2026, and Deltia's Gaming still targets the same query family.",
          "Recent YouTube titles surface both unlock-every-companion and how-to-equip companions intent.",
          "That public demand justifies an indexable support page instead of burying companion terms inside the wiki hub."
        ]
      },
      {
        title: "What public sources currently repeat",
        body: "Public snippets confirm that companion pages are describing named companions and bonuses, but the site should stay careful about treating those values as final.",
        bullets: [
          "Sportskeeda snippet coverage names Frog and Snorf while describing hunger and health-style bonuses.",
          "Fresh guide and video coverage implies a larger companion roster than the snippet alone shows.",
          "The current source packet supports companion-status coverage, not a fully verified stat table."
        ]
      },
      {
        title: "What still needs direct proof",
        body: "Companion pages become risky when they move from existence and demand into exact roster, rarity, and stat promises without a checked source.",
        bullets: [
          "Do not publish a final all-companions table until the full roster is visible in game or on a creator-owned source.",
          "Do not lock in exact bonus values, rarity odds, or upgrade paths from one third-party article alone.",
          "Use this page as a support/status route until the wiki can safely split into companion entity pages."
        ]
      }
    ],
    faq: [
      {
        q: "Are companions confirmed in 100 Days at Sea?",
        a: "Yes as a demand cluster. Multiple public guide and video surfaces now target companions directly, and a same-day Sportskeeda guide kept that intent hot on July 1, 2026, but the page still needs a checked first-party roster before every companion detail should be treated as final."
      },
      {
        q: "Which companions are public sources naming right now?",
        a: "Current snippet-level public coverage explicitly surfaces Frog and Snorf, while broader guide and video coverage suggests more companions are available in the live game."
      },
      {
        q: "Should this page replace a full companion wiki?",
        a: "Not yet. It is a first-mover status page that keeps the query covered while the site waits for direct roster and bonus verification."
      }
    ],
    related: [
      ...sharedRelated,
      {
        href: "/wiki",
        label: "Wiki hub",
        description: "Return to the main wiki path for items, systems, updates, and future companion entity splits."
      },
      {
        href: "/guides/classes",
        label: "Classes status",
        description: "See the adjacent long-tail support page that still overlaps with the current July 1 update wave."
      }
    ]
  },
  {
    slug: "locations",
    eyebrow: "Location hub",
    title: "100 Days at Sea Locations",
    description:
      "Track 100 Days at Sea locations and route terms like Outpost, Oil Rig, Cargo Ship, Sea Merchant, Crewmate Yacht, Rival Rigs, and best seeds.",
    intro:
      "This page exists because public search and video demand is now clustering around named locations and route terms. It covers what Roblox players are searching for right now without inventing map coordinates, spawn rules, or guaranteed route values.",
    sections: [
      {
        title: "What is verified right now",
        body: "The official Roblox game page still verifies the broad exploration loop, while fresh public guide and video coverage confirms that named location lookup is now its own search family.",
        bullets: [
          "The official Roblox game surface still frames 100 Days at Sea as an exploration-heavy survival game with update activity still visible on July 1, 2026.",
          "Fresh guide coverage now targets exact location lookups such as Outpost, Oil Rig, Cargo Ship, Sea Merchant, and Crewmate Yacht instead of only generic beginner help.",
          "Recent YouTube search results also keep Rival Rigs in circulation as a named route term, which makes a dedicated location hub a better fit than burying the cluster inside the wiki homepage."
        ]
      },
      {
        title: "What public sources keep repeating",
        body: "The current source packet supports a location hub and answer blocks for the most repeated route phrases, but not a final official map chart.",
        bullets: [
          "Google result pages now surface dedicated best-seeds, Outpost, Oil Rig, Cargo Ship, Sea Merchant, Crewmate Yacht, and medkit-adjacent route articles from Games Manuals and the competing 100 Days at Sea guide site.",
          "YouTube results now repeat named route intent around Rival Rigs and broader location discovery instead of staying limited to codes and generic beginner runs.",
          "Rolimon's badge search also surfaces a badge description that says players must find and defeat all 3 rival rigs in a single session, which is enough to split Rival Rigs into its own support page while keeping exact route pins labeled as reported."
        ]
      },
      {
        title: "How to use this hub safely",
        body: "This route should help players find the next answer block without pretending every community map claim is official or current for the live build.",
        bullets: [
          "Treat Outpost, Oil Rig, Cargo Ship, Sea Merchant, and Crewmate Yacht as reported location terms unless your current run or an official creator source confirms exact route details.",
          "Use the dedicated Rival Rigs page when the query is specifically about the three-rig challenge or the There can be only one badge wording.",
          "Treat best seeds as a reported support question inside this hub, not as a verified official seed list or guaranteed optimal spawn table.",
          "If a future source packet surfaces stable coordinates, route screenshots, or creator-owned map notes for other locations, split the hottest remaining location term into its own exact page."
        ]
      }
    ],
    faq: [
      {
        q: "Does 100 Days at Sea have named locations players keep searching for?",
        a: "Yes. The July 1, 2026 collection found repeated public demand for Outpost, Oil Rig, Cargo Ship, Sea Merchant, Crewmate Yacht, Rival Rigs, and best-seeds style route terms."
      },
      {
        q: "Where is the Sea Merchant in 100 Days at Sea?",
        a: "Public guides now treat Sea Merchant lookup as a real player question, but this pass did not verify a creator-owned map pin or official route chart. Use third-party directions as reported until you check them in your current build."
      },
      {
        q: "Should best seeds get their own page?",
        a: "Not yet. Best-seeds demand is public, but the current packet fits better as a visible answer block inside the location hub than as a thin standalone page."
      }
    ],
    related: [
      ...sharedRelated,
      {
        href: "/guides/rival-rigs",
        label: "Rival Rigs status",
        description: "Use the exact route page when the search intent is specifically about the three-rig challenge."
      },
      {
        href: "/wiki",
        label: "Wiki hub",
        description: "Return to the broader wiki path for systems, rewards, hazards, and future entity splits."
      },
      {
        href: "/updates",
        label: "Updates",
        description: "Check the update hub before trusting older route advice after a patch."
      }
    ]
  },
  {
    slug: "badges",
    eyebrow: "Badge status",
    title: "100 Days at Sea Badges",
    description:
      "Track 100 Days at Sea badges with public Roblox, search, YouTube, and guide coverage while keeping unlock claims separated by claim state.",
    intro:
      "This page exists because badge lookup is now a distinct public search path. It covers the named badges and achievement-style demand that surfaced across Roblox, Rolimon's search results, YouTube, and competitor pages without inventing full unlock steps or hidden requirements.",
    sections: [
      {
        title: "Why this route exists",
        body: "Badge demand is now visible enough to deserve its own indexable support page instead of being buried inside the wiki hub or a generic guide.",
        bullets: [
          "Current search results now surface a dedicated Deltia's Gaming badges guide for 100 Days at Sea.",
          "Fresh YouTube results include a same-day How to Get Badges video and a Hooked badge tutorial, which keeps badge intent active beyond text guides.",
          "The site did not previously have a badge route, so this page closes a real long-tail coverage gap."
        ]
      },
      {
        title: "What public sources are naming right now",
        body: "The current packet supports named badge coverage and a badge-status page, but not a final official unlock table for every achievement.",
        bullets: [
          "Public Roblox and Rolimon's search surfaces currently repeat badge names such as Out At Sea, Lone Survivor, Rescued!, and There can be only one for this game.",
          "Rolimon's badge description for There can be only one says players must find and defeat all 3 rival rigs in a single session, which turns Rival Rigs into its own exact support-page intent instead of only a line item here.",
          "YouTube badge coverage also repeats Hooked as a badge-specific search term instead of only broad survival help.",
          "That is enough public surface to publish badge intent coverage while keeping exact unlock conditions labeled as reported or pending when they do not come from a checked first-party badge page."
        ]
      },
      {
        title: "How to use this page safely",
        body: "Badges are useful SEO targets only if the page stays honest about what is directly checked and what still needs a clearer source-of-record surface.",
        bullets: [
          "Treat named badges as public search terms first, then confirm requirements against direct Roblox badge pages or current in-game checks before calling them final.",
          "Do not publish completion percentages, reward values, or hidden objective wording as verified unless the exact badge page or a same-build capture shows it.",
          "If a future collection pass surfaces several fully checked badge descriptions, split the hottest badge into its own exact page from this parent route."
        ]
      }
    ],
    faq: [
      {
        q: "Does 100 Days at Sea have badges?",
        a: "Yes as a public search and source packet cluster. Current July 1, 2026 search, guide, and video surfaces all confirm that players are actively looking up badges for 100 Days at Sea."
      },
      {
        q: "Which badge names are public right now?",
        a: "The clearest current badge-name cluster includes Out At Sea, Lone Survivor, Rescued!, Hooked, and There can be only one. Those names are visible in the current public packet, but this page still avoids inventing final unlock wording where direct first-party badge descriptions were not fully checked in this run."
      },
      {
        q: "Should every badge get its own page?",
        a: "Not yet. Badge demand is real, but the current site fit is a parent badge-status page first. Split into exact badge pages only when direct descriptions and a stronger internal-link path justify them."
      }
    ],
    related: [
      ...sharedRelated,
      {
        href: "/wiki",
        label: "Wiki hub",
        description: "Use the wiki path for adjacent systems, entities, and future badge splits."
      },
      {
        href: "/guides/rival-rigs",
        label: "Rival Rigs status",
        description: "Use the dedicated route when the badge search turns into a three-rig location or route question."
      },
      {
        href: "/sources",
        label: "Sources",
        description: "Review how official, competitor, and video badge claims should be separated."
      }
    ]
  },
  {
    slug: "rival-rigs",
    eyebrow: "Route status",
    title: "100 Days at Sea Rival Rigs",
    description:
      "Track 100 Days at Sea Rival Rigs with badge-backed demand, location-video searches, and clear notes on what is still reported.",
    intro:
      "This page exists because Rival Rigs is no longer just a loose mention inside broad location coverage. Public badge, video, and competitor surfaces now treat Rival Rigs as its own route question, so this page covers the exact intent without inventing coordinates, spawn timers, or loot tables.",
    sections: [
      {
        title: "Why this route exists now",
        body: "The July 2 collection surfaced enough public exact-intent coverage to justify a dedicated support page instead of burying Rival Rigs inside the broader locations hub.",
        bullets: [
          "Rolimon's badge surface currently shows a There can be only one description that says players must find and defeat all 3 rival rigs in a single session.",
          "Current YouTube results include an ALL Rival Rigs Locations video for 100 Days at Sea, which keeps exact route intent live beyond a generic guide cluster.",
          "Competing guide coverage now uses an exact Rival Rigs route, so leaving the term only inside the locations hub would under-serve a real search path."
        ]
      },
      {
        title: "What this run can state clearly",
        body: "The site can answer the core query now, but it still needs claim-state boundaries around anything that looks like a final route solution.",
        bullets: [
          "Rival Rigs is a named player-facing challenge term with direct badge wording and repeated public location-demand coverage.",
          "The strongest direct claim in the packet is the all 3 rival rigs in a single session wording tied to There can be only one.",
          "Exact spawn positions, safest route order, combat stats, and reward drops still need a checked gameplay or creator-owned source before they should be treated as final."
        ]
      },
      {
        title: "How to use this page safely",
        body: "This route should satisfy the query without pretending that every community route line is confirmed for the current build.",
        bullets: [
          "Use this page for the named three-rig challenge intent, not as a substitute for a full official map chart.",
          "Keep location pins, route loops, and farming efficiency advice labeled as reported until a direct run check or creator-owned map note confirms them.",
          "Use the locations hub for adjacent route terms and the badges page when the search starts from achievement wording instead of route planning."
        ]
      }
    ],
    faq: [
      {
        q: "Are Rival Rigs confirmed in 100 Days at Sea?",
        a: "Yes as a named public route term. The strongest current proof is the There can be only one badge wording on Rolimon's plus repeated exact-name video and competitor coverage."
      },
      {
        q: "How many rival rigs are public sources naming right now?",
        a: "The clearest direct wording in the current packet says all 3 rival rigs in a single session, which is enough to state the three-rig challenge angle without inventing map details."
      },
      {
        q: "Where are Rival Rigs in 100 Days at Sea?",
        a: "Public videos and guide routes keep that search intent active, but this July 2, 2026 run did not verify creator-owned map pins or official route coordinates. Use third-party directions as reported until you check them in your current build."
      }
    ],
    related: [
      ...sharedRelated,
      {
        href: "/guides/locations",
        label: "Locations hub",
        description: "Return to the broader route hub for Outpost, Oil Rig, Cargo Ship, Sea Merchant, and best-seeds coverage."
      },
      {
        href: "/guides/badges",
        label: "Badges status",
        description: "Check the parent badge page when the search starts from There can be only one or other achievement names."
      }
    ]
  },
  {
    slug: "faq",
    eyebrow: "FAQ",
    title: "100 Days at Sea FAQ",
    description:
      "Frequently asked questions about 100 Days at Sea codes, guides, updates, source status, beginner strategy, and how to play.",
    intro:
      "This FAQ collects quick answers for searchers who need a direct answer before choosing a deeper guide.",
    sections: [
      {
        title: "Codes and rewards",
        body: "Codes are update-sensitive, so the FAQ points users back to the canonical codes page instead of duplicating a stale table.",
        bullets: [
          "Use /codes for current code status.",
          "Read disputed or expired labels before trying tracker-only terms.",
          "Check updates after a code expires or a new event appears."
        ]
      },
      {
        title: "Guides and strategy",
        body: "Different pages answer different problems. Beginner pages cover first-session mistakes; strategy pages cover longer survival decisions.",
        bullets: [
          "Use beginner guide for first runs.",
          "Use tips for quick habits.",
          "Use survival strategy for longer route planning."
        ]
      },
      {
        title: "Source status",
        body: "Roblox search results often surface Trello, Discord, and wiki questions before official links are stable.",
        bullets: [
          "Use the Trello page for official-link status.",
          "Use the sources page for editorial boundaries.",
          "Use the wiki hub when verified entity pages are ready."
        ]
      }
    ],
    faq: [
      {
        q: "Does 100 Days at Sea have codes?",
        a: "The site tracks reported, disputed, expired, and verified code claims on the dedicated codes page with visible source notes."
      },
      {
        q: "What is the best page for beginners?",
        a: "Start with the beginner guide, then use tips and the walkthrough once you understand the safe early route."
      },
      {
        q: "Where are update notes covered?",
        a: "Use the updates hub and support pages such as Ice Region when public demand needs a page before every detail is fully verified."
      }
    ],
    related: [
      ...sharedRelated,
      {
        href: "/guides",
        label: "Guide hub",
        description: "Browse all current guide pages from one place."
      }
    ]
  }
];

export const seoGuideBySlug = new Map(seoGuides.map((guide) => [guide.slug, guide]));
