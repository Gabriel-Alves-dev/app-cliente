import { DashboardCard } from "@/components/shared/dashboard/DashboardCard";
import { Files } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">

      {/* Título */}
      <div>
        <h1 className="text-2xl font-bold">Início</h1>
        <p className="text-gray-600">
          Bem-vindo à plataforma do cliente da DAP Advocacia.
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <Link href="/processos" className="block">
          <DashboardCard
            title="Processos Ativos"
            value={3}
            icon={<Files className="text-gray-400" size={20} />}
          />
        </Link>

      </div>

    </div>
  );
}
