import { VenueEfTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TeamDetailContent } from '@/components/sections/TeamDetailContent';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: VenueEfTemplateData = rawData;
  const sectionData = templateData?.categories?.Venue?.sections;

  if (!sectionData) {
    return <div>{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;
  }

  // Find the specific team member by id
  const teamData = sectionData.Team?.variants?.VenueTeam1;
  const member = teamData?.members?.find(m => m.id === id);

  if (!member) {
    return notFound();
  }

  // Clone breadcrumb and override the last label with the member's name
  const breadcrumbData = sectionData.TeamDetailBreadcrumb?.variants?.VenueTeamDetailBreadcrumb1;
  const dynamicBreadcrumb = breadcrumbData ? {
    ...breadcrumbData,
    paths: breadcrumbData.paths.map((path, idx) => 
      idx === breadcrumbData.paths.length - 1 ? { ...path, label: member.name } : path
    )
  } : undefined;

  const detailPageContent = sectionData.TeamDetailPageContent?.variants?.VenueTeamDetailPageContent1;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.VenueTopBar1} />
      <Header data={sectionData.Header?.variants?.VenueHeader1} />
      
      {dynamicBreadcrumb && <Breadcrumb data={dynamicBreadcrumb} />}
      
      <div className="pb-2.5">
        <TeamDetailContent member={member} pageData={detailPageContent} />
      </div>
      
      <Footer data={sectionData.Footer?.variants?.VenueFooter1} />
    </main>
  );
}
