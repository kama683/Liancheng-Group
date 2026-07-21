import { PageContainer } from "@/components/ui/SpecTable";

export default function AboutSubpageLoading() {
  return (
    <PageContainer className="py-14 pb-20">
      <div className="h-3.5 w-48 rounded-sm bg-stat-grid animate-pulse" />
      <div className="h-9 w-full max-w-[480px] rounded-sm bg-stat-grid animate-pulse mt-6" />
      <div className="space-y-3.5 mt-8">
        <div className="h-4 w-full rounded-sm bg-stat-grid animate-pulse" />
        <div className="h-4 w-full rounded-sm bg-stat-grid animate-pulse" />
        <div className="h-4 w-3/4 rounded-sm bg-stat-grid animate-pulse" />
      </div>
    </PageContainer>
  );
}
