import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutMission } from '@/components/sections/AboutMission';

export const dynamic = 'force-dynamic';

export default function OurMissionPage() {
  const templateData: VenueEfTemplateData = rawData;
  const sectionData = templateData?.categories?.Venue?.sections;

  if (!sectionData) {
    return <div>{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;
  }

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      <Breadcrumb data={sectionData.OurMissionBreadcrumb?.variants?.VenueOurMissionBreadcrumb1} />
      
      <div className="pb-2.5">
        <AboutMission data={sectionData.AboutMission?.variants?.VenueAboutMission1} />
      </div>
      
      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
