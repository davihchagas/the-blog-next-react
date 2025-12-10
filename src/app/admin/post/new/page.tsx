import { InputText } from "@/components/InputText";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div>
      <InputText labelText="Nome" placeholder="Digite seu nome"/>

    </div>
  );
}
