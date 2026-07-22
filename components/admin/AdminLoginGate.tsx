"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useIsAdmin } from "@/hooks/useIsAdmin";

export function AdminLoginGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAdmin = useIsAdmin();
  const [checked, setChecked] = useState(false);

  // `isAdmin` reads `false` on the hydration render (matching the server
  // snapshot) and only resyncs to the real client value on the *next*
  // commit. Deferring the redirect check by one extra tick (via `checked`)
  // means it always runs after that resync has landed, instead of firing
  // once on stale `isAdmin=false` and briefly bouncing a real admin to
  // /admin/login on every mount.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChecked(true);
  }, []);

  useEffect(() => {
    if (checked && !isAdmin) router.replace("/admin/login");
  }, [checked, isAdmin, router]);

  if (!checked || !isAdmin) {
    return (
      <div className="flex min-h-dvh items-center justify-center text-sm text-muted">
        Загрузка…
      </div>
    );
  }

  return <>{children}</>;
}
