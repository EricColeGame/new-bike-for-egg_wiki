export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Bike For Egg Wiki",
  shortName: "Bike For Egg",
  logoText: "B",
  tagline: "Egg Collecting, Bikes, Pets & Money Guides",
  description: "Your complete fan guide to Bike For Egg on Roblox, with codes, bike rankings, egg and pet guides, speed upgrades, money farming tips, and beginner strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://new-bike-for-egg.wiki",
  supportEmail: "support@new-bike-for-egg.wiki",
  gameUrl: "https://www.roblox.com/games/74023858073178/Bike-For-Egg",
  heroVideoId: "AGlHRZvp_M0",
  social: {
    youtube: "https://www.youtube.com/watch?v=AGlHRZvp_M0",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
