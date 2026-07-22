import { RequestDetailClient } from "@/components/admin/RequestDetailClient";

interface RequestDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminRequestDetailPage({
  params,
}: RequestDetailPageProps) {
  const { id } = await params;
  return <RequestDetailClient id={id} />;
}
