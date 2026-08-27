import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { OurStory } from '@/components/sections/OurStory';
import { Counter } from '@/components/sections/Counter';
import { OurValues } from '@/components/sections/OurValues';
import { MissionVision } from '@/components/sections/MissionVision';
import { CoreValues } from '@/components/sections/CoreValues';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const templateData: VenueEfTemplateData = rawData;
  const sectionData = templateData?.categories?.Venue?.sections;

  if (!sectionData) {
    return <div>{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;
  }

  return (
    <main className="bg-white flex flex-col gap-5">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      <Breadcrumb data={sectionData.AboutBreadcrumb?.variants?.VenueAboutBreadcrumb1} />
      
      <OurStory data={sectionData.OurStory?.variants?.VenueOurStory1} />
      
      <Counter data={sectionData.Counter?.variants?.VenueCounter1} />
      
      <OurValues data={sectionData.OurValues?.variants?.VenueOurValues1} />
      
      <MissionVision data={sectionData.MissionVision?.variants?.VenueMissionVision1} />
      
      <div className="pb-2.5">
        <CoreValues data={sectionData.CoreValues?.variants?.VenueCoreValues1} />
      </div>
      
      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
