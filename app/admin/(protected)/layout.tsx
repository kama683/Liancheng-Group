import { AdminLoginGate } from "@/components/admin/AdminLoginGate";
import { AdminShell } from "@/components/admin/AdminShell";

export default function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminLoginGate>
      <AdminShell>{children}</AdminShell>
    </AdminLoginGate>
  );
}
