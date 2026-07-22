import type { Metadata } from "next";
import { AdminSessionProvider } from "@/components/admin/AdminSessionContext";
import { manrope, ptSans } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Bellery Admin",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${ptSans.variable} antialiased`}>
      <body className="bg-surface">
        <AdminSessionProvider>{children}</AdminSessionProvider>
      </body>
    </html>
  );
}
