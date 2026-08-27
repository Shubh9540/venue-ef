import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutVision } from '@/components/sections/AboutVision';

export const dynamic = 'force-dynamic';

export default function OurVisionPage() {
  const templateData: VenueEfTemplateData = rawData;
  const sectionData = templateData?.categories?.Venue?.sections;

  if (!sectionData) {
    return <div>{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;
  }

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      <Breadcrumb data={sectionData.OurVisionBreadcrumb?.variants?.VenueOurVisionBreadcrumb1} />
      
      <div className="pb-2.5">
        <AboutVision data={sectionData.AboutVision?.variants?.VenueAboutVision1} />
      </div>
      
      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
