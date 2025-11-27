"use client";

import { useState } from "react";

export function IntegraLogin() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function validar(e: React.FormEvent<HTMLFormElement>) {
    if (!usuario.trim()) {
      e.preventDefault();
      alert("O campo usuário é obrigatório");
      return;
    }

    if (!senha.trim()) {
      e.preventDefault();
      alert("O campo senha é obrigatório");
      return;
    }
  }

  return (
    <div className="border rounded-lg p-6 bg-white shadow space-y-4 max-w-md">
      <h2 className="text-xl font-semibold">Acessar Controle de Processos</h2>

      <form
        id="frEntrar"
        name="frEntrar"
        action="https://www.integra.adv.br/moderno/include/logarSistema.asp?login=integra"
        method="post"
        target="_blank"
        onSubmit={validar}
        className="space-y-4"
      >
        <div>
          <label className="block mb-1 text-sm font-medium">Usuário</label>
          <input
            type="text"
            name="txtUsuario"
            className="w-full border rounded-md p-2"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Senha</label>
          <input
            type="password"
            name="txtSenha"
            className="w-full border rounded-md p-2"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#0A1A2F] text-white py-2 rounded-md hover:bg-[#11243D] transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
