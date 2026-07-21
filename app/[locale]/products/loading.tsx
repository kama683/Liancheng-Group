import { PageContainer } from "@/components/ui/SpecTable";

export default function ProductsLoading() {
  return (
    <>
      <PageContainer className="py-12">
        <div className="h-3.5 w-40 rounded-sm bg-stat-grid animate-pulse" />
        <div className="h-9 w-full max-w-[480px] rounded-sm bg-stat-grid animate-pulse mt-3.5" />
        <div className="h-4 w-full max-w-[640px] rounded-sm bg-stat-grid animate-pulse mt-4" />
      </PageContainer>

      <PageContainer className="pb-16">
        <div className="grid grid-cols-1 tablet:grid-cols-[300px_1fr] gap-12 items-start">
          <div className="space-y-2.5">
            <div className="h-11 w-full rounded-md bg-stat-grid animate-pulse" />
            <div className="h-64 w-full rounded-lg bg-stat-grid animate-pulse" />
          </div>
          <div className="grid grid-cols-1 max-tablet:grid-cols-2 tablet:grid-cols-3 gap-6 max-mobile:grid-cols-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-border overflow-hidden">
                <div
                  className="aspect-4/3 bg-stat-grid animate-pulse"
                  style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
                />
                <div className="px-5.5 py-5 space-y-2.5">
                  <div className="h-3 w-16 rounded-sm bg-stat-grid animate-pulse" />
                  <div className="h-4 w-full rounded-sm bg-stat-grid animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </>
  );
}
