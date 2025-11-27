"use client";

import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

export default function SuportePage() {
  useEffect(() => {
    // Carregar apenas o script oficial, sem modificações
    const script = document.createElement("script");
    script.src =
      "https://cdn.bitrix24.com.br/b27948297/crm/site_button/loader_2_l46okb.js?" +
      Math.floor(Date.now() / 60000);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // limpar script ao sair da página (opcional)
      script.remove();
    };
  }, []);
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <MessageCircle size={28} />
        Suporte
      </h1>
      <p className="text-gray-600 max-w-xl">
        Utilize o chat no canto inferior direito para falar diretamente com nossa equipe. 
        Estamos disponíveis para tirar dúvidas, auxiliar no envio de documentos e acompanhar seu caso.
      </p>

      <p className="text-gray-700 font-medium">
        Caso o chat não apareça:
      </p>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Recarregue a página</li>
        <li>Desative bloqueadores de anúncios</li>
        <li>Verifique sua conexão</li>
      </ul>
      
      <button
        onClick={() => window.location.reload()}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
      >
        <RefreshCw size={18} />
        Recarregar
      </button>

    </div>
  );
}
