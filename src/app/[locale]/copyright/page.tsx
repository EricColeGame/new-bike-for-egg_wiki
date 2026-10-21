import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Bike For Egg, Roblox, game artwork, logos, and related media belong to Huron Games, Roblox Corporation, and their respective owners.</p>
      <p>Bike For Egg Wiki is a non-official fan wiki created for informational and guide presentation purposes.</p>
      <p>If you own rights to content displayed here and have a concern, please contact <a className="font-semibold text-foreground hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
