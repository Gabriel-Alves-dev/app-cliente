export default function ProcessoDetalhePage({ params }: { params: { numero: string } }) {
  const numero = decodeURIComponent(params.numero);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Processo {numero}</h1>

      <p className="text-gray-600">
        Aqui futuramente entra o andamento completo do processo,
        com timeline, movimentos, documentos e status atualizado.
      </p>

      {/* MOCK TEMPORÁRIO */}
      <div className="p-4 border rounded-lg bg-white shadow-sm">
        <p className="font-semibold">Última movimentação:</p>
        <p>Não implementado — aguardando API.</p>
      </div>
    </div>
  );
}
