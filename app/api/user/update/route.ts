import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone } = body;

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Todos os campos são obrigatórios." },
      { status: 400 }
    );
  }

  // Simulação de atualização em "banco"
  console.log("🔧 Atualizando usuário (simulado):", { name, email, phone });

  return NextResponse.json({
    success: true,
    message: "Dados atualizados com sucesso!",
    user: { name, email, phone },
  });
}
