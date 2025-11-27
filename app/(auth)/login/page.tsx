"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password: senha,
      redirect: false,
    });

    if (res?.error) {
      setErro("Credenciais inválidas");
      return;
    }

    router.push("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-10 border border-gray-200">

        {/* Logo da DAP */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/dap-logo.svg"
            width={250}
            height={100}
            alt="DAP Advocacia"
            className="mb-6"
            priority
          />
        </div>

        <h2 className="text-3xl font-bold text-center mb-6 text-[#0A1A2F]">
          Acessar Plataforma
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">

          {erro && <p className="text-red-600 text-sm">{erro}</p>}

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A1A2F]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Senha</label>
            <input
              type="password"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A1A2F]"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full p-3 text-white font-semibold bg-[#0A1A2F] hover:bg-[#11243D]"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
