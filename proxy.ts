import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export const proxy = createMiddleware(routing);

export const config = {
  // Skip API routes, Next internals, Vercel internals, and any path with a file extension (static assets).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
