"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { AvatarInitials } from "@/components/ui/AvatarInitials";

export default function PerfilPage() {
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold mb-6">Meu Perfil</h1>

      <div className="flex items-center gap-4 mb-6">
        <AvatarInitials name={user?.name || "Usuário"} size={64} />

        <div>
          <h2 className="text-xl font-bold">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      {/* Informações */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">

        <div>
          <label className="text-sm font-medium text-gray-500">Nome</label>
          <p className="text-gray-800">{user?.name}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">E-mail</label>
          <p className="text-gray-800">{user?.email}</p>
        </div>

        {/* CPF apenas VISÍVEL */}
        <div>
          <label className="text-sm font-medium text-gray-500">CPF</label>
          <p className="text-gray-800">
            {user?.cpf ?? "Não informado"}
          </p>
        </div>

        <Link
          href="/perfil/editar"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Editar Perfil
        </Link>
      </div>
    </div>
  );
}
