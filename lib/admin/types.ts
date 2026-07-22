export interface AdminSession {
  token: string;
  loggedInAt: string;
}

export interface AttachmentMeta {
  id: string;
  name: string;
  type: string;
  size: number;
}

export interface ContactSubmissionTechPrimary {
  model?: string;
  flow?: string;
  head?: string;
  power?: string;
  speed?: string;
  efficiency?: string;
  temperature?: string;
  inlet_diameter?: string;
  outlet_diameter?: string;
  pump_material?: string;
}

export interface ContactSubmissionTechExtra {
  motor?: string;
  voltage?: string;
  protection_level?: string;
  cooling_method?: string;
  motor_efficiency?: string;
  weight?: string;
}

export interface ContactSubmission {
  id: string;
  createdAt: string;
  mode: "basic" | "technical";
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  tech: {
    primary: ContactSubmissionTechPrimary;
    extra: ContactSubmissionTechExtra;
  } | null;
  attachments: AttachmentMeta[];
  status: "new" | "read";
}

export type NewContactSubmission = Omit<ContactSubmission, "id" | "createdAt" | "status">;

export interface ProductOverride {
  name?: string;
  description?: string[];
  specs?: string[];
  applications?: string[];
  image?: string;
  updatedAt: string;
}
