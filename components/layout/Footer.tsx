import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import {
  BRAND,
  COMPANY_NAME,
  LOGO_PATH,
  MAIN_CATEGORIES,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-text mt-20">
      <div className="max-w-[var(--container-content)] mx-auto px-8 pt-16 pb-7">
        <div className="grid grid-cols-1 tablet:grid-cols-4 gap-10">
          <div className="tablet:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src={LOGO_PATH}
                alt={BRAND}
                width={44}
                height={44}
                className="object-contain bg-white rounded-sm p-1"
              />
              <span className="font-heading font-bold text-lg text-white">
                {BRAND}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-footer-muted mt-4 max-w-xs">
              {COMPANY_NAME}
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-bold tracking-wide uppercase text-white mb-4">
              Навигация
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <FooterLink href="/">Дом</FooterLink>
              <FooterLink href="/about-us">О компании</FooterLink>
              <FooterLink href="/products">Каталог</FooterLink>
              <FooterLink href="/projects">Проекты</FooterLink>
              <FooterLink href="/about-us/certifications">Сертификаты</FooterLink>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-bold tracking-wide uppercase text-white mb-4">
              Продукция
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              {MAIN_CATEGORIES.map((cat) => (
                <FooterLink key={cat.id} href={cat.route}>
                  {cat.title}
                </FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-bold tracking-wide uppercase text-white mb-4">
              Контакты
            </h4>
            <div className="flex flex-col gap-3 text-sm text-footer-link leading-relaxed">
              <span>{COMPANY_NAME}</span>
              <span className="inline-flex items-start gap-2">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  strokeWidth={2}
                  aria-hidden
                />
                Промышленный парк Фэнбан, Шанхай
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#33434d] mt-11 pt-5 text-[13px] text-footer-muted">
          <span>© {COMPANY_NAME} Все права защищены.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-footer-link hover:text-primary no-underline">
      {children}
    </Link>
  );
}
