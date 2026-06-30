import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "100 Days at Sea",
  slug: "100-days-at-sea",
  domain: "https://100daysatsea.net",
  theme: {
    primaryColor: "#FACC15",
    accentColor: "#38BDF8",
    surfaceColor: "#111113",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Supplies",
    abbr: "SUP"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Weekly checks",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/70411440483149/100-Days-at-Sea",
    robloxGroup: "https://www.roblox.com/groups/425035678/Stranded-Devs#!/about",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra + Google AdSense",
    usesRuntimeConfig: true
  }
};
