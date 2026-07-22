"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Mail,
  MessageSquare,
  Paperclip,
  Settings2,
  User,
} from "lucide-react";
import { AttachmentRow } from "@/components/admin/AttachmentRow";
import { markRead } from "@/lib/admin/submissions";
import { useContactSubmissions } from "@/hooks/useContactSubmissions";
import type {
  ContactSubmissionTechExtra,
  ContactSubmissionTechPrimary,
} from "@/lib/admin/types";

const PRIMARY_LABELS: Record<keyof ContactSubmissionTechPrimary, string> = {
  model: "Модель",
  flow: "Расход (м³/ч)",
  head: "Напор (м)",
  power: "Мощность (кВт)",
  speed: "Частота вращения (об/мин)",
  efficiency: "КПД (%)",
  temperature: "Рабочая температура (°C)",
  inlet_diameter: "Диаметр всасывания (мм)",
  outlet_diameter: "Диаметр нагнетания (мм)",
  pump_material: "Материал насоса",
};

const EXTRA_LABELS: Record<keyof ContactSubmissionTechExtra, string> = {
  motor: "Двигатель",
  voltage: "Напряжение (В)",
  protection_level: "Степень защиты",
  cooling_method: "Способ охлаждения",
  motor_efficiency: "КПД двигателя (%)",
  weight: "Масса (кг)",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-white p-6">
      <div className="mb-4 flex items-center gap-2.5">
        <Icon className="size-4.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />
        <h2 className="font-heading text-base font-bold text-heading">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-subtle">
        {label}
      </div>
      <div className="mt-1 text-sm text-body">{value || "—"}</div>
    </div>
  );
}

export function RequestDetailClient({ id }: { id: string }) {
  const submissions = useContactSubmissions();
  const submission = submissions.find((s) => s.id === id);

  useEffect(() => {
    if (submission && submission.status === "new") markRead(submission.id);
  }, [submission]);

  if (!submission) {
    return (
      <div>
        <Link
          href="/admin/requests"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary no-underline"
        >
          <ArrowLeft className="size-4 shrink-0" strokeWidth={2.25} aria-hidden />
          Назад к заявкам
        </Link>
        <p className="mt-6 text-muted">Заявка не найдена.</p>
      </div>
    );
  }

  const primaryEntries = submission.tech
    ? (Object.entries(submission.tech.primary) as [
        keyof ContactSubmissionTechPrimary,
        string,
      ][])
    : [];
  const extraEntries = submission.tech
    ? (Object.entries(submission.tech.extra) as [keyof ContactSubmissionTechExtra, string][])
    : [];

  return (
    <div>
      <Link
        href="/admin/requests"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary no-underline"
      >
        <ArrowLeft className="size-4 shrink-0" strokeWidth={2.25} aria-hidden />
        Назад к заявкам
      </Link>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-heading text-[26px] font-bold text-heading">
          {submission.name || "Без имени"}
        </h1>
        <span className="inline-flex items-center gap-1.5 rounded-pill bg-pill-blue-bg px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
          <Clock className="size-3.5 shrink-0" strokeWidth={2.25} aria-hidden />
          {formatDate(submission.createdAt)}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 tablet:grid-cols-2">
        <Section icon={User} title="Личные данные">
          <div className="grid grid-cols-1 gap-4 mobile:grid-cols-2">
            <Field label="Имя" value={submission.name} />
            <Field label="Компания" value={submission.company} />
          </div>
        </Section>

        <Section icon={Mail} title="Контактная информация">
          <div className="grid grid-cols-1 gap-4 mobile:grid-cols-2">
            <Field label="Email" value={submission.email} />
            <Field label="Телефон" value={submission.phone} />
          </div>
        </Section>
      </div>

      <div className="mt-5">
        <Section icon={MessageSquare} title="Сообщение">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-body">
            {submission.message || "—"}
          </p>
        </Section>
      </div>

      {submission.tech && (
        <div className="mt-5">
          <Section icon={Settings2} title="Технические характеристики">
            {primaryEntries.length === 0 && extraEntries.length === 0 ? (
              <p className="text-sm text-muted">Не заполнены.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 mobile:grid-cols-2 tablet:grid-cols-3">
                {primaryEntries.map(([key, value]) => (
                  <Field key={key} label={PRIMARY_LABELS[key]} value={value} />
                ))}
                {extraEntries.map(([key, value]) => (
                  <Field key={key} label={EXTRA_LABELS[key]} value={value} />
                ))}
              </div>
            )}
          </Section>
        </div>
      )}

      <div className="mt-5">
        <Section icon={Paperclip} title={`Вложения (${submission.attachments.length})`}>
          {submission.attachments.length === 0 ? (
            <p className="text-sm text-muted">Файлы не прикреплены.</p>
          ) : (
            <div className="flex flex-col gap-2.5">
              {submission.attachments.map((attachment) => (
                <AttachmentRow key={attachment.id} attachment={attachment} />
              ))}
            </div>
          )}
        </Section>
      </div>
    </div>
  );
}
