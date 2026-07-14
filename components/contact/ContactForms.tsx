"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { AccordionDetails } from "@/components/ui/Accordion";
import { IconBox } from "@/components/ui/IconBox";
import { getContactLabelIcon, INQUIRY_ICONS } from "@/lib/contact-icons";
import { cn } from "@/lib/utils";

type InquiryType = "quick" | "engineering";

const labels = {
  quick: {
    title: "Быстрый запрос",
    subtitle:
      "Отправьте заявку — наши специалисты свяжутся с вами в течение 24 часов.",
  },
  engineering: {
    title: "Подбор оборудования инженером",
    subtitle:
      "Заполните технические параметры — мы подготовим профессиональное решение.",
  },
} as const;

export function ContactForms() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("engineering");
  const [dragOver, setDragOver] = useState(false);

  return (
    <>
      <section className="max-w-[var(--container-content)] mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
          <InquiryCard
            type="engineering"
            title="Подбор оборудования инженером"
            description="Заполните технические параметры — мы подготовим профессиональное решение."
            featured
            active={inquiryType === "engineering"}
            onSelect={() => setInquiryType("engineering")}
          />
          <InquiryCard
            type="quick"
            title="Быстрый запрос"
            description="Отправьте заявку — наши специалисты свяжутся с вами в течение 24 часов."
            active={inquiryType === "quick"}
            onSelect={() => setInquiryType("quick")}
          />
        </div>
      </section>

      <section className="max-w-[var(--container-content)] mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 tablet:grid-cols-[minmax(280px,0.9fr)_1.1fr] gap-10 items-start">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
            <ContactInfoCard
              label="Главный офис"
              html="<strong>Shanghai Liancheng (Group) Co., Ltd.</strong><br>Промышленный парк Фэнбан, Шанхай, КНР"
            />
            <ContactInfoCard
              label="Электронная почта"
              html='<a href="mailto:export@liancheng-group.com">export@liancheng-group.com</a>'
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

          <div
            id="contact-form-panel"
            className="bg-gradient-to-br from-surface to-surface-alt border border-[#d8eaf2] rounded-3xl p-10 tablet:px-11 shadow-contact"
          >
            <h2 className="font-heading font-bold text-[clamp(22px,2.5vw,28px)] text-heading mb-2">
              {labels[inquiryType].title}
            </h2>
            <p className="text-[15px] text-muted mb-7 leading-relaxed">
              {labels[inquiryType].subtitle}
            </p>

            {inquiryType === "quick" ? (
              <form className="animate-contact-fade-in" action="#" method="post">
                <FormRows
                  fields={[
                    ["text", "name", "Имя"],
                    ["text", "company", "Компания"],
                    ["email", "email", "Email"],
                    ["tel", "phone", "Телефон"],
                  ]}
                />
                <textarea
                  className="contact-input w-full min-h-[148px] resize-y mt-4 py-3.5 px-4 border border-border-mid rounded-md text-[15px] text-body bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(23,165,204,0.12)]"
                  name="message"
                  placeholder="Сообщение"
                />
                <button
                  type="submit"
                  className="w-full mt-5 bg-primary text-white font-bold text-base py-4 rounded-sm border-none cursor-pointer hover:bg-primary-dark"
                >
                  Отправить заявку
                </button>
                <p className="text-[13px] text-subtle text-center mt-4 leading-snug">
                  Мы ответим в течение 24 часов.
                </p>
              </form>
            ) : (
              <form className="animate-contact-fade-in" action="#" method="post">
                <div className="mb-7 pb-7 border-b border-[#e2eaf0]">
                  <div className="font-bold text-base text-heading mb-4.5">
                    Контактные данные
                  </div>
                  <FormRows
                    fields={[
                      ["text", "name", "Имя"],
                      ["text", "company", "Компания"],
                      ["email", "email", "Email"],
                      ["tel", "phone", "Телефон"],
                    ]}
                  />
                </div>
                <div className="mb-7 pb-7 border-b border-[#e2eaf0]">
                  <div className="font-bold text-base text-heading mb-1.5">
                    Технические параметры
                  </div>
                  <p className="text-[13px] text-subtle mb-4.5 leading-snug">
                    Укажите желаемые характеристики — все поля необязательны.
                  </p>
                  <FormRows
                    fields={[
                      ["text", "model", "Модель"],
                      ["text", "flow", "Расход (м³/ч)"],
                      ["text", "head", "Напор (м)"],
                      ["text", "power", "Мощность (кВт)"],
                      ["text", "speed", "Частота вращения (об/мин)"],
                      ["text", "efficiency", "КПД (%)"],
                      ["text", "temperature", "Рабочая температура (°C)"],
                      ["text", "inlet_diameter", "Диаметр всасывания (мм)"],
                    ]}
                  />
                  <AccordionDetails title="Дополнительные параметры">
                    <FormRows
                      fields={[
                        ["text", "outlet_diameter", "Диаметр нагнетания (мм)"],
                        ["text", "pump_material", "Материал насоса"],
                        ["text", "motor", "Двигатель"],
                        ["text", "voltage", "Напряжение (В)"],
                        ["text", "protection_level", "Степень защиты"],
                        ["text", "cooling_method", "Способ охлаждения"],
                        ["text", "motor_efficiency", "КПД двигателя (%)"],
                        ["text", "weight", "Масса (кг)"],
                      ]}
                    />
                  </AccordionDetails>
                </div>
                <div
                  className={cn(
                    "border-2 border-dashed border-[#d5e2e9] rounded-xl p-8 text-center bg-white transition-colors",
                    dragOver && "border-primary bg-surface"
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
                  <Upload
                    className="mx-auto mb-3 size-8 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <div className="text-primary font-bold">Прикрепить файлы</div>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    Перетащите ТЗ, чертежи или спецификацию
                  </p>
                  <p className="text-xs text-subtle mt-2.5">
                    PDF, DOC, XLS, DWG — до 10 МБ
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 bg-primary text-white font-bold text-base py-4 rounded-sm border-none cursor-pointer hover:bg-primary-dark"
                >
                  Отправить технический запрос
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function InquiryCard({
  type,
  title,
  description,
  active,
  onSelect,
  featured,
}: {
  type: InquiryType;
  title: string;
  description: string;
  active: boolean;
  onSelect: () => void;
  featured?: boolean;
}) {
  const Icon = INQUIRY_ICONS[type];

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        "text-left w-full bg-white border-2 border-border-light rounded-3xl p-9 cursor-pointer transition-all font-[inherit]",
        "hover:border-[#d8eaf2] hover:shadow-[0_14px_36px_rgba(38,51,60,0.08)] hover:-translate-y-0.5",
        active &&
          "border-primary shadow-[0_16px_40px_rgba(23,165,204,0.14)] bg-gradient-to-br from-white to-surface",
        featured && active && "from-surface-alt to-[#e8f4f9]"
      )}
    >
      <IconBox icon={Icon} size="md" active={active} className="mb-5.5" />
      <div className="font-heading font-bold text-[clamp(20px,2.2vw,24px)] text-heading leading-snug">
        {title}
      </div>
      <p className="text-[15px] leading-relaxed text-muted mt-3.5">
        {description}
      </p>
    </button>
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

function FormRows({
  fields,
}: {
  fields: [string, string, string][];
}) {
  const rows: [string, string, string][][] = [];
  for (let i = 0; i < fields.length; i += 2) {
    rows.push(fields.slice(i, i + 2));
  }

  return (
    <>
      {rows.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-1 tablet:grid-cols-2 gap-4 mb-4"
        >
          {row.map(([type, name, placeholder]) => (
            <input
              key={name}
              className="contact-input w-full py-3.5 px-4 border border-border-mid rounded-md text-[15px] text-body bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(23,165,204,0.12)]"
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
