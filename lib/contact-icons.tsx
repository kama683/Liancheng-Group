import {
  Building2,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Settings2,
  Users,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import type { ContactCardData } from "@/lib/types";

export const CONTACT_ICONS: Record<ContactCardData["icon"], LucideIcon> = {
  office: Building2,
  email: Mail,
  phone: Phone,
  clock: Clock,
  sales: Users,
  support: Headphones,
};

export const INQUIRY_ICONS = {
  engineering: Settings2,
  quick: MessageSquare,
} as const;

const CONTACT_LABEL_ICONS: Record<string, LucideIcon> = {
  "Главный офис": Building2,
  Адрес: Building2,
  "Электронная почта": Mail,
  Email: Mail,
  Телефон: Phone,
  "Время работы": Clock,
};

export function getContactLabelIcon(label: string): LucideIcon {
  return CONTACT_LABEL_ICONS[label] ?? Building2;
}
