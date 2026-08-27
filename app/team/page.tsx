import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Team } from '@/components/sections/Team';

export const dynamic = 'force-dynamic';

export default function OurTeamPage() {
  const templateData: VenueEfTemplateData = rawData;
  const sectionData = templateData?.categories?.Venue?.sections;

  if (!sectionData) {
    return <div>{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;
  }

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      <Breadcrumb data={sectionData.OurTeamBreadcrumb?.variants?.VenueOurTeamBreadcrumb1} />
      
      <div className="pb-2.5">
        <Team data={sectionData.Team?.variants?.VenueTeam1} />
      </div>
      
      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
