import { ProcessosTable } from "@/components/shared/processos/ProcessosTable";


export default function ProcessosPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Meus Processos</h1>
      <p className="text-gray-600">Acompanhe aqui todos os seus processos ativos.</p>

      <ProcessosTable />
    </div>
  );
}
