"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AlterarSenhaPage() {
  const router = useRouter();

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (novaSenha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }

    // Aqui depois chamaremos sua API real:
    // await fetch("/api/perfil/senha", { method: "POST", body: JSON.stringify({ senhaAtual, novaSenha }) });

    alert("Senha alterada com sucesso! (exemplo)");
    router.push("/perfil");
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-semibold mb-6">Alterar Senha</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4"
      >
        <div>
          <label className="text-sm font-medium text-gray-500">Senha Atual</label>
          <input
            type="password"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">Nova Senha</label>
          <input
            type="password"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">Confirmar Nova Senha</label>
          <input
            type="password"
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Salvar Nova Senha
        </button>
      </form>
    </div>
  );
}
