"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { attemptHiddenLogin } from "@/lib/admin/session";
import { useIsAdmin } from "@/hooks/useIsAdmin";

const FIELD =
  "w-full py-3.5 px-4 border border-border-mid rounded-md text-[15px] text-body bg-white placeholder:text-subtle focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(23,165,204,0.12)] transition-[border-color,box-shadow]";

export default function AdminLoginPage() {
  const router = useRouter();
  const isAdmin = useIsAdmin();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isAdmin) router.replace("/admin");
  }, [isAdmin, router]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "");
    const company = String(formData.get("company") ?? "");

    if (attemptHiddenLogin(name, company)) {
      router.replace("/admin");
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex min-h-dvh items-center justify-center px-6 py-12">
      <div className="w-full max-w-[380px] rounded-2xl border border-border-mid bg-white p-8 shadow-card-sm">
        <div className="mb-6 text-center">
          <div className="mb-1 text-xs font-bold uppercase tracking-[1.4px] text-primary">
            Bellery Admin
          </div>
          <h1 className="font-heading text-2xl font-bold text-heading">Вход</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className={FIELD}
            type="text"
            name="name"
            placeholder="Имя"
            autoComplete="off"
          />
          <input
            className={FIELD}
            type="text"
            name="company"
            placeholder="Компания"
            autoComplete="off"
          />

          {error && (
            <p className="flex items-center gap-2 text-sm font-semibold text-error">
              <AlertCircle className="size-4 shrink-0" strokeWidth={2.25} aria-hidden />
              Неверные данные для входа.
            </p>
          )}

          <button
            type="submit"
            className="mt-2 w-full rounded-sm bg-primary py-3.5 text-base font-bold text-white shadow-btn transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
