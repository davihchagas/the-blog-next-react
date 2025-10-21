import { Button } from "@/components/Button";

export const dynamic = 'force-dynamic';

export  default async function AdminPostNewPage() {
  return <div className="py-16 text-6xl flex gap-4">
    <Button variant="default">Confirma</Button>
    <Button variant="ghost">Confirma</Button>
    <Button variant="danger">Confirma</Button>
  </div>
}
