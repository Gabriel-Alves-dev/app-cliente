"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditarPerfilPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const user = session?.user;

  const [name, setName] = useState(user?.name ?? "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // futuramente aqui vai:
    // await fetch("/api/perfil/update", { method: "POST", body: JSON.stringify({ name }) });

    // Redireciona de volta ao perfil após salvar
    router.push("/perfil");
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-semibold mb-6">Editar Perfil</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4"
      >
        {/* NOME EDITÁVEL */}
        <div>
          <label className="text-sm font-medium text-gray-500">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        {/* EMAIL NÃO EDITÁVEL */}
        <div>
          <label className="text-sm font-medium text-gray-500">E-mail</label>
          <input
            type="text"
            value={user?.email ?? ""}
            disabled
            className="w-full mt-1 p-2 border rounded bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* CPF NÃO EDITÁVEL */}
        <div>
          <label className="text-sm font-medium text-gray-500">CPF</label>
          <input
            type="text"
            value={user?.cpf ?? ""}
            disabled
            className="w-full mt-1 p-2 border rounded bg-gray-100 cursor-not-allowed"
          />
        </div>

        <Link
            href="/perfil/senha"
            className="inline-block ml-2 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
            >
            Alterar Senha
        </Link>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Salvar Alterações
        </button>


      </form>
    </div>
  );
}
