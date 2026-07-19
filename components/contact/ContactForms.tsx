"use client";

import { useId, useState } from "react";
import {
  ChevronDown,
  FileUp,
  Settings2,
  Table2,
  Waypoints,
} from "lucide-react";
import { AccordionDetails } from "@/components/ui/Accordion";
import { IconBox } from "@/components/ui/IconBox";
import { getContactLabelIcon } from "@/lib/contact-icons";
import { COMPANY_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

const FIELD =
  "contact-input w-full py-3.5 px-4 border border-border-mid rounded-md text-[15px] text-body bg-white placeholder:text-subtle focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(23,165,204,0.12)] transition-[border-color,box-shadow]";

const PRIMARY_TECH: [string, string, string][] = [
  ["text", "model", "Модель"],
  ["text", "flow", "Расход (м³/ч)"],
  ["text", "head", "Напор (м)"],
  ["text", "power", "Мощность (кВт)"],
  ["text", "speed", "Частота вращения (об/мин)"],
  ["text", "efficiency", "КПД (%)"],
  ["text", "temperature", "Рабочая температура (°C)"],
  ["text", "inlet_diameter", "Диаметр всасывания (мм)"],
  ["text", "outlet_diameter", "Диаметр нагнетания (мм)"],
  ["text", "pump_material", "Материал насоса"],
];

const EXTRA_TECH: [string, string, string][] = [
  ["text", "motor", "Двигатель"],
  ["text", "voltage", "Напряжение (В)"],
  ["text", "protection_level", "Степень защиты"],
  ["text", "cooling_method", "Способ охлаждения"],
  ["text", "motor_efficiency", "КПД двигателя (%)"],
  ["text", "weight", "Масса (кг)"],
];

export function ContactForms() {
  const [techOpen, setTechOpen] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const techPanelId = useId();

  return (
    <>
      <section className="max-w-[var(--container-content)] mx-auto px-8 -mt-6 pb-16 relative z-[1]">
        <div className="max-w-[1160px] mx-auto bg-white border border-[#d8eaf2] rounded-3xl shadow-contact p-8 tablet:p-12 tablet:px-14">
          <div className="mb-9 max-w-[640px]">
            <div className="text-xs font-bold tracking-[1.4px] uppercase text-primary mb-3">
              Заявка
            </div>
            <h2 className="font-heading font-bold text-[clamp(24px,2.8vw,32px)] text-heading leading-tight">
              Отправьте запрос
            </h2>
            <p className="text-[15px] leading-relaxed text-muted mt-3">
              Опишите задачу — мы ответим в течение 24 часов. Технические
              характеристики можно добавить по желанию.
            </p>
          </div>

          <form action="#" method="post" className="space-y-0">
            {/* Block 1 — contacts */}
            <FormSection title="Контактные данные">
              <FormRows
                fields={[
                  ["text", "name", "Имя"],
                  ["text", "company", "Компания"],
                  ["email", "email", "Email"],
                  ["tel", "phone", "Телефон"],
                ]}
              />
            </FormSection>

            {/* Block 2 — message */}
            <FormSection title="Сообщение" last={!techOpen}>
              <textarea
                className={cn(FIELD, "min-h-[180px] resize-y")}
                name="message"
                placeholder="Необходимо подобрать насос для…"
                rows={6}
              />
            </FormSection>

            {/* Tech CTA — visible when closed */}
            {!techOpen && (
              <div className="mt-2 mb-8 rounded-2xl border border-[#d8eaf2] bg-gradient-to-br from-surface to-surface-alt p-7 tablet:p-9">
                <div className="flex flex-col tablet:flex-row tablet:items-center gap-6">
                  <IconBox icon={Settings2} size="lg" className="shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-xl text-heading leading-snug">
                      Хотите подобрать оборудование максимально точно?
                    </h3>
                    <p className="text-[15px] leading-relaxed text-muted mt-2 max-w-[560px]">
                      Если вы знаете характеристики оборудования, заполните
                      технические параметры. Это поможет инженерам подобрать
                      наиболее подходящую модель.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setTechOpen(true)}
                    aria-expanded={false}
                    aria-controls={techPanelId}
                    className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-[15px] px-6 py-3.5 rounded-sm border border-[#c5e0ea] cursor-pointer transition-[background,border-color,transform] duration-200 hover:border-primary hover:bg-[#f4fafc] hover:-translate-y-0.5"
                  >
                    Добавить технические характеристики
                    <ChevronDown className="size-4" strokeWidth={2.25} aria-hidden />
                  </button>
                </div>
              </div>
            )}

            {/* Engineering section — progressive disclosure */}
            <div
              id={techPanelId}
              className={cn(
                "grid overflow-clip transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                techOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div
                className={cn(
                  "min-h-0",
                  techOpen
                    ? "overflow-visible"
                    : "overflow-clip [content-visibility:hidden]"
                )}
              >
                <div className="pb-2 pt-1">
                  <div className="flex items-start justify-between gap-4 mb-7 pb-6 border-b border-[#e2eaf0]">
                    <div>
                      <div className="text-xs font-bold tracking-[1.4px] uppercase text-primary mb-2">
                        Инженерный раздел
                      </div>
                      <h3 className="font-heading font-bold text-[clamp(20px,2.2vw,26px)] text-heading">
                        Технические характеристики
                      </h3>
                      <p className="text-[14px] text-muted mt-2 leading-relaxed">
                        Все поля необязательны — заполните то, что известно.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setTechOpen(false)}
                      aria-expanded={true}
                      aria-controls={techPanelId}
                      className="shrink-0 text-sm font-semibold text-muted hover:text-primary cursor-pointer bg-transparent border-none px-2 py-1"
                    >
                      Свернуть
                    </button>
                  </div>

                  <FormSection title="Основные параметры" bordered={false}>
                    <FormRows fields={PRIMARY_TECH} />
                  </FormSection>

                  <AccordionDetails title="Дополнительные параметры" className="mt-2 mb-8">
                    <FormRows fields={EXTRA_TECH} />
                  </AccordionDetails>

                  {/* Placeholder: engineering parameter table */}
                  <PlaceholderPanel
                    icon={Table2}
                    eyebrow="Таблица параметров"
                    title="Инженерная таблица характеристик"
                    description="Здесь позже появится подробная таблица параметров оборудования. Блок уже подготовлен под вставку без переработки формы."
                    minHeight="min-h-[280px]"
                  />

                  {/* Placeholder: pump scheme */}
                  <PlaceholderPanel
                    icon={Waypoints}
                    eyebrow="Схема насоса"
                    title="Схема с обозначением узлов"
                    description="Место под интерактивную схему насоса (A, B, C, D…). Пользователь сможет сверять поля формы со схемой."
                    minHeight="min-h-[320px]"
                    className="mt-5"
                  />

                  {/* Upload */}
                  <div
                    className={cn(
                      "mt-8 rounded-2xl border-2 border-dashed border-[#d0e4ec] bg-surface px-8 py-12 text-center transition-[border-color,background,box-shadow] duration-200",
                      dragOver &&
                        "border-primary bg-[#eef8fb] shadow-[0_0_0_4px_rgba(23,165,204,0.1)]"
                    )}
                    onDragEnter={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOver(false);
                    }}
                  >
                    <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white border border-[#d8eaf2] text-primary mb-5">
                      <FileUp className="size-7" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div className="font-heading font-bold text-lg text-heading">
                      Перетащите файлы сюда
                    </div>
                    <p className="text-[15px] text-muted mt-2">
                      или{" "}
                      <label className="text-primary font-semibold cursor-pointer hover:text-primary-dark underline-offset-2 hover:underline">
                        выберите файл
                        <input
                          type="file"
                          name="attachments"
                          multiple
                          className="sr-only"
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.png,.jpg,.jpeg"
                        />
                      </label>
                    </p>
                    <p className="text-[13px] text-subtle mt-4">
                      PDF, DWG, DOCX, XLSX, изображения — до 10 МБ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-primary text-white font-bold text-base py-4.5 rounded-sm border-none cursor-pointer shadow-btn transition-[background,transform] duration-200 hover:bg-primary-dark hover:-translate-y-0.5"
            >
              Отправить запрос
            </button>
            <p className="text-[13px] text-subtle text-center mt-4 leading-snug">
              Мы ответим в течение 24 часов.
            </p>
          </form>
        </div>
      </section>

      {/* Direct contacts — after primary action */}
      <section className="max-w-[var(--container-content)] mx-auto px-8 pb-20">
        <div className="text-center max-w-[560px] mx-auto mb-9">
          <h2 className="font-heading font-bold text-[clamp(24px,2.8vw,32px)] text-heading">
            Есть вопросы?
          </h2>
          <p className="text-base text-muted mt-3 leading-relaxed">
            Свяжитесь с нами напрямую — мы всегда на связи с инженерами и
            менеджерами проектов.
          </p>
        </div>
        <div className="grid grid-cols-1 max-tablet:grid-cols-2 tablet:grid-cols-4 gap-4">
          <ContactInfoCard
            label="Адрес"
            html={`<strong>${COMPANY_NAME}</strong><br>Промышленный парк Фэнбан, Шанхай, КНР`}
          />
          <ContactInfoCard
            label="Email"
            html='<a href="mailto:export@bellery-pumps.com">export@bellery-pumps.com</a>'
          />
          <ContactInfoCard
            label="Телефон"
            html="<strong>+86 21 XXXX XXXX</strong>"
          />
          <ContactInfoCard
            label="Время работы"
            html='Пн–Пт, 09:00–18:00<br><span style="font-size:13px;color:#9aa5ac">(UTC+8, Шанхай)</span>'
          />
        </div>
      </section>
    </>
  );
}

function FormSection({
  title,
  children,
  last,
  bordered = true,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
  bordered?: boolean;
}) {
  return (
    <div
      className={cn(
        bordered && "mb-8 pb-8 border-b border-[#e2eaf0]",
        last && "mb-6",
        !bordered && "mb-6"
      )}
    >
      <div className="font-bold text-base text-heading mb-4.5">{title}</div>
      {children}
    </div>
  );
}

function FormRows({ fields }: { fields: [string, string, string][] }) {
  const rows: [string, string, string][][] = [];
  for (let i = 0; i < fields.length; i += 2) {
    rows.push(fields.slice(i, i + 2));
  }

  return (
    <>
      {rows.map((row, index) => (
        <div
          key={index}
          className={cn(
            "grid grid-cols-1 tablet:grid-cols-2 gap-4",
            index < rows.length - 1 && "mb-4"
          )}
        >
          {row.map(([type, name, placeholder]) => (
            <input
              key={name}
              className={FIELD}
              type={type}
              name={name}
              placeholder={placeholder}
            />
          ))}
        </div>
      ))}
    </>
  );
}

function PlaceholderPanel({
  icon: Icon,
  eyebrow,
  title,
  description,
  minHeight,
  className,
}: {
  icon: typeof Table2;
  eyebrow: string;
  title: string;
  description: string;
  minHeight: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#d8eaf2] bg-surface overflow-hidden",
        className
      )}
    >
      <div className="px-7 pt-7 pb-4">
        <div className="flex items-center gap-3 mb-3">
          <IconBox icon={Icon} size="sm" />
          <span className="text-xs font-bold tracking-[1.2px] uppercase text-primary">
            {eyebrow}
          </span>
        </div>
        <h4 className="font-heading font-bold text-lg text-heading">{title}</h4>
        <p className="text-[14px] leading-relaxed text-muted mt-2 max-w-[640px]">
          {description}
        </p>
      </div>
      <div
        className={cn(
          "mx-7 mb-7 rounded-xl border border-dashed border-[#cfe0e8] bg-white/70 flex items-center justify-center",
          minHeight
        )}
      >
        <span className="text-[13px] font-semibold tracking-wide uppercase text-subtle">
          Скоро здесь
        </span>
      </div>
    </div>
  );
}

function ContactInfoCard({
  label,
  html,
}: {
  label: string;
  html: string;
}) {
  const Icon = getContactLabelIcon(label);

  return (
    <div className="bg-white border border-border-light rounded-2xl p-6 min-h-[148px] flex flex-col hover:shadow-card-sm hover:-translate-y-0.5 hover:border-[#d8eaf2] transition-all">
      <IconBox icon={Icon} size="sm" className="mb-4" />
      <div className="text-xs font-bold tracking-wide uppercase text-primary mb-2">
        {label}
      </div>
      <div
        className="text-[15px] leading-relaxed text-muted [&_strong]:text-heading [&_strong]:font-bold [&_a]:font-semibold"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
