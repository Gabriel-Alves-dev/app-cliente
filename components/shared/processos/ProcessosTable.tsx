"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const processosMock = [
  {
    numero: "0001234-56.2023.8.26.0000",
    vara: "2ª Vara Cível",
    comarca: "São Paulo",
    status: "Em andamento",
    ultimaMovimentacao: "10/03/2024",
    andamentos: [
      { data: "10/03/2024", descricao: "Petição inicial protocolada" },
      { data: "12/03/2024", descricao: "Distribuído para a vara" },
      { data: "15/03/2024", descricao: "Concluso para despacho" },
    ],
  },
  {
    numero: "0029876-11.2022.8.26.0309",
    vara: "1ª Vara de Família",
    comarca: "Mogi das Cruzes",
    status: "Sentença",
    ultimaMovimentacao: "02/02/2024",
    andamentos: [
      { data: "01/02/2024", descricao: "Audiência realizada" },
      { data: "02/02/2024", descricao: "Sentença proferida" },
    ],
  },
];

export function ProcessosTable() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (numero: string) => {
    setOpen(open === numero ? null : numero);
  };

  return (
    <div className="space-y-4">

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {processosMock.map((p) => (
          <div key={p.numero} className="border rounded-lg bg-white shadow-sm">
            <button
              className="w-full text-left p-4 space-y-2"
              onClick={() => toggle(p.numero)}
            >
              <p className="text-sm font-semibold text-gray-800">Número:</p>
              <p className="text-sm text-gray-600">{p.numero}</p>

              <p className="text-sm font-semibold text-gray-800">Status:</p>
              <Badge variant="outline">{p.status}</Badge>

              <p className="text-sm font-semibold text-gray-800">
                Última movimentação:
              </p>
              <p className="text-sm text-gray-600">{p.ultimaMovimentacao}</p>
            </button>

            <AnimatePresence>
              {open === p.numero && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden border-t bg-gray-50"
                >
                  <div className="p-4 space-y-1">
                    {p.andamentos.map((a) => (
                      <p key={a.data} className="text-sm">
                        <strong>{a.data}:</strong> {a.descricao}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

    </div>
  );
}
