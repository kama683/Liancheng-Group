"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Inbox, Mail, Package } from "lucide-react";
import { StatCard } from "@/components/admin/StatCard";
import { useContactSubmissions } from "@/hooks/useContactSubmissions";
import { subscribe } from "@/lib/admin/events";
import { listOverriddenSlugs } from "@/lib/admin/product-overrides";
import { STORAGE_KEYS } from "@/lib/admin/storage-keys";

function useOverriddenCount(): number {
  return useSyncExternalStore(
    (callback) => subscribe("product-overrides", STORAGE_KEYS.productOverrides, callback),
    () => listOverriddenSlugs().length,
    () => 0
  );
}

export default function AdminDashboardPage() {
  const submissions = useContactSubmissions();
  const overriddenCount = useOverriddenCount();

  const today = new Date().toDateString();
  const todayCount = submissions.filter(
    (s) => new Date(s.createdAt).toDateString() === today
  ).length;
  const newCount = submissions.filter((s) => s.status === "new").length;

  return (
    <div>
      <h1 className="font-heading text-[28px] font-bold text-heading">Дашборд</h1>
      <p className="mt-2 text-muted">Обзор заявок и товаров с правками.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 tablet:grid-cols-3">
        <StatCard icon={Inbox} label="Всего заявок" value={submissions.length} />
        <StatCard icon={Mail} label="Новых заявок" value={newCount} />
        <StatCard icon={Package} label="Товаров с правками" value={overriddenCount} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 tablet:grid-cols-3">
        <StatCard icon={Inbox} label="Заявок сегодня" value={todayCount} />
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/admin/requests"
          className="rounded-sm bg-primary px-6 py-3.5 text-sm font-bold text-white no-underline shadow-btn transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-primary-dark"
        >
          Смотреть заявки
        </Link>
        <Link
          href="/admin/products"
          className="rounded-sm border border-border-mid bg-white px-6 py-3.5 text-sm font-bold text-body no-underline transition-colors hover:border-primary hover:text-primary"
        >
          Редактировать товары
        </Link>
      </div>
    </div>
  );
}
