import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/SpecTable";
import { ASSETS } from "@/lib/assets";

export function HomeCtaSection() {
  return (
    <PageContainer className="pt-20">
      <div className="bg-gradient-to-br from-surface-alt to-[#e8f4f9] border border-[#d8eaf2] rounded-3xl overflow-hidden grid grid-cols-1 tablet:grid-cols-2 items-center gap-8 p-10 tablet:px-16 tablet:py-14 max-tablet:text-center">
        <div>
          <h2 className="font-heading font-bold text-[clamp(26px,3vw,34px)] text-heading leading-tight">
            Нужна консультация по подбору оборудования?
          </h2>
          <p className="text-base leading-relaxed text-muted mt-4 max-w-[440px] max-tablet:mx-auto">
            Специалисты Liancheng помогут подобрать насос или систему под ваши
            параметры — расход, напор, среда и режим эксплуатации.
          </p>
          <Button href="/contact" className="mt-7 max-tablet:mx-auto">
            Запросить консультацию
          </Button>
        </div>
        <div className="flex items-center justify-center max-tablet:order-first">
          <Image
            src={ASSETS.pump.src}
            alt={ASSETS.pump.alt}
            width={ASSETS.pump.width}
            height={ASSETS.pump.height}
            className="w-[min(380px,100%)] h-auto object-contain opacity-90"
          />
        </div>
      </div>
    </PageContainer>
  );
}
