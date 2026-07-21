import { PageContainer } from "@/components/ui/SpecTable";

export default function ProductLoading() {
  return (
    <>
      <section className="bg-gradient-to-b from-surface to-white">
        <PageContainer className="py-14 pb-10">
          <div className="h-3.5 w-64 rounded-sm bg-stat-grid animate-pulse" />
          <div className="h-3.5 w-24 rounded-sm bg-stat-grid animate-pulse mt-6" />
          <div className="h-9 w-full max-w-[560px] rounded-sm bg-stat-grid animate-pulse mt-2.5" />
        </PageContainer>
      </section>

      <PageContainer className="pt-5">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-12 items-start">
          <div className="aspect-4/3 rounded-xl bg-stat-grid animate-pulse" />
          <div className="space-y-3.5">
            <div className="h-6 w-40 rounded-sm bg-stat-grid animate-pulse" />
            <div className="h-4 w-full rounded-sm bg-stat-grid animate-pulse" />
            <div className="h-4 w-full rounded-sm bg-stat-grid animate-pulse" />
            <div className="h-4 w-2/3 rounded-sm bg-stat-grid animate-pulse" />
          </div>
        </div>
      </PageContainer>

      <PageContainer className="pt-12">
        <div className="h-6 w-56 rounded-sm bg-stat-grid animate-pulse mb-5" />
        <div className="space-y-px overflow-hidden rounded-lg border border-stat-grid">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-12 bg-white">
              <div className="h-full w-full bg-stat-grid animate-pulse" style={{ animationDelay: `${i * 60}ms` }} />
            </div>
          ))}
        </div>
      </PageContainer>
    </>
  );
}
